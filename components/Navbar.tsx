"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200" style={{minHeight: '64px'}}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 text-[#1E3A8A] font-extrabold text-lg md:text-xl">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="24" height="24" rx="8" fill="#22C55E"/><rect x="10" y="10" width="12" height="12" rx="4" fill="#fff"/><rect x="14" y="14" width="4" height="4" rx="1" fill="#22C55E"/></svg>
          MediChainX
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {/* Future nav links here */}
          <Button asChild className="bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-full px-6 py-2 text-base font-semibold shadow-none">
            <Link href="/buy">Get Started</Link>
          </Button>
        </div>
        {/* Hamburger for mobile */}
        <button className="md:hidden flex items-center p-2" onClick={() => setOpen(!open)} aria-label="Open menu">
          <svg width="24" height="24" fill="none" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-slate-200 px-4 pb-4 flex flex-col items-end">
          <Button asChild className="mt-4 w-full bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-full px-6 py-2 text-base font-semibold shadow-none">
            <Link href="/buy">Get Started</Link>
          </Button>
        </div>
      )}
    </nav>
  );
} 