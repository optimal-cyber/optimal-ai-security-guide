import Navbar from "../../../components/Navbar";
import { mitigationsData } from "../../../data/mitigationsData";
import { threatsData } from "../../../data/threatsData";
import { notFound } from "next/navigation";
import { use } from "react";

// Generate static params for static export
export async function generateStaticParams() {
  return mitigationsData.map((mitigation) => ({
    controlId: mitigation.id,
  }));
}

export default function ControlDetail({ params }: { params: Promise<{ controlId: string }> }) {
  const { controlId } = use(params);
  const mit = mitigationsData.find((m) => m.id === controlId);
  if (!mit) return notFound();
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-emerald-400 mb-2">{mit.name}</h1>
        <p className="text-lg text-slate-300 mb-4">{mit.desc}</p>
        <div className="mb-4">
          <span className="font-bold text-slate-200">Mapped Threats:</span>
          <ul className="list-disc ml-6 text-red-300">
            {mit.threats.map((t) => {
              const threat = threatsData.find((th) => th.id === t);
              return (
                <li key={t}>
                  <a href={`/threats/${t}`} className="underline hover:text-red-400">{threat ? threat.name : t}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mb-4">
          <span className="font-bold text-slate-200">Implementation Guidance:</span>
          <div className="text-slate-300 mt-2">{mit.guidance}</div>
        </div>
      </div>
    </main>
  );
} 