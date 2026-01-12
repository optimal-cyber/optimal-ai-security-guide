"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

interface FrameworkRecommendation {
  id: string;
  name: string;
  relevance: "Critical" | "Recommended" | "Optional";
  reason: string;
  startWith: string[];
}

export default function FrameworkSelectorPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "industry",
      question: "What industry does your organization operate in?",
      description: "Different industries have specific regulatory requirements",
      type: "single",
      options: [
        { value: "financial", label: "Financial Services", icon: "🏦" },
        { value: "healthcare", label: "Healthcare & Life Sciences", icon: "🏥" },
        { value: "government", label: "Government & Public Sector", icon: "🏛️" },
        { value: "technology", label: "Technology & Software", icon: "💻" },
        { value: "retail", label: "Retail & E-commerce", icon: "🛒" },
        { value: "manufacturing", label: "Manufacturing & Industrial", icon: "🏭" },
        { value: "other", label: "Other", icon: "📋" },
      ],
    },
    {
      id: "region",
      question: "Where does your organization operate?",
      description: "Geographic location affects applicable regulations",
      type: "multiple",
      options: [
        { value: "us", label: "United States", icon: "🇺🇸" },
        { value: "eu", label: "European Union", icon: "🇪🇺" },
        { value: "uk", label: "United Kingdom", icon: "🇬🇧" },
        { value: "apac", label: "Asia-Pacific", icon: "🌏" },
        { value: "global", label: "Global Operations", icon: "🌍" },
      ],
    },
    {
      id: "aiType",
      question: "What types of AI systems are you deploying?",
      description: "Different AI types have different security considerations",
      type: "multiple",
      options: [
        { value: "llm", label: "Large Language Models (ChatGPT, Claude, etc.)", icon: "💬" },
        { value: "rag", label: "RAG Systems (Knowledge retrieval)", icon: "📚" },
        { value: "agents", label: "AI Agents (Autonomous, tool-using)", icon: "🤖" },
        { value: "vision", label: "Computer Vision / Image AI", icon: "👁️" },
        { value: "prediction", label: "Predictive Models / ML", icon: "📈" },
        { value: "custom", label: "Custom/Fine-tuned Models", icon: "🔧" },
      ],
    },
    {
      id: "useCase",
      question: "What are your primary AI use cases?",
      description: "Use case determines risk level and applicable controls",
      type: "multiple",
      options: [
        { value: "customer", label: "Customer-facing chatbots/assistants", icon: "👥" },
        { value: "internal", label: "Internal productivity tools", icon: "⚙️" },
        { value: "decision", label: "Automated decision-making", icon: "⚖️" },
        { value: "content", label: "Content generation", icon: "✍️" },
        { value: "code", label: "Code generation/assistance", icon: "👨‍💻" },
        { value: "data", label: "Data analysis/insights", icon: "📊" },
      ],
    },
    {
      id: "dataType",
      question: "What types of data do your AI systems process?",
      description: "Data sensitivity affects security and privacy requirements",
      type: "multiple",
      options: [
        { value: "pii", label: "Personal Identifiable Information (PII)", icon: "🔐" },
        { value: "phi", label: "Protected Health Information (PHI)", icon: "🏥" },
        { value: "financial", label: "Financial/Payment Data", icon: "💳" },
        { value: "proprietary", label: "Proprietary/Trade Secrets", icon: "🔒" },
        { value: "public", label: "Public Information Only", icon: "🌐" },
      ],
    },
    {
      id: "riskTolerance",
      question: "What is your organization's AI risk tolerance?",
      description: "This affects the depth of controls you should implement",
      type: "single",
      options: [
        { value: "low", label: "Low - We need maximum security", icon: "🛡️" },
        { value: "medium", label: "Medium - Balanced approach", icon: "⚖️" },
        { value: "high", label: "High - We can accept some risk for speed", icon: "🚀" },
      ],
    },
    {
      id: "maturity",
      question: "What is your current AI security maturity?",
      description: "This helps us recommend where to start",
      type: "single",
      options: [
        { value: "none", label: "Just starting - No formal AI security", icon: "🌱" },
        { value: "basic", label: "Basic - Some controls in place", icon: "📗" },
        { value: "intermediate", label: "Intermediate - Documented processes", icon: "📘" },
        { value: "advanced", label: "Advanced - Mature AI security program", icon: "📕" },
      ],
    },
  ];

  const currentQuestion = questions[step];

  const handleSelect = (value: string) => {
    if (currentQuestion.type === "multiple") {
      const current = (answers[currentQuestion.id] as string[]) || [];
      if (current.includes(value)) {
        setAnswers({
          ...answers,
          [currentQuestion.id]: current.filter((v) => v !== value),
        });
      } else {
        setAnswers({
          ...answers,
          [currentQuestion.id]: [...current, value],
        });
      }
    } else {
      setAnswers({
        ...answers,
        [currentQuestion.id]: value,
      });
    }
  };

  const isSelected = (value: string) => {
    const answer = answers[currentQuestion.id];
    if (Array.isArray(answer)) {
      return answer.includes(value);
    }
    return answer === value;
  };

  const canProceed = () => {
    const answer = answers[currentQuestion.id];
    if (Array.isArray(answer)) {
      return answer.length > 0;
    }
    return !!answer;
  };

  const goNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const recommendations = useMemo(() => {
    const results: FrameworkRecommendation[] = [];
    const region = answers.region as string[] || [];
    const industry = answers.industry as string;
    const aiType = answers.aiType as string[] || [];
    const useCase = answers.useCase as string[] || [];
    const dataType = answers.dataType as string[] || [];
    const riskTolerance = answers.riskTolerance as string;
    const maturity = answers.maturity as string;

    // NIST AI RMF
    let nistRelevance: "Critical" | "Recommended" | "Optional" = "Recommended";
    let nistReason = "Provides comprehensive AI risk management guidance.";
    if (region.includes("us") || industry === "government") {
      nistRelevance = "Critical";
      nistReason = "Essential for US organizations and federal contractors.";
    }
    results.push({
      id: "nist-ai-rmf",
      name: "NIST AI RMF",
      relevance: nistRelevance,
      reason: nistReason,
      startWith: ["Govern 1.1", "Map 1.1", "Measure 2.1"],
    });

    // OWASP AISVS
    let aisvsRelevance: "Critical" | "Recommended" | "Optional" = "Recommended";
    let aisvsReason = "Comprehensive verification standard for AI security.";
    let aisvsLevel = "Level 1";
    if (aiType.includes("llm") || aiType.includes("agents")) {
      aisvsRelevance = "Critical";
      aisvsReason = "Essential for LLM and agentic AI systems security verification.";
    }
    if (riskTolerance === "low") {
      aisvsLevel = "Level 3";
    } else if (riskTolerance === "medium") {
      aisvsLevel = "Level 2";
    }
    results.push({
      id: "owasp-aisvs",
      name: `OWASP AISVS (${aisvsLevel})`,
      relevance: aisvsRelevance,
      reason: aisvsReason,
      startWith: ["C2: Input Validation", "C7: Secure Output", "C5: Access Control"],
    });

    // NIST 800-53
    let nist800Relevance: "Critical" | "Recommended" | "Optional" = "Optional";
    let nist800Reason = "Comprehensive security controls catalog.";
    if (industry === "government" || region.includes("us")) {
      nist800Relevance = "Critical";
      nist800Reason = "Required for US federal systems and contractors.";
    } else if (dataType.includes("pii") || dataType.includes("phi") || dataType.includes("financial")) {
      nist800Relevance = "Recommended";
      nist800Reason = "Recommended for systems processing sensitive data.";
    }
    results.push({
      id: "nist-800-53",
      name: "NIST 800-53",
      relevance: nist800Relevance,
      reason: nist800Reason,
      startWith: ["AC: Access Control", "SC: System & Communications", "SI: System & Information Integrity"],
    });

    // MITRE ATLAS
    let atlasRelevance: "Critical" | "Recommended" | "Optional" = "Recommended";
    let atlasReason = "Essential threat intelligence for AI systems.";
    if (aiType.includes("agents") || useCase.includes("decision")) {
      atlasRelevance = "Critical";
      atlasReason = "Critical for understanding adversarial threats to AI systems.";
    }
    results.push({
      id: "mitre-atlas",
      name: "MITRE ATLAS",
      relevance: atlasRelevance,
      reason: atlasReason,
      startWith: ["Reconnaissance tactics", "Initial Access techniques", "Impact assessment"],
    });

    // EU AI Act
    if (region.includes("eu") || region.includes("global")) {
      let euRelevance: "Critical" | "Recommended" | "Optional" = "Critical";
      let euReason = "Legally required for AI systems in EU market.";
      if (useCase.includes("decision")) {
        euReason = "Critical - Automated decision-making is high-risk under EU AI Act.";
      }
      results.push({
        id: "eu-ai-act",
        name: "EU AI Act",
        relevance: euRelevance,
        reason: euReason,
        startWith: ["Risk classification", "Conformity assessment", "Documentation requirements"],
      });
    }

    // ISO 42001
    let isoRelevance: "Critical" | "Recommended" | "Optional" = "Optional";
    let isoReason = "AI management system certification.";
    if (maturity === "advanced" || industry === "financial" || industry === "healthcare") {
      isoRelevance = "Recommended";
      isoReason = "Recommended for mature organizations seeking certification.";
    }
    results.push({
      id: "iso-42001",
      name: "ISO/IEC 42001",
      relevance: isoRelevance,
      reason: isoReason,
      startWith: ["AI policy development", "Risk assessment process", "Management review"],
    });

    // Sort by relevance
    const order = { Critical: 0, Recommended: 1, Optional: 2 };
    return results.sort((a, b) => order[a.relevance] - order[b.relevance]);
  }, [answers]);

  if (showResults) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Your Framework Recommendations</h1>
            <p className="text-slate-400">Based on your organization&apos;s profile</p>
          </div>

          <div className="space-y-6 mb-12">
            {recommendations.map((rec) => (
              <div
                key={rec.id}
                className={`bg-gradient-to-br rounded-2xl p-6 border ${
                  rec.relevance === "Critical"
                    ? "from-red-900/30 to-red-800/20 border-red-700/50"
                    : rec.relevance === "Recommended"
                    ? "from-amber-900/30 to-amber-800/20 border-amber-700/50"
                    : "from-slate-800/50 to-slate-900/50 border-slate-700/50"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{rec.name}</h3>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                        rec.relevance === "Critical"
                          ? "bg-red-900/50 text-red-300"
                          : rec.relevance === "Recommended"
                          ? "bg-amber-900/50 text-amber-300"
                          : "bg-slate-700/50 text-slate-300"
                      }`}
                    >
                      {rec.relevance}
                    </span>
                  </div>
                </div>
                <p className="text-slate-300 mb-4">{rec.reason}</p>
                <div className="bg-slate-900/50 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Start With:</h4>
                  <div className="flex flex-wrap gap-2">
                    {rec.startWith.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Implementation Roadmap */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50 mb-8">
            <h2 className="text-2xl font-bold mb-6">Suggested Implementation Roadmap</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-white">Governance Foundation</h4>
                  <p className="text-slate-400 text-sm">
                    Establish AI governance policies using NIST AI RMF Govern function
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-white">Risk Assessment</h4>
                  <p className="text-slate-400 text-sm">
                    Map AI risks using ATLAS threat intelligence and NIST AI RMF Map function
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-white">Control Implementation</h4>
                  <p className="text-slate-400 text-sm">
                    Implement AISVS requirements starting with Level 1, add NIST 800-53 controls
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-white">Continuous Monitoring</h4>
                  <p className="text-slate-400 text-sm">
                    Establish monitoring and measurement using NIST AI RMF Measure and Manage
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/assessment"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              Take Maturity Assessment
            </Link>
            <Link
              href="/checklist"
              className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all"
            >
              Generate Checklist
            </Link>
            <button
              onClick={() => {
                setShowResults(false);
                setStep(0);
                setAnswers({});
              }}
              className="px-6 py-3 border-2 border-slate-600 rounded-xl font-semibold text-slate-300 hover:border-slate-500 transition-all"
            >
              Start Over
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-4 py-2 text-sm font-semibold mb-4">
            Framework Selection Guide
          </span>
          <h1 className="text-3xl font-bold mb-2">Which Frameworks Apply to You?</h1>
          <p className="text-slate-400">
            Answer a few questions to get personalized framework recommendations
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-slate-400 mb-2">
            <span>
              Question {step + 1} of {questions.length}
            </span>
            <span>{Math.round(((step + 1) / questions.length) * 100)}% complete</span>
          </div>
          <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
              style={{ width: `${((step + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-slate-700/50 mb-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white mb-2">{currentQuestion.question}</h2>
            <p className="text-slate-400">{currentQuestion.description}</p>
            {currentQuestion.type === "multiple" && (
              <p className="text-purple-400 text-sm mt-2">Select all that apply</p>
            )}
          </div>

          <div className="grid gap-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                  isSelected(option.value)
                    ? "bg-purple-900/50 border-purple-500 text-white"
                    : "bg-slate-900/50 border-slate-700 text-slate-300 hover:border-slate-600"
                }`}
              >
                <span className="text-2xl">{option.icon}</span>
                <span className="font-medium">{option.label}</span>
                {isSelected(option.value) && (
                  <span className="ml-auto text-purple-400">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={() => setStep(step - 1)}
            disabled={step === 0}
            className="px-6 py-3 border-2 border-slate-600 rounded-xl font-semibold text-slate-300 hover:border-slate-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={goNext}
            disabled={!canProceed()}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {step === questions.length - 1 ? "Get Recommendations" : "Next"}
          </button>
        </div>
      </div>
    </main>
  );
}
