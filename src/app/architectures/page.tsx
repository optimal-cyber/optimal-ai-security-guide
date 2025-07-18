import Navbar from "../../components/Navbar";
import { architecturesData } from "../../data/architecturesData";

export default function Architectures() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold text-indigo-400 mb-4">AI Architectures</h1>
        <p className="text-lg text-slate-300 mb-8">Interactive diagrams and explanations of agentic AI architecture patterns and data flows.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {architecturesData.map((arch) => (
            <a
              key={arch.id}
              href={`/architectures/${arch.id}`}
              className="bg-slate-900/80 border-l-4 border-indigo-500 rounded-xl p-6 shadow flex flex-col transition hover:scale-[1.03] hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              tabIndex={0}
              aria-label={`View details for ${arch.name}`}
            >
              <div className="text-xl font-bold mb-2 text-white">{arch.name}</div>
              <div className="text-slate-300 text-sm mb-2">{arch.desc}</div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
} 