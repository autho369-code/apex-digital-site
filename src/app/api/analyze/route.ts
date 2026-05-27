import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();
    if (!url) return NextResponse.json({ error: "No URL provided" }, { status: 400 });

    const normalized = url.startsWith("http") ? url : `https://${url}`;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const start = Date.now();
    let html = "";
    let loadTime = 0;
    let statusCode = 0;
    let error: string | null = null;

    try {
      const res = await fetch(normalized, {
        signal: controller.signal,
        headers: { "User-Agent": "ApexDigital-AI-Advisor/1.0" },
      });
      clearTimeout(timeout);
      statusCode = res.status;
      loadTime = Date.now() - start;
      html = await res.text();
    } catch (e: any) {
      clearTimeout(timeout);
      loadTime = Date.now() - start;
      error = e.message || "Failed to fetch";
    }

    const findings: string[] = [];
    const score = { speed: 10, mobile: 10, seo: 10, conversion: 10, ai: 10 };

    // SPEED
    if (error) {
      findings.push("Site could not be reached — possible downtime or DNS issue");
      score.speed = 0;
    } else if (loadTime > 3000) {
      findings.push(`Page load time: ${(loadTime / 1000).toFixed(1)}s — too slow, visitors leave after 3s`);
      score.speed = 3;
    } else if (loadTime > 1500) {
      findings.push(`Page load time: ${(loadTime / 1000).toFixed(1)}s — acceptable but could be faster`);
      score.speed = 6;
    } else {
      findings.push(`Page load time: ${(loadTime / 1000).toFixed(1)}s — good speed`);
      score.speed = 9;
    }

    // MOBILE
    const hasViewport = /viewport/.test(html) || /meta.*width.*device/.test(html);
    if (!hasViewport) {
      findings.push("No mobile viewport meta tag detected — likely not mobile-optimized");
      score.mobile = 2;
    } else {
      findings.push("Mobile viewport detected");
    }

    // SEO / SCHEMA
    const hasSchema = /application\/ld\+json/.test(html) || /itemtype/.test(html) || /schema\.org/.test(html);
    const hasTitle = /<title[^>]*>/.test(html);
    const hasDescription = /<meta[^>]*name=["']description["']/.test(html);
    const hasH1 = /<h1[^>]*>/i.test(html);

    if (!hasSchema) {
      findings.push("No structured data (Schema.org) found — invisible to AI search engines like ChatGPT and Perplexity");
      score.ai = 2;
      score.seo = 3;
    } else {
      findings.push("Structured data detected — AI-readable");
      score.ai = 8;
    }

    if (!hasTitle) {
      findings.push("Missing page title — critical SEO issue");
      score.seo = Math.min(score.seo, 2);
    }
    if (!hasDescription) {
      findings.push("Missing meta description — hurts click-through from search results");
      score.seo = Math.min(score.seo, 3);
    }
    if (!hasH1) {
      findings.push("No H1 heading found — weak content hierarchy");
      score.seo = Math.min(score.seo, 4);
    }
    if (hasTitle && hasDescription && hasH1 && score.seo > 6) {
      score.seo = Math.min(score.seo + 2, 10);
    }

    // CONVERSION
    const hasPhone = /tel:/.test(html) || /\d{3}[-.]\d{3}[-.]\d{4}/.test(html);
    const hasForm = /<form[^>]*>/i.test(html) || /contact/.test(html.toLowerCase());
    const hasBooking = /book|schedule|appointment|calendar|calendly|cal\.com/.test(html.toLowerCase());

    if (!hasPhone && !hasForm) {
      findings.push("No visible phone number or contact form — visitors can't reach you");
      score.conversion = 1;
    } else if (!hasBooking) {
      findings.push("No booking or scheduling integration found — visitors must call or email to book");
      score.conversion = 4;
    } else {
      findings.push("Booking/scheduling integration detected");
      score.conversion = 8;
    }
    if (hasPhone) score.conversion = Math.min(score.conversion + 2, 10);

    // OVERALL
    const overall = Math.round(
      (score.speed + score.mobile + score.seo + score.conversion + score.ai) / 5
    );

    return NextResponse.json({
      url: normalized,
      statusCode,
      loadTime,
      error,
      score,
      overall,
      findings,
      recommendation: getRecommendation(overall, score),
    });
  } catch {
    return NextResponse.json({ error: "Analysis failed" }, { status: 500 });
  }
}

function getRecommendation(overall: number, score: Record<string, number>) {
  if (overall <= 3) {
    return "Your website needs a complete rebuild. It's likely costing you leads every day — slow, not mobile-friendly, invisible to AI search, and missing basic conversion elements. This is exactly what our AI Visibility Rebuild fixes.";
  }
  if (overall <= 6) {
    const weak = Object.entries(score).filter(([, v]) => v <= 5).map(([k]) => k);
    return `Your site has a foundation but significant gaps — particularly in ${weak.join(", ")}. These are all fixable. Our AI Visibility Rebuild addresses all of them in a single 7-day deployment.`;
  }
  return "Your site is in decent shape. The main opportunity is AI search optimization — most sites aren't structured for ChatGPT and Perplexity visibility. Our AI Search Dominance system handles that without touching your existing design.";
}
