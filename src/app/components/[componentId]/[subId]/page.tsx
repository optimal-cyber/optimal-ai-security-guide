import Navbar from "../../../../components/Navbar";
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { subcomponentsData, componentsData } from "../../../../data/componentsData";
import { mitigationsData } from "../../../../data/mitigationsData";
import { threatsData } from "../../../../data/threatsData";
import { architecturesData } from "../../../../data/architecturesData";
import { use } from "react";
import TabContent from "../../../../components/TabContent";

const tabList = ["Overview", "Threats", "Mitigations", "Architectures"];

// Generate static params for static export
export async function generateStaticParams() {
  const params = [];
  for (const [componentId, component] of Object.entries(componentsData)) {
    for (const subcomponent of component.subcomponents) {
      params.push({
        componentId,
        subId: subcomponent.id,
      });
    }
  }
  return params;
}

export default function SubcomponentDetail({ 
  params 
}: { 
  params: Promise<{ componentId: string; subId: string }>;
}) {
  const { componentId, subId } = use(params);
  const sub = subcomponentsData[subId as keyof typeof subcomponentsData];
  if (!sub) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      <Navbar />
      <div className="flex max-w-7xl mx-auto px-4 py-12 gap-8">
        {/* Sidebar */}
        <aside className="w-64 hidden md:block bg-slate-900/80 rounded-xl p-6 border border-slate-800 h-fit sticky top-8 self-start">
          <div className="font-bold text-lg text-teal-400 mb-4">Components</div>
          <ul className="space-y-4">
            {Object.values(componentsData).map((cat) => (
              <li key={cat.id}>
                <Link href={`/components/${cat.id}`} className={`font-semibold ${cat.id === sub.parentId ? "text-teal-300" : "text-slate-200"}`}>{cat.name}</Link>
                <ul className="ml-3 text-slate-400 text-sm list-disc">
                  {cat.subcomponents.map((s) => (
                    <li key={s.id}>
                      <Link href={`/components/${cat.id}/${s.id}`} className={s.id === sub.id ? "text-teal-300" : "hover:text-teal-300"}>{s.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </aside>
        {/* Main content */}
        <section className="flex-1">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-4xl">🔧</span>
            <div>
              <h1 className="text-3xl font-extrabold text-teal-400 mb-1">{sub.name}</h1>
              <div className="text-slate-400 text-sm mb-2">Part of: <Link href={`/components/${sub.parentId}`} className="text-teal-300 underline hover:text-teal-200">{sub.parent}</Link></div>
              <div className="flex flex-wrap gap-2 mt-1">
                {sub.references?.map((ref) => (
                  <span
                    key={ref}
                    className="bg-slate-800 text-teal-300 px-2 py-1 rounded text-xs font-semibold cursor-help"
                    title={`Reference: ${ref}`}
                  >
                    {ref}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-lg text-slate-300 mb-4">{sub.desc}</p>
          
          {/* Tab Content */}
          <TabContent tabs={tabList}>
            <div data-tab="Overview">
              <div className="mb-8">
                <div className="font-bold text-slate-200 mb-2">Detailed Information</div>
                <div className="text-slate-300 mb-4 bg-slate-800/50 rounded-lg p-4 border-l-4 border-blue-500">{sub.details}</div>
                <div className="font-bold text-slate-200 mb-2">Parent Component</div>
                <Link href={`/components/${sub.parentId}`} className="bg-slate-700 text-teal-300 px-3 py-2 rounded-lg text-sm font-semibold hover:bg-teal-900 hover:text-white transition-colors duration-200 flex items-center gap-2 inline-flex">
                  <span className="text-lg">{componentsData[sub.parentId as keyof typeof componentsData]?.icon || "🔗"}</span>
                  {sub.parent}
                </Link>
              </div>
              <div className="mb-8">
                <div className="font-bold text-slate-200 mb-2">Security Implications</div>
                <div className="text-slate-300 mb-4 bg-slate-800/50 rounded-lg p-4 border-l-4 border-red-500">{sub.details}</div>
                <div className="font-bold text-slate-200 mb-2">Implementation Considerations</div>
                <div className="text-slate-300 mb-4 bg-slate-800/50 rounded-lg p-4 border-l-4 border-emerald-500">Apply appropriate security controls and monitoring based on the parent component's implementation guidance. Reference: {sub.references?.join(", ")}</div>
              </div>
            </div>

            <div data-tab="Threats">
              <div className="mb-8">
                <div className="font-bold text-slate-200 mb-2">Threats</div>
                <ul className="space-y-2">
                  {sub.threats?.map((t) => {
                    const threat = threatsData.find((th) => th.id === t);
                    return (
                      <li key={t} className="bg-red-900/40 text-red-200 rounded p-3">
                        <Link href={`/threats/${t}`} className="underline hover:text-white">{threat ? threat.name : t}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div data-tab="Mitigations">
              <div className="mb-8">
                <div className="font-bold text-slate-200 mb-2">Mitigations</div>
                <ul className="space-y-2">
                  {sub.mitigations?.map((m) => {
                    const mitigation = mitigationsData.find((mit) => mit.id === m);
                    return (
                      <li key={m} className="bg-emerald-900/40 text-emerald-200 rounded p-3">
                        <Link href={`/controls/${m}`} className="underline hover:text-white">{mitigation ? mitigation.name : m}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div data-tab="Architectures">
              <div className="mb-8">
                <div className="font-bold text-slate-200 mb-2">Architectures</div>
                <ul className="space-y-2">
                  {sub.architectures?.map((a) => {
                    const arch = architecturesData.find((arch) => arch.id === a);
                    return (
                      <li key={a} className="bg-indigo-900/40 text-indigo-200 rounded p-3">
                        <Link href={`/architectures/${a}`} className="underline hover:text-white">{arch ? arch.name : a}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </TabContent>
        </section>
      </div>
      {/* Framework References */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="mt-16 bg-slate-900/80 rounded-xl p-6 border border-slate-800">
          <div className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
            <span className="text-xl">🗂️</span> Framework References
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="font-semibold text-slate-300 mb-2">NIST AI Risk Management Framework</div>
              <a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener noreferrer" className="block bg-slate-800 hover:bg-slate-700 text-teal-300 px-4 py-2 rounded mb-2 font-mono transition">NIST AI RMF Official Documentation</a>
              <a href="https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf" target="_blank" rel="noopener noreferrer" className="block bg-slate-800 hover:bg-slate-700 text-teal-300 px-4 py-2 rounded font-mono transition">NIST AI RMF 1.0 (PDF)</a>
            </div>
            <div>
              <div className="font-semibold text-slate-300 mb-2">OWASP AISVS</div>
              <a href="https://owasp.org/www-project-ai-security-verification-standard/" target="_blank" rel="noopener noreferrer" className="block bg-slate-800 hover:bg-slate-700 text-teal-300 px-4 py-2 rounded mb-2 font-mono transition">Interactive AISVS Tool</a>
              <a href="https://github.com/OWASP/www-project-ai-security-verification-standard" target="_blank" rel="noopener noreferrer" className="block bg-slate-800 hover:bg-slate-700 text-teal-300 px-4 py-2 rounded font-mono transition">OWASP AISVS GitHub Repository</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 