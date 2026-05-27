"use client";

import { RetroGrid } from "@/components/ui/retro-grid";
import { TextAnimate } from "@/components/ui/text-animate";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShinyButton } from "@/components/ui/shiny-button";
import { MagicCard } from "@/components/ui/magic-card";
import { Particles } from "@/components/ui/particles";
import { AIAdvisor } from "@/components/ai-advisor";

const services = [
  { num: "01", title: "AI Voice Receptionist", desc: "Answers every call instantly — 2AM or Tuesday noon. Books appointments, provides quotes, handles FAQs. Never misses a call." },
  { num: "02", title: "AI Search Dominance", desc: "When someone asks ChatGPT or Perplexity for your service, your business appears first. Structured data, AI-citable content, full technical infrastructure." },
  { num: "03", title: "AI Review Engine", desc: "Auto-responds to every review within minutes. Flags negatives instantly. Auto-requests reviews after every completed job. Your reputation manages itself." },
  { num: "04", title: "AI Content Machine", desc: "30 short-form videos per month — generated for your business. Posted daily across TikTok, Reels, and Shorts. Zero production time from you." },
  { num: "05", title: "AI Booking Agent", desc: "Custom chatbot on your website, trained on your services and pricing. Qualifies leads and books jobs into your calendar — 24/7." },
  { num: "06", title: "AI-Optimized Websites", desc: "High-converting websites engineered for speed, SEO, AI discoverability, and lead capture. Designed to rank everywhere that matters." },
];

const testimonials = [
  {
    featured: true,
    quote: "Before Portier AI we were missing calls constantly after hours. Within the first month, booked appointments increased 31% and response times dropped from hours to under a minute. My part-time receptionist now focuses on in-person customers instead of playing phone tag.",
    author: "James R.",
    company: "Ridgeway HVAC",
    industry: "HVAC",
    metrics: [
      { value: "+31%", label: "Booked calls" },
      { value: "−42%", label: "Missed calls" },
      { value: "47 sec", label: "Avg response" },
    ]
  },
  {
    featured: false,
    quote: "Four customers found us through ChatGPT last month. Not Google — ChatGPT. My competitors are still dumping money into ads while we're getting organic referrals from AI search. The website rebuild alone paid for itself in 6 weeks.",
    author: "Sarah M.",
    company: "Denver Peak Electric",
    industry: "Electrical",
    metrics: [
      { value: "+68%", label: "Review growth" },
      { value: "4.8→5.0", label: "Google rating" },
      { value: "18 min", label: "Response time" },
    ]
  },
  {
    featured: false,
    quote: "I was skeptical about the AI voice agent. Three days after going live, it booked 14 after-hours calls we would have completely missed. That's $22,000 in revenue we would have lost. In one month. The system already paid for itself 10 times over.",
    author: "Mike T.",
    company: "Bay Area Roofing Co.",
    industry: "Roofing",
    metrics: [
      { value: "+$22K", label: "Recovered revenue" },
      { value: "89", label: "Calls handled" },
      { value: "60", label: "Jobs booked" },
    ]
  },
];

const faqs = [
  { q: "Will this replace my receptionist?", a: "No. It removes the chaos around your receptionist. The AI handles missed calls, after-hours requests, confirmations, and repetitive questions — so your staff can focus on customers. Most businesses don't need fewer people. They need fewer bottlenecks." },
  { q: "What if we already use ServiceTitan, Housecall Pro, or a CRM?", a: "Perfect. Portier AI sits on top of the systems you already use — not replace them. We connect AI voice, booking automation, reviews, and follow-up directly into your existing workflow. The goal is operational speed, not software disruption." },
  { q: "Will customers know they are talking to AI?", a: "Most do not. Modern voice systems are natural, conversational, fast, and available 24/7. Most callers only notice one thing: someone answered immediately." },
  { q: "How fast can this actually launch?", a: "Most first systems go live within 48 hours. We focus on the fastest revenue leak first: missed calls, weak follow-up, poor reviews, or slow booking. You don't need a six-month transformation. You need operational wins immediately." },
  { q: "What makes Portier AI different from a marketing agency?", a: "Marketing agencies chase attention. We build infrastructure. Ads stop working when spending stops. Operational systems keep generating returns every day. This is not social media management. This is operational leverage." },
  { q: "Do you redesign existing websites?", a: "Yes — and most clients need it. The majority of business websites today are slow, outdated, poorly structured, and invisible in modern search. We rebuild them into high-performance growth systems." },
];

const inputClasses = "w-full bg-white/[0.07] border border-white/20 rounded-xl px-5 py-4 text-base text-white placeholder:text-white/35 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-200";
const labelClasses = "block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2.5";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <Particles className="absolute inset-0 z-0 pointer-events-none" quantity={60} ease={50} color="#6666ff" refresh />

      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-black/60 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
          <div className="text-lg font-semibold tracking-tight">Portier<span className="text-purple-400">AI</span></div>
          <a href="#apply" className="bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02]">AI Growth Audit</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6">
        <RetroGrid className="absolute inset-0 z-0 opacity-30" angle={65} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <BlurFade delay={0.1}>
            <div className="inline-block bg-purple-500/[0.12] text-purple-300 text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wide uppercase border border-purple-500/20">AI Growth Infrastructure</div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] mb-6">
              <TextAnimate animation="blurInUp" by="word">
                We build AI systems that capture more calls, book more jobs, and increase visibility
              </TextAnimate>
            </h1>
          </BlurFade>
          <BlurFade delay={0.5}>
            <p className="text-lg text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
              AI receptionists, review systems, booking automation, AI-optimized websites, and visibility infrastructure for service-based businesses that want faster growth and fewer missed opportunities.
            </p>
          </BlurFade>
          <BlurFade delay={0.7}>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a href="#apply"><ShinyButton className="px-9 py-4 text-base font-semibold rounded-xl">Get an AI Growth Audit</ShinyButton></a>
              <a href="#services" className="text-sm text-white/60 hover:text-white font-medium transition-all duration-200 border border-white/25 hover:border-white/40 rounded-xl px-7 py-4 hover:bg-white/[0.05]">Watch Demos</a>
            </div>
          </BlurFade>
          <BlurFade delay={1}>
            <div className="flex justify-center gap-14 mt-16 text-center">
              <div><div className="text-3xl font-light tracking-tight text-white/80">48hr</div><div className="text-[11px] text-white/35 uppercase tracking-[0.15em] mt-1.5 font-medium">To go live</div></div>
              <div><div className="text-3xl font-light tracking-tight text-white/80">$0</div><div className="text-[11px] text-white/35 uppercase tracking-[0.15em] mt-1.5 font-medium">Setup fee</div></div>
              <div><div className="text-3xl font-light tracking-tight text-white/80">30d</div><div className="text-[11px] text-white/35 uppercase tracking-[0.15em] mt-1.5 font-medium">Guarantee</div></div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-24 px-6 max-w-6xl mx-auto">
        <BlurFade>
          <div className="text-center mb-16">
            <div className="text-xs font-semibold text-purple-400 uppercase tracking-[0.2em] mb-4">What We Build</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-4">Six AI systems. One platform.</h2>
            <p className="text-white/45 max-w-lg mx-auto text-base">AI reception. Booking automation. Review systems. Search visibility. AI content. High-performance websites.</p>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <BlurFade key={s.num} delay={0.1 * i}>
              <MagicCard className="p-7 border-white/[0.08] bg-white/[0.02] hover:border-purple-500/30 hover:bg-white/[0.04] transition-all duration-300" gradientSize={200} gradientColor="#6666ff" gradientOpacity={0.04}>
                <div className="text-xs font-semibold text-purple-400 mb-3 tracking-wider">{s.num}</div>
                <h3 className="text-lg font-semibold mb-2.5 tracking-tight text-white/90">{s.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{s.desc}</p>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-24 px-6 border-y border-white/[0.06] bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <BlurFade>
            <div className="text-center mb-16">
              <div className="text-xs font-semibold text-purple-400 uppercase tracking-[0.2em] mb-4">How We Work</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-4">Live in 48 hours. Scaling in 30 days.</h2>
              <p className="text-white/45">No 6-week onboarding. No meetings about meetings.</p>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Discovery & Build", desc: "One call to understand your business. Then we build all six AI systems, configured specifically to you, within 48 hours." },
              { num: "02", title: "Go Live", desc: "Systems activate. AI answers calls. Reviews get managed. Content posts. Website goes live. You get a real-time dashboard." },
              { num: "03", title: "Optimize & Scale", desc: "Weekly performance reviews. We tune the AI based on real data. Every month the system gets smarter. You focus on the work." },
            ].map((step, i) => (
              <BlurFade key={step.num} delay={0.1 * i}>
                <div className="text-center p-8 border border-white/[0.08] rounded-2xl bg-white/[0.02] hover:border-white/[0.15] transition-all duration-300">
                  <div className="text-5xl font-thin text-purple-400 mb-5">{step.num}</div>
                  <h3 className="text-lg font-semibold mb-3 text-white/90">{step.title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">{step.desc}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-24 px-6 border-y border-white/[0.06] bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <BlurFade>
            <div className="mb-16">
              <div className="text-xs font-semibold text-purple-400 uppercase tracking-[0.2em] mb-4">Results</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-4">Operational results. Not marketing promises.</h2>
              <p className="text-white/45 text-base max-w-xl">Real improvements from businesses implementing AI systems and visibility infrastructure.</p>
            </div>
          </BlurFade>

          {/* Featured testimonial */}
          {testimonials.filter(t => t.featured).map((t, i) => (
            <BlurFade key={i}>
              <div className="relative border border-purple-500/20 rounded-2xl p-10 sm:p-14 mb-10 bg-gradient-to-br from-purple-500/[0.03] to-transparent hover:border-purple-400/30 transition-all duration-500 group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/[0.03] rounded-bl-full blur-3xl pointer-events-none" />
                <blockquote className="text-xl sm:text-2xl font-light tracking-tight text-white/80 leading-relaxed mb-8 max-w-3xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="w-9 h-9 rounded-full bg-purple-500/20 flex items-center justify-center text-sm font-semibold text-purple-300">{t.author.split(" ").map(n => n[0]).join("")}</div>
                      <div>
                        <div className="text-base font-semibold text-white/90">{t.author}</div>
                        <div className="text-sm text-white/40">{t.company} &middot; {t.industry}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    {t.metrics.map((m, j) => (
                      <div key={j} className="text-center">
                        <div className="text-xl font-light tracking-tight text-white/80 group-hover:text-purple-300 transition-colors">{m.value}</div>
                        <div className="text-[11px] text-white/35 uppercase tracking-wider font-medium mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}

          {/* Secondary testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.filter(t => !t.featured).map((t, i) => (
              <BlurFade key={i} delay={0.1 * (i + 1)}>
                <div className="border border-white/[0.08] rounded-2xl p-8 bg-white/[0.01] hover:border-white/[0.15] hover:bg-white/[0.03] transition-all duration-300 group">
                  <blockquote className="text-base text-white/60 leading-relaxed mb-6 font-light">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center text-xs font-semibold text-white/50">{t.author.split(" ").map(n => n[0]).join("")}</div>
                    <div>
                      <div className="text-sm font-semibold text-white/80">{t.author}</div>
                      <div className="text-xs text-white/35">{t.company} &middot; {t.industry}</div>
                    </div>
                  </div>
                  <div className="flex gap-5 pt-4 border-t border-white/[0.06]">
                    {t.metrics.map((m, j) => (
                      <div key={j} className="text-center">
                        <div className="text-base font-light tracking-tight text-white/70 group-hover:text-purple-300 transition-colors">{m.value}</div>
                        <div className="text-[10px] text-white/30 uppercase tracking-wider font-medium mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="relative py-24 px-6 max-w-4xl mx-auto">
        <BlurFade>
          <div className="text-center mb-16">
            <div className="text-xs font-semibold text-purple-400 uppercase tracking-[0.2em] mb-4">Pricing</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-4">Start with a rebuild. Scale from there.</h2>
            <p className="text-white/45 text-base">One-time investment to modernize everything. Optional monthly maintenance to keep it running.</p>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BlurFade delay={0.1}>
            <MagicCard className="p-9 border-purple-500/25 bg-white/[0.02] hover:border-purple-400/40 transition-all duration-300" gradientSize={300} gradientColor="#7777ff" gradientOpacity={0.06}>
              <div className="inline-block bg-purple-600 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">Most Popular</div>
              <h3 className="text-2xl font-semibold mb-1.5 text-white/95">AI Visibility Rebuild</h3>
              <div className="text-5xl font-light tracking-tight mb-1 text-white/95">$2,500</div>
              <div className="text-sm text-white/40 mb-8 font-medium">One-time. Live in 7 days.</div>
              <ul className="space-y-3.5 text-sm text-white/55 mb-9 leading-relaxed">
                <li>✓ Premium website redesign</li>
                <li>✓ Local SEO structure</li>
                <li>✓ AI search optimization</li>
                <li>✓ Missed-call capture system</li>
                <li>✓ Booking integration</li>
                <li>✓ Review automation setup</li>
                <li>✓ Speed & mobile optimization</li>
                <li>✓ 30-day performance guarantee</li>
              </ul>
              <a href="#apply"><ShinyButton className="w-full py-4 text-base font-semibold rounded-xl">Get an AI Growth Audit</ShinyButton></a>
            </MagicCard>
          </BlurFade>
          <BlurFade delay={0.2}>
            <MagicCard className="p-9 border-white/[0.08] bg-white/[0.01] hover:border-white/20 transition-all duration-300" gradientSize={200} gradientColor="#5555ff" gradientOpacity={0.03}>
              <h3 className="text-2xl font-semibold mb-1.5 text-white/90">Growth Maintenance</h3>
              <div className="text-5xl font-light tracking-tight mb-1 text-white/90">$500</div>
              <div className="text-sm text-white/40 mb-8 font-medium">per month. Cancel anytime.</div>
              <ul className="space-y-3.5 text-sm text-white/55 mb-9 leading-relaxed">
                <li>✓ Ongoing SEO updates</li>
                <li>✓ AI content & posting</li>
                <li>✓ Review monitoring & responses</li>
                <li>✓ System health monitoring</li>
                <li>✓ Lead optimization</li>
                <li>✓ Conversion improvements</li>
                <li>✓ Monthly performance report</li>
              </ul>
              <a href="#apply" className="block w-full text-center py-4 text-base font-semibold rounded-xl border-2 border-white/25 text-white/75 hover:text-white hover:border-white/50 hover:bg-white/[0.06] transition-all duration-200">Get Started</a>
            </MagicCard>
          </BlurFade>
        </div>
        <BlurFade delay={0.3}>
          <p className="text-center text-sm text-white/35 mt-9">Need full AI infrastructure? <a href="#apply" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors underline decoration-purple-500/30 underline-offset-4">Apply for a custom audit and quote.</a></p>
        </BlurFade>
      </section>

      {/* FAQ */}
      <section className="relative py-24 px-6 border-y border-white/[0.06] bg-white/[0.01]">
        <div className="max-w-3xl mx-auto">
          <BlurFade>
            <div className="mb-16">
              <div className="text-xs font-semibold text-purple-400 uppercase tracking-[0.2em] mb-4">FAQ</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">What serious business owners ask before they scale</h2>
            </div>
          </BlurFade>
          <div className="space-y-12">
            {faqs.map((faq, i) => (
              <BlurFade key={i} delay={0.05 * i}>
                <div>
                  <h3 className="text-xl font-semibold mb-3.5 text-white/90">{faq.q}</h3>
                  <p className="text-white/45 leading-relaxed max-w-xl text-base">{faq.a}</p>
                </div>
              </BlurFade>
            ))}
          </div>
          <BlurFade delay={0.5}>
            <div className="mt-20 pt-14 border-t border-white/[0.08]">
              <p className="text-2xl font-light tracking-tight text-white/65 mb-10 max-w-lg leading-relaxed">The businesses adopting AI infrastructure today will dominate local markets tomorrow.</p>
              <a href="#apply"><ShinyButton className="px-10 py-4 text-lg font-semibold rounded-xl">Apply for a Free AI Growth Audit</ShinyButton></a>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="relative py-24 px-6 max-w-2xl mx-auto text-center">
        <BlurFade>
          <div className="text-xs font-semibold text-purple-400 uppercase tracking-[0.2em] mb-4">Strategic Assessment</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-4">We only onboard 3 businesses per month.</h2>
          <p className="text-white/45 mb-4 text-base">This form helps us understand your business before we invest time in a conversation. Every application is reviewed personally.</p>
          <div className="flex justify-center gap-6 text-xs text-white/30 font-medium mb-12 flex-wrap">
            <span className="flex items-center gap-1.5"><span className="text-purple-400">✓</span> Strategic review included</span>
            <span className="flex items-center gap-1.5"><span className="text-purple-400">✓</span> Personalized recommendations</span>
            <span className="flex items-center gap-1.5"><span className="text-purple-400">✓</span> Built for serious operators</span>
          </div>
        </BlurFade>
        <BlurFade delay={0.2}>
          <MagicCard className="p-9 sm:p-12 border-white/[0.08] bg-white/[0.02] text-left" gradientSize={300} gradientColor="#6666ff" gradientOpacity={0.04}>
            <form action="mailto:autho369@gmail.com?subject=Portier%20AI%20—%20AI%20Growth%20Audit" method="post" encType="text/plain" className="space-y-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                <div><label className={labelClasses}>Full Name <span className="text-purple-400">*</span></label><input name="Name" required className={inputClasses} placeholder="John Smith" /></div>
                <div><label className={labelClasses}>Company Name <span className="text-purple-400">*</span></label><input name="Company" required className={inputClasses} placeholder="Smith Plumbing & HVAC" /></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                <div><label className={labelClasses}>Website URL</label><input name="Website" type="url" className={inputClasses} placeholder="https://yourbusiness.com" /></div>
                <div><label className={labelClasses}>Business Type</label><select name="BusinessType" className={`${inputClasses} appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23ffffff40%27 stroke-width=%271.5%27%3E%3Cpath d=%27m2 4 4 4 4-4%27/%3E%3C/svg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat`}>
                  <option value="" className="bg-neutral-900 text-white/40">Select industry</option>
                  <option value="home-services" className="bg-neutral-900 text-white">Home Services</option>
                  <option value="medical" className="bg-neutral-900 text-white">Medical / Dental</option>
                  <option value="legal" className="bg-neutral-900 text-white">Legal</option>
                  <option value="property" className="bg-neutral-900 text-white">Property Management</option>
                  <option value="hospitality" className="bg-neutral-900 text-white">Hospitality</option>
                  <option value="retail" className="bg-neutral-900 text-white">Local Retail</option>
                  <option value="multi-location" className="bg-neutral-900 text-white">Multi-Location Business</option>
                  <option value="other" className="bg-neutral-900 text-white">Other</option>
                </select></div>
              </div>
              <div><label className={labelClasses}>Current Biggest Challenge</label><textarea name="Challenge" rows={3} className={`${inputClasses} resize-none`} placeholder="Missed calls, weak visibility, outdated website, low reviews, inconsistent lead flow, manual admin work..." /></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                <div><label className={labelClasses}>Monthly Lead Volume</label><select name="LeadVolume" className={`${inputClasses} appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23ffffff40%27 stroke-width=%271.5%27%3E%3Cpath d=%27m2 4 4 4 4-4%27/%3E%3C/svg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat`}>
                  <option value="" className="bg-neutral-900 text-white/40">Select range</option>
                  <option value="under-25" className="bg-neutral-900 text-white">Under 25 leads/month</option>
                  <option value="25-100" className="bg-neutral-900 text-white">25–100</option>
                  <option value="100-500" className="bg-neutral-900 text-white">100–500</option>
                  <option value="500-plus" className="bg-neutral-900 text-white">500+</option>
                </select></div>
                <div><label className={labelClasses}>Timeline</label><select name="Timeline" className={`${inputClasses} appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23ffffff40%27 stroke-width=%271.5%27%3E%3Cpath d=%27m2 4 4 4 4-4%27/%3E%3C/svg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat`}>
                  <option value="" className="bg-neutral-900 text-white/40">Select timeline</option>
                  <option value="asap" className="bg-neutral-900 text-white">ASAP</option>
                  <option value="30-days" className="bg-neutral-900 text-white">Within 30 days</option>
                  <option value="90-days" className="bg-neutral-900 text-white">Within 90 days</option>
                  <option value="exploring" className="bg-neutral-900 text-white">Just exploring</option>
                </select></div>
              </div>
              <div>
                <label className={labelClasses}>What are you most interested in?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-2">
                  {["Website Rebuild","AI Voice Receptionist","SEO / AI Visibility","Review Growth","Booking Automation","Content Systems","Full AI Infrastructure"].map((item) => (
                    <label key={item} className="flex items-center gap-3 text-sm text-white/60 hover:text-white/80 transition-colors cursor-pointer group">
                      <input type="checkbox" name="Interests" value={item} className="w-4 h-4 rounded border-white/20 bg-white/[0.06] text-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:ring-offset-0 cursor-pointer accent-purple-500" />
                      <span className="group-hover:text-white/80 transition-colors">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                <div><label className={labelClasses}>Email Address <span className="text-purple-400">*</span></label><input type="email" name="Email" required className={inputClasses} placeholder="you@company.com" /></div>
                <div><label className={labelClasses}>Phone Number <span className="text-white/25 font-normal">(recommended)</span></label><input type="tel" name="Phone" className={inputClasses} placeholder="(555) 123-4567" /></div>
              </div>
              <div><label className={labelClasses}>What would a successful outcome look like for your business?</label><textarea name="Outcome" rows={3} className={`${inputClasses} resize-none`} placeholder="More booked jobs, fewer missed calls, stronger online visibility, better operational efficiency..." /></div>
              <button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-4 rounded-xl transition-all duration-200 text-base hover:shadow-lg hover:shadow-purple-500/25 hover:scale-[1.01] focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">Request AI Growth Audit</button>
              <p className="text-xs text-white/25 text-center pt-1 leading-relaxed">We review every application personally. If there is a strong fit, we will reach out within 24 hours. No spam. No outsourced sales teams. No generic pitches.</p>
            </form>
          </MagicCard>
        </BlurFade>
      </section>

      <AIAdvisor />
    </div>
  );
}
