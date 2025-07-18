import Navbar from "../../../components/Navbar";
import { architecturesData } from "../../../data/architecturesData";
import { componentsData } from "../../../data/componentsData";
import { threatsData } from "../../../data/threatsData";
import { notFound } from "next/navigation";
import MermaidDiagram from "../../../components/MermaidDiagram";
import { use } from "react";

// Generate static params for static export
export async function generateStaticParams() {
  return architecturesData.map((arch) => ({
    archId: arch.id,
  }));
}

export default function ArchitectureDetail({ params }: { params: Promise<{ archId: string }> }) {
  const { archId } = use(params);
  const arch = architecturesData.find((a) => a.id === archId);
  if (!arch) return notFound();
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-indigo-400 mb-2">{arch.name}</h1>
        <p className="text-lg text-slate-300 mb-4">{arch.desc}</p>
        <div className="mb-4">
          <span className="font-bold text-slate-200">Key Components:</span>
          <ul className="list-disc ml-6 text-teal-300">
            {arch.components.map((c) => {
              const comp = componentsData[c as keyof typeof componentsData];
              return (
                <li key={c}>
                  <a href={`/components/${c}`} className="underline hover:text-teal-400">{comp ? comp.name : c}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mb-4">
          <span className="font-bold text-slate-200">Relevant Threats:</span>
          <ul className="list-disc ml-6 text-red-300">
            {arch.threats.map((t) => {
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
          <span className="font-bold text-slate-200">Visual Diagram:</span>
          <div className="mt-2 bg-slate-800 rounded p-4 flex justify-center items-center min-h-[220px]">
            {arch.mermaid ? (
              <MermaidDiagram chart={arch.mermaid} className="w-full max-w-2xl" />
            ) : (
              <em className="text-slate-400">Diagram placeholder: <code>{arch.diagram}</code></em>
            )}
          </div>
        </div>
      </div>
    </main>
  );
} 