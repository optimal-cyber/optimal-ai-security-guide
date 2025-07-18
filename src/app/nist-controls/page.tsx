import Navbar from "../../components/Navbar";
import { getAllControls, nist80053Families } from "../../data/nist80053Controls";

export default function NISTControlsPage() {
  const controls = getAllControls();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-blue-400 mb-4">NIST 800-53 Rev 5 Controls</h1>
          <p className="text-lg text-slate-300 mb-6">
            Comprehensive security and privacy controls for federal information systems, with specific relevance to AI systems.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-blue-900/50 text-blue-200 px-4 py-2 rounded-lg">
              <span className="font-bold">{controls.length}</span> Controls
            </div>
            <div className="bg-emerald-900/50 text-emerald-200 px-4 py-2 rounded-lg">
              <span className="font-bold">{Object.keys(nist80053Families).length}</span> Control Families
            </div>
            <div className="bg-purple-900/50 text-purple-200 px-4 py-2 rounded-lg">
              <span className="font-bold">{controls.filter(c => c.priority === 'High').length}</span> High Priority
            </div>
          </div>
        </div>

        {/* Control Families Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-200 mb-6">Control Families</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(nist80053Families).map(([familyId, familyName]) => {
              const familyControls = controls.filter(c => c.family === familyName);
              const highPriorityCount = familyControls.filter(c => c.priority === 'High').length;
              return (
                <div key={familyId} className="bg-slate-900/80 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-blue-300">{familyId}</h3>
                    <span className="bg-blue-900 text-blue-200 px-2 py-1 rounded text-xs font-bold">
                      {familyControls.length}
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm mb-3">{familyName}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">High Priority:</span>
                    <span className="text-red-300 font-semibold">{highPriorityCount}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls List */}
        <div>
          <h2 className="text-2xl font-bold text-slate-200 mb-6">All Controls</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {controls.map((control) => (
              <div key={control.id} className="bg-slate-900/80 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-900 text-blue-200 px-3 py-1 rounded-lg font-mono font-bold">
                      {control.id}
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      control.priority === 'High' ? 'bg-red-900 text-red-300' : 
                      control.priority === 'Medium' ? 'bg-yellow-900 text-yellow-300' : 
                      'bg-green-900 text-green-300'
                    }`}>
                      {control.priority}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-blue-400 mb-2">{control.name}</h3>
                <p className="text-slate-400 text-sm mb-3">{control.family}</p>
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">{control.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-emerald-300 text-sm mb-2">AI Relevance</h4>
                  <p className="text-slate-400 text-sm line-clamp-2">{control.aiRelevance}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {control.relatedControls.slice(0, 3).map((relatedId) => (
                      <span key={relatedId} className="bg-slate-800 text-slate-300 px-2 py-1 rounded text-xs">
                        {relatedId}
                      </span>
                    ))}
                    {control.relatedControls.length > 3 && (
                      <span className="bg-slate-800 text-slate-400 px-2 py-1 rounded text-xs">
                        +{control.relatedControls.length - 3}
                      </span>
                    )}
                  </div>
                  <a
                    href={`/nist-controls/${control.id}`}
                    className="bg-blue-800 text-blue-200 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 hover:text-white transition-colors duration-200"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Framework Context */}
        <div className="mt-16 bg-slate-900/80 rounded-xl p-6 border border-slate-800">
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