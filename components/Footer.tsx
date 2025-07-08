import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white/80 backdrop-blur-xl border-t-4 border-[#22C55E] flex flex-col md:flex-row items-center justify-between h-16 min-h-[64px] px-4 md:px-8 text-slate-600 text-sm" style={{minHeight: '64px'}}>
      <div>
        © {new Date().getFullYear()} <span className="text-[#1E3A8A] font-bold">MediChainX</span>. All rights reserved.
      </div>
      <div className="flex items-center gap-6">
        <Link href="https://github.com/" target="_blank" aria-label="GitHub" className="hover:text-[#1E3A8A] transition-colors">
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.577.688.48C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2Z"/></svg>
        </Link>
        <Link href="https://twitter.com/" target="_blank" aria-label="Twitter" className="hover:text-[#22C55E] transition-colors">
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.488 0-4.505 2.017-4.505 4.505 0 .353.04.697.117 1.026-3.746-.188-7.066-1.983-9.288-4.713a4.48 4.48 0 0 0-.609 2.267c0 1.563.796 2.942 2.008 3.753a4.48 4.48 0 0 1-2.04-.564v.057c0 2.183 1.553 4.006 3.617 4.422-.378.104-.776.16-1.187.16-.29 0-.57-.028-.844-.08.57 1.78 2.224 3.078 4.186 3.113A8.987 8.987 0 0 1 2 19.54a12.69 12.69 0 0 0 6.88 2.017c8.253 0 12.774-6.835 12.774-12.774 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.94 8.94 0 0 1-2.54.697z"/></svg>
        </Link>
      </div>
      <div className="text-xs text-slate-400 mt-2 md:mt-0">Empowering decentralized health insurance.</div>
    </footer>
  );
} 