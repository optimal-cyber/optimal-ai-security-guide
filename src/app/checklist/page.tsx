"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

interface ChecklistItem {
  id: string;
  category: string;
  subcategory: string;
  title: string;
  description: string;
  priority: "Critical" | "High" | "Medium" | "Low";
  frameworks: string[];
  level: number;
}

const checklistItems: ChecklistItem[] = [
  // Governance
  { id: "gov-1", category: "Governance", subcategory: "Policy", title: "Establish AI governance policy", description: "Document organizational policies for AI development and use", priority: "Critical", frameworks: ["NIST AI RMF Govern 1.1", "ISO 42001"], level: 1 },
  { id: "gov-2", category: "Governance", subcategory: "Policy", title: "Define AI risk tolerance", description: "Establish acceptable risk levels for AI systems", priority: "High", frameworks: ["NIST AI RMF Govern 1.2"], level: 1 },
  { id: "gov-3", category: "Governance", subcategory: "Roles", title: "Assign AI security ownership", description: "Designate responsible parties for AI security", priority: "Critical", frameworks: ["NIST AI RMF Govern 2.1", "ISO 42001"], level: 1 },
  { id: "gov-4", category: "Governance", subcategory: "Roles", title: "Establish AI ethics review board", description: "Create oversight body for AI ethical concerns", priority: "Medium", frameworks: ["NIST AI RMF Govern 4.1"], level: 2 },

  // Data Security
  { id: "data-1", category: "Data Security", subcategory: "Governance", title: "Maintain training data inventory", description: "Document all data sources used for AI training", priority: "Critical", frameworks: ["AISVS C1.1.1", "EU AI Act Art. 10"], level: 1 },
  { id: "data-2", category: "Data Security", subcategory: "Governance", title: "Implement data quality controls", description: "Validate training data for quality and bias", priority: "High", frameworks: ["AISVS C1.1.2", "NIST AI RMF Map 1.1"], level: 1 },
  { id: "data-3", category: "Data Security", subcategory: "Protection", title: "Encrypt data at rest and in transit", description: "Apply encryption to all sensitive training data", priority: "Critical", frameworks: ["AISVS C1.2.2", "NIST 800-53 SC-28"], level: 1 },
  { id: "data-4", category: "Data Security", subcategory: "Protection", title: "Implement data access controls", description: "Restrict access to training data based on role", priority: "High", frameworks: ["AISVS C5.1.1", "NIST 800-53 AC-3"], level: 1 },
  { id: "data-5", category: "Data Security", subcategory: "Privacy", title: "Conduct data privacy assessment", description: "Evaluate PII exposure in training data", priority: "High", frameworks: ["AISVS C11.1.1", "GDPR Art. 35"], level: 1 },

  // Input Security
  { id: "input-1", category: "Input Security", subcategory: "Validation", title: "Implement input length limits", description: "Restrict maximum input size for AI systems", priority: "High", frameworks: ["AISVS C2.1.1"], level: 1 },
  { id: "input-2", category: "Input Security", subcategory: "Validation", title: "Sanitize user inputs", description: "Filter and sanitize all inputs before processing", priority: "Critical", frameworks: ["AISVS C2.1.2"], level: 1 },
  { id: "input-3", category: "Input Security", subcategory: "Injection Defense", title: "Implement prompt injection detection", description: "Detect and block prompt injection attempts", priority: "Critical", frameworks: ["AISVS C2.2.1", "ATLAS AML.T0051"], level: 1 },
  { id: "input-4", category: "Input Security", subcategory: "Injection Defense", title: "Use delimiter tokens", description: "Separate system and user content with clear boundaries", priority: "High", frameworks: ["AISVS C2.2.2"], level: 2 },

  // Output Security
  { id: "output-1", category: "Output Security", subcategory: "Validation", title: "Implement output content filtering", description: "Filter harmful or inappropriate content from outputs", priority: "Critical", frameworks: ["AISVS C7.1.1"], level: 1 },
  { id: "output-2", category: "Output Security", subcategory: "Validation", title: "Add output format validation", description: "Validate AI outputs match expected schema", priority: "High", frameworks: ["AISVS C7.1.2"], level: 1 },
  { id: "output-3", category: "Output Security", subcategory: "Privacy", title: "Implement PII detection in outputs", description: "Detect and redact PII from AI responses", priority: "High", frameworks: ["AISVS C7.2.1", "AISVS C11.2.1"], level: 1 },
  { id: "output-4", category: "Output Security", subcategory: "Attribution", title: "Add source attribution", description: "Include sources for AI-generated claims", priority: "Medium", frameworks: ["AISVS C7.3.1"], level: 2 },

  // Access Control
  { id: "access-1", category: "Access Control", subcategory: "Authentication", title: "Implement strong authentication", description: "Require authentication for AI system access", priority: "Critical", frameworks: ["AISVS C5.1.1", "NIST 800-53 IA-2"], level: 1 },
  { id: "access-2", category: "Access Control", subcategory: "Authorization", title: "Implement role-based access control", description: "Restrict AI capabilities based on user role", priority: "Critical", frameworks: ["AISVS C5.1.2", "NIST 800-53 AC-2"], level: 1 },
  { id: "access-3", category: "Access Control", subcategory: "Authorization", title: "Apply least privilege principle", description: "Grant minimum permissions required", priority: "High", frameworks: ["AISVS C5.2.1", "NIST 800-53 AC-6"], level: 1 },
  { id: "access-4", category: "Access Control", subcategory: "API Security", title: "Implement API rate limiting", description: "Prevent abuse through request rate limits", priority: "High", frameworks: ["AISVS C5.3.1"], level: 1 },

  // Model Security
  { id: "model-1", category: "Model Security", subcategory: "Lifecycle", title: "Implement model versioning", description: "Track all model versions with metadata", priority: "High", frameworks: ["AISVS C3.1.1"], level: 1 },
  { id: "model-2", category: "Model Security", subcategory: "Lifecycle", title: "Sign model artifacts", description: "Cryptographically sign model files", priority: "High", frameworks: ["AISVS C3.2.1"], level: 2 },
  { id: "model-3", category: "Model Security", subcategory: "Testing", title: "Conduct adversarial testing", description: "Test models against adversarial attacks", priority: "High", frameworks: ["AISVS C10.1.1", "ATLAS"], level: 2 },
  { id: "model-4", category: "Model Security", subcategory: "Testing", title: "Perform security scanning", description: "Scan models for vulnerabilities", priority: "High", frameworks: ["AISVS C3.3.1"], level: 1 },

  // Agent Security
  { id: "agent-1", category: "Agent Security", subcategory: "Permissions", title: "Define tool permissions", description: "Specify allowed tools for each agent", priority: "Critical", frameworks: ["AISVS C9.1.1"], level: 1 },
  { id: "agent-2", category: "Agent Security", subcategory: "Permissions", title: "Implement human-in-the-loop", description: "Require approval for sensitive actions", priority: "Critical", frameworks: ["AISVS C9.2.1", "EU AI Act Art. 14"], level: 1 },
  { id: "agent-3", category: "Agent Security", subcategory: "Isolation", title: "Sandbox agent execution", description: "Isolate agent tool execution environments", priority: "High", frameworks: ["AISVS C9.3.1"], level: 1 },
  { id: "agent-4", category: "Agent Security", subcategory: "Monitoring", title: "Implement kill switch", description: "Enable immediate agent termination capability", priority: "Critical", frameworks: ["AISVS C9.4.1"], level: 1 },

  // Monitoring & Response
  { id: "monitor-1", category: "Monitoring", subcategory: "Logging", title: "Enable comprehensive logging", description: "Log all AI system interactions and decisions", priority: "Critical", frameworks: ["AISVS C13.1.1", "NIST 800-53 AU-2"], level: 1 },
  { id: "monitor-2", category: "Monitoring", subcategory: "Logging", title: "Implement audit trails", description: "Maintain tamper-proof audit logs", priority: "High", frameworks: ["AISVS C13.1.2", "EU AI Act Art. 12"], level: 1 },
  { id: "monitor-3", category: "Monitoring", subcategory: "Detection", title: "Configure security alerts", description: "Set up alerts for anomalous AI behavior", priority: "High", frameworks: ["AISVS C13.2.1", "NIST 800-53 SI-4"], level: 1 },
  { id: "monitor-4", category: "Monitoring", subcategory: "Response", title: "Develop AI incident playbooks", description: "Create response procedures for AI incidents", priority: "High", frameworks: ["NIST 800-53 IR-4", "NIST AI RMF Manage"], level: 2 },

  // Supply Chain
  { id: "supply-1", category: "Supply Chain", subcategory: "Vendor", title: "Assess third-party AI providers", description: "Evaluate security of AI service providers", priority: "High", frameworks: ["AISVS C8.1.1", "NIST 800-53 SR-1"], level: 1 },
  { id: "supply-2", category: "Supply Chain", subcategory: "Vendor", title: "Review model provenance", description: "Verify origin of third-party models", priority: "High", frameworks: ["AISVS C8.2.1"], level: 1 },
  { id: "supply-3", category: "Supply Chain", subcategory: "Dependencies", title: "Scan ML dependencies", description: "Check for vulnerabilities in ML libraries", priority: "High", frameworks: ["AISVS C8.3.1"], level: 1 },
  { id: "supply-4", category: "Supply Chain", subcategory: "Dependencies", title: "Maintain AI SBOM", description: "Document software bill of materials for AI", priority: "Medium", frameworks: ["AISVS C8.3.2"], level: 2 },
];

const categories = [...new Set(checklistItems.map((item) => item.category))];

export default function ChecklistPage() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [filterPriority, setFilterPriority] = useState<string>("All");
  const [filterLevel, setFilterLevel] = useState<string>("All");
  const [showCompleted, setShowCompleted] = useState(true);

  // Load from localStorage
  useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("security-checklist");
      if (saved) {
        setCheckedItems(new Set(JSON.parse(saved)));
      }
    }
  });

  const toggleItem = useCallback((id: string) => {
    setCheckedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("security-checklist", JSON.stringify([...newSet]));
      }
      return newSet;
    });
  }, []);

  const filteredItems = useMemo(() => {
    return checklistItems.filter((item) => {
      if (filterCategory !== "All" && item.category !== filterCategory) return false;
      if (filterPriority !== "All" && item.priority !== filterPriority) return false;
      if (filterLevel !== "All" && `Level ${item.level}` !== filterLevel) return false;
      if (!showCompleted && checkedItems.has(item.id)) return false;
      return true;
    });
  }, [filterCategory, filterPriority, filterLevel, showCompleted, checkedItems]);

  const stats = useMemo(() => {
    const total = checklistItems.length;
    const completed = checkedItems.size;
    const byPriority = {
      Critical: { total: 0, completed: 0 },
      High: { total: 0, completed: 0 },
      Medium: { total: 0, completed: 0 },
      Low: { total: 0, completed: 0 },
    };
    checklistItems.forEach((item) => {
      byPriority[item.priority].total++;
      if (checkedItems.has(item.id)) {
        byPriority[item.priority].completed++;
      }
    });
    return { total, completed, percent: Math.round((completed / total) * 100), byPriority };
  }, [checkedItems]);

  const exportChecklist = useCallback(() => {
    let content = "# AI Security Compliance Checklist\n\n";
    content += `Generated: ${new Date().toLocaleDateString()}\n`;
    content += `Progress: ${stats.completed}/${stats.total} (${stats.percent}%)\n\n`;

    const groupedByCategory: Record<string, ChecklistItem[]> = {};
    checklistItems.forEach((item) => {
      if (!groupedByCategory[item.category]) {
        groupedByCategory[item.category] = [];
      }
      groupedByCategory[item.category].push(item);
    });

    Object.entries(groupedByCategory).forEach(([category, items]) => {
      content += `## ${category}\n\n`;
      items.forEach((item) => {
        const status = checkedItems.has(item.id) ? "[x]" : "[ ]";
        content += `${status} **${item.title}** (${item.priority})\n`;
        content += `   ${item.description}\n`;
        content += `   Frameworks: ${item.frameworks.join(", ")}\n\n`;
      });
    });

    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ai-security-checklist.md";
    a.click();
    URL.revokeObjectURL(url);
  }, [checkedItems, stats]);

  const exportCSV = useCallback(() => {
    const rows = [["ID", "Category", "Title", "Description", "Priority", "Level", "Frameworks", "Status"]];
    checklistItems.forEach((item) => {
      rows.push([
        item.id,
        item.category,
        item.title,
        item.description,
        item.priority,
        `Level ${item.level}`,
        item.frameworks.join("; "),
        checkedItems.has(item.id) ? "Complete" : "Incomplete",
      ]);
    });
    const csvContent = rows.map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ai-security-checklist.csv";
    a.click();
    URL.revokeObjectURL(url);
  }, [checkedItems]);

  const priorityColors = {
    Critical: "bg-red-900/50 text-red-300 border-red-700/50",
    High: "bg-orange-900/50 text-orange-300 border-orange-700/50",
    Medium: "bg-amber-900/50 text-amber-300 border-amber-700/50",
    Low: "bg-slate-700/50 text-slate-300 border-slate-600/50",
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950 text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full px-4 py-2 text-sm font-semibold mb-4">
            Compliance Checklist
          </span>
          <h1 className="text-4xl font-bold mb-4">AI Security Checklist</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Track your compliance with AI security frameworks
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="col-span-2 md:col-span-1 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-xl p-4 text-center border border-cyan-700/30">
            <div className="text-3xl font-bold text-cyan-400">{stats.percent}%</div>
            <div className="text-slate-400 text-xs">Overall Progress</div>
          </div>
          {Object.entries(stats.byPriority).map(([priority, data]) => (
            <div
              key={priority}
              className={`rounded-xl p-4 text-center border ${priorityColors[priority as keyof typeof priorityColors]}`}
            >
              <div className="text-xl font-bold">
                {data.completed}/{data.total}
              </div>
              <div className="text-xs opacity-75">{priority}</div>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="bg-slate-800/50 rounded-xl p-4 mb-8 border border-slate-700/50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-300">Completion Progress</span>
            <span className="text-cyan-400 font-bold">
              {stats.completed}/{stats.total}
            </span>
          </div>
          <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500"
              style={{ width: `${stats.percent}%` }}
            ></div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-slate-800/30 rounded-xl p-4 mb-8 border border-slate-700/50">
          <div className="flex flex-wrap gap-4 items-center">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3 py-2 rounded-lg bg-slate-900 text-white border border-slate-700 text-sm"
            >
              <option>All</option>
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="px-3 py-2 rounded-lg bg-slate-900 text-white border border-slate-700 text-sm"
            >
              <option>All</option>
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            <select
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value)}
              className="px-3 py-2 rounded-lg bg-slate-900 text-white border border-slate-700 text-sm"
            >
              <option>All</option>
              <option>Level 1</option>
              <option>Level 2</option>
              <option>Level 3</option>
            </select>
            <label className="flex items-center gap-2 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={showCompleted}
                onChange={(e) => setShowCompleted(e.target.checked)}
                className="rounded"
              />
              Show completed
            </label>
            <div className="ml-auto flex gap-2">
              <button
                onClick={exportChecklist}
                className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white text-sm font-medium hover:from-cyan-700 hover:to-blue-700 transition-all"
              >
                Export Markdown
              </button>
              <button
                onClick={exportCSV}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Export CSV
              </button>
            </div>
          </div>
        </div>

        {/* Checklist */}
        <div className="space-y-3">
          {filteredItems.map((item) => {
            const isChecked = checkedItems.has(item.id);
            return (
              <div
                key={item.id}
                className={`rounded-xl p-4 border-2 transition-all cursor-pointer ${
                  isChecked
                    ? "bg-emerald-900/20 border-emerald-700/50"
                    : "bg-slate-800/50 border-slate-700/50 hover:border-slate-600"
                }`}
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-1 ${
                      isChecked ? "bg-emerald-600" : "bg-slate-700"
                    }`}
                  >
                    {isChecked && <span className="text-white text-sm">✓</span>}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-white">{item.title}</span>
                      <span className={`px-2 py-0.5 rounded text-xs border ${priorityColors[item.priority]}`}>
                        {item.priority}
                      </span>
                      <span className="px-2 py-0.5 bg-slate-700 rounded text-xs text-slate-300">
                        L{item.level}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm mb-2">{item.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {item.frameworks.map((fw, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-slate-800 rounded text-xs text-slate-400">
                          {fw}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-slate-500">{item.category}</div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">✅</div>
            <p className="text-slate-400">All items matching your filters are complete!</p>
          </div>
        )}
      </div>
    </main>
  );
}
