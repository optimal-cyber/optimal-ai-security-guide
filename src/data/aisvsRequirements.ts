export interface AISVSRequirement {
  id: string; // e.g., '1.1.1'
  title: string;
  description: string;
  level: number;
  category: string; // e.g., 'C1'
  references?: { label: string; url: string }[];
}

export interface AISVSCategory {
  id: string; // e.g., 'C1'
  name: string;
  description: string;
  requirements: AISVSRequirement[];
}

export const aisvsCategories: AISVSCategory[] = [
  {
    id: 'C1',
    name: 'Training Data Governance & Bias Management',
    description: 'Training data must be sourced, handled, and maintained in a way that preserves provenance, security, quality, and fairness.',
    requirements: [
      {
        id: '1.1.1',
        title: 'Maintain Data Source Inventory',
        description: 'Verify that an up-to-date inventory of every training-data source (origin, steward/owner, licence, collection method, intended use constraints, and processing history) is maintained.',
        level: 1,
        category: 'C1',
        references: [],
      },
      {
        id: '1.1.2',
        title: 'Vet Datasets for Quality and Compliance',
        description: 'Verify that only datasets vetted for quality, representativeness, ethical sourcing, and licence compliance are allowed, reducing risks of poisoning, embedding bias, and intellectual property infringement.',
        level: 1,
        category: 'C1',
        references: [],
      },
      {
        id: '1.2.2',
        title: 'Encrypt Data In Transit and At Rest',
        description: 'Verify that datasets are encrypted in transit and at rest, for all sensitive or personally identifiable information (PII), using industry-standard cryptographic algorithms and key management practices.',
        level: 2,
        category: 'C1',
        references: [],
      },
    ],
  },
  {
    id: 'C2',
    name: 'User Input Validation',
    description: 'Robust user-input validation is a first-line defense against many of the most damaging attacks on AI systems.',
    requirements: [
      {
        id: '2.1.1',
        title: 'Validate User Input Format',
        description: 'Verify that all user inputs are validated for expected format, type, and length before being processed by the AI system.',
        level: 1,
        category: 'C2',
        references: [],
      },
      {
        id: '2.1.2',
        title: 'Sanitize User Input',
        description: 'Verify that user inputs are sanitized to prevent injection attacks, including prompt injection and code injection.',
        level: 2,
        category: 'C2',
        references: [],
      },
    ],
  },
]; 