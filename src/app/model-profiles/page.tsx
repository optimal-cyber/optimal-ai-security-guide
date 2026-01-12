"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

interface SecurityProfile {
  id: string;
  name: string;
  icon: string;
  description: string;
  primaryThreats: { name: string; severity: "Critical" | "High" | "Medium"; atlas?: string }[];
  aisvsCategories: { id: string; name: string; priority: "High" | "Medium" | "Low" }[];
  keyControls: { name: string; description: string }[];
  tools: { name: string; type: "Open Source" | "Commercial"; url?: string }[];
  considerations: string[];
}

const profiles: SecurityProfile[] = [
  {
    id: "llm",
    name: "Large Language Models (LLMs)",
    icon: "💬",
    description: "Foundation models like GPT-4, Claude, Llama used for text generation, chat, and reasoning tasks.",
    primaryThreats: [
      { name: "Prompt Injection", severity: "Critical", atlas: "AML.T0051" },
      { name: "Jailbreaking", severity: "Critical", atlas: "AML.T0054" },
      { name: "Data Extraction", severity: "High", atlas: "AML.T0024" },
      { name: "Hallucination/Misinformation", severity: "High" },
      { name: "Training Data Poisoning", severity: "Medium", atlas: "AML.T0020" },
    ],
    aisvsCategories: [
      { id: "C2", name: "User Input Validation", priority: "High" },
      { id: "C7", name: "Secure Output", priority: "High" },
      { id: "C5", name: "Access Control", priority: "High" },
      { id: "C11", name: "Privacy Protection", priority: "Medium" },
      { id: "C6", name: "Secure Communication", priority: "Medium" },
    ],
    keyControls: [
      { name: "Input Sanitization", description: "Filter and validate all user inputs before processing" },
      { name: "Output Guardrails", description: "Implement content filtering and safety checks on outputs" },
      { name: "System Prompt Protection", description: "Protect system prompts from extraction and manipulation" },
      { name: "Rate Limiting", description: "Prevent abuse through request rate limiting" },
      { name: "Context Isolation", description: "Separate user contexts to prevent cross-contamination" },
    ],
    tools: [
      { name: "Guardrails AI", type: "Open Source", url: "https://github.com/guardrails-ai/guardrails" },
      { name: "NeMo Guardrails", type: "Open Source", url: "https://github.com/NVIDIA/NeMo-Guardrails" },
      { name: "LangChain", type: "Open Source", url: "https://github.com/langchain-ai/langchain" },
      { name: "Lakera Guard", type: "Commercial" },
      { name: "Prompt Security", type: "Commercial" },
    ],
    considerations: [
      "Monitor for prompt injection attempts in logs",
      "Implement human-in-the-loop for high-stakes decisions",
      "Regular red team testing for jailbreak vulnerabilities",
      "Consider output attribution and sourcing",
    ],
  },
  {
    id: "rag",
    name: "RAG Systems",
    icon: "📚",
    description: "Retrieval-Augmented Generation systems that combine LLMs with external knowledge bases.",
    primaryThreats: [
      { name: "Knowledge Base Poisoning", severity: "Critical", atlas: "AML.T0020" },
      { name: "Indirect Prompt Injection", severity: "Critical", atlas: "AML.T0051.001" },
      { name: "Data Leakage", severity: "High", atlas: "AML.T0024" },
      { name: "Retrieval Manipulation", severity: "High" },
      { name: "Context Overflow", severity: "Medium" },
    ],
    aisvsCategories: [
      { id: "C1", name: "Training Data Governance", priority: "High" },
      { id: "C2", name: "User Input Validation", priority: "High" },
      { id: "C5", name: "Access Control", priority: "High" },
      { id: "C11", name: "Privacy Protection", priority: "High" },
      { id: "C8", name: "Supply Chain Security", priority: "Medium" },
    ],
    keyControls: [
      { name: "Document Sanitization", description: "Scan and sanitize documents before ingestion" },
      { name: "Access-Based Retrieval", description: "Filter retrieved documents based on user permissions" },
      { name: "Source Attribution", description: "Track and display sources for generated content" },
      { name: "Embedding Integrity", description: "Protect vector database from tampering" },
      { name: "Content Classification", description: "Classify and label sensitive content in knowledge base" },
    ],
    tools: [
      { name: "LlamaIndex", type: "Open Source", url: "https://github.com/run-llama/llama_index" },
      { name: "Chroma", type: "Open Source", url: "https://github.com/chroma-core/chroma" },
      { name: "Pinecone", type: "Commercial" },
      { name: "Weaviate", type: "Open Source", url: "https://github.com/weaviate/weaviate" },
    ],
    considerations: [
      "Implement document-level access controls",
      "Regular audits of knowledge base content",
      "Monitor for unusual retrieval patterns",
      "Consider data freshness and versioning",
    ],
  },
  {
    id: "agents",
    name: "AI Agents & Agentic Systems",
    icon: "🤖",
    description: "Autonomous AI systems that can use tools, make decisions, and take actions in the real world.",
    primaryThreats: [
      { name: "Tool Misuse", severity: "Critical", atlas: "AML.T0054" },
      { name: "Privilege Escalation", severity: "Critical" },
      { name: "Cascading Failures", severity: "High" },
      { name: "Goal Manipulation", severity: "High" },
      { name: "Memory Poisoning", severity: "High" },
    ],
    aisvsCategories: [
      { id: "C9", name: "Autonomous Orchestration", priority: "High" },
      { id: "C5", name: "Access Control", priority: "High" },
      { id: "C2", name: "User Input Validation", priority: "High" },
      { id: "C13", name: "Secure Operations", priority: "High" },
      { id: "C10", name: "Adversarial Robustness", priority: "Medium" },
    ],
    keyControls: [
      { name: "Least Privilege", description: "Grant minimal permissions required for each tool/action" },
      { name: "Human-in-the-Loop", description: "Require approval for sensitive or irreversible actions" },
      { name: "Tool Sandboxing", description: "Isolate tool execution environments" },
      { name: "Action Logging", description: "Comprehensive audit trail of all agent actions" },
      { name: "Kill Switch", description: "Ability to immediately halt agent operations" },
    ],
    tools: [
      { name: "LangGraph", type: "Open Source", url: "https://github.com/langchain-ai/langgraph" },
      { name: "AutoGen", type: "Open Source", url: "https://github.com/microsoft/autogen" },
      { name: "CrewAI", type: "Open Source", url: "https://github.com/joaomdmoura/crewAI" },
      { name: "Claude Computer Use", type: "Commercial" },
    ],
    considerations: [
      "Define clear boundaries for agent autonomy",
      "Implement progressive trust based on track record",
      "Consider blast radius of potential failures",
      "Regular review of tool permissions and usage",
    ],
  },
  {
    id: "vision",
    name: "Computer Vision & Image AI",
    icon: "👁️",
    description: "AI systems that process and analyze images, including object detection, classification, and generation.",
    primaryThreats: [
      { name: "Adversarial Examples", severity: "Critical", atlas: "AML.T0043" },
      { name: "Model Inversion", severity: "High", atlas: "AML.T0024" },
      { name: "Data Poisoning", severity: "High", atlas: "AML.T0020" },
      { name: "Deepfake Generation", severity: "High" },
      { name: "Privacy Violations", severity: "Medium" },
    ],
    aisvsCategories: [
      { id: "C10", name: "Adversarial Robustness", priority: "High" },
      { id: "C1", name: "Training Data Governance", priority: "High" },
      { id: "C11", name: "Privacy Protection", priority: "High" },
      { id: "C7", name: "Secure Output", priority: "Medium" },
      { id: "C3", name: "Model Lifecycle", priority: "Medium" },
    ],
    keyControls: [
      { name: "Input Preprocessing", description: "Normalize and validate image inputs" },
      { name: "Adversarial Training", description: "Train models to resist adversarial perturbations" },
      { name: "Confidence Thresholds", description: "Reject low-confidence predictions" },
      { name: "Content Moderation", description: "Filter harmful or inappropriate generated content" },
      { name: "Watermarking", description: "Embed provenance information in generated images" },
    ],
    tools: [
      { name: "Adversarial Robustness Toolbox", type: "Open Source", url: "https://github.com/Trusted-AI/adversarial-robustness-toolbox" },
      { name: "CleverHans", type: "Open Source", url: "https://github.com/cleverhans-lab/cleverhans" },
      { name: "C2PA", type: "Open Source", url: "https://c2pa.org/" },
    ],
    considerations: [
      "Test against known adversarial attack methods",
      "Consider physical-world adversarial threats",
      "Implement content authenticity measures",
      "Monitor for model extraction attempts",
    ],
  },
  {
    id: "custom",
    name: "Custom & Fine-tuned Models",
    icon: "🔧",
    description: "Models that have been fine-tuned or trained from scratch on proprietary data.",
    primaryThreats: [
      { name: "Training Data Leakage", severity: "Critical", atlas: "AML.T0024" },
      { name: "Model Theft", severity: "Critical", atlas: "AML.T0000" },
      { name: "Backdoor Attacks", severity: "High", atlas: "AML.T0020" },
      { name: "Membership Inference", severity: "High", atlas: "AML.T0025" },
      { name: "Supply Chain Compromise", severity: "Medium" },
    ],
    aisvsCategories: [
      { id: "C3", name: "Model Lifecycle", priority: "High" },
      { id: "C1", name: "Training Data Governance", priority: "High" },
      { id: "C8", name: "Supply Chain Security", priority: "High" },
      { id: "C12", name: "Secure Deployment", priority: "High" },
      { id: "C5", name: "Access Control", priority: "Medium" },
    ],
    keyControls: [
      { name: "Model Registry", description: "Secure storage with versioning and access controls" },
      { name: "Training Pipeline Security", description: "Secure CI/CD for ML training workflows" },
      { name: "Model Signing", description: "Cryptographic signing of model artifacts" },
      { name: "Differential Privacy", description: "Privacy-preserving training techniques" },
      { name: "SBOM for ML", description: "Software bill of materials for model dependencies" },
    ],
    tools: [
      { name: "MLflow", type: "Open Source", url: "https://github.com/mlflow/mlflow" },
      { name: "DVC", type: "Open Source", url: "https://github.com/iterative/dvc" },
      { name: "Weights & Biases", type: "Commercial" },
      { name: "TensorFlow Privacy", type: "Open Source", url: "https://github.com/tensorflow/privacy" },
    ],
    considerations: [
      "Document all training data sources and lineage",
      "Implement model access logging and monitoring",
      "Regular vulnerability scanning of training infrastructure",
      "Consider IP protection and model licensing",
    ],
  },
];

export default function ModelProfilesPage() {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const activeProfile = profiles.find((p) => p.id === selectedProfile);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full px-4 py-2 text-sm font-semibold mb-4">
            Model Security Profiles
          </span>
          <h1 className="text-4xl font-bold mb-4">AI Model Security Profiles</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Security considerations and controls for different types of AI systems
          </p>
        </div>

        {/* Profile Selector */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {profiles.map((profile) => (
            <button
              key={profile.id}
              onClick={() => setSelectedProfile(profile.id)}
              className={`p-6 rounded-2xl border-2 transition-all text-center ${
                selectedProfile === profile.id
                  ? "bg-blue-900/50 border-blue-500"
                  : "bg-slate-800/50 border-slate-700 hover:border-slate-600"
              }`}
            >
              <div className="text-4xl mb-2">{profile.icon}</div>
              <div className="font-semibold text-sm">{profile.name}</div>
            </button>
          ))}
        </div>

        {/* Profile Details */}
        {activeProfile && (
          <div className="space-y-8">
            {/* Header */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-slate-700/50">
              <div className="flex items-start gap-6">
                <div className="text-6xl">{activeProfile.icon}</div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">{activeProfile.name}</h2>
                  <p className="text-slate-400">{activeProfile.description}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Primary Threats */}
              <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 rounded-2xl p-6 border border-red-700/30">
                <h3 className="text-xl font-bold text-red-300 mb-4">Primary Threats</h3>
                <div className="space-y-3">
                  {activeProfile.primaryThreats.map((threat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between bg-slate-900/50 rounded-xl p-3"
                    >
                      <div>
                        <div className="font-medium text-white">{threat.name}</div>
                        {threat.atlas && (
                          <div className="text-xs text-slate-500">{threat.atlas}</div>
                        )}
                      </div>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          threat.severity === "Critical"
                            ? "bg-red-900/50 text-red-300"
                            : threat.severity === "High"
                            ? "bg-orange-900/50 text-orange-300"
                            : "bg-amber-900/50 text-amber-300"
                        }`}
                      >
                        {threat.severity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AISVS Categories */}
              <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 rounded-2xl p-6 border border-purple-700/30">
                <h3 className="text-xl font-bold text-purple-300 mb-4">Priority AISVS Categories</h3>
                <div className="space-y-3">
                  {activeProfile.aisvsCategories.map((cat, idx) => (
                    <Link
                      key={idx}
                      href="/aisvs"
                      className="flex items-center justify-between bg-slate-900/50 rounded-xl p-3 hover:bg-slate-800/50 transition-colors"
                    >
                      <div>
                        <div className="font-medium text-white">{cat.id}: {cat.name}</div>
                      </div>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          cat.priority === "High"
                            ? "bg-red-900/50 text-red-300"
                            : cat.priority === "Medium"
                            ? "bg-amber-900/50 text-amber-300"
                            : "bg-slate-700/50 text-slate-300"
                        }`}
                      >
                        {cat.priority}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Controls */}
            <div className="bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 rounded-2xl p-6 border border-emerald-700/30">
              <h3 className="text-xl font-bold text-emerald-300 mb-4">Key Security Controls</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeProfile.keyControls.map((control, idx) => (
                  <div key={idx} className="bg-slate-900/50 rounded-xl p-4">
                    <div className="font-semibold text-white mb-1">{control.name}</div>
                    <div className="text-sm text-slate-400">{control.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 rounded-2xl p-6 border border-blue-700/30">
              <h3 className="text-xl font-bold text-blue-300 mb-4">Recommended Tools</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {activeProfile.tools.map((tool, idx) => (
                  <div key={idx} className="bg-slate-900/50 rounded-xl p-4">
                    <div className="font-semibold text-white mb-1">{tool.name}</div>
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        tool.type === "Open Source"
                          ? "bg-emerald-900/50 text-emerald-300"
                          : "bg-blue-900/50 text-blue-300"
                      }`}
                    >
                      {tool.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Considerations */}
            <div className="bg-gradient-to-br from-amber-900/20 to-amber-800/10 rounded-2xl p-6 border border-amber-700/30">
              <h3 className="text-xl font-bold text-amber-300 mb-4">Key Considerations</h3>
              <ul className="space-y-2">
                {activeProfile.considerations.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <span className="text-amber-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {!selectedProfile && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">👆</div>
            <p className="text-slate-400">Select a model type above to view its security profile</p>
          </div>
        )}
      </div>
    </main>
  );
}
