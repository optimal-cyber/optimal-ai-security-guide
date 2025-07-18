import Navbar from "../../../components/Navbar";
import React, { useState } from "react";
import { notFound } from "next/navigation";
import { threatsData } from "../../../data/threatsData";
import { mitigationsData } from "../../../data/mitigationsData";
import { componentsData } from "../../../data/componentsData";
import { use } from "react";

// Generate static params for static export
export async function generateStaticParams() {
  return threatsData.map((threat) => ({
    threatId: threat.id,
  }));
}

export default function ThreatDetail({ 
  params 
}: { 
  params: Promise<{ threatId: string }>;
}) {
  const { threatId } = use(params);
  const threat = threatsData.find((t) => t.id === threatId);
  if (!threat) return notFound();
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-red-400 mb-2">{threat.name}</h1>
        <div className="flex flex-wrap gap-2 mb-2">
          {threat.tags?.map((tag) => (
            <span key={tag} className="bg-slate-800 text-emerald-300 px-2 py-1 rounded text-xs font-semibold">{tag}</span>
          ))}
        </div>
        <p className="text-lg text-slate-300 mb-6">{threat.desc}</p>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Technical Details Card */}
          <div className="bg-slate-900 rounded-xl p-6 shadow border border-slate-700">
            <div className="font-bold text-slate-200 mb-2">Technical Details</div>
            <div className="mb-2">
              <span className="font-semibold text-slate-400">Affected Components:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {threat.affected.map((c) => {
                  const comp = componentsData[c as keyof typeof componentsData];
                  return (
                    <a key={c} href={`/components/${c}`} className="bg-teal-900 text-teal-300 px-3 py-1 rounded-full text-xs font-semibold hover:bg-teal-700 transition">{comp ? comp.name : c}</a>
                  );
                })}
              </div>
            </div>
            <div>
              <span className="font-semibold text-slate-400">Impact Level:</span>
              <span className={`ml-2 px-2 py-1 rounded text-xs font-bold ${threat.impact === 'High' ? 'bg-red-900 text-red-300' : threat.impact === 'Medium' ? 'bg-yellow-900 text-yellow-300' : 'bg-green-900 text-green-300'}`}>{threat.impact}</span>
            </div>
          </div>
          {/* Attack Vectors Card */}
          <div className="bg-slate-900 rounded-xl p-6 shadow border border-yellow-700">
            <div className="font-bold text-yellow-400 mb-2">Attack Vectors</div>
            <ul className="space-y-2">
              {threat.attackVectors.map((v: { name: string; severity: string; desc: string }) => (
                <li key={v.name} className="">
                  <span className={`font-bold ${v.severity === 'High' ? 'text-red-400' : v.severity === 'Medium' ? 'text-yellow-400' : 'text-green-400'}`}>{v.name}</span>: {v.desc} <span className="text-xs text-slate-400">[{v.severity}]</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Impact Analysis Card */}
          <div className="bg-slate-900 rounded-xl p-6 shadow border border-red-700">
            <div className="font-bold text-red-400 mb-2">Impact Analysis</div>
            <div className="mt-2"><span className="font-semibold text-slate-400">Risk Score:</span> <span className="text-red-300 font-bold">{threat.risk}/10</span></div>
          </div>
          {/* Mitigation Categories Card */}
          <div className="bg-slate-900 rounded-xl p-6 shadow border border-emerald-700">
            <div className="font-bold text-emerald-400 mb-2">Mitigation Categories</div>
            <ul className="flex flex-wrap gap-2 mb-2">
              {threat.mitigations.map((m) => (
                <li key={m}>
                  <a href={`/controls/${m}`} className="bg-emerald-900 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold hover:bg-emerald-700 transition">{m}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* References Card */}
          <div className="bg-slate-900 rounded-xl p-6 shadow border border-blue-700 md:col-span-2">
            <div className="font-bold text-blue-400 mb-2">References</div>
            <ul className="flex flex-wrap gap-4">
              {threat.references?.map((ref) => (
                <li key={ref.url}>
                  <a href={ref.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400">{ref.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
} 