import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
      <div className="mb-4">
        <span className="inline-block bg-slate-800 text-emerald-400 rounded-full px-3 py-1 text-xs font-semibold mb-2">NIST AI RMF Integration</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
        <span className="text-teal-400">Secure Your</span> <br />
        <span className="text-emerald-400">Agentic AI</span> <br />
        <span className="text-white">Applications</span>
      </h1>
      <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8">
        The most comprehensive OWASP guide for securing AI agentic systems. Features NIST AI RMF mapping, advanced threat analysis, and cutting-edge security frameworks.
      </p>
      <div className="flex gap-4 justify-center">
        <a href="/nist-mapping" className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded shadow transition">NIST Mapping</a>
        <a href="/aisvs" className="bg-slate-800 hover:bg-emerald-500 hover:text-white text-emerald-300 font-semibold px-6 py-3 rounded shadow transition">AISVS Standards</a>
      </div>
    </section>
  );
};

export default Hero; 