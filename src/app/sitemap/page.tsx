import LegalPage, { generateLegalMetadata } from "@/components/legal-page";

export const metadata = generateLegalMetadata(
  "Sitemap",
  "Complete overview of all pages on the Portier AI website."
);

export default function Page() {
  return (
    <LegalPage
      title="Sitemap"
      description="Complete overview of all pages on the Portier AI website."
    >
      ## Main Pages

- [Home](/)
- [AI Growth Audit](#apply) — Strategic Assessment Form

## Services

- AI Voice Receptionist
- AI Search Dominance
- AI Review Engine
- AI Content Machine
- AI Booking Agent
- AI-Optimized Websites

## Legal & Compliance

- [Privacy Policy](/privacy)
- [Terms of Service](/terms)
- [Cookie Policy](/cookies)
- [Security Practices](/security)
- [Accessibility Statement](/accessibility)
- [AI Transparency Policy](/ai-policy)
- [Website Disclaimer](/disclaimer)
- [Sitemap](/sitemap)

## Connect

- Email: support@portierai.com
- Location: Chicago, Illinois, USA
    </LegalPage>
  );
}
