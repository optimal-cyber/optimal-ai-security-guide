import React from "react";

const navs = [
  { label: "NIST Mapping", href: "/nist-mapping", color: "bg-teal-600 hover:bg-teal-500" },
  { label: "Threats", href: "/threats", color: "bg-emerald-600 hover:bg-emerald-500" },
  { label: "Controls", href: "/controls", color: "bg-slate-800 hover:bg-slate-700" },
  { label: "AISVS", href: "/aisvs", color: "bg-teal-700 hover:bg-teal-600" },
  { label: "Components", href: "/components", color: "bg-emerald-700 hover:bg-emerald-600" },
];

const QuickNav = () => (
  <div className="flex flex-wrap justify-center gap-4 py-6">
    {navs.map((n, i) => (
      <a
        key={i}
        href={n.href}
        className={`text-white font-semibold px-6 py-3 rounded-lg shadow border border-slate-800 transition ${n.color}`}
      >
        {n.label}
      </a>
    ))}
  </div>
);

export default QuickNav; 