import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 text-white">
      <Navbar />
      
      {/* Hero Section with unique design */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-400 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full px-4 py-2 text-sm font-semibold">
              <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
              Optimal AI Security Guide
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Protect Your
            </span>
            <br />
            <span className="text-white">
              AI Infrastructure
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Comprehensive defense framework for autonomous AI systems. Advanced threat intelligence, 
            risk mitigation strategies, and robust security protocols for next-generation AI deployments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/nist-mapping" 
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-bold text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">Explore Defense Framework</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link 
              href="/aisvs" 
              className="px-8 py-4 border-2 border-slate-600 rounded-2xl font-bold text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
            >
              Security Protocols
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Grid with unique cards */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Defense Capabilities
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Advanced tools and methodologies for securing autonomous AI systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Link href="/nist-mapping" className="group">
            <div className="relative bg-gradient-to-br from-blue-900/50 to-blue-800/30 backdrop-blur-sm rounded-3xl p-8 border border-blue-700/50 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-blue-300 mb-2">Framework Integration</h3>
              <p className="text-slate-400 text-sm">Interactive mapping of security frameworks and their interdependencies</p>
            </div>
          </Link>

          <Link href="/threats" className="group">
            <div className="relative bg-gradient-to-br from-red-900/50 to-red-800/30 backdrop-blur-sm rounded-3xl p-8 border border-red-700/50 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-4 right-4 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-red-300 mb-2">Threat Analysis</h3>
              <p className="text-slate-400 text-sm">Comprehensive threat modeling and attack vector assessment</p>
            </div>
          </Link>

          <Link href="/aisvs" className="group">
            <div className="relative bg-gradient-to-br from-emerald-900/50 to-emerald-800/30 backdrop-blur-sm rounded-3xl p-8 border border-emerald-700/50 hover:border-emerald-500 transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-emerald-300 mb-2">Security Protocols</h3>
              <p className="text-slate-400 text-sm">Advanced security verification and compliance methodologies</p>
            </div>
          </Link>

          <Link href="/components" className="group">
            <div className="relative bg-gradient-to-br from-purple-900/50 to-purple-800/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-700/50 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-purple-300 mb-2">System Architecture</h3>
              <p className="text-slate-400 text-sm">AI system components and architectural defense patterns</p>
            </div>
          </Link>
        </div>

        {/* Status Dashboard */}
        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Framework Status
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-green-300 mb-2">NIST AI RMF</h3>
              <p className="text-slate-400 text-sm">Risk Management Framework</p>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Functions:</span>
                  <span className="text-green-400 font-mono">4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Categories:</span>
                  <span className="text-green-400 font-mono">8</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-blue-300 mb-2">NIST 800-53</h3>
              <p className="text-slate-400 text-sm">Security Controls</p>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Families:</span>
                  <span className="text-blue-400 font-mono">11</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Controls:</span>
                  <span className="text-blue-400 font-mono">12</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-purple-300 mb-2">OWASP AISVS</h3>
              <p className="text-slate-400 text-sm">Verification Standard</p>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Categories:</span>
                  <span className="text-purple-400 font-mono">13</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Requirements:</span>
                  <span className="text-purple-400 font-mono">556+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-2xl p-6 text-center border border-cyan-700/30">
            <div className="text-3xl font-bold text-cyan-400 mb-1">13</div>
            <div className="text-slate-400 text-sm">Security Categories</div>
          </div>
          <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-2xl p-6 text-center border border-red-700/30">
            <div className="text-3xl font-bold text-red-400 mb-1">15</div>
            <div className="text-slate-400 text-sm">Attack Vectors</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-2xl p-6 text-center border border-emerald-700/30">
            <div className="text-3xl font-bold text-emerald-400 mb-1">6</div>
            <div className="text-slate-400 text-sm">Core Components</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-2xl p-6 text-center border border-purple-700/30">
            <div className="text-3xl font-bold text-purple-400 mb-1">100+</div>
            <div className="text-slate-400 text-sm">Defense Controls</div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-300 mb-8">Quick Access</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/nist-mapping" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Framework Map
            </Link>
            <Link href="/threats" className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300">
              Attack Vectors
            </Link>
            <Link href="/controls" className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300">
              Defenses
            </Link>
            <Link href="/aisvs" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl font-semibold hover:from-purple-600 hover:to-indigo-700 transition-all duration-300">
              Standards
            </Link>
            <Link href="/components" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300">
              System Parts
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
