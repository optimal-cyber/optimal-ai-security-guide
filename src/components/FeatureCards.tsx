import React from "react";

const features = [
  {
    title: "NIST AI RMF Mapping",
    desc: "Interactive D3.js visualization mapping NIST AI Risk Management Framework to OWASP AISVS",
    icon: "🗺️",
    color: "bg-teal-600 text-white",
  },
  {
    title: "AISVS Security Standards",
    desc: "Comprehensive AI Security Verification Standard with 13 control categories",
    icon: "🔒",
    color: "bg-emerald-600 text-white",
  },
  {
    title: "Component Framework",
    desc: "Six key components of agentic systems with detailed threat analysis",
    icon: "🧩",
    color: "bg-slate-700 text-emerald-300",
  },
  {
    title: "Security Controls",
    desc: "Comprehensive security controls and mitigations for AI agentic systems",
    icon: "🛡️",
    color: "bg-slate-800 text-teal-300",
  },
];

const FeatureCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto py-10">
    {features.map((f, i) => (
      <div key={i} className="bg-slate-900/80 rounded-xl p-6 flex flex-col items-start shadow border border-slate-800">
        <div className={`text-3xl mb-2 p-2 rounded ${f.color}`}>{f.icon}</div>
        <div className="text-lg font-bold text-white mb-1">{f.title}</div>
        <div className="text-slate-300 text-sm">{f.desc}</div>
      </div>
    ))}
  </div>
);

export default FeatureCards; 