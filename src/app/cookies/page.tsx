import LegalPage, { generateLegalMetadata } from "@/components/legal-page";

export const metadata = generateLegalMetadata(
  "Cookie Policy",
  "How Portier AI uses cookies and similar technologies."
);

export default function Page() {
  return (
    <LegalPage
      title="Cookie Policy"
      description="How Portier AI uses cookies and similar technologies."
  lastUpdated="May 26, 2025"
    >
      ## What Are Cookies

Cookies are small text files placed on your device when you visit a website. They help websites function properly, remember your preferences, and understand how visitors use the site.

## Types of Cookies We Use

**Essential Cookies:** Required for the website to function properly. These include session management and security features. These cannot be disabled.

**Functional Cookies:** Remember your preferences and improve your experience. For example, remembering your chatbot preferences or form progress.

**Analytics Cookies:** Help us understand how visitors interact with our website. We use this information to improve our services. These are anonymous and aggregated.

## Third-Party Cookies

We use trusted third-party services that may set their own cookies:
- Vercel (hosting and analytics)
- Any embedded services or integrations

These third parties have their own privacy and cookie policies.

## Managing Cookies

You can control and delete cookies through your browser settings. Instructions for common browsers:

- Chrome: Settings → Privacy and Security → Cookies
- Firefox: Options → Privacy & Security → Cookies
- Safari: Preferences → Privacy → Cookies
- Edge: Settings → Privacy → Cookies

Note that disabling essential cookies may affect website functionality.

## Cookie Duration

- Session cookies: deleted when you close your browser
- Persistent cookies: remain for a set period (typically 30 days to 2 years)

## Updates

We may update this Cookie Policy as our practices or legal requirements change. The latest version will always be available on this page.

## Contact

Portier AI  
Chicago, Illinois, USA  
Email: support@portierai.com
    </LegalPage>
  );
}
