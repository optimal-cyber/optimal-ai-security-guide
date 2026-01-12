"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

interface Regulation {
  id: string;
  name: string;
  shortName: string;
  jurisdiction: string;
  status: "In Force" | "Adopted" | "Proposed" | "Guidance";
  effectiveDate: string;
  description: string;
  scope: string;
  keyRequirements: { title: string; description: string }[];
  penalties: { type: string; amount: string }[];
  frameworkAlignment: { framework: string; mapping: string }[];
  resources: { label: string; url: string }[];
}

const regulations: Regulation[] = [
  {
    id: "eu-ai-act",
    name: "European Union Artificial Intelligence Act",
    shortName: "EU AI Act",
    jurisdiction: "European Union",
    status: "In Force",
    effectiveDate: "August 2024 (phased implementation through 2027)",
    description: "The world's first comprehensive AI regulation, establishing a risk-based framework for AI systems in the EU market.",
    scope: "All AI systems placed on the EU market or used in the EU, regardless of where providers are established.",
    keyRequirements: [
      {
        title: "Risk Classification",
        description: "AI systems must be classified into risk categories: Unacceptable (banned), High-risk (strict requirements), Limited risk (transparency), Minimal risk (voluntary codes).",
      },
      {
        title: "Conformity Assessment",
        description: "High-risk AI systems require conformity assessment before market placement, including technical documentation and quality management.",
      },
      {
        title: "Human Oversight",
        description: "High-risk AI systems must be designed to allow effective human oversight and intervention.",
      },
      {
        title: "Transparency",
        description: "Users must be informed when interacting with AI systems, and AI-generated content must be labeled.",
      },
      {
        title: "Data Governance",
        description: "Training data must meet quality criteria including relevance, representativeness, and freedom from errors.",
      },
      {
        title: "Logging & Traceability",
        description: "High-risk AI systems must automatically record logs for traceability and post-market monitoring.",
      },
    ],
    penalties: [
      { type: "Prohibited AI practices", amount: "Up to €35M or 7% of global annual turnover" },
      { type: "High-risk non-compliance", amount: "Up to €15M or 3% of global annual turnover" },
      { type: "Incorrect information", amount: "Up to €7.5M or 1.5% of global annual turnover" },
    ],
    frameworkAlignment: [
      { framework: "NIST AI RMF", mapping: "Govern, Map, Measure, Manage functions align with risk management requirements" },
      { framework: "OWASP AISVS", mapping: "Categories C1-C13 support technical compliance requirements" },
      { framework: "ISO 42001", mapping: "AI management system certification supports conformity demonstration" },
    ],
    resources: [
      { label: "Official EU AI Act Text", url: "https://eur-lex.europa.eu/eli/reg/2024/1689" },
      { label: "EU AI Office", url: "https://digital-strategy.ec.europa.eu/en/policies/ai-office" },
    ],
  },
  {
    id: "nist-ai-rmf",
    name: "NIST AI Risk Management Framework",
    shortName: "NIST AI RMF",
    jurisdiction: "United States",
    status: "Guidance",
    effectiveDate: "January 2023",
    description: "Voluntary framework for managing risks in AI system design, development, use, and evaluation.",
    scope: "All organizations developing or deploying AI systems, particularly US federal agencies and contractors.",
    keyRequirements: [
      {
        title: "Govern",
        description: "Establish governance structures, policies, and accountability mechanisms for AI risk management.",
      },
      {
        title: "Map",
        description: "Identify and document AI system context, stakeholders, and potential impacts.",
      },
      {
        title: "Measure",
        description: "Assess and analyze AI risks using appropriate metrics and methodologies.",
      },
      {
        title: "Manage",
        description: "Prioritize and implement responses to identified AI risks based on impact and likelihood.",
      },
    ],
    penalties: [
      { type: "N/A (Voluntary)", amount: "No direct penalties - voluntary guidance" },
      { type: "Federal contracts", amount: "May be required for federal AI procurement" },
    ],
    frameworkAlignment: [
      { framework: "NIST 800-53", mapping: "AI RMF complements 800-53 controls with AI-specific guidance" },
      { framework: "OWASP AISVS", mapping: "AISVS provides implementation details for RMF requirements" },
      { framework: "ISO 42001", mapping: "Both frameworks share risk-based approach principles" },
    ],
    resources: [
      { label: "NIST AI RMF Official", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
      { label: "AI RMF Playbook", url: "https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook" },
    ],
  },
  {
    id: "iso-42001",
    name: "ISO/IEC 42001 AI Management System",
    shortName: "ISO 42001",
    jurisdiction: "International",
    status: "In Force",
    effectiveDate: "December 2023",
    description: "International standard for establishing, implementing, and improving an AI management system within organizations.",
    scope: "Any organization developing, providing, or using AI systems seeking formal certification.",
    keyRequirements: [
      {
        title: "AI Policy",
        description: "Establish and maintain an AI policy aligned with organizational objectives.",
      },
      {
        title: "Risk Assessment",
        description: "Systematic identification and assessment of AI-related risks and opportunities.",
      },
      {
        title: "AI System Lifecycle",
        description: "Controls for AI system development, deployment, and retirement.",
      },
      {
        title: "Data Management",
        description: "Requirements for data quality, provenance, and governance.",
      },
      {
        title: "Continual Improvement",
        description: "Ongoing monitoring, measurement, and improvement of AI management system.",
      },
    ],
    penalties: [
      { type: "N/A (Certification)", amount: "Loss of certification if non-compliant" },
      { type: "Business impact", amount: "May affect contracts requiring certification" },
    ],
    frameworkAlignment: [
      { framework: "NIST AI RMF", mapping: "Complementary risk management approaches" },
      { framework: "ISO 27001", mapping: "Can be integrated with existing ISMS" },
      { framework: "EU AI Act", mapping: "Certification can support conformity demonstration" },
    ],
    resources: [
      { label: "ISO 42001 Standard", url: "https://www.iso.org/standard/81230.html" },
    ],
  },
  {
    id: "nist-600-1",
    name: "NIST AI 600-1 Generative AI Profile",
    shortName: "NIST AI 600-1",
    jurisdiction: "United States",
    status: "Guidance",
    effectiveDate: "July 2024",
    description: "Companion resource to NIST AI RMF specifically addressing risks of generative AI systems.",
    scope: "Organizations developing or deploying generative AI including LLMs, image generators, and multimodal systems.",
    keyRequirements: [
      {
        title: "GenAI-Specific Risks",
        description: "Address unique risks including hallucinations, CBRN information, CSAM, and deepfakes.",
      },
      {
        title: "Content Provenance",
        description: "Implement mechanisms for tracking and attributing AI-generated content.",
      },
      {
        title: "Value Alignment",
        description: "Ensure GenAI outputs align with human values and organizational policies.",
      },
      {
        title: "Environmental Impact",
        description: "Consider and document environmental costs of GenAI training and inference.",
      },
    ],
    penalties: [
      { type: "N/A (Voluntary)", amount: "No direct penalties - guidance document" },
    ],
    frameworkAlignment: [
      { framework: "NIST AI RMF", mapping: "Extends AI RMF with GenAI-specific considerations" },
      { framework: "OWASP AISVS", mapping: "AISVS C2, C7 align with prompt security requirements" },
    ],
    resources: [
      { label: "NIST AI 600-1", url: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence" },
    ],
  },
  {
    id: "sec-ai-guidance",
    name: "SEC AI Disclosure Guidance",
    shortName: "SEC AI Guidance",
    jurisdiction: "United States",
    status: "Guidance",
    effectiveDate: "2024 (Evolving)",
    description: "SEC guidance on disclosure obligations for public companies regarding AI use and risks.",
    scope: "US public companies using AI in material business operations or facing AI-related risks.",
    keyRequirements: [
      {
        title: "Material Risk Disclosure",
        description: "Disclose material AI-related risks in SEC filings including 10-K and 10-Q reports.",
      },
      {
        title: "AI Governance",
        description: "Describe board oversight and management of AI-related risks.",
      },
      {
        title: "Cybersecurity Integration",
        description: "Include AI security in cybersecurity disclosure requirements.",
      },
    ],
    penalties: [
      { type: "Securities fraud", amount: "Standard securities violation penalties" },
      { type: "Material misstatement", amount: "Enforcement actions for inadequate disclosure" },
    ],
    frameworkAlignment: [
      { framework: "NIST AI RMF", mapping: "Govern function supports board-level oversight" },
      { framework: "NIST CSF", mapping: "AI risks integrate with cybersecurity framework" },
    ],
    resources: [
      { label: "SEC.gov", url: "https://www.sec.gov" },
    ],
  },
  {
    id: "colorado-ai-act",
    name: "Colorado AI Act",
    shortName: "Colorado AI Act",
    jurisdiction: "United States (Colorado)",
    status: "Adopted",
    effectiveDate: "February 2026",
    description: "First comprehensive US state AI law, focusing on high-risk AI systems and consumer protection.",
    scope: "Developers and deployers of high-risk AI systems operating in Colorado.",
    keyRequirements: [
      {
        title: "Risk Management",
        description: "Implement reasonable risk management policies for high-risk AI systems.",
      },
      {
        title: "Impact Assessments",
        description: "Conduct and document impact assessments for high-risk AI systems.",
      },
      {
        title: "Consumer Disclosure",
        description: "Notify consumers when high-risk AI systems are used in consequential decisions.",
      },
      {
        title: "Human Review",
        description: "Provide opportunity for human review of adverse AI decisions.",
      },
    ],
    penalties: [
      { type: "Per violation", amount: "Up to $20,000 per violation" },
      { type: "Consumer protection", amount: "AG enforcement under CCPA" },
    ],
    frameworkAlignment: [
      { framework: "NIST AI RMF", mapping: "Risk management requirements align with NIST framework" },
      { framework: "EU AI Act", mapping: "Similar risk-based approach to EU regulation" },
    ],
    resources: [
      { label: "Colorado Legislature", url: "https://leg.colorado.gov" },
    ],
  },
];

export default function RegulationsPage() {
  const [selectedRegulation, setSelectedRegulation] = useState<string | null>(null);
  const activeReg = regulations.find((r) => r.id === selectedRegulation);

  const statusColors = {
    "In Force": "bg-emerald-900/50 text-emerald-300 border-emerald-700/50",
    "Adopted": "bg-blue-900/50 text-blue-300 border-blue-700/50",
    "Proposed": "bg-amber-900/50 text-amber-300 border-amber-700/50",
    "Guidance": "bg-purple-900/50 text-purple-300 border-purple-700/50",
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full px-4 py-2 text-sm font-semibold mb-4">
            Regulatory Landscape
          </span>
          <h1 className="text-4xl font-bold mb-4">AI Regulations & Standards</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive mapping of global AI regulations and how they align with security frameworks
          </p>
        </div>

        {/* Regulation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regulations.map((reg) => (
            <button
              key={reg.id}
              onClick={() => setSelectedRegulation(reg.id)}
              className={`text-left p-6 rounded-2xl border-2 transition-all ${
                selectedRegulation === reg.id
                  ? "bg-indigo-900/50 border-indigo-500"
                  : "bg-slate-800/50 border-slate-700 hover:border-slate-600"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg">{reg.shortName}</h3>
                <span className={`px-2 py-1 rounded text-xs border ${statusColors[reg.status]}`}>
                  {reg.status}
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-3">{reg.jurisdiction}</p>
              <p className="text-slate-300 text-sm line-clamp-2">{reg.description}</p>
            </button>
          ))}
        </div>

        {/* Regulation Details */}
        {activeReg && (
          <div className="space-y-8">
            {/* Header */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-slate-700/50">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{activeReg.name}</h2>
                  <p className="text-slate-400">{activeReg.jurisdiction}</p>
                </div>
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm border ${statusColors[activeReg.status]}`}>
                    {activeReg.status}
                  </span>
                </div>
              </div>
              <p className="text-slate-300 mb-4">{activeReg.description}</p>
              <div className="bg-slate-900/50 rounded-xl p-4">
                <div className="text-sm text-slate-400 mb-1">Effective Date</div>
                <div className="text-white">{activeReg.effectiveDate}</div>
              </div>
            </div>

            {/* Scope */}
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 rounded-2xl p-6 border border-blue-700/30">
              <h3 className="text-xl font-bold text-blue-300 mb-4">Scope & Applicability</h3>
              <p className="text-slate-300">{activeReg.scope}</p>
            </div>

            {/* Key Requirements */}
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 rounded-2xl p-6 border border-purple-700/30">
              <h3 className="text-xl font-bold text-purple-300 mb-4">Key Requirements</h3>
              <div className="space-y-4">
                {activeReg.keyRequirements.map((req, idx) => (
                  <div key={idx} className="bg-slate-900/50 rounded-xl p-4">
                    <h4 className="font-semibold text-white mb-2">{req.title}</h4>
                    <p className="text-slate-400 text-sm">{req.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Penalties */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 rounded-2xl p-6 border border-red-700/30">
              <h3 className="text-xl font-bold text-red-300 mb-4">Penalties & Enforcement</h3>
              <div className="space-y-3">
                {activeReg.penalties.map((penalty, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-slate-900/50 rounded-xl p-4">
                    <span className="text-slate-300">{penalty.type}</span>
                    <span className="text-red-300 font-semibold">{penalty.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Framework Alignment */}
            <div className="bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 rounded-2xl p-6 border border-emerald-700/30">
              <h3 className="text-xl font-bold text-emerald-300 mb-4">Framework Alignment</h3>
              <div className="space-y-4">
                {activeReg.frameworkAlignment.map((align, idx) => (
                  <div key={idx} className="bg-slate-900/50 rounded-xl p-4">
                    <h4 className="font-semibold text-white mb-2">{align.framework}</h4>
                    <p className="text-slate-400 text-sm">{align.mapping}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            {activeReg.resources.length > 0 && (
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-slate-300 mb-4">Resources</h3>
                <div className="flex flex-wrap gap-3">
                  {activeReg.resources.map((resource, idx) => (
                    <a
                      key={idx}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-slate-800 rounded-lg text-blue-400 hover:text-blue-300 hover:bg-slate-700 transition-colors"
                    >
                      {resource.label} →
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {!selectedRegulation && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📋</div>
            <p className="text-slate-400">Select a regulation above to view details and framework alignment</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/framework-selector"
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all"
            >
              Find Your Frameworks
            </Link>
            <Link
              href="/assessment"
              className="px-6 py-3 border-2 border-slate-600 rounded-xl font-semibold text-slate-300 hover:border-slate-500 transition-all"
            >
              Assess Compliance Readiness
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
