import Navbar from "../../components/Navbar";

// Enhanced controls data with detailed information
const enhancedControls = [
  {
    id: "access-control",
    name: "Access Control & Authentication",
    category: "Identity & Access Management",
    description: "Comprehensive access control mechanisms for AI systems and data",
    priority: "Critical",
    implementation: "High",
    status: "Implemented",
    controls: [
      {
        name: "Multi-Factor Authentication (MFA)",
        description: "Require multiple authentication factors for AI system access",
        implementation: "Implement OAuth 2.0 with TOTP or hardware tokens",
        tools: ["Auth0", "Okta", "Duo", "Google Authenticator"],
        codeExample: "Use JWT tokens with refresh token rotation"
      },
      {
        name: "Role-Based Access Control (RBAC)",
        description: "Define and enforce role-based permissions for AI system components",
        implementation: "Create granular roles for different AI system functions",
        tools: ["AWS IAM", "Azure AD", "Kubernetes RBAC"],
        codeExample: "Implement middleware for role validation"
      },
      {
        name: "API Key Management",
        description: "Secure management of API keys for AI service access",
        implementation: "Use secure key storage with rotation policies",
        tools: ["HashiCorp Vault", "AWS Secrets Manager", "Azure Key Vault"],
        codeExample: "Implement key rotation with versioning"
      }
    ]
  },
  {
    id: "data-protection",
    name: "Data Protection & Privacy",
    category: "Data Security",
    description: "Protect sensitive data used in AI training and inference",
    priority: "Critical",
    implementation: "High",
    status: "In Progress",
    controls: [
      {
        name: "Data Encryption at Rest",
        description: "Encrypt all AI training data and model artifacts",
        implementation: "Use AES-256 encryption for stored data",
        tools: ["AWS KMS", "Azure Key Vault", "Google Cloud KMS"],
        codeExample: "Implement transparent data encryption (TDE)"
      },
      {
        name: "Data Encryption in Transit",
        description: "Encrypt data during transmission between AI system components",
        implementation: "Use TLS 1.3 for all communications",
        tools: ["Let's Encrypt", "AWS Certificate Manager", "Cloudflare"],
        codeExample: "Enforce HTTPS with HSTS headers"
      },
      {
        name: "Differential Privacy",
        description: "Implement privacy-preserving techniques for AI training",
        implementation: "Add noise to training data to protect individual privacy",
        tools: ["TensorFlow Privacy", "PyTorch Opacus", "IBM Differential Privacy"],
        codeExample: "Use Laplace noise for privacy budget management"
      }
    ]
  },
  {
    id: "input-validation",
    name: "Input Validation & Sanitization",
    category: "Application Security",
    description: "Validate and sanitize all inputs to AI systems",
    priority: "High",
    implementation: "Medium",
    status: "Implemented",
    controls: [
      {
        name: "Prompt Injection Prevention",
        description: "Prevent prompt injection attacks against language models",
        implementation: "Implement input validation and prompt engineering",
        tools: ["OWASP ZAP", "Semgrep", "Custom validation rules"],
        codeExample: "Use prompt templates with input sanitization"
      },
      {
        name: "Input Size Limits",
        description: "Enforce reasonable limits on input size and complexity",
        implementation: "Set maximum token limits and input validation",
        tools: ["Rate limiting", "Input validation libraries"],
        codeExample: "Implement token counting and size validation"
      },
      {
        name: "Content Filtering",
        description: "Filter inappropriate or malicious content from inputs",
        implementation: "Use content moderation APIs and custom filters",
        tools: ["OpenAI Moderation", "Perspective API", "Custom ML models"],
        codeExample: "Implement content classification pipeline"
      }
    ]
  },
  {
    id: "model-security",
    name: "Model Security & Robustness",
    category: "AI Security",
    description: "Protect AI models from attacks and ensure robustness",
    priority: "High",
    implementation: "Medium",
    status: "Planning",
    controls: [
      {
        name: "Adversarial Training",
        description: "Train models to be robust against adversarial attacks",
        implementation: "Incorporate adversarial examples in training",
        tools: ["CleverHans", "Adversarial Robustness Toolbox", "Custom attacks"],
        codeExample: "Implement FGSM and PGD adversarial training"
      },
      {
        name: "Model Watermarking",
        description: "Embed watermarks in models to detect unauthorized use",
        implementation: "Add imperceptible watermarks to model outputs",
        tools: ["Custom watermarking algorithms", "Digital watermarking libraries"],
        codeExample: "Implement backdoor-based watermarking"
      },
      {
        name: "Model Monitoring",
        description: "Monitor model behavior for anomalies and attacks",
        implementation: "Track model performance and detect drift",
        tools: ["MLflow", "Weights & Biases", "Custom monitoring"],
        codeExample: "Implement drift detection algorithms"
      }
    ]
  },
  {
    id: "infrastructure",
    name: "Infrastructure Security",
    category: "DevOps Security",
    description: "Secure the infrastructure supporting AI systems",
    priority: "High",
    implementation: "High",
    status: "Implemented",
    controls: [
      {
        name: "Container Security",
        description: "Secure containers running AI workloads",
        implementation: "Use minimal base images and security scanning",
        tools: ["Docker Scout", "Trivy", "Snyk", "Clair"],
        codeExample: "Implement multi-stage builds with security scanning"
      },
      {
        name: "Network Security",
        description: "Implement network segmentation and monitoring",
        implementation: "Use VPCs, firewalls, and network monitoring",
        tools: ["AWS VPC", "Azure NSG", "Kubernetes Network Policies"],
        codeExample: "Implement network policies for pod communication"
      },
      {
        name: "Secrets Management",
        description: "Secure management of secrets and credentials",
        implementation: "Use dedicated secrets management services",
        tools: ["HashiCorp Vault", "AWS Secrets Manager", "Azure Key Vault"],
        codeExample: "Implement secrets injection at runtime"
      }
    ]
  },
  {
    id: "monitoring",
    name: "Monitoring & Logging",
    category: "Observability",
    description: "Comprehensive monitoring and logging for AI systems",
    priority: "Medium",
    implementation: "Medium",
    status: "In Progress",
    controls: [
      {
        name: "Audit Logging",
        description: "Log all AI system activities for audit purposes",
        implementation: "Implement structured logging with correlation IDs",
        tools: ["ELK Stack", "Splunk", "Datadog", "Custom logging"],
        codeExample: "Use structured JSON logging with correlation IDs"
      },
      {
        name: "Performance Monitoring",
        description: "Monitor AI system performance and resource usage",
        implementation: "Track metrics for model performance and infrastructure",
        tools: ["Prometheus", "Grafana", "New Relic", "Datadog"],
        codeExample: "Implement custom metrics for model inference time"
      },
      {
        name: "Security Event Monitoring",
        description: "Monitor for security events and potential attacks",
        implementation: "Use SIEM tools to correlate security events",
        tools: ["Splunk", "ELK Stack", "Azure Sentinel", "AWS GuardDuty"],
        codeExample: "Implement security event correlation rules"
      }
    ]
  }
];

export default function Controls() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-emerald-400 mb-4">Security Controls & Mitigations</h1>
          <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
            Comprehensive security controls and mitigations for agentic AI systems, 
            organized by category with implementation guidance and developer resources.
          </p>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <div className="text-2xl font-bold text-blue-400">{enhancedControls.length}</div>
              <div className="text-sm text-slate-400">Control Categories</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <div className="text-2xl font-bold text-green-400">18</div>
              <div className="text-sm text-slate-400">Total Controls</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <div className="text-2xl font-bold text-yellow-400">3</div>
              <div className="text-sm text-slate-400">In Progress</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <div className="text-2xl font-bold text-emerald-400">3</div>
              <div className="text-sm text-slate-400">Implemented</div>
            </div>
          </div>
        </div>

        {/* Control Categories */}
        <div className="space-y-8">
          {enhancedControls.map((category) => (
            <div key={category.id} className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
              {/* Category Header */}
              <div className="bg-slate-700/50 p-6 border-b border-slate-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-white">{category.name}</h2>
                      <span className="text-sm font-mono text-slate-400">{category.category}</span>
                    </div>
                    <p className="text-slate-300 mb-3">{category.description}</p>
                    <div className="flex flex-wrap gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        category.priority === 'Critical' ? 'bg-red-900 text-red-300' :
                        category.priority === 'High' ? 'bg-orange-900 text-orange-300' :
                        'bg-yellow-900 text-yellow-300'
                      }`}>
                        Priority: {category.priority}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        category.implementation === 'High' ? 'bg-green-900 text-green-300' :
                        category.implementation === 'Medium' ? 'bg-yellow-900 text-yellow-300' :
                        'bg-red-900 text-red-300'
                      }`}>
                        Implementation: {category.implementation}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        category.status === 'Implemented' ? 'bg-green-900 text-green-300' :
                        category.status === 'In Progress' ? 'bg-blue-900 text-blue-300' :
                        'bg-yellow-900 text-yellow-300'
                      }`}>
                        Status: {category.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Controls List */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.controls.map((control, index) => (
                    <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                      <h3 className="text-lg font-bold text-white mb-2">{control.name}</h3>
                      <p className="text-slate-300 text-sm mb-4">{control.description}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-slate-200 text-sm mb-1">Implementation</h4>
                          <p className="text-slate-400 text-sm">{control.implementation}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-slate-200 text-sm mb-1">Tools & Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {control.tools.map((tool, toolIndex) => (
                              <span key={toolIndex} className="bg-slate-600 text-slate-300 px-2 py-1 rounded text-xs">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-slate-200 text-sm mb-1">Code Example</h4>
                          <div className="bg-slate-800 rounded p-3">
                            <code className="text-emerald-400 text-sm font-mono">{control.codeExample}</code>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Implementation Resources */}
        <div className="mt-12 bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <h2 className="text-2xl font-bold text-teal-400 mb-6 flex items-center gap-2">
            <span className="text-2xl">🔧</span>
            Implementation Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-slate-200 mb-3">Security Tools</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <a href="https://owasp.org/www-project-zap/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">OWASP ZAP for API Testing</a></li>
                <li>• <a href="https://semgrep.dev/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">Semgrep for Code Analysis</a></li>
                <li>• <a href="https://trivy.dev/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">Trivy for Container Scanning</a></li>
                <li>• <a href="https://snyk.io/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">Snyk for Dependency Scanning</a></li>
                <li>• <a href="https://www.vaultproject.io/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">HashiCorp Vault for Secrets</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-200 mb-3">AI Security Frameworks</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <a href="https://owasp.org/www-project-ai-security-verification-standard/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">OWASP AISVS Guidelines</a></li>
                <li>• <a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">NIST AI Risk Management Framework</a></li>
                <li>• <a href="https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/security" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">Microsoft AI Security Best Practices</a></li>
                <li>• <a href="https://ai.google.dev/responsibility/safety" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">Google AI Security Guidelines</a></li>
                <li>• <a href="https://www.ibm.com/security/artificial-intelligence" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">IBM AI Security Framework</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-200 mb-3">Developer Resources</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <a href="https://owasp.org/www-project-code-review-guide/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">Secure Code Review Checklist</a></li>
                <li>• <a href="https://owasp.org/www-community/Threat_Modeling" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">Threat Modeling Templates</a></li>
                <li>• <a href="https://www.sans.org/white-papers/incident-handlers-handbook/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">Incident Response Playbooks</a></li>
                <li>• <a href="https://owasp.org/www-project-web-security-testing-guide/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">Security Testing Guidelines</a></li>
                <li>• <a href="https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">Compliance Checklists</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 