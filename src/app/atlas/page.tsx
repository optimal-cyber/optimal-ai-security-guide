import Link from 'next/link';
import { atlasTactics, getAllAtlasTechniques } from '../../data/atlasData';

export default function AtlasPage() {
  const allTechniques = getAllAtlasTechniques();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-red-900/30 border border-red-700/50 rounded-full text-red-300 text-sm font-mono mb-4">
              MITRE ATLAS Framework
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              ATLAS Matrix
            </span>
            <br />
            <span className="text-white">
              AI Attack Tactics
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Comprehensive framework for understanding and defending against AI-specific attack tactics and techniques. 
            Based on MITRE ATLAS (Adversarial Threat Landscape for Artificial-Intelligence Systems).
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl px-8 py-4 text-white font-bold">
              {atlasTactics.length} Attack Tactics
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-yellow-600 rounded-2xl px-8 py-4 text-white font-bold">
              {allTechniques.length} Techniques
            </div>
          </div>
        </div>
      </section>

      {/* ATLAS Matrix */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              ATLAS Attack Matrix
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            The ATLAS Matrix shows the progression of tactics used in attacks against AI systems, 
            with specific techniques for each tactic. Click on any tactic to explore its techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {atlasTactics.map((tactic, index) => (
            <Link 
              key={tactic.id} 
              href={`/atlas/${tactic.id}`}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-red-900/50 to-red-800/30 backdrop-blur-sm rounded-3xl p-8 border border-red-700/50 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-4 right-4 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                <div className="text-2xl font-bold text-red-300 mb-2">{index + 1}</div>
                <h3 className="text-xl font-bold text-red-200 mb-2">{tactic.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{tactic.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-red-400 text-sm font-mono">
                    {tactic.techniques.length} techniques
                  </span>
                  <div className="text-red-400 group-hover:text-red-300 transition-colors">
                    →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-2xl p-6 text-center border border-red-700/30">
            <div className="text-3xl font-bold text-red-400 mb-1">{atlasTactics.length}</div>
            <div className="text-slate-400 text-sm">Attack Tactics</div>
          </div>
          <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 rounded-2xl p-6 text-center border border-orange-700/30">
            <div className="text-3xl font-bold text-orange-400 mb-1">{allTechniques.length}</div>
            <div className="text-slate-400 text-sm">Techniques</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 rounded-2xl p-6 text-center border border-yellow-700/30">
            <div className="text-3xl font-bold text-yellow-400 mb-1">15</div>
            <div className="text-slate-400 text-sm">Attack Phases</div>
          </div>
          <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-2xl p-6 text-center border border-red-700/30">
            <div className="text-3xl font-bold text-red-400 mb-1">100%</div>
            <div className="text-slate-400 text-sm">AI-Focused</div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Key ATLAS Features
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-bold text-red-300 mb-2">AI-Specific</h4>
              <p className="text-slate-400 text-sm">Techniques specifically designed for AI/ML systems, not adapted from traditional cybersecurity</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h4 className="text-xl font-bold text-orange-300 mb-2">MITRE Compatible</h4>
              <p className="text-slate-400 text-sm">Follows the same structure as MITRE ATT&CK, making it familiar to security professionals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="text-xl font-bold text-yellow-300 mb-2">Defense Focused</h4>
              <p className="text-slate-400 text-sm">Each technique includes specific mitigations and defense strategies</p>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-300 mb-8">Explore ATLAS</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/atlas/reconnaissance" className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300">
              Reconnaissance
            </Link>
            <Link href="/atlas/initial-access" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-xl font-semibold hover:from-orange-600 hover:to-yellow-700 transition-all duration-300">
              Initial Access
            </Link>
            <Link href="/atlas/execution" className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-red-600 rounded-xl font-semibold hover:from-yellow-600 hover:to-red-700 transition-all duration-300">
              Execution
            </Link>
            <Link href="/atlas/impact" className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300">
              Impact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 