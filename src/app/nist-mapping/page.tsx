import Navbar from "../../components/Navbar";
import NistAisvsGraph from "./NistAisvsGraph";

export default function NistMapping() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold text-emerald-400 mb-4">NIST AI RMF to AISVS Mapping</h1>
        <p className="text-lg text-slate-300 mb-8">Explore the mapping between NIST AI Risk Management Framework and OWASP AISVS for comprehensive AI governance and security.</p>
        <div className="mt-8 flex justify-center">
          <NistAisvsGraph />
        </div>
      </div>
    </main>
  );
} 