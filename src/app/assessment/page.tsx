"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

interface Question {
  id: string;
  category: string;
  question: string;
  description: string;
  options: { label: string; score: number; description: string }[];
  frameworks: string[];
}

const assessmentQuestions: Question[] = [
  // Governance & Strategy
  {
    id: "gov-1",
    category: "Governance & Strategy",
    question: "Do you have a formal AI governance framework in place?",
    description: "Organizational policies, roles, and responsibilities for AI systems",
    options: [
      { label: "None", score: 0, description: "No formal governance structure" },
      { label: "Informal", score: 1, description: "Ad-hoc policies, no dedicated roles" },
      { label: "Developing", score: 2, description: "Documented policies, assigned ownership" },
      { label: "Established", score: 3, description: "Mature governance with regular reviews" },
      { label: "Optimized", score: 4, description: "Continuous improvement, industry-leading" },
    ],
    frameworks: ["NIST AI RMF Govern", "ISO 42001"],
  },
  {
    id: "gov-2",
    category: "Governance & Strategy",
    question: "Is AI risk management integrated into enterprise risk management?",
    description: "AI-specific risks are identified, assessed, and managed alongside other business risks",
    options: [
      { label: "None", score: 0, description: "AI risks not considered" },
      { label: "Informal", score: 1, description: "Some awareness, no formal process" },
      { label: "Developing", score: 2, description: "AI risks documented separately" },
      { label: "Established", score: 3, description: "Integrated into ERM framework" },
      { label: "Optimized", score: 4, description: "Automated risk monitoring, board-level visibility" },
    ],
    frameworks: ["NIST AI RMF Map", "NIST 800-53 RA"],
  },
  // Data Security
  {
    id: "data-1",
    category: "Data Security",
    question: "How do you manage training data provenance and quality?",
    description: "Tracking data sources, ensuring quality, and preventing poisoning",
    options: [
      { label: "None", score: 0, description: "No tracking or validation" },
      { label: "Informal", score: 1, description: "Basic documentation" },
      { label: "Developing", score: 2, description: "Data inventory with quality checks" },
      { label: "Established", score: 3, description: "Automated validation pipelines" },
      { label: "Optimized", score: 4, description: "Full lineage tracking, anomaly detection" },
    ],
    frameworks: ["AISVS C1", "NIST AI RMF Map"],
  },
  {
    id: "data-2",
    category: "Data Security",
    question: "How do you protect sensitive data in AI training and inference?",
    description: "Encryption, access controls, and privacy-preserving techniques",
    options: [
      { label: "None", score: 0, description: "No specific protections" },
      { label: "Informal", score: 1, description: "Basic encryption at rest" },
      { label: "Developing", score: 2, description: "Encryption + access controls" },
      { label: "Established", score: 3, description: "Data minimization, anonymization" },
      { label: "Optimized", score: 4, description: "Differential privacy, federated learning" },
    ],
    frameworks: ["AISVS C11", "NIST 800-53 SC"],
  },
  // Input/Output Security
  {
    id: "io-1",
    category: "Input/Output Security",
    question: "How do you protect against prompt injection attacks?",
    description: "Input validation, sanitization, and prompt hardening",
    options: [
      { label: "None", score: 0, description: "No protections" },
      { label: "Informal", score: 1, description: "Basic input length limits" },
      { label: "Developing", score: 2, description: "Input validation + filtering" },
      { label: "Established", score: 3, description: "Multi-layer defense, LLM-based detection" },
      { label: "Optimized", score: 4, description: "Continuous testing, adaptive defenses" },
    ],
    frameworks: ["AISVS C2", "ATLAS AML.T0051"],
  },
  {
    id: "io-2",
    category: "Input/Output Security",
    question: "How do you validate and filter AI outputs?",
    description: "Preventing harmful, biased, or incorrect outputs",
    options: [
      { label: "None", score: 0, description: "No output validation" },
      { label: "Informal", score: 1, description: "Basic content filtering" },
      { label: "Developing", score: 2, description: "Guardrails for specific content types" },
      { label: "Established", score: 3, description: "Comprehensive output validation" },
      { label: "Optimized", score: 4, description: "Real-time monitoring, human-in-the-loop" },
    ],
    frameworks: ["AISVS C7", "NIST AI RMF Measure"],
  },
  // Model Security
  {
    id: "model-1",
    category: "Model Security",
    question: "How do you manage model lifecycle security?",
    description: "Secure development, versioning, and deployment",
    options: [
      { label: "None", score: 0, description: "No formal process" },
      { label: "Informal", score: 1, description: "Basic version control" },
      { label: "Developing", score: 2, description: "CI/CD with security gates" },
      { label: "Established", score: 3, description: "Model registry, signed artifacts" },
      { label: "Optimized", score: 4, description: "Full MLSecOps, automated scanning" },
    ],
    frameworks: ["AISVS C3", "AISVS C12"],
  },
  {
    id: "model-2",
    category: "Model Security",
    question: "How do you test for adversarial robustness?",
    description: "Testing against adversarial examples and evasion attacks",
    options: [
      { label: "None", score: 0, description: "No adversarial testing" },
      { label: "Informal", score: 1, description: "Occasional manual testing" },
      { label: "Developing", score: 2, description: "Periodic adversarial evaluation" },
      { label: "Established", score: 3, description: "Automated adversarial testing in CI" },
      { label: "Optimized", score: 4, description: "Red team exercises, continuous fuzzing" },
    ],
    frameworks: ["AISVS C10", "ATLAS TA0043"],
  },
  // Access Control
  {
    id: "access-1",
    category: "Access Control",
    question: "How do you manage access to AI models and data?",
    description: "Authentication, authorization, and least privilege",
    options: [
      { label: "None", score: 0, description: "Open access" },
      { label: "Informal", score: 1, description: "Basic authentication" },
      { label: "Developing", score: 2, description: "Role-based access control" },
      { label: "Established", score: 3, description: "Fine-grained permissions, audit logs" },
      { label: "Optimized", score: 4, description: "Zero-trust, dynamic authorization" },
    ],
    frameworks: ["AISVS C5", "NIST 800-53 AC"],
  },
  {
    id: "access-2",
    category: "Access Control",
    question: "How do you manage AI agent permissions and tool access?",
    description: "For agentic AI systems with tool-calling capabilities",
    options: [
      { label: "None", score: 0, description: "Unrestricted tool access" },
      { label: "Informal", score: 1, description: "Manual tool approval" },
      { label: "Developing", score: 2, description: "Sandboxed execution" },
      { label: "Established", score: 3, description: "Least-privilege, capability-based" },
      { label: "Optimized", score: 4, description: "Dynamic scoping, human approval for sensitive" },
    ],
    frameworks: ["AISVS C9", "ATLAS AML.T0054"],
  },
  // Monitoring & Incident Response
  {
    id: "monitor-1",
    category: "Monitoring & Response",
    question: "How do you monitor AI systems for security issues?",
    description: "Logging, alerting, and anomaly detection",
    options: [
      { label: "None", score: 0, description: "No monitoring" },
      { label: "Informal", score: 1, description: "Basic logging" },
      { label: "Developing", score: 2, description: "Centralized logging, basic alerts" },
      { label: "Established", score: 3, description: "AI-specific monitoring, anomaly detection" },
      { label: "Optimized", score: 4, description: "Real-time SIEM integration, auto-response" },
    ],
    frameworks: ["AISVS C13", "NIST 800-53 SI"],
  },
  {
    id: "monitor-2",
    category: "Monitoring & Response",
    question: "Do you have AI-specific incident response procedures?",
    description: "Playbooks for AI security incidents",
    options: [
      { label: "None", score: 0, description: "No AI-specific procedures" },
      { label: "Informal", score: 1, description: "General IR applies to AI" },
      { label: "Developing", score: 2, description: "AI-specific playbooks drafted" },
      { label: "Established", score: 3, description: "Tested playbooks, trained team" },
      { label: "Optimized", score: 4, description: "Automated response, regular drills" },
    ],
    frameworks: ["NIST 800-53 IR", "NIST AI RMF Manage"],
  },
  // Supply Chain
  {
    id: "supply-1",
    category: "Supply Chain Security",
    question: "How do you assess third-party AI models and services?",
    description: "Vendor security, model provenance, dependency management",
    options: [
      { label: "None", score: 0, description: "No assessment" },
      { label: "Informal", score: 1, description: "Basic vendor review" },
      { label: "Developing", score: 2, description: "Security questionnaires" },
      { label: "Established", score: 3, description: "Thorough due diligence, contracts" },
      { label: "Optimized", score: 4, description: "Continuous monitoring, SBOM for AI" },
    ],
    frameworks: ["AISVS C8", "NIST 800-53 SR"],
  },
];

const categories = [...new Set(assessmentQuestions.map((q) => q.category))];

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [organizationType, setOrganizationType] = useState("");
  const [aiUseCases, setAiUseCases] = useState<string[]>([]);

  const currentQuestion = assessmentQuestions[currentStep];
  const progress = ((currentStep + 1) / assessmentQuestions.length) * 100;

  const handleAnswer = (score: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: score,
    }));
  };

  const goNext = () => {
    if (currentStep < assessmentQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const goPrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const results = useMemo(() => {
    const maxScore = assessmentQuestions.length * 4;
    const totalScore = Object.values(answers).reduce((sum, s) => sum + s, 0);
    const percentage = Math.round((totalScore / maxScore) * 100);

    const categoryScores: Record<string, { score: number; max: number; questions: number }> = {};
    assessmentQuestions.forEach((q) => {
      if (!categoryScores[q.category]) {
        categoryScores[q.category] = { score: 0, max: 0, questions: 0 };
      }
      categoryScores[q.category].max += 4;
      categoryScores[q.category].questions += 1;
      categoryScores[q.category].score += answers[q.id] || 0;
    });

    let maturityLevel: string;
    let levelDescription: string;
    if (percentage < 20) {
      maturityLevel = "Initial";
      levelDescription = "AI security is ad-hoc or non-existent. Significant gaps exist.";
    } else if (percentage < 40) {
      maturityLevel = "Developing";
      levelDescription = "Basic security measures in place. Many areas need improvement.";
    } else if (percentage < 60) {
      maturityLevel = "Defined";
      levelDescription = "Documented processes exist. Consistent implementation needed.";
    } else if (percentage < 80) {
      maturityLevel = "Managed";
      levelDescription = "Well-managed AI security program. Some optimization opportunities.";
    } else {
      maturityLevel = "Optimized";
      levelDescription = "Industry-leading AI security practices. Continuous improvement culture.";
    }

    const weakAreas = Object.entries(categoryScores)
      .filter(([, data]) => (data.score / data.max) < 0.5)
      .map(([cat]) => cat);

    const strongAreas = Object.entries(categoryScores)
      .filter(([, data]) => (data.score / data.max) >= 0.75)
      .map(([cat]) => cat);

    return {
      totalScore,
      maxScore,
      percentage,
      maturityLevel,
      levelDescription,
      categoryScores,
      weakAreas,
      strongAreas,
    };
  }, [answers]);

  const exportResults = () => {
    let content = "# AI Security Maturity Assessment Results\n\n";
    content += `Generated: ${new Date().toLocaleDateString()}\n\n`;
    content += `## Overall Score: ${results.percentage}% (${results.maturityLevel})\n\n`;
    content += `${results.levelDescription}\n\n`;
    content += "## Category Breakdown\n\n";

    Object.entries(results.categoryScores).forEach(([cat, data]) => {
      const catPercent = Math.round((data.score / data.max) * 100);
      content += `### ${cat}: ${catPercent}%\n\n`;
    });

    content += "## Recommendations\n\n";
    if (results.weakAreas.length > 0) {
      content += "### Areas Needing Improvement\n";
      results.weakAreas.forEach((area) => {
        content += `- ${area}\n`;
      });
      content += "\n";
    }

    content += "## Detailed Responses\n\n";
    assessmentQuestions.forEach((q) => {
      const score = answers[q.id] || 0;
      const option = q.options.find((o) => o.score === score);
      content += `**${q.question}**\n`;
      content += `Answer: ${option?.label || "Not answered"} (${score}/4)\n\n`;
    });

    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ai-security-assessment-results.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  if (showResults) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Assessment Results</h1>
            <p className="text-slate-400">Your AI Security Maturity Score</p>
          </div>

          {/* Overall Score */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-slate-700/50 mb-8">
            <div className="text-center">
              <div className="text-7xl font-black mb-4">
                <span className={`bg-gradient-to-r ${
                  results.percentage >= 80 ? "from-emerald-400 to-green-500" :
                  results.percentage >= 60 ? "from-blue-400 to-cyan-500" :
                  results.percentage >= 40 ? "from-amber-400 to-orange-500" :
                  "from-red-400 to-pink-500"
                } bg-clip-text text-transparent`}>
                  {results.percentage}%
                </span>
              </div>
              <div className="text-2xl font-bold text-white mb-2">{results.maturityLevel}</div>
              <p className="text-slate-400">{results.levelDescription}</p>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-slate-700/50 mb-8">
            <h2 className="text-2xl font-bold mb-6">Category Breakdown</h2>
            <div className="space-y-4">
              {Object.entries(results.categoryScores).map(([cat, data]) => {
                const catPercent = Math.round((data.score / data.max) * 100);
                return (
                  <div key={cat}>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300">{cat}</span>
                      <span className={`font-bold ${
                        catPercent >= 75 ? "text-emerald-400" :
                        catPercent >= 50 ? "text-blue-400" :
                        catPercent >= 25 ? "text-amber-400" :
                        "text-red-400"
                      }`}>{catPercent}%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-3 rounded-full transition-all ${
                          catPercent >= 75 ? "bg-gradient-to-r from-emerald-500 to-green-500" :
                          catPercent >= 50 ? "bg-gradient-to-r from-blue-500 to-cyan-500" :
                          catPercent >= 25 ? "bg-gradient-to-r from-amber-500 to-orange-500" :
                          "bg-gradient-to-r from-red-500 to-pink-500"
                        }`}
                        style={{ width: `${catPercent}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recommendations */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {results.weakAreas.length > 0 && (
              <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-2xl p-6 border border-red-700/30">
                <h3 className="text-xl font-bold text-red-300 mb-4">Areas Needing Improvement</h3>
                <ul className="space-y-2">
                  {results.weakAreas.map((area) => (
                    <li key={area} className="flex items-center gap-2 text-slate-300">
                      <span className="text-red-400">●</span> {area}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {results.strongAreas.length > 0 && (
              <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-2xl p-6 border border-emerald-700/30">
                <h3 className="text-xl font-bold text-emerald-300 mb-4">Strong Areas</h3>
                <ul className="space-y-2">
                  {results.strongAreas.map((area) => (
                    <li key={area} className="flex items-center gap-2 text-slate-300">
                      <span className="text-emerald-400">●</span> {area}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={exportResults}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all"
            >
              Export Results
            </button>
            <Link
              href="/checklist"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              Generate Checklist
            </Link>
            <button
              onClick={() => {
                setShowResults(false);
                setCurrentStep(0);
                setAnswers({});
              }}
              className="px-6 py-3 border-2 border-slate-600 rounded-xl font-semibold text-slate-300 hover:border-slate-500 transition-all"
            >
              Retake Assessment
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full px-4 py-2 text-sm font-semibold mb-4">
            AI Security Maturity Assessment
          </span>
          <h1 className="text-3xl font-bold mb-2">Assess Your AI Security Posture</h1>
          <p className="text-slate-400">Answer {assessmentQuestions.length} questions to get your maturity score</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-slate-400 mb-2">
            <span>Question {currentStep + 1} of {assessmentQuestions.length}</span>
            <span>{currentQuestion.category}</span>
          </div>
          <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-slate-700/50 mb-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white mb-2">{currentQuestion.question}</h2>
            <p className="text-slate-400">{currentQuestion.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {currentQuestion.frameworks.map((fw) => (
                <span key={fw} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-300">
                  {fw}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.score}
                onClick={() => handleAnswer(option.score)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  answers[currentQuestion.id] === option.score
                    ? "bg-indigo-900/50 border-indigo-500 text-white"
                    : "bg-slate-900/50 border-slate-700 text-slate-300 hover:border-slate-600"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{option.label}</div>
                    <div className="text-sm text-slate-400">{option.description}</div>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    answers[currentQuestion.id] === option.score
                      ? "bg-indigo-500 text-white"
                      : "bg-slate-700 text-slate-400"
                  }`}>
                    {option.score}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={goPrev}
            disabled={currentStep === 0}
            className="px-6 py-3 border-2 border-slate-600 rounded-xl font-semibold text-slate-300 hover:border-slate-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={goNext}
            disabled={answers[currentQuestion.id] === undefined}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentStep === assessmentQuestions.length - 1 ? "View Results" : "Next"}
          </button>
        </div>
      </div>
    </main>
  );
}
