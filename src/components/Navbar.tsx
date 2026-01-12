"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = (href: string) => {
    console.log('Navbar link clicked:', href);
    setOpenDropdown(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const DropdownMenu = ({
    label,
    items,
    id
  }: {
    label: string;
    items: { href: string; label: string; color: string }[];
    id: string;
  }) => (
    <div className="relative">
      <button
        onClick={() => setOpenDropdown(openDropdown === id ? null : id)}
        className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
      >
        {label}
        <svg className={`w-4 h-4 transition-transform ${openDropdown === id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {openDropdown === id && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => handleLinkClick(item.href)}
              className={`block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 ${item.color} transition-colors`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-gradient-to-b from-indigo-950/95 to-purple-900/90 border-b border-indigo-700 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <Link href="/" className="hover:opacity-80 transition-opacity" onClick={() => handleLinkClick('/')}>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center">
              <img
                src="/optimal-logo.png"
                alt="Optimal"
                className="h-6 w-6 object-contain"
              />
            </div>
            <div>
              <span className="text-white font-bold text-xl tracking-tight">Optimal</span>
              <div className="text-xs text-cyan-400 font-mono">AI Security Guide</div>
            </div>
          </div>
        </Link>
      </div>

      <div className="hidden lg:flex gap-5 text-slate-300 font-medium items-center" ref={dropdownRef}>
        <DropdownMenu
          label="Frameworks"
          id="frameworks"
          items={[
            { href: "/aisvs", label: "OWASP AISVS", color: "hover:text-purple-400" },
            { href: "/nist-controls", label: "NIST 800-53", color: "hover:text-blue-400" },
            { href: "/atlas", label: "MITRE ATLAS", color: "hover:text-orange-400" },
            { href: "/nist-mapping", label: "Framework Map", color: "hover:text-cyan-400" },
            { href: "/regulations", label: "Regulations", color: "hover:text-indigo-400" },
          ]}
        />
        <DropdownMenu
          label="Threats"
          id="threats"
          items={[
            { href: "/threats", label: "Attack Vectors", color: "hover:text-red-400" },
            { href: "/vulnerabilities", label: "Vulnerabilities", color: "hover:text-orange-400" },
            { href: "/red-team", label: "Red Team Guide", color: "hover:text-red-400" },
          ]}
        />
        <DropdownMenu
          label="Defenses"
          id="defenses"
          items={[
            { href: "/controls", label: "Defense Controls", color: "hover:text-emerald-400" },
            { href: "/implementation-guide", label: "Implementation Guide", color: "hover:text-green-400" },
            { href: "/model-profiles", label: "Model Profiles", color: "hover:text-blue-400" },
          ]}
        />
        <DropdownMenu
          label="Architecture"
          id="architecture"
          items={[
            { href: "/components", label: "AI Components", color: "hover:text-cyan-400" },
            { href: "/architectures", label: "Blueprints", color: "hover:text-blue-400" },
          ]}
        />
        <DropdownMenu
          label="Tools"
          id="tools"
          items={[
            { href: "/assessment", label: "Maturity Assessment", color: "hover:text-purple-400" },
            { href: "/framework-selector", label: "Framework Selector", color: "hover:text-pink-400" },
            { href: "/checklist", label: "Compliance Checklist", color: "hover:text-cyan-400" },
          ]}
        />
        <Link href="/executive-summary" className="hover:text-amber-400 transition-colors" onClick={() => handleLinkClick('/executive-summary')}>
          Executive
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 bg-indigo-900/50 px-3 py-1 rounded-full border border-indigo-600">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-slate-300 font-mono">Active</span>
        </div>
        
        <button 
          className="text-slate-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-indigo-800/50" 
          title="Search"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"></path>
          </svg>
        </button>
        
        <button 
          className="text-slate-400 hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-indigo-800/50" 
          title="Toggle Theme (Coming Soon)"
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.05l-.71-.71"></path>
          </svg>
        </button>
        
        <button 
          className="md:hidden text-slate-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-indigo-800/50" 
          title="Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gradient-to-b from-indigo-950 to-purple-900 border-b border-indigo-700 lg:hidden max-h-[80vh] overflow-y-auto">
          <div className="px-8 py-4 space-y-4">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Frameworks</div>
            <Link href="/aisvs" className="block hover:text-purple-400 transition-colors" onClick={() => { handleLinkClick('/aisvs'); setIsMenuOpen(false); }}>OWASP AISVS</Link>
            <Link href="/nist-controls" className="block hover:text-blue-400 transition-colors" onClick={() => { handleLinkClick('/nist-controls'); setIsMenuOpen(false); }}>NIST 800-53</Link>
            <Link href="/atlas" className="block hover:text-orange-400 transition-colors" onClick={() => { handleLinkClick('/atlas'); setIsMenuOpen(false); }}>MITRE ATLAS</Link>
            <Link href="/nist-mapping" className="block hover:text-cyan-400 transition-colors" onClick={() => { handleLinkClick('/nist-mapping'); setIsMenuOpen(false); }}>Framework Map</Link>
            <Link href="/regulations" className="block hover:text-indigo-400 transition-colors" onClick={() => { handleLinkClick('/regulations'); setIsMenuOpen(false); }}>Regulations</Link>

            <div className="border-t border-slate-700 pt-4 mt-4">
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Threats & Defense</div>
            </div>
            <Link href="/threats" className="block hover:text-red-400 transition-colors" onClick={() => { handleLinkClick('/threats'); setIsMenuOpen(false); }}>Attack Vectors</Link>
            <Link href="/vulnerabilities" className="block hover:text-orange-400 transition-colors" onClick={() => { handleLinkClick('/vulnerabilities'); setIsMenuOpen(false); }}>Vulnerabilities</Link>
            <Link href="/red-team" className="block hover:text-red-400 transition-colors" onClick={() => { handleLinkClick('/red-team'); setIsMenuOpen(false); }}>Red Team Guide</Link>
            <Link href="/controls" className="block hover:text-emerald-400 transition-colors" onClick={() => { handleLinkClick('/controls'); setIsMenuOpen(false); }}>Defense Controls</Link>
            <Link href="/implementation-guide" className="block hover:text-green-400 transition-colors" onClick={() => { handleLinkClick('/implementation-guide'); setIsMenuOpen(false); }}>Implementation Guide</Link>
            <Link href="/model-profiles" className="block hover:text-blue-400 transition-colors" onClick={() => { handleLinkClick('/model-profiles'); setIsMenuOpen(false); }}>Model Profiles</Link>

            <div className="border-t border-slate-700 pt-4 mt-4">
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Architecture</div>
            </div>
            <Link href="/components" className="block hover:text-cyan-400 transition-colors" onClick={() => { handleLinkClick('/components'); setIsMenuOpen(false); }}>AI Components</Link>
            <Link href="/architectures" className="block hover:text-blue-400 transition-colors" onClick={() => { handleLinkClick('/architectures'); setIsMenuOpen(false); }}>Blueprints</Link>

            <div className="border-t border-slate-700 pt-4 mt-4">
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Tools</div>
            </div>
            <Link href="/assessment" className="block hover:text-purple-400 transition-colors" onClick={() => { handleLinkClick('/assessment'); setIsMenuOpen(false); }}>Maturity Assessment</Link>
            <Link href="/framework-selector" className="block hover:text-pink-400 transition-colors" onClick={() => { handleLinkClick('/framework-selector'); setIsMenuOpen(false); }}>Framework Selector</Link>
            <Link href="/checklist" className="block hover:text-cyan-400 transition-colors" onClick={() => { handleLinkClick('/checklist'); setIsMenuOpen(false); }}>Compliance Checklist</Link>

            <div className="border-t border-slate-700 pt-4 mt-4">
              <Link href="/executive-summary" className="block hover:text-amber-400 transition-colors font-semibold" onClick={() => { handleLinkClick('/executive-summary'); setIsMenuOpen(false); }}>Executive Summary</Link>
            </div>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-gradient-to-b from-indigo-950 to-purple-900 border-b border-indigo-700 p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search security frameworks, threats, controls..."
              className="w-full px-4 py-2 bg-indigo-900/50 border border-indigo-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-cyan-400">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
} 