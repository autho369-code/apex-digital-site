import { Metadata } from "next";
import Link from "next/link";

interface LegalPageProps {
  title: string;
  description: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export function generateLegalMetadata(title: string, description: string): Metadata {
  return {
    title: `${title} — Portier AI`,
    description,
    openGraph: {
      title: `${title} — Portier AI`,
      description,
      type: "website",
    },
  };
}

export default function LegalPage({ title, description, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-12 font-medium">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Back to Portier AI
        </Link>
        <div className="mb-2 text-xs font-semibold text-purple-400 uppercase tracking-[0.2em]">Legal</div>
        <h1 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">{title}</h1>
        <p className="text-white/45 text-base mb-2">{description}</p>
        {lastUpdated && <p className="text-xs text-white/25 mb-12">Last updated: {lastUpdated}</p>}
        <div className="prose prose-invert prose-sm max-w-none prose-headings:text-white/90 prose-headings:font-medium prose-headings:tracking-tight prose-p:text-white/55 prose-p:leading-relaxed prose-li:text-white/45 prose-strong:text-white/70 prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300 [&_h2]:text-xl [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:mt-8 [&_h3]:mb-3">
          {children}
        </div>
      </div>
    </div>
  );
}
