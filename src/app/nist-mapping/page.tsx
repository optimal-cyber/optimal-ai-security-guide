import Navbar from "../../components/Navbar";
import NistAisvsGraph from "./NistAisvsGraph";

export default function NistMapping() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold text-emerald-400 mb-4">AI Security Framework Mapping</h1>
        <p className="text-lg text-slate-300 mb-8">Explore the comprehensive mapping between NIST AI RMF, NIST 800-53, OWASP AISVS, and MITRE ATLAS for complete AI governance, security controls, verification standards, and threat modeling.</p>
        <div className="mt-8 flex justify-center">
          <NistAisvsGraph />
        </div>
        
        {/* Framework Information Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 backdrop-blur-sm rounded-xl p-6 border border-blue-700/50">
            <h3 className="text-lg font-bold text-blue-300 mb-2">NIST AI RMF</h3>
            <p className="text-sm text-slate-300 mb-3">Framework for managing AI risks through governance, mapping, measurement, and management functions.</p>
            <div className="text-xs text-blue-400">Risk Management</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-700/50">
            <h3 className="text-lg font-bold text-purple-300 mb-2">NIST 800-53</h3>
            <p className="text-sm text-slate-300 mb-3">Security and privacy controls for federal information systems and organizations.</p>
            <div className="text-xs text-purple-400">Security Controls</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 backdrop-blur-sm rounded-xl p-6 border border-green-700/50">
            <h3 className="text-lg font-bold text-green-300 mb-2">OWASP AISVS</h3>
            <p className="text-sm text-slate-300 mb-3">Comprehensive framework for verifying AI system security across 13 categories.</p>
            <div className="text-xs text-green-400">Verification Standards</div>
          </div>
          
          <div className="bg-gradient-to-br from-red-900/50 to-red-800/30 backdrop-blur-sm rounded-xl p-6 border border-red-700/50">
            <h3 className="text-lg font-bold text-red-300 mb-2">MITRE ATLAS</h3>
            <p className="text-sm text-slate-300 mb-3">Adversarial Threat Landscape for Artificial-Intelligence Systems attack framework.</p>
            <div className="text-xs text-red-400">Threat Modeling</div>
          </div>
        </div>
      </div>
    </main>
  );
} 