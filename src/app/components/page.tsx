import Navbar from "../../components/Navbar";
import React from "react";
import Link from "next/link";
import { componentsData, subcomponentsData } from "../../data/componentsData";

const categories = [
  {
    label: "Language Models (LLMs)",
    sub: ["Large Language Models (LLMs)", "Base Models", "Fine-tuned Models", "Multimodal LLMs (MLLMs)"]
  },
  {
    label: "Orchestration (Control Flow)",
    sub: ["Workflows", "Hierarchical Planning", "Message Passing", "Role Assignment"]
  },
  {
    label: "Reasoning / Planning Paradigm",
    sub: ["Structured Planning / Execution", "ReAct (Reason + Act)"]
  },
  {
    label: "Memory Modules",
    sub: ["In-agent session memory", "Cross-agent session memory", "Vector Databases", "Knowledge Graphs"]
  },
  {
    label: "Tool Integration Frameworks",
    sub: ["Flexible Libraries / SDK Features", "Managed Platforms / Services"]
  },
  {
    label: "Operational Environment (Agencies)",
    sub: ["API Access", "Code Execution", "Limited Code Execution Capability", "Extensive Code Execution Capability"]
  },
  {
    label: "Reasoning / Planning Paradigm",
    sub: ["Structured Planning / Execution", "ReAct (Reason + Act)"]
  }
];

export default function ComponentsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      <Navbar />
      <div className="flex max-w-7xl mx-auto px-4 py-12 gap-8">
        {/* Sidebar */}
        <aside className="w-64 hidden md:block bg-slate-900/80 rounded-xl p-6 border border-slate-800 h-fit sticky top-8 self-start">
          <div className="font-bold text-lg text-teal-400 mb-4">Components</div>
          <ul className="space-y-4">
            {Object.values(componentsData).map((cat) => (
              <li key={cat.id}>
                <Link href={`/components/${cat.id}`} className="font-semibold text-slate-200 hover:text-teal-300">{cat.name}</Link>
                <ul className="ml-3 text-slate-400 text-sm list-disc">
                  {cat.subcomponents.map((s) => (
                    <li key={s.id}>
                      <Link href={`/components/${cat.id}/${s.id}`} className="hover:text-teal-300">{s.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </aside>
        {/* Main content */}
        <section className="flex-1">
          <h1 className="text-4xl font-extrabold text-teal-400 mb-6">Key Components</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(componentsData).map((card) => (
              <Link
                key={card.id}
                href={`/components/${card.id}`}
                className={`bg-slate-900/80 border-l-4 border-teal-500 rounded-xl p-6 shadow flex flex-col mb-2 transition hover:scale-[1.03] hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400`}
                tabIndex={0}
                aria-label={`View details for ${card.name}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{card.icon}</span>
                  <div className="text-xl font-bold text-white">{card.name}</div>
                </div>
                <div className="text-slate-300 text-sm mb-2">{card.desc}</div>
                <div className="text-xs text-slate-400 mb-2">
                  <span className="font-semibold text-slate-300">Security:</span> {card.security}
                </div>
                <div className="text-xs text-slate-400 mb-2">
                  <span className="font-semibold text-slate-300">Implementation:</span> {card.implementation}
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {card.references?.map((ref) => (
                    <span
                      key={ref}
                      className="bg-slate-800 text-teal-300 px-2 py-1 rounded text-xs font-semibold cursor-help"
                      title={`Reference: ${ref}`}
                    >
                      {ref}
                    </span>
                  ))}
                  {card.nist80053 && (
                    <div className="flex flex-wrap gap-1">
                      {card.nist80053.map((control) => (
                        <Link
                          key={control}
                          href={`/nist-controls/${control}`}
                          className="bg-blue-800 text-blue-200 px-2 py-1 rounded text-xs font-semibold hover:bg-blue-700 hover:text-white transition-colors duration-200 cursor-pointer"
                          title={`Click to view details for NIST 800-53 Rev 5 Control: ${control}`}
                        >
                          {control}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      {/* Framework References */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="mt-16 bg-slate-900/80 rounded-xl p-6 border border-slate-800">
          <div className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
            <span className="text-xl">🗂️</span> Framework References
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="font-semibold text-slate-300 mb-2">NIST AI Risk Management Framework</div>
              <a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener noreferrer" className="block bg-slate-800 hover:bg-slate-700 text-teal-300 px-4 py-2 rounded mb-2 font-mono transition">NIST AI RMF Official Documentation</a>
              <a href="https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf" target="_blank" rel="noopener noreferrer" className="block bg-slate-800 hover:bg-slate-700 text-teal-300 px-4 py-2 rounded font-mono transition">NIST AI RMF 1.0 (PDF)</a>
            </div>
            <div>
              <div className="font-semibold text-slate-300 mb-2">OWASP AISVS</div>
              <a href="https://owasp.org/www-project-ai-security-verification-standard/" target="_blank" rel="noopener noreferrer" className="block bg-slate-800 hover:bg-slate-700 text-teal-300 px-4 py-2 rounded mb-2 font-mono transition">Interactive AISVS Tool</a>
              <a href="https://github.com/OWASP/www-project-ai-security-verification-standard" target="_blank" rel="noopener noreferrer" className="block bg-slate-800 hover:bg-slate-700 text-teal-300 px-4 py-2 rounded font-mono transition">OWASP AISVS GitHub Repository</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 