export interface AtlasTactic {
  id: string;
  name: string;
  description: string;
  techniques: AtlasTechnique[];
}

export interface AtlasTechnique {
  id: string;
  name: string;
  description: string;
  tactic: string;
  examples: string[];
  mitigations: string[];
  references: string[];
}

export const atlasTactics: AtlasTactic[] = [
  {
    id: "reconnaissance",
    name: "Reconnaissance",
    description: "The adversary is trying to gather information they can use to plan future operations.",
    techniques: [
      {
        id: "AML.T0000",
        name: "Search Open Technical Databases",
        description: "Adversaries may search technical databases for information about AI systems and their configurations.",
        tactic: "reconnaissance",
        examples: [
          "Searching public model registries",
          "Analyzing published research papers",
          "Reviewing open-source AI projects",
          "Examining AI system documentation"
        ],
        mitigations: [
          "Limit public exposure of AI system details",
          "Implement proper access controls",
          "Monitor for unusual access patterns",
          "Regular security assessments"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0000/"
        ]
      },
      {
        id: "AML.T0001",
        name: "Search Open Websites/Domains",
        description: "Adversaries may search websites and domains for information about AI systems.",
        tactic: "reconnaissance",
        examples: [
          "Searching company websites for AI information",
          "Analyzing social media for AI system details",
          "Reviewing public AI deployment information"
        ],
        mitigations: [
          "Control public information disclosure",
          "Regular information security reviews",
          "Employee training on information sharing"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0001/"
        ]
      },
      {
        id: "AML.T0003",
        name: "Search Open Websites/Domains",
        description: "Adversaries may search websites and domains for information about AI systems.",
        tactic: "reconnaissance",
        examples: [
          "Searching company websites for AI information",
          "Analyzing social media for AI system details",
          "Reviewing public AI deployment information"
        ],
        mitigations: [
          "Control public information disclosure",
          "Regular information security reviews",
          "Employee training on information sharing"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0003/"
        ]
      },
      {
        id: "AML.T0004",
        name: "Search Open Websites/Domains",
        description: "Adversaries may search websites and domains for information about AI systems.",
        tactic: "reconnaissance",
        examples: [
          "Searching company websites for AI information",
          "Analyzing social media for AI system details",
          "Reviewing public AI deployment information"
        ],
        mitigations: [
          "Control public information disclosure",
          "Regular information security reviews",
          "Employee training on information sharing"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0004/"
        ]
      },
      {
        id: "AML.T0006",
        name: "Search Open Websites/Domains",
        description: "Adversaries may search websites and domains for information about AI systems.",
        tactic: "reconnaissance",
        examples: [
          "Searching company websites for AI information",
          "Analyzing social media for AI system details",
          "Reviewing public AI deployment information"
        ],
        mitigations: [
          "Control public information disclosure",
          "Regular information security reviews",
          "Employee training on information sharing"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0006/"
        ]
      }
    ]
  },
  {
    id: "resource-development",
    name: "Resource Development",
    description: "The adversary is trying to establish resources they can use to support operations.",
    techniques: [
      {
        id: "AML.T0002",
        name: "Acquire Infrastructure",
        description: "Adversaries may acquire infrastructure to support AI attack operations.",
        tactic: "resource-development",
        examples: [
          "Setting up cloud infrastructure for AI attacks",
          "Acquiring computing resources for model training",
          "Establishing command and control infrastructure"
        ],
        mitigations: [
          "Monitor for suspicious infrastructure acquisition",
          "Implement infrastructure security controls",
          "Regular security assessments"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0002/"
        ]
      },
      {
        id: "AML.T0016",
        name: "Acquire Capabilities",
        description: "Adversaries may acquire capabilities to support AI attack operations.",
        tactic: "resource-development",
        examples: [
          "Purchasing AI attack tools",
          "Acquiring pre-trained adversarial models",
          "Obtaining AI exploitation frameworks"
        ],
        mitigations: [
          "Monitor for suspicious capability acquisition",
          "Implement capability controls",
          "Regular security assessments"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0016/"
        ]
      },
      {
        id: "AML.T0017",
        name: "Develop Capabilities",
        description: "Adversaries may develop capabilities to support AI attack operations.",
        tactic: "resource-development",
        examples: [
          "Developing custom AI attack tools",
          "Creating adversarial examples",
          "Building model extraction capabilities"
        ],
        mitigations: [
          "Monitor for suspicious capability development",
          "Implement development controls",
          "Regular security assessments"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0017/"
        ]
      },
      {
        id: "AML.T0008",
        name: "Stage Capabilities",
        description: "Adversaries may stage capabilities to support AI attack operations.",
        tactic: "resource-development",
        examples: [
          "Staging AI attack tools",
          "Preparing adversarial examples",
          "Setting up attack infrastructure"
        ],
        mitigations: [
          "Monitor for suspicious capability staging",
          "Implement staging controls",
          "Regular security assessments"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0008/"
        ]
      },
      {
        id: "AML.T0019",
        name: "Obtain Capabilities",
        description: "Adversaries may obtain capabilities to support AI attack operations.",
        tactic: "resource-development",
        examples: [
          "Obtaining AI attack tools",
          "Acquiring adversarial examples",
          "Getting model extraction tools"
        ],
        mitigations: [
          "Monitor for suspicious capability acquisition",
          "Implement capability controls",
          "Regular security assessments"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0019/"
        ]
      }
    ]
  },
  {
    id: "initial-access",
    name: "Initial Access",
    description: "The adversary is trying to get into your AI system.",
    techniques: [
      {
        id: "AML.T0010",
        name: "Exploit Public-Facing Application",
        description: "Adversaries may exploit public-facing applications to gain initial access to AI systems.",
        tactic: "initial-access",
        examples: [
          "Exploiting AI model APIs",
          "Attacking AI web interfaces",
          "Compromising AI service endpoints"
        ],
        mitigations: [
          "Regular security testing",
          "Input validation",
          "API security controls"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0010/"
        ]
      },
      {
        id: "AML.T0012",
        name: "External Remote Services",
        description: "Adversaries may use external remote services to gain initial access to AI systems.",
        tactic: "initial-access",
        examples: [
          "Using VPN services",
          "Leveraging cloud access",
          "Exploiting remote desktop services"
        ],
        mitigations: [
          "Multi-factor authentication",
          "Network segmentation",
          "Access monitoring"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0012/"
        ]
      },
      {
        id: "AML.T0015",
        name: "Hardware Additions",
        description: "Adversaries may add hardware to gain initial access to AI systems.",
        tactic: "initial-access",
        examples: [
          "Adding malicious hardware",
          "Installing rogue devices",
          "Compromising physical infrastructure"
        ],
        mitigations: [
          "Physical security controls",
          "Hardware inventory management",
          "Regular physical audits"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0015/"
        ]
      }
    ]
  },
  {
    id: "ai-model-access",
    name: "AI Model Access",
    description: "The adversary is trying to gain access to AI models and their capabilities.",
    techniques: [
      {
        id: "AML.T0040",
        name: "Access AI Model",
        description: "Adversaries may attempt to gain access to AI models.",
        tactic: "ai-model-access",
        examples: [
          "Accessing model APIs",
          "Gaining model repository access",
          "Compromising model hosting services"
        ],
        mitigations: [
          "Model access controls",
          "API security",
          "Authentication and authorization"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0040/"
        ]
      },
      {
        id: "AML.T0047",
        name: "Access AI Model",
        description: "Adversaries may attempt to gain access to AI models.",
        tactic: "ai-model-access",
        examples: [
          "Accessing model APIs",
          "Gaining model repository access",
          "Compromising model hosting services"
        ],
        mitigations: [
          "Model access controls",
          "API security",
          "Authentication and authorization"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0047/"
        ]
      },
      {
        id: "AML.T0041",
        name: "Access AI Model",
        description: "Adversaries may attempt to gain access to AI models.",
        tactic: "ai-model-access",
        examples: [
          "Accessing model APIs",
          "Gaining model repository access",
          "Compromising model hosting services"
        ],
        mitigations: [
          "Model access controls",
          "API security",
          "Authentication and authorization"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0041/"
        ]
      },
      {
        id: "AML.T0044",
        name: "Access AI Model",
        description: "Adversaries may attempt to gain access to AI models.",
        tactic: "ai-model-access",
        examples: [
          "Accessing model APIs",
          "Gaining model repository access",
          "Compromising model hosting services"
        ],
        mitigations: [
          "Model access controls",
          "API security",
          "Authentication and authorization"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0044/"
        ]
      }
    ]
  },
  {
    id: "discovery",
    name: "Discovery",
    description: "The adversary is trying to figure out your AI environment.",
    techniques: [
      {
        id: "AML.T0013",
        name: "System Information Discovery",
        description: "Adversaries may attempt to discover system information about AI environments.",
        tactic: "discovery",
        examples: [
          "Discovering AI system configurations",
          "Identifying model architectures",
          "Mapping AI infrastructure"
        ],
        mitigations: [
          "System information controls",
          "Configuration management",
          "Access monitoring"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0013/"
        ]
      },
      {
        id: "AML.T0014",
        name: "System Information Discovery",
        description: "Adversaries may attempt to discover system information about AI environments.",
        tactic: "discovery",
        examples: [
          "Discovering AI system configurations",
          "Identifying model architectures",
          "Mapping AI infrastructure"
        ],
        mitigations: [
          "System information controls",
          "Configuration management",
          "Access monitoring"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0014/"
        ]
      },
      {
        id: "AML.T0007",
        name: "System Information Discovery",
        description: "Adversaries may attempt to discover system information about AI environments.",
        tactic: "discovery",
        examples: [
          "Discovering AI system configurations",
          "Identifying model architectures",
          "Mapping AI infrastructure"
        ],
        mitigations: [
          "System information controls",
          "Configuration management",
          "Access monitoring"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0007/"
        ]
      }
    ]
  },
  {
    id: "ai-attack-staging",
    name: "AI Attack Staging",
    description: "The adversary is trying to prepare for AI-specific attacks.",
    techniques: [
      {
        id: "AML.T0005",
        name: "Stage Capabilities",
        description: "Adversaries may stage capabilities for AI attacks.",
        tactic: "ai-attack-staging",
        examples: [
          "Staging adversarial examples",
          "Preparing model extraction tools",
          "Setting up attack infrastructure"
        ],
        mitigations: [
          "Monitor for suspicious staging activities",
          "Implement staging controls",
          "Regular security assessments"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0005/"
        ]
      },
      {
        id: "AML.T0018",
        name: "Stage Capabilities",
        description: "Adversaries may stage capabilities for AI attacks.",
        tactic: "ai-attack-staging",
        examples: [
          "Staging adversarial examples",
          "Preparing model extraction tools",
          "Setting up attack infrastructure"
        ],
        mitigations: [
          "Monitor for suspicious staging activities",
          "Implement staging controls",
          "Regular security assessments"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0018/"
        ]
      },
      {
        id: "AML.T0042",
        name: "Stage Capabilities",
        description: "Adversaries may stage capabilities for AI attacks.",
        tactic: "ai-attack-staging",
        examples: [
          "Staging adversarial examples",
          "Preparing model extraction tools",
          "Setting up attack infrastructure"
        ],
        mitigations: [
          "Monitor for suspicious staging activities",
          "Implement staging controls",
          "Regular security assessments"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0042/"
        ]
      },
      {
        id: "AML.T0043",
        name: "Stage Capabilities",
        description: "Adversaries may stage capabilities for AI attacks.",
        tactic: "ai-attack-staging",
        examples: [
          "Staging adversarial examples",
          "Preparing model extraction tools",
          "Setting up attack infrastructure"
        ],
        mitigations: [
          "Monitor for suspicious staging activities",
          "Implement staging controls",
          "Regular security assessments"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0043/"
        ]
      }
    ]
  },
  {
    id: "execution",
    name: "Execution",
    description: "The adversary is trying to run malicious code on your AI system.",
    techniques: [
      {
        id: "AML.T0011",
        name: "User Execution",
        description: "Adversaries may rely on user execution to run malicious code in AI environments.",
        tactic: "execution",
        examples: [
          "Executing malicious scripts in AI environments",
          "Running unauthorized code in ML pipelines",
          "Abusing AI system APIs"
        ],
        mitigations: [
          "User training and awareness",
          "Execution controls",
          "Monitoring and alerting"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0011/"
        ]
      },
      {
        id: "AML.T0050",
        name: "User Execution",
        description: "Adversaries may rely on user execution to run malicious code in AI environments.",
        tactic: "execution",
        examples: [
          "Executing malicious scripts in AI environments",
          "Running unauthorized code in ML pipelines",
          "Abusing AI system APIs"
        ],
        mitigations: [
          "User training and awareness",
          "Execution controls",
          "Monitoring and alerting"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0050/"
        ]
      },
      {
        id: "AML.T0051",
        name: "User Execution",
        description: "Adversaries may rely on user execution to run malicious code in AI environments.",
        tactic: "execution",
        examples: [
          "Executing malicious scripts in AI environments",
          "Running unauthorized code in ML pipelines",
          "Abusing AI system APIs"
        ],
        mitigations: [
          "User training and awareness",
          "Execution controls",
          "Monitoring and alerting"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0051/"
        ]
      },
      {
        id: "AML.T0053",
        name: "User Execution",
        description: "Adversaries may rely on user execution to run malicious code in AI environments.",
        tactic: "execution",
        examples: [
          "Executing malicious scripts in AI environments",
          "Running unauthorized code in ML pipelines",
          "Abusing AI system APIs"
        ],
        mitigations: [
          "User training and awareness",
          "Execution controls",
          "Monitoring and alerting"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0053/"
        ]
      }
    ]
  },
  {
    id: "persistence",
    name: "Persistence",
    description: "The adversary is trying to maintain their foothold in your AI system.",
    techniques: [
      {
        id: "AML.T0020",
        name: "Valid Accounts",
        description: "Adversaries may obtain and abuse credentials of existing accounts in AI systems.",
        tactic: "persistence",
        examples: [
          "Compromising AI system admin accounts",
          "Abusing service accounts",
          "Maintaining access through stolen credentials"
        ],
        mitigations: [
          "Multi-factor authentication",
          "Regular credential rotation",
          "Privileged access management"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0020/"
        ]
      },
      {
        id: "AML.T0021",
        name: "Valid Accounts",
        description: "Adversaries may obtain and abuse credentials of existing accounts in AI systems.",
        tactic: "persistence",
        examples: [
          "Compromising AI system admin accounts",
          "Abusing service accounts",
          "Maintaining access through stolen credentials"
        ],
        mitigations: [
          "Multi-factor authentication",
          "Regular credential rotation",
          "Privileged access management"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0021/"
        ]
      },
      {
        id: "AML.T0061",
        name: "Valid Accounts",
        description: "Adversaries may obtain and abuse credentials of existing accounts in AI systems.",
        tactic: "persistence",
        examples: [
          "Compromising AI system admin accounts",
          "Abusing service accounts",
          "Maintaining access through stolen credentials"
        ],
        mitigations: [
          "Multi-factor authentication",
          "Regular credential rotation",
          "Privileged access management"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0061/"
        ]
      },
      {
        id: "AML.T0070",
        name: "Valid Accounts",
        description: "Adversaries may obtain and abuse credentials of existing accounts in AI systems.",
        tactic: "persistence",
        examples: [
          "Compromising AI system admin accounts",
          "Abusing service accounts",
          "Maintaining access through stolen credentials"
        ],
        mitigations: [
          "Multi-factor authentication",
          "Regular credential rotation",
          "Privileged access management"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0070/"
        ]
      }
    ]
  },
  {
    id: "privilege-escalation",
    name: "Privilege Escalation",
    description: "The adversary is trying to gain higher-level permissions in your AI system.",
    techniques: [
      {
        id: "AML.T0053",
        name: "Exploitation for Privilege Escalation",
        description: "Adversaries may exploit software vulnerabilities to escalate privileges in AI systems.",
        tactic: "privilege-escalation",
        examples: [
          "Exploiting AI system vulnerabilities",
          "Abusing model access controls",
          "Manipulating AI service permissions"
        ],
        mitigations: [
          "Regular security updates",
          "Principle of least privilege",
          "Vulnerability management"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0053/"
        ]
      },
      {
        id: "AML.T0054",
        name: "Exploitation for Privilege Escalation",
        description: "Adversaries may exploit software vulnerabilities to escalate privileges in AI systems.",
        tactic: "privilege-escalation",
        examples: [
          "Exploiting AI system vulnerabilities",
          "Abusing model access controls",
          "Manipulating AI service permissions"
        ],
        mitigations: [
          "Regular security updates",
          "Principle of least privilege",
          "Vulnerability management"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0054/"
        ]
      }
    ]
  },
  {
    id: "defense-evasion",
    name: "Defense Evasion",
    description: "The adversary is trying to avoid being detected in your AI system.",
    techniques: [
      {
        id: "AML.T0015",
        name: "Impair Defenses",
        description: "Adversaries may modify system configurations to impair defensive capabilities in AI systems.",
        tactic: "defense-evasion",
        examples: [
          "Disabling AI security monitoring",
          "Manipulating model validation",
          "Bypassing detection mechanisms"
        ],
        mitigations: [
          "Immutable security controls",
          "Regular security audits",
          "Defense in depth"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0015/"
        ]
      },
      {
        id: "AML.T0067",
        name: "Impair Defenses",
        description: "Adversaries may modify system configurations to impair defensive capabilities in AI systems.",
        tactic: "defense-evasion",
        examples: [
          "Disabling AI security monitoring",
          "Manipulating model validation",
          "Bypassing detection mechanisms"
        ],
        mitigations: [
          "Immutable security controls",
          "Regular security audits",
          "Defense in depth"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0067/"
        ]
      },
      {
        id: "AML.T0068",
        name: "Impair Defenses",
        description: "Adversaries may modify system configurations to impair defensive capabilities in AI systems.",
        tactic: "defense-evasion",
        examples: [
          "Disabling AI security monitoring",
          "Manipulating model validation",
          "Bypassing detection mechanisms"
        ],
        mitigations: [
          "Immutable security controls",
          "Regular security audits",
          "Defense in depth"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0068/"
        ]
      },
      {
        id: "AML.T0071",
        name: "Impair Defenses",
        description: "Adversaries may modify system configurations to impair defensive capabilities in AI systems.",
        tactic: "defense-evasion",
        examples: [
          "Disabling AI security monitoring",
          "Manipulating model validation",
          "Bypassing detection mechanisms"
        ],
        mitigations: [
          "Immutable security controls",
          "Regular security audits",
          "Defense in depth"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0071/"
        ]
      },
      {
        id: "AML.T0073",
        name: "Impair Defenses",
        description: "Adversaries may modify system configurations to impair defensive capabilities in AI systems.",
        tactic: "defense-evasion",
        examples: [
          "Disabling AI security monitoring",
          "Manipulating model validation",
          "Bypassing detection mechanisms"
        ],
        mitigations: [
          "Immutable security controls",
          "Regular security audits",
          "Defense in depth"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0073/"
        ]
      },
      {
        id: "AML.T0074",
        name: "Impair Defenses",
        description: "Adversaries may modify system configurations to impair defensive capabilities in AI systems.",
        tactic: "defense-evasion",
        examples: [
          "Disabling AI security monitoring",
          "Manipulating model validation",
          "Bypassing detection mechanisms"
        ],
        mitigations: [
          "Immutable security controls",
          "Regular security audits",
          "Defense in depth"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0074/"
        ]
      },
      {
        id: "AML.T0076",
        name: "Impair Defenses",
        description: "Adversaries may modify system configurations to impair defensive capabilities in AI systems.",
        tactic: "defense-evasion",
        examples: [
          "Disabling AI security monitoring",
          "Manipulating model validation",
          "Bypassing detection mechanisms"
        ],
        mitigations: [
          "Immutable security controls",
          "Regular security audits",
          "Defense in depth"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0076/"
        ]
      }
    ]
  },
  {
    id: "credential-access",
    name: "Credential Access",
    description: "The adversary is trying to steal account names and passwords from your AI system.",
    techniques: [
      {
        id: "AML.T0055",
        name: "Unsecured Credentials",
        description: "Adversaries may search for unsecured credentials in AI systems.",
        tactic: "credential-access",
        examples: [
          "Finding hardcoded API keys",
          "Accessing unsecured model credentials",
          "Extracting authentication tokens"
        ],
        mitigations: [
          "Secure credential storage",
          "Regular credential rotation",
          "Access monitoring"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0055/"
        ]
      }
    ]
  },
  {
    id: "collection",
    name: "Collection",
    description: "The adversary is trying to gather data of interest from your AI system.",
    techniques: [
      {
        id: "AML.T0035",
        name: "Data from Information Repositories",
        description: "Adversaries may collect data from information repositories in AI systems.",
        tactic: "collection",
        examples: [
          "Extracting training data",
          "Collecting model configurations",
          "Gathering system documentation"
        ],
        mitigations: [
          "Data access controls",
          "Encryption",
          "Data loss prevention"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0035/"
        ]
      },
      {
        id: "AML.T0036",
        name: "Data from Information Repositories",
        description: "Adversaries may collect data from information repositories in AI systems.",
        tactic: "collection",
        examples: [
          "Extracting training data",
          "Collecting model configurations",
          "Gathering system documentation"
        ],
        mitigations: [
          "Data access controls",
          "Encryption",
          "Data loss prevention"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0036/"
        ]
      },
      {
        id: "AML.T0037",
        name: "Data from Information Repositories",
        description: "Adversaries may collect data from information repositories in AI systems.",
        tactic: "collection",
        examples: [
          "Extracting training data",
          "Collecting model configurations",
          "Gathering system documentation"
        ],
        mitigations: [
          "Data access controls",
          "Encryption",
          "Data loss prevention"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0037/"
        ]
      }
    ]
  },
  {
    id: "command-and-control",
    name: "Command and Control",
    description: "The adversary is trying to communicate with compromised AI systems.",
    techniques: [
      {
        id: "AML.T0072",
        name: "Application Layer Protocol",
        description: "Adversaries may use application layer protocols for command and control in AI systems.",
        tactic: "command-and-control",
        examples: [
          "Using AI APIs for C2",
          "Abusing model inference for communication",
          "Leveraging AI services for control"
        ],
        mitigations: [
          "Network monitoring",
          "API security",
          "Traffic analysis"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0072/"
        ]
      }
    ]
  },
  {
    id: "exfiltration",
    name: "Exfiltration",
    description: "The adversary is trying to steal data from your AI system.",
    techniques: [
      {
        id: "AML.T0024",
        name: "Exfiltration Over C2 Channel",
        description: "Adversaries may exfiltrate data over command and control channels from AI systems.",
        tactic: "exfiltration",
        examples: [
          "Exfiltrating model data via C2",
          "Stealing training data",
          "Extracting sensitive information"
        ],
        mitigations: [
          "Data loss prevention",
          "Network monitoring",
          "Encryption"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0024/"
        ]
      },
      {
        id: "AML.T0025",
        name: "Exfiltration Over C2 Channel",
        description: "Adversaries may exfiltrate data over command and control channels from AI systems.",
        tactic: "exfiltration",
        examples: [
          "Exfiltrating model data via C2",
          "Stealing training data",
          "Extracting sensitive information"
        ],
        mitigations: [
          "Data loss prevention",
          "Network monitoring",
          "Encryption"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0025/"
        ]
      },
      {
        id: "AML.T0056",
        name: "Exfiltration Over C2 Channel",
        description: "Adversaries may exfiltrate data over command and control channels from AI systems.",
        tactic: "exfiltration",
        examples: [
          "Exfiltrating model data via C2",
          "Stealing training data",
          "Extracting sensitive information"
        ],
        mitigations: [
          "Data loss prevention",
          "Network monitoring",
          "Encryption"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0056/"
        ]
      },
      {
        id: "AML.T0057",
        name: "Exfiltration Over C2 Channel",
        description: "Adversaries may exfiltrate data over command and control channels from AI systems.",
        tactic: "exfiltration",
        examples: [
          "Exfiltrating model data via C2",
          "Stealing training data",
          "Extracting sensitive information"
        ],
        mitigations: [
          "Data loss prevention",
          "Network monitoring",
          "Encryption"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0057/"
        ]
      },
      {
        id: "AML.T0077",
        name: "Exfiltration Over C2 Channel",
        description: "Adversaries may exfiltrate data over command and control channels from AI systems.",
        tactic: "exfiltration",
        examples: [
          "Exfiltrating model data via C2",
          "Stealing training data",
          "Extracting sensitive information"
        ],
        mitigations: [
          "Data loss prevention",
          "Network monitoring",
          "Encryption"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0077/"
        ]
      }
    ]
  },
  {
    id: "impact",
    name: "Impact",
    description: "The adversary is trying to manipulate, interrupt, or destroy your AI system.",
    techniques: [
      {
        id: "AML.T0015",
        name: "Data Manipulation",
        description: "Adversaries may manipulate data to impact AI system integrity.",
        tactic: "impact",
        examples: [
          "Corrupting training data",
          "Manipulating model outputs",
          "Poisoning AI systems"
        ],
        mitigations: [
          "Data validation",
          "Model integrity checks",
          "Regular audits"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0015/"
        ]
      },
      {
        id: "AML.T0029",
        name: "Data Manipulation",
        description: "Adversaries may manipulate data to impact AI system integrity.",
        tactic: "impact",
        examples: [
          "Corrupting training data",
          "Manipulating model outputs",
          "Poisoning AI systems"
        ],
        mitigations: [
          "Data validation",
          "Model integrity checks",
          "Regular audits"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0029/"
        ]
      },
      {
        id: "AML.T0031",
        name: "Data Manipulation",
        description: "Adversaries may manipulate data to impact AI system integrity.",
        tactic: "impact",
        examples: [
          "Corrupting training data",
          "Manipulating model outputs",
          "Poisoning AI systems"
        ],
        mitigations: [
          "Data validation",
          "Model integrity checks",
          "Regular audits"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0031/"
        ]
      },
      {
        id: "AML.T0034",
        name: "Data Manipulation",
        description: "Adversaries may manipulate data to impact AI system integrity.",
        tactic: "impact",
        examples: [
          "Corrupting training data",
          "Manipulating model outputs",
          "Poisoning AI systems"
        ],
        mitigations: [
          "Data validation",
          "Model integrity checks",
          "Regular audits"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0034/"
        ]
      },
      {
        id: "AML.T0046",
        name: "Data Manipulation",
        description: "Adversaries may manipulate data to impact AI system integrity.",
        tactic: "impact",
        examples: [
          "Corrupting training data",
          "Manipulating model outputs",
          "Poisoning AI systems"
        ],
        mitigations: [
          "Data validation",
          "Model integrity checks",
          "Regular audits"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0046/"
        ]
      },
      {
        id: "AML.T0048",
        name: "Data Manipulation",
        description: "Adversaries may manipulate data to impact AI system integrity.",
        tactic: "impact",
        examples: [
          "Corrupting training data",
          "Manipulating model outputs",
          "Poisoning AI systems"
        ],
        mitigations: [
          "Data validation",
          "Model integrity checks",
          "Regular audits"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0048/"
        ]
      },
      {
        id: "AML.T0059",
        name: "Data Manipulation",
        description: "Adversaries may manipulate data to impact AI system integrity.",
        tactic: "impact",
        examples: [
          "Corrupting training data",
          "Manipulating model outputs",
          "Poisoning AI systems"
        ],
        mitigations: [
          "Data validation",
          "Model integrity checks",
          "Regular audits"
        ],
        references: [
          "https://atlas.mitre.org/techniques/AML.T0059/"
        ]
      }
    ]
  }
];

export const getAllAtlasTechniques = (): AtlasTechnique[] => {
  return atlasTactics.flatMap(tactic => tactic.techniques);
};

export const getAtlasTacticById = (id: string): AtlasTactic | undefined => {
  return atlasTactics.find(tactic => tactic.id === id);
};

export const getAtlasTechniqueById = (id: string): AtlasTechnique | undefined => {
  return getAllAtlasTechniques().find(technique => technique.id === id);
}; 