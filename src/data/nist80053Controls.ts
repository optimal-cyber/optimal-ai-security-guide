export interface NIST80053Control {
  id: string;
  name: string;
  family: string;
  description: string;
  purpose: string;
  requirements: string[];
  implementation: string;
  assessment: string;
  references: { label: string; url: string }[];
  relatedControls: string[];
  aiRelevance: string;
  priority: 'High' | 'Medium' | 'Low';
}

export const nist80053Controls: Record<string, NIST80053Control> = {
  'AC-2': {
    id: 'AC-2',
    name: 'Account Management',
    family: 'Access Control',
    description: 'The organization manages information system accounts, including establishing, activating, modifying, reviewing, disabling, and removing accounts.',
    purpose: 'Ensure that only authorized users have access to AI systems and that account lifecycle is properly managed.',
    requirements: [
      'Identify account types (individual, group, system, application, guest, anonymous, and temporary)',
      'Establish conditions for group membership',
      'Identify authorized users of the information system and specify access authorizations',
      'Require approvals by authorized personnel to create accounts',
      'Create, enable, modify, disable, and remove accounts in accordance with organizational policy',
      'Monitor the use of information system accounts',
      'Notify account managers when temporary accounts are no longer required',
      'Deactivate temporary or expired accounts within a defined time period',
      'Disable accounts within a defined time period when users terminate or are transferred',
      'Archive information to preserve evidence of former account activity'
    ],
    implementation: 'Implement automated account management systems with approval workflows, regular access reviews, and automated deprovisioning for terminated users.',
    assessment: 'Review account creation/deletion logs, verify approval workflows, test account deprovisioning processes, and audit access reviews.',
    references: [
      { label: 'NIST SP 800-53 Rev 5', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
      { label: 'NIST AI RMF', url: 'https://www.nist.gov/itl/ai-risk-management-framework' }
    ],
    relatedControls: ['AC-3', 'IA-2', 'IA-4', 'IA-5'],
    aiRelevance: 'Critical for managing access to AI models, training data, and inference services. Ensures only authorized users can access sensitive AI resources.',
    priority: 'High'
  },
  'AC-3': {
    id: 'AC-3',
    name: 'Access Enforcement',
    family: 'Access Control',
    description: 'The information system enforces approved authorizations for logical access to information and system resources in accordance with applicable access control policies.',
    purpose: 'Enforce access control policies to ensure users can only access resources they are authorized to use.',
    requirements: [
      'Enforce access control policies for all users and processes',
      'Enforce access control policies for all information system resources',
      'Enforce access control policies for all information system services',
      'Enforce access control policies for all information system functions',
      'Enforce access control policies for all information system data',
      'Enforce access control policies for all information system applications',
      'Enforce access control policies for all information system networks',
      'Enforce access control policies for all information system devices',
      'Enforce access control policies for all information system facilities'
    ],
    implementation: 'Implement role-based access control (RBAC), attribute-based access control (ABAC), or policy-based access control (PBAC) systems with centralized policy management.',
    assessment: 'Test access control enforcement, verify policy compliance, audit access decisions, and validate authorization mechanisms.',
    references: [
      { label: 'NIST SP 800-53 Rev 5', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
      { label: 'NIST Zero Trust Architecture', url: 'https://csrc.nist.gov/publications/detail/sp/800-207/final' }
    ],
    relatedControls: ['AC-2', 'AC-4', 'AC-6', 'IA-2'],
    aiRelevance: 'Essential for controlling access to AI models, APIs, training data, and inference results. Prevents unauthorized access to sensitive AI resources.',
    priority: 'High'
  },
  'AC-6': {
    id: 'AC-6',
    name: 'Least Privilege',
    family: 'Access Control',
    description: 'The organization employs the principle of least privilege, allowing only authorized accesses for users (or processes acting on behalf of users) that are necessary to accomplish assigned tasks.',
    purpose: 'Limit user access to only the resources necessary to perform their job functions.',
    requirements: [
      'Employ the principle of least privilege for all users',
      'Employ the principle of least privilege for all processes',
      'Employ the principle of least privilege for all applications',
      'Employ the principle of least privilege for all systems',
      'Employ the principle of least privilege for all networks',
      'Employ the principle of least privilege for all devices',
      'Employ the principle of least privilege for all facilities',
      'Employ the principle of least privilege for all data',
      'Employ the principle of least privilege for all services'
    ],
    implementation: 'Implement granular access controls, regular privilege reviews, just-in-time access provisioning, and automated privilege escalation detection.',
    assessment: 'Review user privileges, test access controls, verify least privilege compliance, and audit privilege escalation events.',
    references: [
      { label: 'NIST SP 800-53 Rev 5', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
      { label: 'NIST Zero Trust Architecture', url: 'https://csrc.nist.gov/publications/detail/sp/800-207/final' }
    ],
    relatedControls: ['AC-2', 'AC-3', 'AC-4', 'IA-2'],
    aiRelevance: 'Critical for AI systems to ensure users only have access to necessary models, data, and functions. Prevents privilege escalation in AI environments.',
    priority: 'High'
  },
  'SI-4': {
    id: 'SI-4',
    name: 'System Monitoring',
    family: 'System and Information Integrity',
    description: 'The organization monitors the information system to detect attacks and indicators of potential attacks in accordance with monitoring objectives.',
    purpose: 'Detect and respond to security incidents and potential threats in a timely manner.',
    requirements: [
      'Monitor the information system to detect attacks',
      'Monitor the information system to detect indicators of potential attacks',
      'Monitor the information system to detect unauthorized local, network, and remote connections',
      'Monitor the information system to detect unauthorized use of the information system',
      'Monitor the information system to detect unauthorized changes to the information system',
      'Monitor the information system to detect unauthorized changes to the information',
      'Monitor the information system to detect unauthorized changes to the system configuration',
      'Monitor the information system to detect unauthorized changes to the system software',
      'Monitor the information system to detect unauthorized changes to the system firmware',
      'Monitor the information system to detect unauthorized changes to the system hardware'
    ],
    implementation: 'Deploy security information and event management (SIEM) systems, intrusion detection/prevention systems, and continuous monitoring tools with automated alerting.',
    assessment: 'Test monitoring capabilities, verify alert accuracy, review incident response procedures, and validate monitoring coverage.',
    references: [
      { label: 'NIST SP 800-53 Rev 5', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
      { label: 'NIST Cybersecurity Framework', url: 'https://www.nist.gov/cyberframework' }
    ],
    relatedControls: ['AU-2', 'IR-4', 'SI-3', 'SI-7'],
    aiRelevance: 'Essential for monitoring AI system behavior, detecting model drift, identifying adversarial attacks, and ensuring AI system integrity.',
    priority: 'High'
  },
  'SI-7': {
    id: 'SI-7',
    name: 'Software, Firmware, and Information Integrity',
    family: 'System and Information Integrity',
    description: 'The organization employs integrity verification tools to detect unauthorized changes to software, firmware, and information.',
    purpose: 'Ensure the integrity of software, firmware, and information to prevent unauthorized modifications.',
    requirements: [
      'Employ integrity verification tools to detect unauthorized changes to software',
      'Employ integrity verification tools to detect unauthorized changes to firmware',
      'Employ integrity verification tools to detect unauthorized changes to information',
      'Employ integrity verification tools to detect unauthorized changes to system configuration',
      'Employ integrity verification tools to detect unauthorized changes to system documentation',
      'Employ integrity verification tools to detect unauthorized changes to system procedures',
      'Employ integrity verification tools to detect unauthorized changes to system policies',
      'Employ integrity verification tools to detect unauthorized changes to system standards',
      'Employ integrity verification tools to detect unauthorized changes to system guidelines'
    ],
    implementation: 'Implement file integrity monitoring, code signing, secure boot, and cryptographic integrity checks for all software and firmware components.',
    assessment: 'Test integrity verification tools, verify integrity checks, review integrity monitoring logs, and validate integrity protection mechanisms.',
    references: [
      { label: 'NIST SP 800-53 Rev 5', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
      { label: 'NIST Cybersecurity Framework', url: 'https://www.nist.gov/cyberframework' }
    ],
    relatedControls: ['CM-6', 'SI-3', 'SI-4', 'SA-11'],
    aiRelevance: 'Critical for ensuring AI model integrity, preventing model tampering, and maintaining trust in AI system outputs and behavior.',
    priority: 'High'
  },
  'SC-8': {
    id: 'SC-8',
    name: 'Transmission Confidentiality and Integrity',
    family: 'System and Communications Protection',
    description: 'The information system protects the confidentiality and integrity of transmitted information.',
    purpose: 'Protect information during transmission to prevent unauthorized disclosure and modification.',
    requirements: [
      'Protect the confidentiality of transmitted information',
      'Protect the integrity of transmitted information',
      'Protect the confidentiality of transmitted information using cryptographic mechanisms',
      'Protect the integrity of transmitted information using cryptographic mechanisms',
      'Protect the confidentiality of transmitted information using physical security measures',
      'Protect the integrity of transmitted information using physical security measures',
      'Protect the confidentiality of transmitted information using procedural security measures',
      'Protect the integrity of transmitted information using procedural security measures'
    ],
    implementation: 'Use TLS 1.3 for all communications, implement end-to-end encryption, and deploy secure communication protocols.',
    assessment: 'Test encryption mechanisms, verify certificate validity, review communication logs, and validate security protocols.',
    references: [
      { label: 'NIST SP 800-53 Rev 5', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
      { label: 'NIST Cryptographic Standards', url: 'https://www.nist.gov/cryptography' }
    ],
    relatedControls: ['SC-7', 'SC-9', 'SC-12', 'SC-13'],
    aiRelevance: 'Essential for protecting AI model communications, API calls, and data transmission between AI system components.',
    priority: 'High'
  },
  'AU-2': {
    id: 'AU-2',
    name: 'Audit Events',
    family: 'Audit and Accountability',
    description: 'The information system generates audit records for the events defined in AU-2 a. through AU-2 d.',
    purpose: 'Generate comprehensive audit records to support security monitoring and incident response.',
    requirements: [
      'Generate audit records for successful and unsuccessful account logon events',
      'Generate audit records for successful and unsuccessful account management events',
      'Generate audit records for successful and unsuccessful object access events',
      'Generate audit records for successful and unsuccessful policy change events',
      'Generate audit records for successful and unsuccessful privilege use events',
      'Generate audit records for successful and unsuccessful process tracking events',
      'Generate audit records for successful and unsuccessful system calls',
      'Generate audit records for successful and unsuccessful system events',
      'Generate audit records for successful and unsuccessful system restarts',
      'Generate audit records for successful and unsuccessful system shutdowns'
    ],
    implementation: 'Configure comprehensive logging for all security-relevant events, implement centralized log management, and ensure log integrity.',
    assessment: 'Test audit logging, verify log completeness, review audit records, and validate log protection mechanisms.',
    references: [
      { label: 'NIST SP 800-53 Rev 5', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
      { label: 'NIST Cybersecurity Framework', url: 'https://www.nist.gov/cyberframework' }
    ],
    relatedControls: ['AU-3', 'AU-6', 'SI-4', 'IR-4'],
    aiRelevance: 'Critical for auditing AI system usage, tracking model access, monitoring inference requests, and supporting AI security incident response.',
    priority: 'High'
  },
  'CM-6': {
    id: 'CM-6',
    name: 'Configuration Settings',
    family: 'Configuration Management',
    description: 'The organization establishes and documents configuration settings for information technology products employed within the information system.',
    purpose: 'Establish and maintain secure configuration settings for all system components.',
    requirements: [
      'Establish configuration settings for information technology products',
      'Document configuration settings for information technology products',
      'Establish configuration settings for information system components',
      'Document configuration settings for information system components',
      'Establish configuration settings for information system applications',
      'Document configuration settings for information system applications',
      'Establish configuration settings for information system databases',
      'Document configuration settings for information system databases',
      'Establish configuration settings for information system networks',
      'Document configuration settings for information system networks'
    ],
    implementation: 'Use configuration management tools, implement security baselines, and establish configuration change control procedures.',
    assessment: 'Review configuration settings, test configuration compliance, verify configuration documentation, and validate configuration controls.',
    references: [
      { label: 'NIST SP 800-53 Rev 5', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
      { label: 'NIST Cybersecurity Framework', url: 'https://www.nist.gov/cyberframework' }
    ],
    relatedControls: ['CM-2', 'CM-3', 'CM-4', 'SI-4'],
    aiRelevance: 'Essential for securing AI system configurations, model parameters, and deployment settings to prevent unauthorized modifications.',
    priority: 'Medium'
  },
  'IA-2': {
    id: 'IA-2',
    name: 'Identification and Authentication (Organizational Users)',
    family: 'Identification and Authentication',
    description: 'The information system uniquely identifies and authenticates organizational users (or processes acting on behalf of organizational users).',
    purpose: 'Ensure that users are properly identified and authenticated before accessing system resources.',
    requirements: [
      'Uniquely identify organizational users',
      'Authenticate organizational users',
      'Uniquely identify processes acting on behalf of organizational users',
      'Authenticate processes acting on behalf of organizational users',
      'Use multifactor authentication for local access to privileged accounts',
      'Use multifactor authentication for network access to privileged accounts',
      'Use multifactor authentication for remote access to privileged accounts',
      'Use multifactor authentication for local access to non-privileged accounts',
      'Use multifactor authentication for network access to non-privileged accounts',
      'Use multifactor authentication for remote access to non-privileged accounts'
    ],
    implementation: 'Implement strong authentication mechanisms, multi-factor authentication, and secure identity management systems.',
    assessment: 'Test authentication mechanisms, verify identity proofing, review authentication logs, and validate authentication controls.',
    references: [
      { label: 'NIST SP 800-53 Rev 5', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
      { label: 'NIST Digital Identity Guidelines', url: 'https://csrc.nist.gov/publications/detail/sp/800-63/4/final' }
    ],
    relatedControls: ['AC-2', 'AC-3', 'IA-4', 'IA-5'],
    aiRelevance: 'Critical for authenticating users accessing AI systems, APIs, and sensitive AI resources to prevent unauthorized access.',
    priority: 'High'
  },
  'IR-4': {
    id: 'IR-4',
    name: 'Incident Handling',
    family: 'Incident Response',
    description: 'The organization implements an incident handling capability for security incidents that includes preparation, detection and analysis, containment, eradication, and recovery.',
    purpose: 'Effectively respond to and recover from security incidents.',
    requirements: [
      'Implement an incident handling capability for security incidents',
      'Include preparation in the incident handling capability',
      'Include detection and analysis in the incident handling capability',
      'Include containment in the incident handling capability',
      'Include eradication in the incident handling capability',
      'Include recovery in the incident handling capability',
      'Coordinate incident handling activities with contingency planning activities',
      'Coordinate incident handling activities with business continuity planning activities',
      'Coordinate incident handling activities with disaster recovery planning activities',
      'Coordinate incident handling activities with crisis management activities'
    ],
    implementation: 'Establish incident response procedures, train incident response teams, implement incident detection tools, and maintain incident response documentation.',
    assessment: 'Test incident response procedures, conduct incident response exercises, review incident reports, and validate incident handling capabilities.',
    references: [
      { label: 'NIST SP 800-53 Rev 5', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
      { label: 'NIST Computer Security Incident Handling Guide', url: 'https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final' }
    ],
    relatedControls: ['IR-2', 'IR-3', 'IR-6', 'IR-8'],
    aiRelevance: 'Essential for responding to AI security incidents, model attacks, data breaches, and AI system compromises.',
    priority: 'High'
  },
  'RA-2': {
    id: 'RA-2',
    name: 'Security Categorization',
    family: 'Risk Assessment',
    description: 'The organization categorizes information and the information system in accordance with applicable federal laws, Executive Orders, directives, policies, regulations, standards, and guidance.',
    purpose: 'Categorize information and systems based on their security requirements and potential impact.',
    requirements: [
      'Categorize information in accordance with applicable federal laws',
      'Categorize information in accordance with applicable Executive Orders',
      'Categorize information in accordance with applicable directives',
      'Categorize information in accordance with applicable policies',
      'Categorize information in accordance with applicable regulations',
      'Categorize information in accordance with applicable standards',
      'Categorize information in accordance with applicable guidance',
      'Categorize the information system in accordance with applicable federal laws',
      'Categorize the information system in accordance with applicable Executive Orders',
      'Categorize the information system in accordance with applicable directives'
    ],
    implementation: 'Conduct security categorization assessments, document categorization decisions, and review categorizations regularly.',
    assessment: 'Review categorization documentation, verify categorization accuracy, test categorization processes, and validate categorization controls.',
    references: [
      { label: 'NIST SP 800-53 Rev 5', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
      { label: 'FIPS 199', url: 'https://csrc.nist.gov/publications/detail/fips/199/final' }
    ],
    relatedControls: ['RA-1', 'RA-3', 'RA-5', 'PM-2'],
    aiRelevance: 'Critical for categorizing AI systems, models, and data based on their sensitivity and potential impact on organizational operations.',
    priority: 'Medium'
  },
  'SA-11': {
    id: 'SA-11',
    name: 'Developer Security Testing and Evaluation',
    family: 'System and Services Acquisition',
    description: 'The organization requires the developer of the information system, system component, or information system service to create and implement a security assessment plan.',
    purpose: 'Ensure that security testing is performed during system development and acquisition.',
    requirements: [
      'Require the developer to create a security assessment plan',
      'Require the developer to implement a security assessment plan',
      'Require the developer to perform security testing',
      'Require the developer to perform security evaluation',
      'Require the developer to perform security assessment',
      'Require the developer to perform security validation',
      'Require the developer to perform security verification',
      'Require the developer to perform security certification',
      'Require the developer to perform security accreditation',
      'Require the developer to perform security authorization'
    ],
    implementation: 'Establish security testing requirements, review security assessment plans, and validate security testing results.',
    assessment: 'Review security assessment plans, verify security testing results, test security controls, and validate security assessments.',
    references: [
      { label: 'NIST SP 800-53 Rev 5', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
      { label: 'NIST Cybersecurity Framework', url: 'https://www.nist.gov/cyberframework' }
    ],
    relatedControls: ['SA-10', 'SA-12', 'SA-15', 'SA-17'],
    aiRelevance: 'Essential for ensuring AI systems and models are developed with security in mind and undergo proper security testing.',
    priority: 'Medium'
  },
  'SR-1': {
    id: 'SR-1',
    name: 'Supply Chain Risk Management Policy and Procedures',
    family: 'Supply Chain Risk Management',
    description: 'The organization develops, documents, and disseminates to personnel a supply chain risk management policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance.',
    purpose: 'Establish policies and procedures for managing supply chain risks.',
    requirements: [
      'Develop a supply chain risk management policy',
      'Document a supply chain risk management policy',
      'Disseminate a supply chain risk management policy to personnel',
      'Address purpose in the supply chain risk management policy',
      'Address scope in the supply chain risk management policy',
      'Address roles in the supply chain risk management policy',
      'Address responsibilities in the supply chain risk management policy',
      'Address management commitment in the supply chain risk management policy',
      'Address coordination among organizational entities in the supply chain risk management policy',
      'Address compliance in the supply chain risk management policy'
    ],
    implementation: 'Develop comprehensive supply chain risk management policies, establish vendor assessment procedures, and implement supply chain monitoring.',
    assessment: 'Review supply chain policies, verify vendor assessments, test supply chain controls, and validate supply chain risk management.',
    references: [
      { label: 'NIST SP 800-53 Rev 5', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
      { label: 'NIST Cybersecurity Supply Chain Risk Management', url: 'https://www.nist.gov/cybersecurity-supply-chain-risk-management' }
    ],
    relatedControls: ['SR-2', 'SR-3', 'SR-4', 'SR-5'],
    aiRelevance: 'Critical for managing risks associated with AI model supply chains, third-party AI services, and AI component vendors.',
    priority: 'High'
  },
  'SR-2': {
    id: 'SR-2',
    name: 'Supply Chain Risk Management Plan',
    family: 'Supply Chain Risk Management',
    description: 'The organization develops a plan to manage supply chain risks associated with the information system, system component, or information system service.',
    purpose: 'Develop a comprehensive plan for identifying, assessing, and mitigating supply chain risks.',
    requirements: [
      'Develop a supply chain risk management plan',
      'Document supply chain risk management strategies',
      'Identify supply chain risk management objectives',
      'Define supply chain risk management scope',
      'Establish supply chain risk management roles and responsibilities',
      'Define supply chain risk management processes',
      'Establish supply chain risk management procedures',
      'Define supply chain risk management tools and techniques',
      'Establish supply chain risk management metrics and measures',
      'Define supply chain risk management reporting requirements'
    ],
    implementation: 'Create detailed supply chain risk management plans, establish risk assessment procedures, and implement risk mitigation strategies.',
    assessment: 'Review supply chain risk management plans, verify risk assessments, test risk mitigation controls, and validate risk management processes.',
    references: [
      { label: 'NIST SP 800-53 Rev 5', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
      { label: 'NIST Cybersecurity Supply Chain Risk Management', url: 'https://www.nist.gov/cybersecurity-supply-chain-risk-management' }
    ],
    relatedControls: ['SR-1', 'SR-3', 'SR-4', 'SR-5'],
    aiRelevance: 'Essential for planning and managing risks in AI supply chains, including model providers, data sources, and AI infrastructure vendors.',
    priority: 'High'
  },
  'SR-3': {
    id: 'SR-3',
    name: 'Supply Chain Controls and Processes',
    family: 'Supply Chain Risk Management',
    description: 'The organization establishes and maintains supply chain controls and processes to manage supply chain risks.',
    purpose: 'Implement controls and processes to mitigate supply chain risks.',
    requirements: [
      'Establish supply chain controls',
      'Maintain supply chain controls',
      'Establish supply chain processes',
      'Maintain supply chain processes',
      'Implement vendor assessment procedures',
      'Establish vendor monitoring processes',
      'Implement supply chain risk assessment procedures',
      'Establish supply chain risk mitigation procedures',
      'Implement supply chain incident response procedures',
      'Establish supply chain recovery procedures'
    ],
    implementation: 'Implement vendor assessment frameworks, establish monitoring systems, and create incident response procedures for supply chain events.',
    assessment: 'Test supply chain controls, verify vendor assessments, review monitoring processes, and validate incident response procedures.',
    references: [
      { label: 'NIST SP 800-53 Rev 5', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
      { label: 'NIST Cybersecurity Supply Chain Risk Management', url: 'https://www.nist.gov/cybersecurity-supply-chain-risk-management' }
    ],
    relatedControls: ['SR-1', 'SR-2', 'SR-4', 'SR-5'],
    aiRelevance: 'Critical for implementing controls to manage risks from AI model providers, data vendors, and AI infrastructure suppliers.',
    priority: 'High'
  },
  'SR-4': {
    id: 'SR-4',
    name: 'Provenance',
    family: 'Supply Chain Risk Management',
    description: 'The organization establishes and maintains provenance over information, information systems, system components, and information system services.',
    purpose: 'Track and verify the origin and history of information, systems, and services.',
    requirements: [
      'Establish provenance over information',
      'Maintain provenance over information',
      'Establish provenance over information systems',
      'Maintain provenance over information systems',
      'Establish provenance over system components',
      'Maintain provenance over system components',
      'Establish provenance over information system services',
      'Maintain provenance over information system services',
      'Document provenance information',
      'Verify provenance information'
    ],
    implementation: 'Implement provenance tracking systems, establish documentation requirements, and create verification procedures for all supply chain components.',
    assessment: 'Review provenance documentation, verify provenance tracking, test provenance verification procedures, and validate provenance controls.',
    references: [
      { label: 'NIST SP 800-53 Rev 5', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
      { label: 'NIST Cybersecurity Supply Chain Risk Management', url: 'https://www.nist.gov/cybersecurity-supply-chain-risk-management' }
    ],
    relatedControls: ['SR-1', 'SR-2', 'SR-3', 'SR-5'],
    aiRelevance: 'Essential for tracking the origin and history of AI models, training data, and AI system components to ensure trust and authenticity.',
    priority: 'High'
  },
  'SR-5': {
    id: 'SR-5',
    name: 'Acquisition Strategies, Tools, and Methods',
    family: 'Supply Chain Risk Management',
    description: 'The organization employs the following controls to develop and implement supply chain risk management strategies, tools, and methods.',
    purpose: 'Develop and implement effective strategies, tools, and methods for supply chain risk management.',
    requirements: [
      'Develop supply chain risk management strategies',
      'Implement supply chain risk management strategies',
      'Develop supply chain risk management tools',
      'Implement supply chain risk management tools',
      'Develop supply chain risk management methods',
      'Implement supply chain risk management methods',
      'Establish supply chain risk management procedures',
      'Implement supply chain risk management procedures',
      'Establish supply chain risk management processes',
      'Implement supply chain risk management processes'
    ],
    implementation: 'Develop comprehensive supply chain risk management strategies, implement risk assessment tools, and establish risk mitigation methods.',
    assessment: 'Review supply chain strategies, test risk management tools, verify risk assessment methods, and validate risk management processes.',
    references: [
      { label: 'NIST SP 800-53 Rev 5', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
      { label: 'NIST Cybersecurity Supply Chain Risk Management', url: 'https://www.nist.gov/cybersecurity-supply-chain-risk-management' }
    ],
    relatedControls: ['SR-1', 'SR-2', 'SR-3', 'SR-4'],
    aiRelevance: 'Critical for developing effective strategies and tools to manage risks in AI supply chains, including model acquisition and data procurement.',
    priority: 'High'
  }
};

export const nist80053Families = {
  'AC': 'Access Control',
  'AU': 'Audit and Accountability',
  'CM': 'Configuration Management',
  'IA': 'Identification and Authentication',
  'IR': 'Incident Response',
  'RA': 'Risk Assessment',
  'SA': 'System and Services Acquisition',
  'SC': 'System and Communications Protection',
  'SI': 'System and Information Integrity',
  'SR': 'Supply Chain Risk Management'
};

export const getControlById = (id: string): NIST80053Control | undefined => {
  return nist80053Controls[id];
};

export const getControlsByFamily = (family: string): NIST80053Control[] => {
  return Object.values(nist80053Controls).filter(control => control.family === family);
};

export const getAllControls = (): NIST80053Control[] => {
  return Object.values(nist80053Controls);
}; 