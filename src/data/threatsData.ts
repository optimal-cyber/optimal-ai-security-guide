export const threatsData = [
  {
    id: "T1",
    name: "Memory Poisoning",
    desc: "Attackers inject malicious data into the agent’s memory to manipulate future decisions, affecting any memory type from in-agent session to cross-agent cross-user memory.",
    tags: ["memory", "injection", "RAG", "persistence", "knowledge-base"],
    impact: "High",
    references: [
      { label: "OWASP AI Security", url: "https://owasp.org/www-project-ai-security/" },
      { label: "RAG Poisoning Attack Techniques", url: "https://owasp.org/www-project-ai-security/attack-techniques/rag-poisoning/" },
      { label: "Data Poisoning in AI Systems", url: "https://arxiv.org/abs/2004.07481" }
    ],
    attackVectors: [
      { name: "Data Injection", severity: "High", desc: "Injecting malicious payloads into session memory" },
      { name: "Context Manipulation", severity: "Medium", desc: "Altering agent’s context window to bias outputs" },
      { name: "Session Contamination", severity: "Medium", desc: "Cross-session poisoning via shared memory" },
      { name: "Poisoned RAG sources", severity: "High", desc: "Supplying tainted data to retrieval-augmented generation" },
      { name: "Training Data Corruption", severity: "High", desc: "Systematically poisoning knowledge bases with subtle biases" },
      { name: "Memory Persistence Attacks", severity: "Medium", desc: "Creating malicious memories that persist across sessions" }
    ],
    affected: ["kc2", "kc4", "kc7"],
    mitigations: ["M3", "M4", "M9"],
    risk: 9,
  },
  {
    id: "T2",
    name: "Tool Misuse",
    desc: "Manipulation of tools, APIs, or environment access to perform unintended actions or access unauthorized resources, including exploitation of access to external systems.",
    tags: ["tools", "api", "manipulation", "access-control", "sandbox"],
    impact: "High",
    references: [
      { label: "AI Agent Tool Security", url: "https://owasp.org/www-project-ai-security/controls/tool-security/" },
      { label: "Tool Misuse in Agentic Systems", url: "https://owasp.org/www-project-ai-security/attack-techniques/tool-misuse/" }
    ],
    attackVectors: [
      { name: "Prompt Injection for Tool Abuse", severity: "High", desc: "Manipulating agent to execute unauthorized tool commands" },
      { name: "Tool Chain Exploitation", severity: "High", desc: "Chaining multiple tool calls to achieve unauthorized outcomes" },
      { name: "API Parameter Manipulation", severity: "Medium", desc: "Modifying tool parameters to access restricted resources" },
      { name: "Tool Authentication Bypass", severity: "High", desc: "Exploiting tool authentication mechanisms" },
      { name: "Resource Exhaustion via Tools", severity: "Medium", desc: "Using tools to overwhelm external services" },
      { name: "Lateral Movement through Tools", severity: "Medium", desc: "Using legitimate tools to access unintended systems" }
    ],
    affected: ["kc4", "kc5", "kc7.2"],
    mitigations: ["M7", "M8", "M9"],
    risk: 8,
  },
  {
    id: "T3",
    name: "Privilege Compromise",
    desc: "Breaking information system boundaries through context collapse, causing unauthorized data access/leakage, or exploiting tool privileges to gain unauthorized access to systems.",
    tags: ["privilege", "escalation", "rbac", "isolation", "permissions"],
    impact: "High",
    references: [
      { label: "Privilege Escalation in AI Systems", url: "https://owasp.org/www-project-ai-security/attack-techniques/privilege-escalation/" },
      { label: "OWASP Agent Authorization Controls", url: "https://owasp.org/www-project-ai-security/controls/authorization/" }
    ],
    attackVectors: [
      { name: "Context Collapse", severity: "High", desc: "Collapsing context to bypass isolation boundaries" },
      { name: "Role Confusion", severity: "Medium", desc: "Tricking agent into using elevated privileges" },
      { name: "Session Hijacking", severity: "High", desc: "Taking over privileged agent sessions" }
    ],
    affected: ["kc4", "kc5", "kc7.2"],
    mitigations: ["M7", "M8", "M9"],
    risk: 8,
  },
  {
    id: "T5",
    name: "Cascading Hallucination",
    desc: "Foundation models generate incorrect information that propagates through the system, affecting reasoning quality and being stored in memory across sessions or agents.",
    tags: ["hallucination", "misinformation", "reasoning", "verification", "propagation"],
    impact: "Medium",
    references: [
      { label: "Cascading Hallucinations in AI", url: "https://owasp.org/www-project-ai-security/attack-techniques/hallucination/" },
      { label: "Information Integrity in Agent Systems", url: "https://arxiv.org/abs/2304.12345" }
    ],
    attackVectors: [
      { name: "False Information Injection", severity: "Medium", desc: "Introducing fabricated facts that propagate through agent reasoning" },
      { name: "Memory Contamination", severity: "High", desc: "Storing hallucinated information in long-term memory" },
      { name: "Cross-Agent Misinformation", severity: "Medium", desc: "Spreading false information between multiple agents" },
      { name: "Confidence Amplification", severity: "Medium", desc: "Reinforcing false information through repeated exposure" },
      { name: "Decision Chain Corruption", severity: "High", desc: "Contaminating multi-step reasoning processes" },
      { name: "Source Attribution Errors", severity: "Medium", desc: "Misattributing fabricated information to legitimate sources" }
    ],
    affected: ["kc1", "kc3", "kc4", "kc7"],
    mitigations: ["M1", "M5", "M9"],
    risk: 7,
  },
  {
    id: "T4",
    name: "Prompt Injection",
    desc: "Attackers manipulate model behavior by injecting malicious prompts, causing the model to ignore instructions, leak data, or perform unintended actions.",
    tags: ["prompt-injection", "manipulation", "llm", "control-flow"],
    impact: "High",
    references: [
      { label: "OWASP LLM Top 10: Prompt Injection", url: "https://owasp.org/www-project-llm-security-top-10/2024/A01-prompt-injection/" },
      { label: "NIST AI RMF", url: "https://www.nist.gov/itl/ai-risk-management-framework" }
    ],
    attackVectors: [
      { name: "Direct Prompt Injection", severity: "High", desc: "User-supplied input alters model instructions or context." },
      { name: "Indirect Prompt Injection", severity: "High", desc: "Malicious content from external sources (e.g., web, email) is injected into the prompt context." },
      { name: "Goal Hijacking", severity: "Medium", desc: "Manipulating the model to pursue attacker-defined objectives." }
    ],
    affected: ["kc1", "kc3", "kc7.3"],
    mitigations: ["M1", "M2", "M4"],
    risk: 9,
  },
  {
    id: "T6",
    name: "Data Leakage",
    desc: "Sensitive or confidential information is exposed through model outputs, logs, or unintended responses.",
    tags: ["data-leakage", "privacy", "output", "compliance"],
    impact: "High",
    references: [
      { label: "OWASP LLM Top 10: Data Leakage", url: "https://owasp.org/www-project-llm-security-top-10/2024/A02-data-leakage/" },
      { label: "NIST AI RMF", url: "https://www.nist.gov/itl/ai-risk-management-framework" }
    ],
    attackVectors: [
      { name: "Prompt Leakage", severity: "High", desc: "Model reveals prompt or context in its output." },
      { name: "Training Data Exposure", severity: "High", desc: "Model outputs memorized sensitive data from training." },
      { name: "Log Exposure", severity: "Medium", desc: "Sensitive data written to logs or monitoring systems." }
    ],
    affected: ["kc1", "kc2", "kc4"],
    mitigations: ["M2", "M5", "M6"],
    risk: 8,
  },
  {
    id: "T7",
    name: "Model Theft & Extraction",
    desc: "Attackers extract model parameters, intellectual property, or proprietary data through repeated queries or side channels.",
    tags: ["model-theft", "extraction", "ip", "side-channel"],
    impact: "Medium",
    references: [
      { label: "OWASP LLM Top 10: Model Theft", url: "https://owasp.org/www-project-llm-security-top-10/2024/A03-model-theft/" },
      { label: "NIST AI RMF", url: "https://www.nist.gov/itl/ai-risk-management-framework" }
    ],
    attackVectors: [
      { name: "Query-based Extraction", severity: "Medium", desc: "Repeated queries to reconstruct model weights or training data." },
      { name: "Side Channel Attacks", severity: "Medium", desc: "Exploiting timing, memory, or resource usage to infer model details." }
    ],
    affected: ["kc1", "kc6"],
    mitigations: ["M8", "M10"],
    risk: 7,
  },
  {
    id: "T8",
    name: "Supply Chain Compromise",
    desc: "Malicious or vulnerable dependencies, pre-trained models, or third-party services introduce risk into the AI system.",
    tags: ["supply-chain", "dependency", "third-party", "model-integrity"],
    impact: "High",
    references: [
      { label: "OWASP LLM Top 10: Supply Chain", url: "https://owasp.org/www-project-llm-security-top-10/2024/A04-supply-chain/" },
      { label: "NIST AI RMF", url: "https://www.nist.gov/itl/ai-risk-management-framework" }
    ],
    attackVectors: [
      { name: "Malicious Model", severity: "High", desc: "Pre-trained model is backdoored or poisoned." },
      { name: "Dependency Vulnerability", severity: "Medium", desc: "Vulnerable library or service introduces exploit path." },
      { name: "Update Hijacking", severity: "Medium", desc: "Attacker compromises model or dependency update process." }
    ],
    affected: ["kc1", "kc4", "kc7.2"],
    mitigations: ["M9", "M10"],
    risk: 8,
  },
  {
    id: "T9",
    name: "Alignment Failure",
    desc: "The model’s objectives, values, or behaviors diverge from intended or ethical outcomes, leading to harmful or unintended actions.",
    tags: ["alignment", "ethics", "misuse", "goal"],
    impact: "Medium",
    references: [
      { label: "NIST AI RMF", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
      { label: "AISVS C2: Alignment", url: "https://owasp.org/www-project-ai-security-verification-standard/sections/C2-Alignment/" }
    ],
    attackVectors: [
      { name: "Goal Misalignment", severity: "Medium", desc: "Model pursues objectives contrary to user or organizational intent." },
      { name: "Ethical Boundary Violation", severity: "Medium", desc: "Model circumvents ethical or legal constraints." }
    ],
    affected: ["kc1", "kc3", "kc6"],
    mitigations: ["M1", "M11"],
    risk: 7,
  },
  {
    id: "T10",
    name: "Social Engineering & Manipulation",
    desc: "Attackers exploit model outputs or agent workflows to manipulate users, operators, or downstream systems (e.g., phishing, fraud, misinformation).",
    tags: ["social-engineering", "manipulation", "phishing", "trust"],
    impact: "High",
    references: [
      { label: "OWASP LLM Top 10: Social Engineering", url: "https://owasp.org/www-project-llm-security-top-10/2024/A05-social-engineering/" },
      { label: "NIST AI RMF", url: "https://www.nist.gov/itl/ai-risk-management-framework" }
    ],
    attackVectors: [
      { name: "Phishing Output", severity: "High", desc: "Model generates content to trick or defraud users." },
      { name: "Workflow Manipulation", severity: "Medium", desc: "Agent actions are manipulated to bypass controls or approvals." }
    ],
    affected: ["kc1", "kc3", "kc5"],
    mitigations: ["M2", "M12"],
    risk: 8,
  },
]; 