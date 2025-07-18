'use client';

import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";

interface Requirement {
  id: string;
  title: string;
  description: string;
  level: number;
  category: string;
  references?: { label: string; url: string }[];
}

interface Subcategory {
  id: string;
  name: string;
  requirements: Requirement[];
}

interface Category {
  id: string;
  name: string;
  description: string;
  subcategories: Subcategory[];
}

export default function AISVS() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openSubcats, setOpenSubcats] = useState<{ [catId: string]: string | null }>({});
  const [search, setSearch] = useState("");
  const [filterLevel, setFilterLevel] = useState<string>("All Levels");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/aisvs-requirements");
        if (!res.ok) throw new Error("Failed to fetch AISVS requirements");
        const data = await res.json();
        setCategories(data.categories || []);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleSubcatToggle = (catId: string, subcatId: string) => {
    setOpenSubcats((prev) => ({
      ...prev,
      [catId]: prev[catId] === subcatId ? null : subcatId,
    }));
  };

  // Filter/search logic (placeholder, can be expanded)
  const filteredCategories = categories.filter((cat) => {
    if (!search && filterLevel === "All Levels") return true;
    // Search in category name, subcategory name, or requirement title/desc
    const searchLower = search.toLowerCase();
    const catMatch = cat.name.toLowerCase().includes(searchLower);
    const subcatMatch = cat.subcategories.some((subcat) =>
      subcat.name.toLowerCase().includes(searchLower)
    );
    const reqMatch = cat.subcategories.some((subcat) =>
      subcat.requirements.some(
        (req) =>
          req.title.toLowerCase().includes(searchLower) ||
          req.description.toLowerCase().includes(searchLower)
      )
    );
    let levelMatch = true;
    if (filterLevel !== "All Levels") {
      levelMatch = cat.subcategories.some((subcat) =>
        subcat.requirements.some((req) => `Level ${req.level}` === filterLevel)
      );
    }
    return (catMatch || subcatMatch || reqMatch) && levelMatch;
  });

  // Mock progress calculation
  const getCategoryProgress = (cat: Category) => {
    const total = cat.subcategories.reduce((sum, s) => sum + s.requirements.length, 0);
    const complete = 0; // Placeholder for future tracking
    return { complete, total, percent: total ? Math.round((complete / total) * 100) : 0 };
  };
  const getSubcatProgress = (subcat: Subcategory) => {
    const total = subcat.requirements.length;
    const complete = 0; // Placeholder
    return { complete, total, percent: total ? Math.round((complete / total) * 100) : 0 };
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-teal-400 mb-2 text-center">OWASP AISVS</h1>
        <p className="text-lg text-slate-300 mb-8 text-center max-w-2xl mx-auto">The OWASP AI Security Verification Standard (AISVS) provides a comprehensive framework for verifying the security of AI systems.</p>
        {/* Search/Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-center">
          <input
            type="text"
            className="w-full md:w-96 px-4 py-2 rounded-lg bg-slate-800 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Search categories, subcategories, or requirements..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="px-4 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
          >
            <option>All Levels</option>
            <option>Level 1</option>
            <option>Level 2</option>
            <option>Level 3</option>
          </select>
        </div>
        {loading && <div className="text-slate-400 text-center">Loading requirements...</div>}
        {error && <div className="text-red-400 text-center">Error: {error}</div>}
        {!loading && !error && (
          <div className="space-y-6">
            {filteredCategories.map((cat) => {
              const catProgress = getCategoryProgress(cat);
              return (
                <div
                  key={cat.id}
                  className={`rounded-2xl shadow-lg bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border-2 border-teal-700 hover:border-emerald-400 transition-all duration-200 cursor-pointer group`}
                >
                  <button
                    className="w-full flex flex-col items-center justify-between px-8 py-6 focus:outline-none"
                    onClick={() => setOpenCategory(openCategory === cat.id ? null : cat.id)}
                    aria-expanded={openCategory === cat.id}
                  >
                    <div className="flex flex-col md:flex-row md:items-center w-full justify-between">
                      <span className="text-2xl md:text-3xl font-bold text-emerald-300 group-hover:text-teal-300 transition">{cat.id}: {cat.name}</span>
                      <span className="mt-2 md:mt-0 text-base text-slate-400 font-medium">{cat.description}</span>
                    </div>
                    <div className="w-full mt-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-slate-400">Progress</span>
                        <span className="text-xs text-emerald-200">{catProgress.complete}/{catProgress.total} ({catProgress.percent}%)</span>
                      </div>
                      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-2 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full transition-all duration-300"
                          style={{ width: `${catProgress.percent}%` }}
                        ></div>
                      </div>
                    </div>
                  </button>
                  {/* Subcategories */}
                  {openCategory === cat.id && (
                    <div className="px-6 pb-6 pt-2 space-y-4 animate-fade-in">
                      {cat.subcategories.map((subcat) => {
                        const subcatProgress = getSubcatProgress(subcat);
                        return (
                          <div
                            key={subcat.id}
                            className="rounded-xl bg-slate-900/90 border-l-4 border-emerald-500 shadow p-4 mb-2"
                          >
                            <button
                              className="w-full text-left text-lg font-semibold text-emerald-200 focus:outline-none flex items-center justify-between"
                              onClick={() => handleSubcatToggle(cat.id, subcat.id)}
                              aria-expanded={openSubcats[cat.id] === subcat.id}
                            >
                              <span>{subcat.id}: {subcat.name}</span>
                              <span className="ml-4 text-xs bg-slate-800 px-2 py-0.5 rounded text-emerald-100">{subcat.requirements.length} requirements</span>
                            </button>
                            {/* Subcategory Progress Bar */}
                            <div className="w-full mt-2 mb-2">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs text-slate-400">Progress</span>
                                <span className="text-xs text-emerald-200">{subcatProgress.complete}/{subcatProgress.total} ({subcatProgress.percent}%)</span>
                              </div>
                              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                <div
                                  className="h-1.5 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full transition-all duration-300"
                                  style={{ width: `${subcatProgress.percent}%` }}
                                ></div>
                              </div>
                            </div>
                            {/* Requirements */}
                            {openSubcats[cat.id] === subcat.id && (
                              <ul className="pl-4 mt-2 space-y-2">
                                {subcat.requirements.map((req) => (
                                  <li key={req.id} className="bg-slate-950/80 rounded p-3 border-l-4 border-emerald-700">
                                    <div className="font-semibold text-white">{req.id}: {req.title} <span className="ml-2 text-xs bg-slate-800 px-2 py-0.5 rounded text-emerald-300">Level {req.level}</span></div>
                                    <div className="text-slate-300 text-sm mt-1">{req.description}</div>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in {
          animation: fade-in 0.4s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </main>
  );
} 