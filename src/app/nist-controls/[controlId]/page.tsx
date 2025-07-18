import { notFound } from "next/navigation";
import { use } from "react";
import Navbar from "../../../components/Navbar";
import { getControlById, getAllControls } from "../../../data/nist80053Controls";

export async function generateStaticParams() {
  const controls = getAllControls();
  return controls.map((control) => ({
    controlId: control.id,
  }));
}

export default function NISTControlDetail({ 
  params 
}: { 
  params: Promise<{ controlId: string }>;
}) {
  const { controlId } = use(params);
  const control = getControlById(controlId);
  
  if (!control) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-900 text-blue-200 px-4 py-2 rounded-lg font-mono text-lg font-bold">
              {control.id}
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-blue-400 mb-1">{control.name}</h1>
              <p className="text-slate-400">{control.family}</p>
            </div>
          </div>
          <p className="text-lg text-slate-300 mb-4">{control.description}</p>
          <div className="flex items-center gap-4">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
              control.priority === 'High' ? 'bg-red-900 text-red-300' : 
              control.priority === 'Medium' ? 'bg-yellow-900 text-yellow-300' : 
              'bg-green-900 text-green-300'
            }`}>
              {control.priority} Priority
            </span>
            <span className="text-slate-400 text-sm">AI-Relevant Control</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Purpose */}
            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
              <h2 className="text-xl font-bold text-blue-400 mb-3">Purpose</h2>
              <p className="text-slate-300">{control.purpose}</p>
            </div>

            {/* AI Relevance */}
            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
              <h2 className="text-xl font-bold text-emerald-400 mb-3">AI Relevance</h2>
              <p className="text-slate-300">{control.aiRelevance}</p>
            </div>

            {/* Implementation */}
            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
              <h2 className="text-xl font-bold text-teal-400 mb-3">Implementation Guidance</h2>
              <p className="text-slate-300">{control.implementation}</p>
            </div>

            {/* Assessment */}
            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
              <h2 className="text-xl font-bold text-purple-400 mb-3">Assessment</h2>
              <p className="text-slate-300">{control.assessment}</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Requirements */}
            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
              <h2 className="text-xl font-bold text-orange-400 mb-3">Requirements</h2>
              <ul className="space-y-2">
                {control.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="bg-orange-900 text-orange-300 px-2 py-1 rounded text-xs font-bold mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-slate-300 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Controls */}
            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
              <h2 className="text-xl font-bold text-indigo-400 mb-3">Related Controls</h2>
              <div className="flex flex-wrap gap-2">
                {control.relatedControls.map((relatedId) => {
                  const relatedControl = getControlById(relatedId);
                  return (
                    <a
                      key={relatedId}
                      href={`/nist-controls/${relatedId}`}
                      className="bg-indigo-900 text-indigo-300 px-3 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 hover:text-white transition-colors duration-200"
                    >
                      {relatedId}: {relatedControl?.name || relatedId}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* References */}
            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
              <h2 className="text-xl font-bold text-cyan-400 mb-3">References</h2>
              <div className="space-y-2">
                {control.references.map((ref, index) => (
                  <a
                    key={index}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-cyan-400 hover:text-cyan-300 underline text-sm"
                  >
                    {ref.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Framework Context */}
        <div className="mt-12 bg-slate-900/80 rounded-xl p-6 border border-slate-800">
          <h2 className="text-xl font-bold text-slate-200 mb-4">Framework Context</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-300 mb-2">NIST 800-53 Rev 5</h3>
              <p className="text-slate-400 text-sm mb-2">Security and Privacy Controls for Federal Information Systems</p>
              <a
                href="https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                Official Documentation →
              </a>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h3 className="font-semibold text-emerald-300 mb-2">NIST AI RMF</h3>
              <p className="text-slate-400 text-sm mb-2">AI Risk Management Framework</p>
              <a
                href="https://www.nist.gov/itl/ai-risk-management-framework"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 underline text-sm"
              >
                AI RMF Documentation →
              </a>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h3 className="font-semibold text-teal-300 mb-2">OWASP AISVS</h3>
              <p className="text-slate-400 text-sm mb-2">AI Security Verification Standard</p>
              <a
                href="https://owasp.org/www-project-ai-security-verification-standard/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 underline text-sm"
              >
                AISVS Documentation →
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 