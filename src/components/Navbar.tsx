"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    console.log('Navbar link clicked:', href);
  };

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

      <div className="hidden md:flex gap-6 text-slate-300 font-medium">
        <Link href="/components" className="hover:text-cyan-400 transition-colors" onClick={() => handleLinkClick('/components')}>
          Components
        </Link>
        <Link href="/architectures" className="hover:text-blue-400 transition-colors" onClick={() => handleLinkClick('/architectures')}>
          Blueprints
        </Link>
        <Link href="/threats" className="hover:text-red-400 transition-colors" onClick={() => handleLinkClick('/threats')}>
          Attack Vectors
        </Link>
        <Link href="/atlas" className="hover:text-orange-400 transition-colors" onClick={() => handleLinkClick('/atlas')}>
          ATLAS
        </Link>
        <Link href="/controls" className="hover:text-emerald-400 transition-colors" onClick={() => handleLinkClick('/controls')}>
          Defenses
        </Link>
        <Link href="/aisvs" className="hover:text-purple-400 transition-colors" onClick={() => handleLinkClick('/aisvs')}>
          Standards
        </Link>
        <Link href="/nist-controls" className="hover:text-blue-400 transition-colors" onClick={() => handleLinkClick('/nist-controls')}>
          NIST Controls
        </Link>
        <Link href="/nist-mapping" className="hover:text-cyan-400 transition-colors" onClick={() => handleLinkClick('/nist-mapping')}>
          Framework Map
        </Link>
        <Link href="/vulnerabilities" className="hover:text-orange-400 transition-colors" onClick={() => handleLinkClick('/vulnerabilities')}>
          Weaknesses
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
        <div className="absolute top-full left-0 right-0 bg-gradient-to-b from-indigo-950 to-purple-900 border-b border-indigo-700 md:hidden">
          <div className="px-8 py-4 space-y-4">
            <Link href="/components" className="block hover:text-cyan-400 transition-colors" onClick={() => handleLinkClick('/components')}>Components</Link>
            <Link href="/architectures" className="block hover:text-blue-400 transition-colors" onClick={() => handleLinkClick('/architectures')}>Blueprints</Link>
            <Link href="/threats" className="block hover:text-red-400 transition-colors" onClick={() => handleLinkClick('/threats')}>Attack Vectors</Link>
            <Link href="/atlas" className="block hover:text-orange-400 transition-colors" onClick={() => handleLinkClick('/atlas')}>ATLAS</Link>
            <Link href="/controls" className="block hover:text-emerald-400 transition-colors" onClick={() => handleLinkClick('/controls')}>Defenses</Link>
            <Link href="/aisvs" className="block hover:text-purple-400 transition-colors" onClick={() => handleLinkClick('/aisvs')}>Standards</Link>
            <Link href="/nist-controls" className="block hover:text-blue-400 transition-colors" onClick={() => handleLinkClick('/nist-controls')}>NIST Controls</Link>
            <Link href="/nist-mapping" className="block hover:text-cyan-400 transition-colors" onClick={() => handleLinkClick('/nist-mapping')}>Framework Map</Link>
            <Link href="/vulnerabilities" className="block hover:text-orange-400 transition-colors" onClick={() => handleLinkClick('/vulnerabilities')}>Weaknesses</Link>
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