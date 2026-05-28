import { NextRequest, NextResponse } from "next/server";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || "";

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000;

interface FormData {
  name: string;
  company: string;
  website?: string;
  businessType?: string;
  challenge?: string;
  leadVolume?: string;
  timeline?: string;
  interests?: string[];
  email: string;
  phone?: string;
  outcome?: string;
}

function formatBusinessType(raw: string): string {
  const map: Record<string, string> = {
    "home-services": "Home Services",
    medical: "Medical / Dental",
    legal: "Legal",
    property: "Property Management",
    hospitality: "Hospitality",
    retail: "Local Retail",
    "multi-location": "Multi-Location Business",
    other: "Other",
  };
  return map[raw] || raw || "Not specified";
}

function formatLeadVolume(raw: string): string {
  const map: Record<string, string> = {
    "under-25": "Under 25 leads/month",
    "25-100": "25–100",
    "100-500": "100–500",
    "500-plus": "500+",
  };
  return map[raw] || raw || "Not specified";
}

function formatTimeline(raw: string): string {
  const map: Record<string, string> = {
    asap: "ASAP",
    "30-days": "Within 30 days",
    "90-days": "Within 90 days",
    exploring: "Just exploring",
  };
  return map[raw] || raw || "Not specified";
}

function buildDiscordEmbed(data: FormData) {
  const fields: { name: string; value: string; inline?: boolean }[] = [];

  // Contact info
  fields.push({ name: "Contact", value: `**${data.name}**${data.email ? `\n${data.email}` : ""}${data.phone ? `\n${data.phone}` : ""}`, inline: true });
  fields.push({ name: "Company", value: data.company, inline: true });

  if (data.website) {
    fields.push({ name: "Website", value: data.website.startsWith("http") ? data.website : `https://${data.website}`, inline: true });
  }

  fields.push({ name: "Industry", value: formatBusinessType(data.businessType || ""), inline: true });
  fields.push({ name: "Lead Volume", value: formatLeadVolume(data.leadVolume || ""), inline: true });
  fields.push({ name: "Timeline", value: formatTimeline(data.timeline || ""), inline: true });

  if (data.interests && data.interests.length > 0) {
    fields.push({ name: "Interests", value: data.interests.join(", "), inline: false });
  }

  if (data.challenge) {
    fields.push({ name: "Biggest Challenge", value: data.challenge, inline: false });
  }

  if (data.outcome) {
    fields.push({ name: "Desired Outcome", value: data.outcome, inline: false });
  }

  const priority = ["asap", "30-days"].includes(data.timeline || "") ? "🔴 High Priority" : "🟡 Standard";

  return {
    embeds: [
      {
        title: `📋 New Growth Audit Request — ${data.company}`,
        description: `${data.name} from **${data.company}** submitted an AI Growth Audit request.\n\n**Priority:** ${priority}`,
        color: 0x6d28d9,
        fields,
        footer: {
          text: "Portier AI • Form Submission",
        },
        timestamp: new Date().toISOString(),
      },
    ],
  };
}

async function postToDiscord(payload: object, attempt: number = 0): Promise<boolean> {
  if (!DISCORD_WEBHOOK_URL) {
    console.error("[contact] DISCORD_WEBHOOK_URL not configured");
    return false;
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (res.ok) {
      console.log("[contact] Discord webhook delivered successfully");
      return true;
    }

    // Discord rate limits return 429
    if (res.status === 429) {
      const retryAfter = res.headers.get("Retry-After");
      const delay = retryAfter ? parseInt(retryAfter) * 1000 : RETRY_DELAY_MS * (attempt + 1);
      console.warn(`[contact] Discord rate limited, retrying after ${delay}ms (attempt ${attempt + 1}/${MAX_RETRIES})`);
      await new Promise((r) => setTimeout(r, delay));
      if (attempt < MAX_RETRIES - 1) {
        return postToDiscord(payload, attempt + 1);
      }
    }

    const body = await res.text().catch(() => "");
    console.error(`[contact] Discord webhook failed (${res.status}): ${body.slice(0, 200)}`);

    // Retry on server errors (5xx)
    if (res.status >= 500 && attempt < MAX_RETRIES - 1) {
      const delay = RETRY_DELAY_MS * Math.pow(2, attempt);
      console.warn(`[contact] Retrying after ${delay}ms (attempt ${attempt + 1}/${MAX_RETRIES})`);
      await new Promise((r) => setTimeout(r, delay));
      return postToDiscord(payload, attempt + 1);
    }

    return false;
  } catch (err) {
    console.error(`[contact] Discord webhook error: ${err instanceof Error ? err.message : String(err)}`);
    if (attempt < MAX_RETRIES - 1) {
      const delay = RETRY_DELAY_MS * Math.pow(2, attempt);
      console.warn(`[contact] Retrying after ${delay}ms (attempt ${attempt + 1}/${MAX_RETRIES})`);
      await new Promise((r) => setTimeout(r, delay));
      return postToDiscord(payload, attempt + 1);
    }
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.formData();

    const name = (body.get("Name") as string)?.trim();
    const company = (body.get("Company") as string)?.trim();
    const email = (body.get("Email") as string)?.trim();

    // Validate required fields
    if (!name) {
      return NextResponse.json({ error: "Full Name is required" }, { status: 400 });
    }
    if (!company) {
      return NextResponse.json({ error: "Company Name is required" }, { status: 400 });
    }
    if (!email) {
      return NextResponse.json({ error: "Email Address is required" }, { status: 400 });
    }

    // Parse interests (checkboxes come as multiple values with same name)
    const interests = body.getAll("Interests") as string[];

    const data: FormData = {
      name,
      company,
      website: (body.get("Website") as string)?.trim() || undefined,
      businessType: (body.get("BusinessType") as string)?.trim() || undefined,
      challenge: (body.get("Challenge") as string)?.trim() || undefined,
      leadVolume: (body.get("LeadVolume") as string)?.trim() || undefined,
      timeline: (body.get("Timeline") as string)?.trim() || undefined,
      interests: interests.length > 0 ? interests : undefined,
      email,
      phone: (body.get("Phone") as string)?.trim() || undefined,
      outcome: (body.get("Outcome") as string)?.trim() || undefined,
    };

    const discordPayload = buildDiscordEmbed(data);
    const delivered = await postToDiscord(discordPayload);

    if (!delivered) {
      console.error("[contact] Failed to deliver to Discord after all retries");
      // Don't fail the form submission — log and return success
      // The submission data is still captured in logs
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! We've received your application and will review it within 24 hours.",
    });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again or email support@portierai.com." }, { status: 500 });
  }
}
