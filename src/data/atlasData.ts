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
        id: "T1590",
        name: "Search Open Technical Databases",
        description: "Adversaries may search technical databases for information about AI systems and their configurations.",
        tactic: "reconnaissance",
        examples: [
          "Searching public model registries",
          "Analyzing published research papers",
          "Reviewing open-source AI projects"
        ],
        mitigations: [
          "Limit public exposure of AI system details",
          "Implement proper access controls",
          "Monitor for unusual access patterns"
        ],
        references: [
          "https://atlas.mitre.org/techniques/T1590/"
        ]
      },
      {
        id: "T1590.001",
        name: "Search Open AI Vulnerability Analysis",
        description: "Adversaries may search for publicly available vulnerability analysis of AI systems.",
        tactic: "reconnaissance",
        examples: [
          "Searching for AI model vulnerabilities",
          "Analyzing security research on AI systems",
          "Reviewing CVE databases for AI-related issues"
        ],
        mitigations: [
          "Regular security assessments",
          "Stay updated on AI security research",
          "Implement security patches promptly"
        ],
        references: [
          "https://atlas.mitre.org/techniques/T1590.001/"
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
        id: "T1587",
        name: "Develop Capabilities",
        description: "Adversaries may develop capabilities that can be used during targeting.",
        tactic: "resource-development",
        examples: [
          "Creating adversarial examples",
          "Developing prompt injection techniques",
          "Building model extraction tools"
        ],
        mitigations: [
          "Implement robust input validation",
          "Use adversarial training",
          "Monitor for unusual model behavior"
        ],
        references: [
          "https://atlas.mitre.org/techniques/T1587/"
        ]
      },
      {
        id: "T1587.001",
        name: "Poison Training Data",
        description: "Adversaries may poison training data to compromise AI model behavior.",
        tactic: "resource-development",
        examples: [
          "Injecting malicious samples into training data",
          "Manipulating data labels",
          "Introducing backdoors in training data"
        ],
        mitigations: [
          "Data validation and sanitization",
          "Robust data provenance tracking",
          "Regular model retraining with clean data"
        ],
        references: [
          "https://atlas.mitre.org/techniques/T1587.001/"
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
        id: "T1195",
        name: "Supply Chain Compromise",
        description: "Adversaries may manipulate AI supply chain components to gain access.",
        tactic: "initial-access",
        examples: [
          "Compromising model repositories",
          "Manipulating pre-trained models",
          "Poisoning open-source AI libraries"
        ],
        mitigations: [
          "Verify model integrity",
          "Use trusted model sources",
          "Implement model signing"
        ],
        references: [
          "https://atlas.mitre.org/techniques/T1195/"
        ]
      },
      {
        id: "T1195.001",
        name: "AI Supply Chain Compromise",
        description: "Adversaries may compromise AI-specific supply chain components.",
        tactic: "initial-access",
        examples: [
          "Compromising AI model registries",
          "Manipulating training data sources",
          "Poisoning AI development tools"
        ],
        mitigations: [
          "Model provenance verification",
          "Secure model distribution",
          "Regular supply chain audits"
        ],
        references: [
          "https://atlas.mitre.org/techniques/T1195.001/"
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
        id: "T1059",
        name: "Command and Scripting Interpreter",
        description: "Adversaries may abuse command and script interpreters to execute code.",
        tactic: "execution",
        examples: [
          "Executing malicious scripts in AI environments",
          "Abusing AI system APIs",
          "Running unauthorized code in ML pipelines"
        ],
        mitigations: [
          "Restrict script execution",
          "Implement API rate limiting",
          "Monitor for unusual execution patterns"
        ],
        references: [
          "https://atlas.mitre.org/techniques/T1059/"
        ]
      },
      {
        id: "T1059.001",
        name: "LLM Prompt Injection",
        description: "Adversaries may inject malicious prompts to manipulate LLM behavior.",
        tactic: "execution",
        examples: [
          "Jailbreaking LLMs",
          "Extracting system prompts",
          "Manipulating model outputs"
        ],
        mitigations: [
          "Input validation and sanitization",
          "Prompt engineering best practices",
          "Output filtering and validation"
        ],
        references: [
          "https://atlas.mitre.org/techniques/T1059.001/"
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
        id: "T1078",
        name: "Valid Accounts",
        description: "Adversaries may obtain and abuse credentials of existing accounts.",
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
          "https://atlas.mitre.org/techniques/T1078/"
        ]
      },
      {
        id: "T1078.001",
        name: "LLM Prompt Self-Replication",
        description: "Adversaries may use LLMs to replicate malicious prompts.",
        tactic: "persistence",
        examples: [
          "Creating self-replicating prompts",
          "Establishing persistent model manipulation",
          "Maintaining adversarial influence"
        ],
        mitigations: [
          "Prompt validation",
          "Model behavior monitoring",
          "Regular model retraining"
        ],
        references: [
          "https://atlas.mitre.org/techniques/T1078.001/"
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
        id: "T1068",
        name: "Exploitation for Privilege Escalation",
        description: "Adversaries may exploit software vulnerabilities to escalate privileges.",
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
          "https://atlas.mitre.org/techniques/T1068/"
        ]
      },
      {
        id: "T1068.001",
        name: "LLM Jailbreak",
        description: "Adversaries may jailbreak LLMs to bypass security restrictions.",
        tactic: "privilege-escalation",
        examples: [
          "Bypassing content filters",
          "Accessing restricted capabilities",
          "Manipulating model behavior"
        ],
        mitigations: [
          "Robust prompt filtering",
          "Model fine-tuning for safety",
          "Output validation"
        ],
        references: [
          "https://atlas.mitre.org/techniques/T1068.001/"
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
        id: "T1562",
        name: "Impair Defenses",
        description: "Adversaries may modify system configurations to impair defensive capabilities.",
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
          "https://atlas.mitre.org/techniques/T1562/"
        ]
      },
      {
        id: "T1562.001",
        name: "Evade AI Model",
        description: "Adversaries may attempt to evade AI-based detection systems.",
        tactic: "defense-evasion",
        examples: [
          "Creating adversarial examples",
          "Manipulating model inputs",
          "Bypassing ML-based detection"
        ],
        mitigations: [
          "Adversarial training",
          "Multiple detection methods",
          "Regular model updates"
        ],
        references: [
          "https://atlas.mitre.org/techniques/T1562.001/"
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
        id: "T1552",
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
          "https://atlas.mitre.org/techniques/T1552/"
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
        id: "T1046",
        name: "Network Service Scanning",
        description: "Adversaries may scan for AI services and endpoints.",
        tactic: "discovery",
        examples: [
          "Scanning for AI model APIs",
          "Discovering ML pipeline endpoints",
          "Mapping AI infrastructure"
        ],
        mitigations: [
          "Network segmentation",
          "Service discovery controls",
          "Regular security assessments"
        ],
        references: [
          "https://atlas.mitre.org/techniques/T1046/"
        ]
      },
      {
        id: "T1046.001",
        name: "Discover AI Model Ontology",
        description: "Adversaries may attempt to understand AI model structure and capabilities.",
        tactic: "discovery",
        examples: [
          "Analyzing model architecture",
          "Understanding model capabilities",
          "Mapping model dependencies"
        ],
        mitigations: [
          "Model obfuscation",
          "Limited model exposure",
          "Access controls"
        ],
        references: [
          "https://atlas.mitre.org/techniques/T1046.001/"
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
        id: "T1114",
        name: "Email Collection",
        description: "Adversaries may collect email data from AI systems.",
        tactic: "collection",
        examples: [
          "Extracting email data from AI systems",
          "Collecting communication data",
          "Gathering user information"
        ],
        mitigations: [
          "Data encryption",
          "Access controls",
          "Data loss prevention"
        ],
        references: [
          "https://atlas.mitre.org/techniques/T1114/"
        ]
      },
      {
        id: "T1114.001",
        name: "AI Artifact Collection",
        description: "Adversaries may collect AI artifacts and model data.",
        tactic: "collection",
        examples: [
          "Extracting model weights",
          "Collecting training data",
          "Gathering model configurations"
        ],
        mitigations: [
          "Model protection",
          "Data encryption",
          "Access monitoring"
        ],
        references: [
          "https://atlas.mitre.org/techniques/T1114.001/"
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
        id: "T1071",
        name: "Application Layer Protocol",
        description: "Adversaries may use application layer protocols for command and control.",
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
          "https://atlas.mitre.org/techniques/T1071/"
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
        id: "T1041",
        name: "Exfiltration Over C2 Channel",
        description: "Adversaries may exfiltrate data over command and control channels.",
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
          "https://atlas.mitre.org/techniques/T1041/"
        ]
      },
      {
        id: "T1041.001",
        name: "Exfiltration via AI Inference API",
        description: "Adversaries may use AI inference APIs to exfiltrate data.",
        tactic: "exfiltration",
        examples: [
          "Using model inference for data exfiltration",
          "Abusing AI APIs for data theft",
          "Extracting information through model outputs"
        ],
        mitigations: [
          "API rate limiting",
          "Output filtering",
          "Data classification"
        ],
        references: [
          "https://atlas.mitre.org/techniques/T1041.001/"
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
        id: "T1499",
        name: "Endpoint Denial of Service",
        description: "Adversaries may perform denial of service attacks against AI systems.",
        tactic: "impact",
        examples: [
          "Overwhelming AI model APIs",
          "Exhausting computational resources",
          "Disrupting AI services"
        ],
        mitigations: [
          "Rate limiting",
          "Resource monitoring",
          "Load balancing"
        ],
        references: [
          "https://atlas.mitre.org/techniques/T1499/"
        ]
      },
      {
        id: "T1499.001",
        name: "Denial of AI Service",
        description: "Adversaries may specifically target AI services for denial of service.",
        tactic: "impact",
        examples: [
          "Targeting AI model availability",
          "Disrupting ML pipelines",
          "Overwhelming AI infrastructure"
        ],
        mitigations: [
          "AI service protection",
          "Redundancy",
          "Monitoring and alerting"
        ],
        references: [
          "https://atlas.mitre.org/techniques/T1499.001/"
        ]
      },
      {
        id: "T1565",
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
          "https://atlas.mitre.org/techniques/T1565/"
        ]
      },
      {
        id: "T1565.001",
        name: "Erode AI Model Integrity",
        description: "Adversaries may specifically target AI model integrity.",
        tactic: "impact",
        examples: [
          "Model poisoning attacks",
          "Backdoor insertion",
          "Model inversion attacks"
        ],
        mitigations: [
          "Model validation",
          "Adversarial training",
          "Regular model retraining"
        ],
        references: [
          "https://atlas.mitre.org/techniques/T1565.001/"
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