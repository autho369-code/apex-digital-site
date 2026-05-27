"use client";

import { RetroGrid } from "@/components/ui/retro-grid";
import { TextAnimate } from "@/components/ui/text-animate";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShinyButton } from "@/components/ui/shiny-button";
import { MagicCard } from "@/components/ui/magic-card";
import { Marquee } from "@/components/ui/marquee";
import { Particles } from "@/components/ui/particles";

const services = [
  { num: "01", title: "AI Voice Receptionist", desc: "Answers every call instantly — 2AM or Tuesday noon. Books appointments, provides quotes, handles FAQs. Never misses a call." },
  { num: "02", title: "AI Search Dominance", desc: "When someone asks ChatGPT or Perplexity for your service, your business appears first. Structured data, AI-citable content, full technical infrastructure." },
  { num: "03", title: "AI Review Engine", desc: "Auto-responds to every review within minutes. Flags negatives instantly. Auto-requests reviews after every completed job. Your reputation manages itself." },
  { num: "04", title: "AI Content Machine", desc: "30 short-form videos per month — generated for your business. Posted daily across TikTok, Reels, and Shorts. Zero production time from you." },
  { num: "05", title: "AI Booking Agent", desc: "Custom chatbot on your website, trained on your services and pricing. Qualifies leads and books jobs into your calendar — 24/7." },
  { num: "06", title: "AI-Optimized Websites", desc: "High-converting websites engineered for speed, SEO, AI discoverability, and lead capture. Designed to rank everywhere that matters." },
];

const testimonials = [
  { quote: "Within 3 days, the AI was booking more calls than my part-time receptionist. I haven't missed an after-hours call since.", author: "Mike R.", role: "HVAC Owner, Dallas TX" },
  { quote: "Four customers this month found us through ChatGPT. My competitors are paying Google $3,000/month. I'm getting better leads at a fraction.", author: "James K.", role: "Plumbing Owner, Phoenix AZ" },
  { quote: "The review system generated 41 new reviews in 60 days. Our rating went from 4.8 to 4.9. That alone paid for everything.", author: "Sarah M.", role: "Electrical Company, Denver CO" },
  { quote: "30 AI-generated videos in 30 days. 183 inbound leads. 14 booked jobs. Zero ad spend. I still can't believe it.", author: "David L.", role: "Landscaping Company, Atlanta GA" },
  { quote: "89 after-hours calls handled by AI last month. 60 became booked inspections. Previously, every single one was missed.", author: "Tom R.", role: "Roofing Company, Tampa FL" },
];

const faqs = [
  { q: "Will this replace my receptionist?", a: "No. It removes the chaos around your receptionist. The AI handles missed calls, after-hours requests, confirmations, and repetitive questions — so your staff can focus on customers. Most businesses don't need fewer people. They need fewer bottlenecks." },
  { q: "What if we already use ServiceTitan, Housecall Pro, or a CRM?", a: "Perfect. Apex Digital sits on top of the systems you already use — not replace them. We connect AI voice, booking automation, reviews, and follow-up directly into your existing workflow. The goal is operational speed, not software disruption." },
  { q: "Will customers know they are talking to AI?", a: "Most do not. Modern voice systems are natural, conversational, fast, and available 24/7. Most callers only notice one thing: someone answered immediately." },
  { q: "How fast can this actually launch?", a: "Most first systems go live within 48 hours. We focus on the fastest revenue leak first: missed calls, weak follow-up, poor reviews, or slow booking. You don't need a six-month transformation. You need operational wins immediately." },
  { q: "What makes Apex different from a marketing agency?", a: "Marketing agencies chase attention. We build infrastructure. Ads stop working when spending stops. Operational systems keep generating returns every day. This is not social media management. This is operational leverage." },
  { q: "Do you redesign existing websites?", a: "Yes — and most clients need it. The majority of business websites today are slow, outdated, poorly structured, and invisible in modern search. We rebuild them into high-performance growth systems." },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Particles className="absolute inset-0 z-0" quantity={50} ease={40} color="#4444ff" refresh />

      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
          <div className="text-lg font-semibold tracking-tight">Apex<span className="text-purple-400">Digital</span></div>
          <a href="#apply" className="bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">AI Growth Audit</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6">
        <RetroGrid className="absolute inset-0 z-0 opacity-30" angle={65} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <BlurFade delay={0.1}>
            <div className="inline-block bg-purple-500/10 text-purple-300 text-xs font-medium px-3 py-1.5 rounded-full mb-8 tracking-wide uppercase">AI Growth Infrastructure</div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] mb-6">
              <TextAnimate animation="blurInUp" by="word">
                We build AI systems that capture more calls, book more jobs, and increase visibility
              </TextAnimate>
            </h1>
          </BlurFade>
          <BlurFade delay={0.5}>
            <p className="text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
              AI receptionists, review systems, booking automation, AI-optimized websites, and visibility infrastructure for service-based businesses that want faster growth and fewer missed opportunities.
            </p>
          </BlurFade>
          <BlurFade delay={0.7}>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a href="#apply"><ShinyButton className="px-8 py-3 text-base font-medium rounded-xl">Get an AI Growth Audit</ShinyButton></a>
              <a href="#services" className="text-sm text-white/40 hover:text-white/70 transition-colors border border-white/10 rounded-xl px-6 py-3">Watch Demos</a>
            </div>
          </BlurFade>
          <BlurFade delay={1}>
            <div className="flex justify-center gap-12 mt-16 text-center">
              <div><div className="text-3xl font-light tracking-tight">48hr</div><div className="text-xs text-white/30 uppercase tracking-wider mt-1">To go live</div></div>
              <div><div className="text-3xl font-light tracking-tight">$0</div><div className="text-xs text-white/30 uppercase tracking-wider mt-1">Setup fee</div></div>
              <div><div className="text-3xl font-light tracking-tight">30d</div><div className="text-xs text-white/30 uppercase tracking-wider mt-1">Guarantee</div></div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-24 px-6 max-w-6xl mx-auto">
        <BlurFade>
          <div className="text-center mb-16">
            <div className="text-xs font-medium text-purple-400 uppercase tracking-widest mb-4">What We Build</div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">Six AI systems. One platform.</h2>
            <p className="text-white/40 max-w-lg mx-auto">AI reception. Booking automation. Review systems. Search visibility. AI content. High-performance websites.</p>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <BlurFade key={s.num} delay={0.1 * i}>
              <MagicCard className="p-6 border-white/5 bg-white/[0.02] hover:border-purple-500/20 transition-colors" gradientSize={200} gradientColor="#3333ff" gradientOpacity={0.03}>
                <div className="text-xs font-medium text-purple-400 mb-3">{s.num}</div>
                <h3 className="text-lg font-medium mb-2 tracking-tight">{s.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{s.desc}</p>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-24 px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <BlurFade>
            <div className="text-center mb-16">
              <div className="text-xs font-medium text-purple-400 uppercase tracking-widest mb-4">How We Work</div>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">Live in 48 hours. Scaling in 30 days.</h2>
              <p className="text-white/40">No 6-week onboarding. No meetings about meetings.</p>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Discovery & Build", desc: "One call to understand your business. Then we build all six AI systems, configured specifically to you, within 48 hours." },
              { num: "02", title: "Go Live", desc: "Systems activate. AI answers calls. Reviews get managed. Content posts. Website goes live. You get a real-time dashboard." },
              { num: "03", title: "Optimize & Scale", desc: "Weekly performance reviews. We tune the AI based on real data. Every month the system gets smarter. You focus on the work." },
            ].map((step, i) => (
              <BlurFade key={step.num} delay={0.1 * i}>
                <div className="text-center p-8 border border-white/5 rounded-2xl bg-white/[0.01]">
                  <div className="text-5xl font-thin text-purple-400 mb-4">{step.num}</div>
                  <h3 className="text-lg font-medium mb-3">{step.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-24 overflow-hidden">
        <BlurFade>
          <div className="text-center mb-12 max-w-6xl mx-auto px-6">
            <div className="text-xs font-medium text-purple-400 uppercase tracking-widest mb-4">Results</div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">What this looks like in practice.</h2>
          </div>
        </BlurFade>
        <Marquee pauseOnHover className="[--duration:40s]">
          {testimonials.map((t, i) => (
            <MagicCard key={i} className="w-80 p-6 mx-3 border-white/5 bg-white/[0.02] flex-shrink-0" gradientSize={150} gradientColor="#3333ff" gradientOpacity={0.02}>
              <p className="text-sm text-white/60 italic leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div className="text-sm font-medium">{t.author}</div>
              <div className="text-xs text-white/30">{t.role}</div>
            </MagicCard>
          ))}
        </Marquee>
      </section>

      {/* PRICING */}
      <section className="relative py-24 px-6 max-w-4xl mx-auto">
        <BlurFade>
          <div className="text-center mb-16">
            <div className="text-xs font-medium text-purple-400 uppercase tracking-widest mb-4">Pricing</div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">Start with a rebuild. Scale from there.</h2>
            <p className="text-white/40">One-time investment to modernize everything. Optional monthly maintenance to keep it running.</p>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BlurFade delay={0.1}>
            <MagicCard className="p-8 border-purple-500/20 bg-white/[0.02]" gradientSize={300} gradientColor="#4444ff" gradientOpacity={0.05}>
              <div className="inline-block bg-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">Most Popular</div>
              <h3 className="text-xl font-medium mb-1">AI Visibility Rebuild</h3>
              <div className="text-4xl font-light tracking-tight mb-1">$2,500</div>
              <div className="text-sm text-white/30 mb-8">One-time. Live in 7 days.</div>
              <ul className="space-y-3 text-sm text-white/50 mb-8">
                <li>✓ Premium website redesign</li>
                <li>✓ Local SEO structure</li>
                <li>✓ AI search optimization</li>
                <li>✓ Missed-call capture system</li>
                <li>✓ Booking integration</li>
                <li>✓ Review automation setup</li>
                <li>✓ Speed & mobile optimization</li>
                <li>✓ 30-day performance guarantee</li>
              </ul>
              <a href="#apply"><ShinyButton className="w-full py-3 text-sm font-medium rounded-xl">Get an AI Growth Audit</ShinyButton></a>
            </MagicCard>
          </BlurFade>
          <BlurFade delay={0.2}>
            <MagicCard className="p-8 border-white/5 bg-white/[0.01]" gradientSize={200} gradientColor="#3333ff" gradientOpacity={0.02}>
              <h3 className="text-xl font-medium mb-1">Growth Maintenance</h3>
              <div className="text-4xl font-light tracking-tight mb-1">$500</div>
              <div className="text-sm text-white/30 mb-8">per month. Cancel anytime.</div>
              <ul className="space-y-3 text-sm text-white/50 mb-8">
                <li>✓ Ongoing SEO updates</li>
                <li>✓ AI content & posting</li>
                <li>✓ Review monitoring & responses</li>
                <li>✓ System health monitoring</li>
                <li>✓ Lead optimization</li>
                <li>✓ Conversion improvements</li>
                <li>✓ Monthly performance report</li>
              </ul>
              <a href="#apply" className="block w-full text-center py-3 text-sm font-medium rounded-xl border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-colors">Get Started</a>
            </MagicCard>
          </BlurFade>
        </div>
        <BlurFade delay={0.3}>
          <p className="text-center text-sm text-white/30 mt-8">Need full AI infrastructure? <a href="#apply" className="text-purple-400 hover:text-purple-300 transition-colors">Apply for a custom audit and quote.</a></p>
        </BlurFade>
      </section>

      {/* FAQ */}
      <section className="relative py-24 px-6 border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <BlurFade>
            <div className="mb-16">
              <div className="text-xs font-medium text-purple-400 uppercase tracking-widest mb-4">FAQ</div>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight">What serious business owners ask before they scale</h2>
            </div>
          </BlurFade>
          <div className="space-y-10">
            {faqs.map((faq, i) => (
              <BlurFade key={i} delay={0.05 * i}>
                <div>
                  <h3 className="text-xl font-medium mb-3">{faq.q}</h3>
                  <p className="text-white/40 leading-relaxed max-w-xl">{faq.a}</p>
                </div>
              </BlurFade>
            ))}
          </div>
          <BlurFade delay={0.5}>
            <div className="mt-20 pt-12 border-t border-white/5">
              <p className="text-2xl font-light tracking-tight text-white/60 mb-8 max-w-lg leading-relaxed">The businesses adopting AI infrastructure today will dominate local markets tomorrow.</p>
              <a href="#apply"><ShinyButton className="px-8 py-3 text-base font-medium rounded-xl">Apply for a Free AI Growth Audit</ShinyButton></a>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="relative py-24 px-6 max-w-lg mx-auto text-center">
        <BlurFade>
          <div className="text-xs font-medium text-purple-400 uppercase tracking-widest mb-4">Apply</div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">We only onboard 3 businesses per month.</h2>
          <p className="text-white/40 mb-10">Fill out the form. We review every application within 24 hours. No sales call. No pressure.</p>
        </BlurFade>
        <BlurFade delay={0.2}>
          <MagicCard className="p-8 border-white/5 bg-white/[0.02] text-left" gradientSize={300} gradientColor="#3333ff" gradientOpacity={0.03}>
            <form action="mailto:autho369@gmail.com?subject=Apex%20Digital%20Application" method="post" encType="text/plain" className="space-y-5">
              <div><label className="block text-xs font-medium text-white/30 uppercase tracking-wider mb-2">Your Name</label><input name="Name" required className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-purple-500/50 focus:outline-none transition-colors" placeholder="John Smith" /></div>
              <div><label className="block text-xs font-medium text-white/30 uppercase tracking-wider mb-2">Company Name</label><input name="Company" required className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-purple-500/50 focus:outline-none transition-colors" placeholder="Smith Plumbing & HVAC" /></div>
              <div><label className="block text-xs font-medium text-white/30 uppercase tracking-wider mb-2">Business Type</label><input name="Business" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-purple-500/50 focus:outline-none transition-colors" placeholder="e.g. plumbing, dental, salon, restaurant..." /></div>
              <div><label className="block text-xs font-medium text-white/30 uppercase tracking-wider mb-2">Email</label><input type="email" name="Email" required className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-purple-500/50 focus:outline-none transition-colors" placeholder="you@company.com" /></div>
              <div><label className="block text-xs font-medium text-white/30 uppercase tracking-wider mb-2">Biggest challenge right now</label><textarea name="Challenge" rows={3} className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-purple-500/50 focus:outline-none transition-colors resize-none" placeholder="e.g. missing after-hours calls, not enough leads..." /></div>
              <button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-3.5 rounded-xl transition-colors text-sm">Submit Application</button>
              <p className="text-xs text-white/15 text-center">We respond within 24 hours. No spam. No sales calls.</p>
            </form>
          </MagicCard>
        </BlurFade>
      </section>

      {/* FOOTER */}
      <footer className="relative py-12 px-6 border-t border-white/5 text-center">
        <p className="text-sm text-white/20">Apex Digital &copy; 2025. AI Growth Infrastructure.</p>
        <a href="mailto:autho369@gmail.com" className="text-sm text-white/30 hover:text-white/50 transition-colors mt-2 inline-block">autho369@gmail.com</a>
      </footer>
    </div>
  );
}
