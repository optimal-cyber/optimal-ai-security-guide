import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Static export configuration
export const dynamic = 'force-static';
export const revalidate = false;

interface Requirement {
  id: string;
  title: string;
  description: string;
  level: number;
  category: string;
  role?: string;
  references?: { label: string; url: string }[];
}

interface Subcategory {
  id: string;
  name: string;
  requirements: Requirement[];
}

interface Category {
  id: string;
  name: string;
  description: string;
  subcategories: Subcategory[];
}

// Helper to parse a single .md file into subcategories and requirements
function parseAISVSCategoryMd(mdContent: string, categoryId: string): Subcategory[] {
  const lines = mdContent.split('\n');
  const subcategories: Subcategory[] = [];
  let currentSubcat: Subcategory | null = null;
  let inTable = false;
  let tableHeaders: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Subcategory header: '## C1.1 Training Data Provenance'
    const subcatMatch = line.match(/^##\s+(C\d+\.\d+)\s+(.+)/);
    if (subcatMatch) {
      if (currentSubcat) {
        subcategories.push(currentSubcat);
      }
      currentSubcat = {
        id: subcatMatch[1],
        name: subcatMatch[2].trim(),
        requirements: [],
      };
      inTable = false;
      tableHeaders = [];
      continue;
    }
    // Detect start of table (header row)
    if (currentSubcat && line.trim().startsWith('| #')) {
      inTable = true;
      tableHeaders = line.split('|').map((h) => h.trim());
      continue;
    }
    // Skip table separator row
    if (inTable && line.trim().startsWith('|:')) {
      continue;
    }
    // Parse table rows
    if (inTable && line.trim().startsWith('|') && !line.trim().startsWith('| #')) {
      const cols = line.split('|').map((c) => c.trim());
      if (cols.length >= 5 && currentSubcat) {
        // | **1.1.1** | **Verify that** ... | 1 | D/V |
        const id = cols[1].replace(/\*\*/g, '');
        const desc = cols[2].replace(/\*\*/g, '').replace(/^Verify that /i, '').trim();
        const level = parseInt(cols[3], 10);
        const role = cols[4];
        currentSubcat.requirements.push({
          id,
          title: desc.split('.')[0],
          description: desc,
          level: isNaN(level) ? 1 : level,
          category: categoryId,
          role,
        });
      }
      continue;
    }
    // End of table
    if (inTable && (!line.trim().startsWith('|') || line.trim() === '')) {
      inTable = false;
      tableHeaders = [];
      continue;
    }
  }
  if (currentSubcat) {
    subcategories.push(currentSubcat);
  }
  return subcategories;
}

export async function GET() {
  const mdDir = path.join(process.cwd(), 'src/data/aisvs-md');
  const files = fs.readdirSync(mdDir).filter(f => f.endsWith('.md'));
  const categories: Category[] = [];
  for (const file of files) {
    const categoryId = file.split('-')[1]?.replace('C', 'C') || file;
    const mdContent = fs.readFileSync(path.join(mdDir, file), 'utf-8');
    // Extract category name/description from the first lines
    const nameMatch = mdContent.match(/^#\s+(.+)/m);
    const descMatch = mdContent.match(/^## Control Objective\n([\s\S]*?)\n---/m);
    const name = nameMatch ? nameMatch[1].trim() : file;
    const description = descMatch ? descMatch[1].replace(/\n/g, ' ').trim() : '';
    const subcategories = parseAISVSCategoryMd(mdContent, categoryId);
    categories.push({ id: categoryId, name, description, subcategories });
  }
  return NextResponse.json({ categories });
} 