// Enhanced NIST AI RMF to OWASP AISVS Mapping with NIST 800-53 Rev 5 Controls

export const nistAisvsMapping = {
  nodes: [
    // NIST AI RMF Functions
    { id: 'GOVERN', type: 'nist-function', label: 'Govern', description: 'Establish organizational policies and procedures' },
    { id: 'MAP', type: 'nist-function', label: 'Map', description: 'Identify and document AI system context' },
    { id: 'MEASURE', type: 'nist-function', label: 'Measure', description: 'Analyze, assess, and monitor AI risks' },
    { id: 'MANAGE', type: 'nist-function', label: 'Manage', description: 'Prioritize and respond to AI risks' },
    
    // NIST AI RMF Subcategories (expanded)
    { id: 'GOVERN.1.1', type: 'nist-subcategory', label: 'Legal & Regulatory Requirements', description: 'Compliance with applicable laws and regulations' },
    { id: 'GOVERN.1.2', type: 'nist-subcategory', label: 'Organizational Policies', description: 'Establish AI governance policies' },
    { id: 'MAP.1.1', type: 'nist-subcategory', label: 'AI System Inventory', description: 'Document AI systems and components' },
    { id: 'MAP.1.2', type: 'nist-subcategory', label: 'Risk Assessment Scope', description: 'Define risk assessment boundaries' },
    { id: 'MEASURE.1.1', type: 'nist-subcategory', label: 'Risk Measurement Criteria', description: 'Establish risk measurement frameworks' },
    { id: 'MEASURE.2.1', type: 'nist-subcategory', label: 'Continuous Monitoring', description: 'Monitor AI system performance and risks' },
    { id: 'MANAGE.1.1', type: 'nist-subcategory', label: 'Risk Response Planning', description: 'Develop risk response strategies' },
    { id: 'MANAGE.2.1', type: 'nist-subcategory', label: 'Incident Response', description: 'Respond to AI security incidents' },
    
    // NIST 800-53 Rev 5 Control Families (AI-relevant)
    { id: 'AC', type: 'nist-80053-family', label: 'Access Control', description: 'Control access to AI systems and data' },
    { id: 'AU', type: 'nist-80053-family', label: 'Audit & Accountability', description: 'Logging and monitoring of AI activities' },
    { id: 'CM', type: 'nist-80053-family', label: 'Configuration Management', description: 'Manage AI system configurations' },
    { id: 'IA', type: 'nist-80053-family', label: 'Identification & Authentication', description: 'Authenticate AI system users' },
    { id: 'IR', type: 'nist-80053-family', label: 'Incident Response', description: 'Respond to AI security incidents' },
    { id: 'RA', type: 'nist-80053-family', label: 'Risk Assessment', description: 'Assess AI system risks' },
    { id: 'SA', type: 'nist-80053-family', label: 'System & Services Acquisition', description: 'Acquire secure AI components' },
    { id: 'SC', type: 'nist-80053-family', label: 'System & Communications Protection', description: 'Protect AI communications' },
    { id: 'SI', type: 'nist-80053-family', label: 'System & Information Integrity', description: 'Maintain AI system integrity' },
    { id: 'SR', type: 'nist-80053-family', label: 'Supply Chain Risk Management', description: 'Manage AI supply chain risks' },
    
    // NIST 800-53 Rev 5 Specific Controls (AI-relevant)
    { id: 'AC-2', type: 'nist-80053-control', label: 'Account Management', description: 'Manage AI system accounts' },
    { id: 'AC-3', type: 'nist-80053-control', label: 'Access Enforcement', description: 'Enforce access controls for AI systems' },
    { id: 'AU-2', type: 'nist-80053-control', label: 'Audit Events', description: 'Audit AI system events' },
    { id: 'CM-6', type: 'nist-80053-control', label: 'Configuration Settings', description: 'Configure AI system settings' },
    { id: 'IA-2', type: 'nist-80053-control', label: 'Identification & Authentication', description: 'Authenticate AI system access' },
    { id: 'IR-4', type: 'nist-80053-control', label: 'Incident Handling', description: 'Handle AI security incidents' },
    { id: 'RA-2', type: 'nist-80053-control', label: 'Security Categorization', description: 'Categorize AI system security' },
    { id: 'SA-11', type: 'nist-80053-control', label: 'Developer Security Testing', description: 'Test AI system security' },
    { id: 'SC-7', type: 'nist-80053-control', label: 'Boundary Protection', description: 'Protect AI system boundaries' },
    { id: 'SI-4', type: 'nist-80053-control', label: 'System Monitoring', description: 'Monitor AI system activities' },
    { id: 'SR-1', type: 'nist-80053-control', label: 'Supply Chain Risk Management', description: 'Manage AI supply chain' },
    
    // OWASP AISVS Categories (expanded)
    { id: 'C1', type: 'aisvs-category', label: 'C1: Training Data Governance', description: 'Govern training data security and privacy' },
    { id: 'C2', type: 'aisvs-category', label: 'C2: User Input Validation', description: 'Validate and sanitize user inputs' },
    { id: 'C3', type: 'aisvs-category', label: 'C3: Model Lifecycle Management', description: 'Manage model development and deployment' },
    { id: 'C4', type: 'aisvs-category', label: 'C4: Infrastructure & Configuration', description: 'Secure AI infrastructure' },
    { id: 'C5', type: 'aisvs-category', label: 'C5: Access Control', description: 'Control access to AI systems' },
    { id: 'C6', type: 'aisvs-category', label: 'C6: Secure Communication', description: 'Secure AI system communications' },
    { id: 'C7', type: 'aisvs-category', label: 'C7: Secure Output', description: 'Ensure secure AI outputs' },
    { id: 'C8', type: 'aisvs-category', label: 'C8: Supply Chain Security', description: 'Secure AI supply chain' },
    { id: 'C9', type: 'aisvs-category', label: 'C9: Autonomous Orchestration', description: 'Secure autonomous AI systems' },
    { id: 'C10', type: 'aisvs-category', label: 'C10: Adversarial Robustness', description: 'Protect against adversarial attacks' },
    { id: 'C11', type: 'aisvs-category', label: 'C11: Privacy Protection', description: 'Protect AI system privacy' },
    { id: 'C12', type: 'aisvs-category', label: 'C12: Secure Deployment', description: 'Secure AI system deployment' },
    { id: 'C13', type: 'aisvs-category', label: 'C13: Secure Operations', description: 'Secure AI system operations' },
  ],
  links: [
    // NIST AI RMF Function to Subcategory mappings
    { source: 'GOVERN', target: 'GOVERN.1.1', type: 'function-subcategory' },
    { source: 'GOVERN', target: 'GOVERN.1.2', type: 'function-subcategory' },
    { source: 'MAP', target: 'MAP.1.1', type: 'function-subcategory' },
    { source: 'MAP', target: 'MAP.1.2', type: 'function-subcategory' },
    { source: 'MEASURE', target: 'MEASURE.1.1', type: 'function-subcategory' },
    { source: 'MEASURE', target: 'MEASURE.2.1', type: 'function-subcategory' },
    { source: 'MANAGE', target: 'MANAGE.1.1', type: 'function-subcategory' },
    { source: 'MANAGE', target: 'MANAGE.2.1', type: 'function-subcategory' },
    
    // NIST 800-53 Family to Control mappings
    { source: 'AC', target: 'AC-2', type: 'family-control' },
    { source: 'AC', target: 'AC-3', type: 'family-control' },
    { source: 'AU', target: 'AU-2', type: 'family-control' },
    { source: 'CM', target: 'CM-6', type: 'family-control' },
    { source: 'IA', target: 'IA-2', type: 'family-control' },
    { source: 'IR', target: 'IR-4', type: 'family-control' },
    { source: 'RA', target: 'RA-2', type: 'family-control' },
    { source: 'SA', target: 'SA-11', type: 'family-control' },
    { source: 'SC', target: 'SC-7', type: 'family-control' },
    { source: 'SI', target: 'SI-4', type: 'family-control' },
    { source: 'SR', target: 'SR-1', type: 'family-control' },
    
    // NIST AI RMF Subcategory to NIST 800-53 Control mappings
    { source: 'GOVERN.1.1', target: 'RA-2', type: 'rmf-80053' },
    { source: 'GOVERN.1.2', target: 'CM-6', type: 'rmf-80053' },
    { source: 'MAP.1.1', target: 'CM-6', type: 'rmf-80053' },
    { source: 'MAP.1.2', target: 'RA-2', type: 'rmf-80053' },
    { source: 'MEASURE.1.1', target: 'RA-2', type: 'rmf-80053' },
    { source: 'MEASURE.2.1', target: 'SI-4', type: 'rmf-80053' },
    { source: 'MEASURE.2.1', target: 'AU-2', type: 'rmf-80053' },
    { source: 'MANAGE.1.1', target: 'IR-4', type: 'rmf-80053' },
    { source: 'MANAGE.2.1', target: 'IR-4', type: 'rmf-80053' },
    
    // NIST 800-53 Controls to AISVS Category mappings
    { source: 'AC-2', target: 'C5', type: '80053-aisvs' },
    { source: 'AC-3', target: 'C5', type: '80053-aisvs' },
    { source: 'AU-2', target: 'C4', type: '80053-aisvs' },
    { source: 'CM-6', target: 'C4', type: '80053-aisvs' },
    { source: 'IA-2', target: 'C5', type: '80053-aisvs' },
    { source: 'IR-4', target: 'C13', type: '80053-aisvs' },
    { source: 'RA-2', target: 'C3', type: '80053-aisvs' },
    { source: 'SA-11', target: 'C8', type: '80053-aisvs' },
    { source: 'SC-7', target: 'C6', type: '80053-aisvs' },
    { source: 'SI-4', target: 'C4', type: '80053-aisvs' },
    { source: 'SI-4', target: 'C13', type: '80053-aisvs' },
    { source: 'SR-1', target: 'C8', type: '80053-aisvs' },
    
    // Direct NIST AI RMF Subcategory to AISVS Category mappings
    { source: 'GOVERN.1.1', target: 'C1', type: 'rmf-aisvs' },
    { source: 'GOVERN.1.1', target: 'C5', type: 'rmf-aisvs' },
    { source: 'GOVERN.1.1', target: 'C11', type: 'rmf-aisvs' },
    { source: 'GOVERN.1.2', target: 'C1', type: 'rmf-aisvs' },
    { source: 'GOVERN.1.2', target: 'C3', type: 'rmf-aisvs' },
    { source: 'MAP.1.1', target: 'C3', type: 'rmf-aisvs' },
    { source: 'MAP.1.1', target: 'C4', type: 'rmf-aisvs' },
    { source: 'MAP.1.2', target: 'C3', type: 'rmf-aisvs' },
    { source: 'MEASURE.1.1', target: 'C3', type: 'rmf-aisvs' },
    { source: 'MEASURE.2.1', target: 'C4', type: 'rmf-aisvs' },
    { source: 'MEASURE.2.1', target: 'C13', type: 'rmf-aisvs' },
    { source: 'MANAGE.1.1', target: 'C1', type: 'rmf-aisvs' },
    { source: 'MANAGE.1.1', target: 'C2', type: 'rmf-aisvs' },
    { source: 'MANAGE.1.1', target: 'C3', type: 'rmf-aisvs' },
    { source: 'MANAGE.1.1', target: 'C4', type: 'rmf-aisvs' },
    { source: 'MANAGE.1.1', target: 'C5', type: 'rmf-aisvs' },
    { source: 'MANAGE.2.1', target: 'C13', type: 'rmf-aisvs' },
  ],
};

// Developer-friendly mapping data structure
export const mappingMetadata = {
  frameworks: {
    nistRmf: {
      name: 'NIST AI Risk Management Framework',
      version: '1.0',
      description: 'Framework for managing AI risks',
      url: 'https://www.nist.gov/itl/ai-risk-management-framework'
    },
    nist80053: {
      name: 'NIST 800-53 Revision 5',
      version: 'Rev 5',
      description: 'Security and privacy controls for federal information systems',
      url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final'
    },
    aisvs: {
      name: 'OWASP AI Security Verification Standard',
      version: '1.0',
      description: 'Comprehensive framework for verifying AI system security',
      url: 'https://owasp.org/www-project-ai-security-verification-standard/'
    }
  },
  nodeTypes: {
    'nist-function': { color: '#3B82F6', size: 20, label: 'NIST RMF Function' },
    'nist-subcategory': { color: '#60A5FA', size: 15, label: 'NIST RMF Subcategory' },
    'nist-80053-family': { color: '#8B5CF6', size: 18, label: 'NIST 800-53 Family' },
    'nist-80053-control': { color: '#A78BFA', size: 12, label: 'NIST 800-53 Control' },
    'aisvs-category': { color: '#10B981', size: 16, label: 'AISVS Category' }
  },
  linkTypes: {
    'function-subcategory': { color: '#3B82F6', width: 2, label: 'Function → Subcategory' },
    'family-control': { color: '#8B5CF6', width: 2, label: 'Family → Control' },
    'rmf-80053': { color: '#F59E0B', width: 1.5, label: 'RMF → 800-53' },
    '80053-aisvs': { color: '#EF4444', width: 1.5, label: '800-53 → AISVS' },
    'rmf-aisvs': { color: '#10B981', width: 1.5, label: 'RMF → AISVS' }
  }
}; 