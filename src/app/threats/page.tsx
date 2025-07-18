import Navbar from "../../components/Navbar";
import { threatsData } from "../../data/threatsData";

export default function Threats() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold text-teal-400 mb-4">AI Threats</h1>
        <p className="text-lg text-slate-300 mb-8">Explore the key threats to agentic AI systems, mapped to components and mitigations.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {threatsData.map((threat) => (
            <a
              key={threat.id}
              href={`/threats/${threat.id}`}
              className="bg-slate-900/80 border-l-4 border-red-500 rounded-xl p-6 shadow flex flex-col transition hover:scale-[1.03] hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              tabIndex={0}
              aria-label={`View details for ${threat.name}`}
            >
              <div className="text-xl font-bold mb-2 text-white">{threat.name}</div>
              <div className="text-slate-300 text-sm mb-2">{threat.desc}</div>
              <div className="text-xs text-red-300 font-semibold">Impact: {threat.impact}</div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
} 