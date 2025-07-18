import React from "react";

const stats = [
  { label: "AISVS Categories", value: 13, color: "text-teal-400" },
  { label: "AI Threats", value: 15, color: "text-emerald-400" },
  { label: "Key Components", value: 6, color: "text-teal-300" },
  { label: "Security Controls", value: "100+", color: "text-emerald-300" },
];

const Stats = () => (
  <div className="flex flex-wrap justify-center gap-6 py-6">
    {stats.map((s, i) => (
      <div key={i} className="bg-slate-900/80 rounded-lg px-6 py-4 text-center border border-slate-800">
        <div className={`text-2xl font-bold mb-1 ${s.color}`}>{s.value}</div>
        <div className="text-slate-300 text-sm font-medium">{s.label}</div>
      </div>
    ))}
  </div>
);

export default Stats; 