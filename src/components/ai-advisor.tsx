"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShinyButton } from "@/components/ui/shiny-button";

interface Message {
  role: "advisor" | "user";
  content: string;
  options?: string[];
  type?: "text" | "recommendation" | "cta";
}

const advisorMessages: Record<string, Message> = {
  opening: {
    role: "advisor",
    content: "I'm Apex Digital's AI operations advisor. I help service businesses identify where they're losing leads, visibility, and revenue — then recommend the right AI systems to fix it.\n\nWant to see where your business is leaking growth?",
    options: ["Analyze my website", "Tell me what you offer", "I have a specific problem"],
  },
  analyze: {
    role: "advisor",
    content: "Great. Paste your website URL and I'll check for common issues that cost you leads — slow load times, missing booking flows, weak mobile experience, invisible AI search presence.",
  },
  offer: {
    role: "advisor",
    content: "Here's what we build for service businesses like yours:\n\n• AI Voice Receptionist — answers every call 24/7, books jobs automatically\n• AI Search Dominance — makes sure you appear in ChatGPT and Perplexity results\n• AI Review Engine — auto-responds to reviews, flags negatives, requests new ones\n• AI Booking Agent — chatbot on your site that qualifies leads and books jobs\n• AI-Optimized Websites — high-converting sites engineered for speed and AI visibility\n\nWhich area interests you most?",
    options: ["Missed calls / after-hours", "Not showing up in search", "Bad reviews / no reviews", "Outdated website", "Show me everything"],
  },
  challenge: {
    role: "advisor",
    content: "Understood. What's the biggest operational challenge you're facing right now? The one that keeps you up or costs you money every month.",
  },
  recommendation_missed: {
    role: "advisor",
    content: "This is the most expensive problem in service businesses. Every missed after-hours call is $500–$2,000 in lost revenue.\n\nOur AI Voice Receptionist handles this completely — answers instantly 24/7, qualifies the emergency, checks availability, and books the job. Our clients typically recover 30-40% of previously missed calls within the first month.\n\nIt's part of the AI Visibility Rebuild package ($2,500 one-time, live in 7 days).",
    type: "recommendation",
  },
  recommendation_search: {
    role: "advisor",
    content: "Search has changed. Google is no longer the only game — ChatGPT, Perplexity, and AI assistants now drive local business discovery. If your business isn't structured for AI search, you're invisible to a growing chunk of customers.\n\nOur AI Search Dominance system handles structured data, AI-citable content, and technical infrastructure that makes AI assistants recommend your business first. It's included in every engagement.",
    type: "recommendation",
  },
  recommendation_reviews: {
    role: "advisor",
    content: "Reviews are the new SEO. Response time matters — businesses that respond to reviews within an hour see significantly higher conversion rates than those that take days.\n\nOur AI Review Engine auto-responds to every review in your voice within minutes, flags negatives instantly, and auto-requests reviews after completed jobs. One client went from 4.8 to 5.0 in 60 days with 41 new reviews.",
    type: "recommendation",
  },
  recommendation_website: {
    role: "advisor",
    content: "Most business websites are from 2016–2020. Slow, not mobile-optimized, no booking integration, invisible to AI search. They're costing you leads every day.\n\nOur AI-Optimized Website rebuild includes modern design, sub-second load times, booking integration, AI search structure, and conversion optimization. Part of the AI Visibility Rebuild. 7 days to live.",
    type: "recommendation",
  },
  recommendation_all: {
    role: "advisor",
    content: "You're thinking like an operator — fix everything at once. That's the right move.\n\nOur AI Visibility Rebuild ($2,500 one-time) includes a complete website rebuild, AI search optimization, missed-call capture, booking integration, and review automation — all five systems deployed within 7 days. Optional $500/month Growth Maintenance keeps everything running and improving.\n\nMost clients see measurable ROI within the first month.",
    type: "recommendation",
  },
  cta: {
    role: "advisor",
    content: "Ready to see what this looks like for your specific business?\n\nFill out our Strategic Assessment form below. We review every application personally and respond within 24 hours. No sales calls. No pressure. Just a clear picture of what's possible.",
    type: "cta",
  },
};

export function AIAdvisor() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([advisorMessages.opening]);
  const [inputValue, setInputValue] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const send = async (text: string) => {
    const userMsg: Message = { role: "user", content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);

    setTimeout(async () => {
      let response: Message;
      const lower = text.toLowerCase();

      if (text === "Analyze my website") response = advisorMessages.analyze;
      else if (text === "Tell me what you offer") response = advisorMessages.offer;
      else if (text === "I have a specific problem") response = advisorMessages.challenge;
      else if (text === "Missed calls / after-hours") response = advisorMessages.recommendation_missed;
      else if (text === "Not showing up in search") response = advisorMessages.recommendation_search;
      else if (text === "Bad reviews / no reviews") response = advisorMessages.recommendation_reviews;
      else if (text === "Outdated website") response = advisorMessages.recommendation_website;
      else if (text === "Show me everything") response = advisorMessages.recommendation_all;
      else if (lower.includes("http") || lower.includes("www") || lower.includes(".com")) {
        // Real website analysis
        setMessages(prev => [...prev, { role: "advisor", content: "Analyzing your website... This takes about 5 seconds." }]);
        try {
          const res = await fetch("/api/analyze", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: text.trim() }),
          });
          const data = await res.json();
          if (data.error) {
            response = { role: "advisor", content: `I couldn't analyze that URL: ${data.error}. Try pasting the full URL including https://.` };
          } else {
            const overallEmoji = data.overall <= 3 ? "🔴" : data.overall <= 6 ? "🟡" : "🟢";
            response = {
              role: "advisor",
              content: `${overallEmoji} **Site Analysis: ${data.overall}/10**\n\nLoad time: ${(data.loadTime / 1000).toFixed(1)}s | Status: ${data.statusCode || "N/A"}\n\nKey findings:\n${data.findings.map((f: string) => `• ${f}`).join("\n")}\n\n${data.recommendation}`,
              type: "recommendation",
            };
          }
        } catch {
          response = { role: "advisor", content: "I couldn't reach that site. It may be down or blocking automated analysis. Try pasting the full URL (including https://) or try a different site." };
        }
      }
      else if (lower.includes("miss") || lower.includes("call") || lower.includes("after hour")) response = advisorMessages.recommendation_missed;
      else if (lower.includes("seo") || lower.includes("search") || lower.includes("google") || lower.includes("visible")) response = advisorMessages.recommendation_search;
      else if (lower.includes("review")) response = advisorMessages.recommendation_reviews;
      else if (lower.includes("website") || lower.includes("site") || lower.includes("slow")) response = advisorMessages.recommendation_website;
      else if (lower.includes("all") || lower.includes("everything") || lower.includes("full")) response = advisorMessages.recommendation_all;
      else if (text === "Tell me how") response = advisorMessages.offer;
      else if (text === "Show me what you offer") response = advisorMessages.offer;
      else if (lower.includes("audit") || lower.includes("start") || lower.includes("ready") || lower.includes("interested")) response = advisorMessages.cta;
      else {
        response = { role: "advisor", content: "I can help you figure out where your business is losing leads. Try:\n\n• Pasting your website URL for analysis\n• Telling me your biggest operational challenge\n• Asking about a specific system (voice, search, reviews, website)", options: ["Analyze my website", "I have a specific problem", "Show me everything"] };
      }

      setMessages(prev => [...prev, response]);
    }, 600);
  };

  const handleOption = (opt: string) => send(opt);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    send(inputValue.trim());
    setInputValue("");
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl px-5 py-3.5 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.03] group flex items-center gap-2.5 font-semibold text-sm"
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        AI Advisor
      </button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[400px] max-w-[calc(100vw-48px)] max-h-[600px] bg-neutral-950 border border-white/[0.08] rounded-2xl shadow-2xl shadow-purple-500/5 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] bg-white/[0.01]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-purple-500/15 flex items-center justify-center">
                  <span className="text-purple-400 text-sm">◆</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white/90">AI Systems Advisor</div>
                  <div className="text-[10px] text-white/35 uppercase tracking-wider font-medium">Apex Digital</div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/25 hover:text-white/60 transition-colors p-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 scrollbar-thin">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] ${msg.role === "user"
                    ? "bg-purple-600/20 border border-purple-500/20 rounded-2xl rounded-br-md px-4 py-3"
                    : msg.type === "recommendation"
                      ? "bg-white/[0.03] border border-purple-500/15 rounded-2xl rounded-bl-md px-5 py-4"
                      : msg.type === "cta"
                        ? "bg-gradient-to-br from-purple-500/[0.08] to-transparent border border-purple-500/20 rounded-2xl rounded-bl-md px-5 py-4"
                        : "bg-white/[0.03] border border-white/[0.06] rounded-2xl rounded-bl-md px-4 py-3"
                  }`}>
                    <p className="text-sm text-white/75 leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                    {msg.options && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {msg.options.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleOption(opt)}
                            className="text-xs font-medium px-3.5 py-2 rounded-xl border border-white/15 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/[0.05] transition-all duration-200"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                    {msg.type === "recommendation" && (
                      <div className="flex gap-2 mt-4">
                        <button onClick={() => handleOption("Show me everything")} className="text-xs font-medium px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white transition-all duration-200">Sounds good — tell me more</button>
                        <button onClick={() => send("I'm ready — let's do an audit")} className="text-xs font-medium px-4 py-2.5 rounded-xl border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition-all duration-200">Get an audit</button>
                      </div>
                    )}
                    {msg.type === "cta" && (
                      <div className="mt-4">
                        <a href="#apply" onClick={() => setOpen(false)} className="inline-block text-sm font-semibold px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white transition-all duration-200">Fill Out Strategic Assessment</a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="px-4 py-3 border-t border-white/[0.06] bg-white/[0.01]">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Paste your website or ask a question..."
                  className="flex-1 bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-purple-400/50 focus:outline-none focus:ring-1 focus:ring-purple-500/20 transition-all"
                />
                <button type="submit" className="bg-purple-600 hover:bg-purple-500 text-white rounded-xl px-4 py-2.5 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8L14 2L8 14L6.5 9.5L2 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
