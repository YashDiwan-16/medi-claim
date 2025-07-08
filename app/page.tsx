"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";

// Modern font (Google Fonts Inter)
// Add to your _app or layout if not already

// SVG Illustration for Hero (insurance vault, shield, Ethereum, Polygon)
const HeroSVG = () => (
  <svg width="380" height="320" viewBox="0 0 380 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[380px] drop-shadow-2xl">
    <defs>
      <linearGradient id="vaultGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#22C55E" />
        <stop offset="100%" stopColor="#1E3A8A" />
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#22C55E" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0" />
      </radialGradient>
    </defs>
    <ellipse cx="190" cy="300" rx="120" ry="20" fill="url(#glow)" />
    <rect x="70" y="60" width="240" height="180" rx="32" fill="url(#vaultGrad)" />
    <rect x="110" y="100" width="160" height="100" rx="16" fill="#fff" fillOpacity="0.95" />
    <circle cx="190" cy="150" r="36" fill="#1E3A8A" fillOpacity="0.9" />
    <rect x="175" y="135" width="30" height="30" rx="8" fill="#22C55E" />
    <circle cx="190" cy="150" r="10" fill="#fff" />
    {/* Ethereum logo */}
    <g transform="translate(120, 220)">
      <circle cx="24" cy="24" r="24" fill="#fff" fillOpacity="0.8" />
      <polygon points="24,8 36,24 24,40 12,24" fill="#627EEA" />
      <polygon points="24,14 32,24 24,34 16,24" fill="#fff" fillOpacity="0.8" />
    </g>
    {/* Polygon logo */}
    <g transform="translate(220, 220)">
      <circle cx="24" cy="24" r="24" fill="#fff" fillOpacity="0.8" />
      <circle cx="24" cy="24" r="14" fill="#8247E5" />
      <rect x="18" y="18" width="12" height="12" rx="3" fill="#fff" />
    </g>
    {/* Medical shield */}
    <g transform="translate(170, 60)">
      <path d="M20 0 L40 10 V30 Q20 45 0 30 V10 Z" fill="#22C55E" fillOpacity="0.7" />
      <rect x="15" y="12" width="10" height="16" rx="2" fill="#fff" />
      <rect x="20" y="16" width="2" height="8" rx="1" fill="#22C55E" />
      <rect x="17" y="20" width="8" height="2" rx="1" fill="#22C55E" />
    </g>
  </svg>
);

const howItWorks = [
  {
    title: "Buy NFT on Ethereum",
    desc: "Mint a Mediclaim NFT with your policy details securely on Ethereum.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="4" y="4" width="32" height="32" rx="8" fill="#1E3A8A"/><text x="20" y="28" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="bold">NFT</text></svg>
    ),
  },
  {
    title: "Transfer to Polygon",
    desc: "Simulate bridging your NFT to Polygon for fast, low-cost claims.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" fill="#8247E5"/><rect x="12" y="12" width="16" height="16" rx="4" fill="#fff"/></svg>
    ),
  },
  {
    title: "Claim by Burning",
    desc: "Burn your NFT on Polygon to instantly process your mediclaim.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" fill="#22C55E"/><path d="M20 12v8l6 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
];

const features = [
  {
    title: "On-chain Proof of Insurance",
    desc: "Your policy is verifiable and tamper-proof on the blockchain.",
    icon: (
      <svg width="32" height="32" fill="none"><circle cx="16" cy="16" r="16" fill="#22C55E"/><path d="M10 16l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: "Instant Cross-chain Transfer",
    desc: "Move your NFT from Ethereum to Polygon in seconds (simulated for MVP).",
    icon: (
      <svg width="32" height="32" fill="none"><circle cx="16" cy="16" r="16" fill="#1E3A8A"/><path d="M16 8v8l6 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: "Decentralized Claim Process",
    desc: "No paperwork, no middlemen — just burn your NFT to claim.",
    icon: (
      <svg width="32" height="32" fill="none"><circle cx="16" cy="16" r="16" fill="#8247E5"/><path d="M8 16h16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#e0fbe6] to-[#e0e7ff] flex flex-col items-center font-sans">
      {/* Hero Section */}
      <section className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between py-20 px-6 gap-12 md:gap-0">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start gap-6 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#1E3A8A] leading-tight">
            Insure with <span className="text-[#22C55E]">Ethereum</span>,<br />
            Claim with <span className="text-[#8247E5]">Polygon</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-700">
            Buy your mediclaim NFT today and use it only when you need it —<br className="hidden md:block" /> fully decentralized, secure, and borderless.
          </p>
          <Button
            className="mt-2 px-8 py-4 text-lg rounded-full bg-[#22C55E] hover:bg-[#16a34a] text-white shadow-xl"
            asChild
          >
            <a href="/buy">Get Started</a>
          </Button>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center items-center">
          <HeroSVG />
        </div>
      </section>

      {/* How It Works - Bento Grid */}
      <section className="w-full max-w-6xl py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A8A] mb-8 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorks.map((step, i) => (
            <Card
              key={step.title}
              className={`relative bg-white/80 border-0 shadow-xl rounded-2xl p-6 flex flex-col items-center text-center overflow-hidden ${i === 1 ? 'md:scale-105 md:-translate-y-4 z-10' : ''}`}
              style={{ backdropFilter: 'blur(6px)' }}
            >
              <div className="absolute top-4 left-4 text-3xl font-black text-[#e0e7ff] opacity-60 select-none pointer-events-none">{i+1}</div>
              <div className="mb-4">{step.icon}</div>
              <CardTitle className="text-xl font-bold text-[#1E3A8A] mb-2">{step.title}</CardTitle>
              <CardDescription className="text-slate-600 text-base">{step.desc}</CardDescription>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section - Glassmorphism Cards */}
      <section className="w-full max-w-6xl py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A8A] mb-8 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/60 border-0 p-8 flex flex-col items-center text-center backdrop-blur-md hover:scale-[1.03] transition-transform"
              style={{ boxShadow: '0 8px 32px 0 rgba(30,58,138,0.10), 0 1.5px 8px 0 rgba(34,197,94,0.10)' }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-[#1E3A8A]">{feature.title}</h3>
              <p className="text-slate-600 text-base mt-2">{feature.desc}</p>
              <div className="absolute inset-0 pointer-events-none" style={{background: 'linear-gradient(120deg,rgba(34,197,94,0.08) 40%,rgba(30,58,138,0.08) 100%)', mixBlendMode: 'lighten'}} />
            </div>
          ))}
        </div>
      </section>

      {/* Network Stats Panel */}
      <section className="w-full max-w-2xl py-8 px-6 mt-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 bg-white/80 rounded-2xl shadow-inner p-8 border border-slate-200 backdrop-blur-md">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-slate-500 flex items-center gap-2"><svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="9" fill="#627EEA"/><polygon points="9,3 13,9 9,15 5,9" fill="#fff"/></svg>ETH Gas Fee</span>
            <span className="text-2xl font-bold text-[#1E3A8A]">0.0021 ETH</span>
          </div>
          <div className="w-px h-10 bg-slate-200 hidden md:block" />
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-slate-500 flex items-center gap-2"><svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="9" fill="#8247E5"/><rect x="5" y="5" width="8" height="8" rx="2" fill="#fff"/></svg>Polygon Latency</span>
            <span className="text-2xl font-bold text-[#22C55E]">2.1s</span>
          </div>
        </div>
      </section>
    </div>
  );
}
