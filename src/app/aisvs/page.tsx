'use client';

import Navbar from "../../components/Navbar";
import { useState, useEffect, useMemo, useCallback } from "react";

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
  const [implementedReqs, setImplementedReqs] = useState<Set<string>>(new Set());
  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");

  // Load implemented requirements from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('aisvs-implemented');
    if (saved) {
      setImplementedReqs(new Set(JSON.parse(saved)));
    }
  }, []);

  // Save implemented requirements to localStorage
  const toggleImplemented = useCallback((reqId: string) => {
    setImplementedReqs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(reqId)) {
        newSet.delete(reqId);
      } else {
        newSet.add(reqId);
      }
      localStorage.setItem('aisvs-implemented', JSON.stringify([...newSet]));
      return newSet;
    });
  }, []);

  // Export to CSV
  const exportToCSV = useCallback(() => {
    const rows = [['Requirement ID', 'Title', 'Description', 'Level', 'Category', 'Status']];
    categories.forEach(cat => {
      cat.subcategories.forEach(subcat => {
        subcat.requirements.forEach(req => {
          rows.push([
            req.id,
            req.title,
            req.description.replace(/,/g, ';'),
            `Level ${req.level}`,
            cat.name,
            implementedReqs.has(req.id) ? 'Implemented' : 'Not Implemented'
          ]);
        });
      });
    });
    const csvContent = rows.map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'aisvs-requirements-export.csv';
    a.click();
    URL.revokeObjectURL(url);
  }, [categories, implementedReqs]);

  // Export checklist to PDF-ready format
  const exportChecklist = useCallback(() => {
    let content = '# OWASP AISVS Security Checklist\n\n';
    content += `Generated: ${new Date().toLocaleDateString()}\n\n`;

    categories.forEach(cat => {
      content += `## ${cat.id}: ${cat.name}\n`;
      content += `${cat.description}\n\n`;
      cat.subcategories.forEach(subcat => {
        content += `### ${subcat.id}: ${subcat.name}\n\n`;
        subcat.requirements.forEach(req => {
          const status = implementedReqs.has(req.id) ? '[x]' : '[ ]';
          content += `${status} **${req.id}** (L${req.level}): ${req.title}\n`;
          content += `   ${req.description}\n\n`;
        });
      });
    });

    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'aisvs-checklist.md';
    a.click();
    URL.revokeObjectURL(url);
  }, [categories, implementedReqs]);

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

  // Calculate total stats
  const totalStats = useMemo(() => {
    let total = 0;
    let implemented = 0;
    let byLevel = { 1: 0, 2: 0, 3: 0 };
    categories.forEach(cat => {
      cat.subcategories.forEach(subcat => {
        subcat.requirements.forEach(req => {
          total++;
          if (implementedReqs.has(req.id)) implemented++;
          if (req.level >= 1 && req.level <= 3) byLevel[req.level as 1|2|3]++;
        });
      });
    });
    return { total, implemented, byLevel, percent: total ? Math.round((implemented / total) * 100) : 0 };
  }, [categories, implementedReqs]);

  // Enhanced filter/search logic
  const filteredCategories = useMemo(() => {
    return categories.map(cat => {
      // Filter subcategories and their requirements
      const filteredSubcats = cat.subcategories.map(subcat => {
        const filteredReqs = subcat.requirements.filter(req => {
          const searchLower = search.toLowerCase();
          const searchMatch = !search ||
            req.id.toLowerCase().includes(searchLower) ||
            req.title.toLowerCase().includes(searchLower) ||
            req.description.toLowerCase().includes(searchLower) ||
            subcat.name.toLowerCase().includes(searchLower) ||
            cat.name.toLowerCase().includes(searchLower);

          const levelMatch = filterLevel === "All Levels" || `Level ${req.level}` === filterLevel;

          const statusMatch = filterStatus === "All" ||
            (filterStatus === "Implemented" && implementedReqs.has(req.id)) ||
            (filterStatus === "Not Implemented" && !implementedReqs.has(req.id));

          const categoryMatch = selectedCategory === "All Categories" || cat.id === selectedCategory;

          return searchMatch && levelMatch && statusMatch && categoryMatch;
        });
        return { ...subcat, requirements: filteredReqs };
      }).filter(subcat => subcat.requirements.length > 0);

      return { ...cat, subcategories: filteredSubcats };
    }).filter(cat => cat.subcategories.length > 0);
  }, [categories, search, filterLevel, filterStatus, selectedCategory, implementedReqs]);

  // Progress calculation with actual implementation status
  const getCategoryProgress = (cat: Category) => {
    let total = 0;
    let complete = 0;
    cat.subcategories.forEach(s => {
      s.requirements.forEach(req => {
        total++;
        if (implementedReqs.has(req.id)) complete++;
      });
    });
    return { complete, total, percent: total ? Math.round((complete / total) * 100) : 0 };
  };
  const getSubcatProgress = (subcat: Subcategory) => {
    const total = subcat.requirements.length;
    const complete = subcat.requirements.filter(req => implementedReqs.has(req.id)).length;
    return { complete, total, percent: total ? Math.round((complete / total) * 100) : 0 };
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-teal-400 mb-2 text-center">OWASP AISVS</h1>
        <p className="text-lg text-slate-300 mb-8 text-center max-w-2xl mx-auto">The OWASP AI Security Verification Standard (AISVS) provides a comprehensive framework for verifying the security of AI systems.</p>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-gradient-to-br from-teal-900/30 to-teal-800/20 rounded-xl p-4 text-center border border-teal-700/30">
            <div className="text-2xl font-bold text-teal-400">{totalStats.total}</div>
            <div className="text-slate-400 text-xs">Total Requirements</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 rounded-xl p-4 text-center border border-emerald-700/30">
            <div className="text-2xl font-bold text-emerald-400">{totalStats.implemented}</div>
            <div className="text-slate-400 text-xs">Implemented</div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-xl p-4 text-center border border-blue-700/30">
            <div className="text-2xl font-bold text-blue-400">{totalStats.byLevel[1]}</div>
            <div className="text-slate-400 text-xs">Level 1 (Baseline)</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl p-4 text-center border border-purple-700/30">
            <div className="text-2xl font-bold text-purple-400">{totalStats.byLevel[2]}</div>
            <div className="text-slate-400 text-xs">Level 2 (Standard)</div>
          </div>
          <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-xl p-4 text-center border border-pink-700/30">
            <div className="text-2xl font-bold text-pink-400">{totalStats.byLevel[3]}</div>
            <div className="text-slate-400 text-xs">Level 3 (Advanced)</div>
          </div>
        </div>

        {/* Overall Progress */}
        <div className="bg-slate-800/50 rounded-xl p-4 mb-8 border border-slate-700/50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-300 font-medium">Overall Implementation Progress</span>
            <span className="text-emerald-400 font-bold">{totalStats.percent}%</span>
          </div>
          <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-3 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${totalStats.percent}%` }}
            ></div>
          </div>
        </div>

        {/* Enhanced Search/Filter Bar */}
        <div className="bg-slate-800/30 rounded-xl p-4 mb-8 border border-slate-700/50">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 w-full">
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-slate-900 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Search by ID, title, or description..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <select
                className="px-3 py-2 rounded-lg bg-slate-900 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option>All Categories</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.id}: {cat.name}</option>
                ))}
              </select>
              <select
                className="px-3 py-2 rounded-lg bg-slate-900 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
                value={filterLevel}
                onChange={(e) => setFilterLevel(e.target.value)}
              >
                <option>All Levels</option>
                <option>Level 1</option>
                <option>Level 2</option>
                <option>Level 3</option>
              </select>
              <select
                className="px-3 py-2 rounded-lg bg-slate-900 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option>All</option>
                <option>Implemented</option>
                <option>Not Implemented</option>
              </select>
            </div>
            <div className="flex gap-2">
              <button
                onClick={exportToCSV}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white text-sm font-medium hover:from-blue-700 hover:to-cyan-700 transition-all"
              >
                Export CSV
              </button>
              <button
                onClick={exportChecklist}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Export Checklist
              </button>
            </div>
          </div>
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
                                {subcat.requirements.map((req) => {
                                  const isImplemented = implementedReqs.has(req.id);
                                  return (
                                    <li key={req.id} className={`bg-slate-950/80 rounded p-3 border-l-4 ${isImplemented ? 'border-emerald-500 bg-emerald-950/30' : 'border-emerald-700'} transition-colors`}>
                                      <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                          <div className="font-semibold text-white">
                                            {req.id}: {req.title}
                                            <span className={`ml-2 text-xs px-2 py-0.5 rounded ${
                                              req.level === 1 ? 'bg-blue-900/50 text-blue-300' :
                                              req.level === 2 ? 'bg-purple-900/50 text-purple-300' :
                                              'bg-pink-900/50 text-pink-300'
                                            }`}>Level {req.level}</span>
                                          </div>
                                          <div className="text-slate-300 text-sm mt-1">{req.description}</div>
                                        </div>
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            toggleImplemented(req.id);
                                          }}
                                          className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                                            isImplemented
                                              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                                              : 'bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-white'
                                          }`}
                                          title={isImplemented ? 'Mark as not implemented' : 'Mark as implemented'}
                                        >
                                          {isImplemented ? '✓' : '○'}
                                        </button>
                                      </div>
                                    </li>
                                  );
                                })}
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