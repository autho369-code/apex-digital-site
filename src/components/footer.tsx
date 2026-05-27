"use client";

import Link from "next/link";
import { motion } from "motion/react";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "AI Growth Audit", href: "/#apply" },
  { label: "Security", href: "/security" },
  { label: "AI Policy", href: "/ai-policy" },
  { label: "Contact", href: "mailto:support@portierai.com" },
];

const serviceLinks = [
  { label: "AI Voice Receptionist", href: "/" },
  { label: "AI Search Dominance", href: "/" },
  { label: "AI Review Engine", href: "/" },
  { label: "AI Content Machine", href: "/" },
  { label: "AI Booking Agent", href: "/" },
  { label: "AI-Optimized Websites", href: "/" },
];

const resourceLinks = [
  { label: "Blog", href: "/" },
  { label: "Case Studies", href: "/" },
  { label: "FAQ", href: "/" },
  { label: "Sitemap", href: "/sitemap" },
  { label: "Accessibility", href: "/accessibility" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Disclaimer", href: "/disclaimer" },
];

const trustBadges = [
  { label: "Secure AI Infrastructure", icon: "🔒", desc: "TLS 1.3 · AES-256" },
  { label: "Privacy-Focused Systems", icon: "🛡️", desc: "Data minimization" },
  { label: "Enterprise-Ready", icon: "⚡", desc: "SOC 2 aligned" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-black">
      {/* CTA Banner */}
      <div className="border-b border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight mb-2">Ready to modernize your business with AI?</h2>
            <p className="text-white/35 text-sm">AI systems, automation, and growth infrastructure for modern businesses.</p>
          </div>
          <motion.a
            href="/#apply"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 text-sm whitespace-nowrap"
          >
            Schedule Consultation
          </motion.a>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        {/* Company */}
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="text-lg font-semibold tracking-tight hover:text-white/80 transition-colors">
            Portier<span className="text-purple-400">AI</span>
          </Link>
          <p className="text-xs text-white/30 mt-3 leading-relaxed max-w-[180px]">
            AI systems, automation, and growth infrastructure for modern businesses.
          </p>
          <p className="text-xs text-white/20 mt-4">Chicago, Illinois, USA</p>
          <a href="mailto:support@portierai.com" className="text-xs text-purple-400 hover:text-purple-300 transition-colors mt-1 inline-block">support@portierai.com</a>
        </div>

        {/* Services */}
        <div>
          <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">Services</div>
          <ul className="space-y-2.5">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-white/40 hover:text-white/70 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">Resources</div>
          <ul className="space-y-2.5">
            {resourceLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-white/40 hover:text-white/70 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">Legal</div>
          <ul className="space-y-2.5">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-white/40 hover:text-white/70 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">Company</div>
          <ul className="space-y-2.5">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-white/40 hover:text-white/70 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Trust badges */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-wrap justify-center gap-8">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-3 text-xs text-white/25">
              <span className="text-base">{badge.icon}</span>
              <div>
                <div className="font-medium text-white/35">{badge.label}</div>
                <div className="text-white/15">{badge.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Portier AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/20">
            <Link href="/privacy" className="hover:text-white/40 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white/40 transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-white/40 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
