"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function ExecutiveSummaryPage() {
  const frameworkComparison = [
    {
      framework: "NIST AI RMF",
      focus: "Risk Management",
      scope: "Organizational governance & AI lifecycle",
      bestFor: "Enterprises establishing AI governance programs",
      effort: "Medium",
      mandatory: "Voluntary (US Federal recommended)",
    },
    {
      framework: "NIST 800-53",
      focus: "Security Controls",
      scope: "Technical & operational controls",
      bestFor: "Organizations needing detailed control implementation",
      effort: "High",
      mandatory: "Required for US Federal systems",
    },
    {
      framework: "OWASP AISVS",
      focus: "Verification",
      scope: "AI-specific security requirements",
      bestFor: "Development teams building/auditing AI systems",
      effort: "Variable (3 levels)",
      mandatory: "Voluntary",
    },
    {
      framework: "MITRE ATLAS",
      focus: "Threat Intelligence",
      scope: "AI attack tactics & techniques",
      bestFor: "Security teams & red teamers",
      effort: "Reference material",
      mandatory: "Voluntary",
    },
  ];

  const businessRisks = [
    {
      threat: "Prompt Injection",
      technicalImpact: "Unauthorized actions, data exfiltration",
      businessImpact: "Data breach, regulatory fines, reputational damage",
      estimatedCost: "$1M - $10M+",
      likelihood: "High",
      frameworks: ["AISVS C2", "ATLAS TA0043"],
    },
    {
      threat: "Model Data Poisoning",
      technicalImpact: "Compromised model behavior, backdoors",
      businessImpact: "Wrong decisions, liability, competitive disadvantage",
      estimatedCost: "$500K - $5M",
      likelihood: "Medium",
      frameworks: ["AISVS C1", "ATLAS TA0020"],
    },
    {
      threat: "Model Theft/Extraction",
      technicalImpact: "IP theft, model replication",
      businessImpact: "Loss of competitive advantage, R&D investment loss",
      estimatedCost: "$5M - $50M+",
      likelihood: "Medium",
      frameworks: ["AISVS C5", "ATLAS TA0044"],
    },
    {
      threat: "Hallucination/Misinformation",
      technicalImpact: "Incorrect outputs, fabricated information",
      businessImpact: "Wrong business decisions, legal liability, trust erosion",
      estimatedCost: "$100K - $10M",
      likelihood: "High",
      frameworks: ["AISVS C7", "NIST AI RMF Measure"],
    },
    {
      threat: "Privacy Violations",
      technicalImpact: "PII exposure, training data leakage",
      businessImpact: "GDPR/CCPA fines, lawsuits, customer churn",
      estimatedCost: "$2M - $20M+",
      likelihood: "High",
      frameworks: ["AISVS C11", "NIST 800-53 PT"],
    },
  ];

  const regulatoryLandscape = [
    {
      regulation: "EU AI Act",
      status: "In Force (Aug 2024)",
      applicability: "AI systems in EU market",
      keyRequirements: "Risk classification, transparency, human oversight",
      penalties: "Up to 7% global revenue",
    },
    {
      regulation: "NIST AI RMF",
      status: "Published (Jan 2023)",
      applicability: "US organizations (voluntary)",
      keyRequirements: "Govern, Map, Measure, Manage functions",
      penalties: "N/A (voluntary)",
    },
    {
      regulation: "ISO/IEC 42001",
      status: "Published (Dec 2023)",
      applicability: "Global (certification available)",
      keyRequirements: "AI management system, risk assessment",
      penalties: "N/A (certification)",
    },
    {
      regulation: "SEC AI Guidance",
      status: "Evolving (2024)",
      applicability: "US public companies",
      keyRequirements: "AI risk disclosure, governance",
      penalties: "Securities violations",
    },
    {
      regulation: "NIST AI 600-1",
      status: "Published (2024)",
      applicability: "Generative AI systems",
      keyRequirements: "GenAI-specific risk management",
      penalties: "N/A (guidance)",
    },
  ];

  const boardTalkingPoints = [
    {
      question: "Why does AI security require special attention?",
      answer: "AI systems introduce novel attack vectors (prompt injection, model poisoning) that traditional security controls don't address. They also make autonomous decisions that can have significant business impact.",
    },
    {
      question: "What's our regulatory exposure?",
      answer: "The EU AI Act mandates compliance for high-risk AI systems with penalties up to 7% of global revenue. US federal guidance is evolving, and SEC requires AI risk disclosure for public companies.",
    },
    {
      question: "How do we benchmark our AI security maturity?",
      answer: "OWASP AISVS provides three maturity levels. Most organizations start at Level 1 (baseline) and progress to Level 2 (standard) within 12-18 months. Level 3 is for high-risk/regulated industries.",
    },
    {
      question: "What's the investment required?",
      answer: "Initial AI security program setup typically requires 0.5-2 FTEs and tooling investment of $50K-200K. Ongoing maintenance is ~10-15% of initial AI development costs.",
    },
    {
      question: "What's the risk of inaction?",
      answer: "Average AI-related breach costs $4.5M+. Regulatory fines can reach 7% of revenue. Reputational damage from AI failures (hallucinations, bias) can impact stock price and customer trust.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full px-4 py-2 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              Executive Briefing
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                AI Security
              </span>
              <br />
              <span className="text-white">Executive Summary</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Board-level overview of AI security frameworks, business risks, and regulatory landscape
            </p>
          </div>

          {/* Quick Stats for Executives */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-2xl p-6 text-center border border-red-700/30">
              <div className="text-3xl font-bold text-red-400 mb-1">$4.5M+</div>
              <div className="text-slate-400 text-sm">Avg. AI Breach Cost</div>
            </div>
            <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/20 rounded-2xl p-6 text-center border border-amber-700/30">
              <div className="text-3xl font-bold text-amber-400 mb-1">7%</div>
              <div className="text-slate-400 text-sm">EU AI Act Max Fine</div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-2xl p-6 text-center border border-blue-700/30">
              <div className="text-3xl font-bold text-blue-400 mb-1">4</div>
              <div className="text-slate-400 text-sm">Major Frameworks</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-2xl p-6 text-center border border-emerald-700/30">
              <div className="text-3xl font-bold text-emerald-400 mb-1">556+</div>
              <div className="text-slate-400 text-sm">Security Requirements</div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Comparison Matrix */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Framework Comparison Matrix
            </span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-800/50">
                  <th className="text-left p-4 text-slate-300 font-semibold border-b border-slate-700">Framework</th>
                  <th className="text-left p-4 text-slate-300 font-semibold border-b border-slate-700">Focus</th>
                  <th className="text-left p-4 text-slate-300 font-semibold border-b border-slate-700">Best For</th>
                  <th className="text-left p-4 text-slate-300 font-semibold border-b border-slate-700">Effort</th>
                  <th className="text-left p-4 text-slate-300 font-semibold border-b border-slate-700">Mandatory?</th>
                </tr>
              </thead>
              <tbody>
                {frameworkComparison.map((fw, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 border-b border-slate-700/50">
                      <span className="font-semibold text-white">{fw.framework}</span>
                    </td>
                    <td className="p-4 border-b border-slate-700/50 text-slate-300">{fw.focus}</td>
                    <td className="p-4 border-b border-slate-700/50 text-slate-400 text-sm">{fw.bestFor}</td>
                    <td className="p-4 border-b border-slate-700/50">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        fw.effort === "High" ? "bg-red-900/50 text-red-300" :
                        fw.effort === "Medium" ? "bg-amber-900/50 text-amber-300" :
                        "bg-emerald-900/50 text-emerald-300"
                      }`}>
                        {fw.effort}
                      </span>
                    </td>
                    <td className="p-4 border-b border-slate-700/50 text-slate-400 text-sm">{fw.mandatory}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Business Risk Translation */}
      <section className="py-12 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
              Business Risk Translation
            </span>
          </h2>
          <p className="text-slate-400 mb-8">How technical AI threats translate to business impact</p>
          <div className="grid gap-6">
            {businessRisks.map((risk, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700/50">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{risk.threat}</h3>
                    <p className="text-slate-400 text-sm">{risk.technicalImpact}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      risk.likelihood === "High" ? "bg-red-900/50 text-red-300 border border-red-700/50" :
                      "bg-amber-900/50 text-amber-300 border border-amber-700/50"
                    }`}>
                      {risk.likelihood} Likelihood
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50 text-slate-300 border border-slate-600/50">
                      {risk.estimatedCost}
                    </span>
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 mb-4">
                  <span className="text-sm text-slate-500">Business Impact:</span>
                  <p className="text-slate-200">{risk.businessImpact}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {risk.frameworks.map((fw, fwIdx) => (
                    <span key={fwIdx} className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded text-xs">
                      {fw}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Landscape */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Regulatory Landscape
            </span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-800/50">
                  <th className="text-left p-4 text-slate-300 font-semibold border-b border-slate-700">Regulation</th>
                  <th className="text-left p-4 text-slate-300 font-semibold border-b border-slate-700">Status</th>
                  <th className="text-left p-4 text-slate-300 font-semibold border-b border-slate-700">Applicability</th>
                  <th className="text-left p-4 text-slate-300 font-semibold border-b border-slate-700">Key Requirements</th>
                  <th className="text-left p-4 text-slate-300 font-semibold border-b border-slate-700">Penalties</th>
                </tr>
              </thead>
              <tbody>
                {regulatoryLandscape.map((reg, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 border-b border-slate-700/50">
                      <span className="font-semibold text-white">{reg.regulation}</span>
                    </td>
                    <td className="p-4 border-b border-slate-700/50">
                      <span className="px-2 py-1 bg-emerald-900/50 text-emerald-300 rounded text-xs">
                        {reg.status}
                      </span>
                    </td>
                    <td className="p-4 border-b border-slate-700/50 text-slate-400 text-sm">{reg.applicability}</td>
                    <td className="p-4 border-b border-slate-700/50 text-slate-300 text-sm">{reg.keyRequirements}</td>
                    <td className="p-4 border-b border-slate-700/50">
                      <span className={`text-sm ${reg.penalties.includes("7%") ? "text-red-400 font-semibold" : "text-slate-400"}`}>
                        {reg.penalties}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Board Talking Points */}
      <section className="py-12 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Board-Level Talking Points
            </span>
          </h2>
          <div className="grid gap-6">
            {boardTalkingPoints.map((point, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-bold text-amber-300 mb-3">Q: {point.question}</h3>
                <p className="text-slate-300 leading-relaxed">{point.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Assess Your AI Security?</h2>
          <p className="text-slate-400 mb-8">
            Use our interactive tools to evaluate your organization&apos;s AI security maturity
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/assessment"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl font-bold text-white shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Take Security Assessment
            </Link>
            <Link
              href="/framework-selector"
              className="px-8 py-4 border-2 border-slate-600 rounded-2xl font-bold text-slate-300 hover:border-amber-400 hover:text-amber-400 transition-all duration-300"
            >
              Framework Selection Guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
