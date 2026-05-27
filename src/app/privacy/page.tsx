import LegalPage, { generateLegalMetadata } from "@/components/legal-page";

export const metadata = generateLegalMetadata(
  "Privacy Policy",
  "How Portier AI collects, uses, and protects your information."
);

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How Portier AI collects, uses, and protects your information."
  lastUpdated="May 26, 2025"
    >
      ## Information We Collect

Portier AI collects information you voluntarily provide when using our website, including:

- **Contact Information:** Name, email address, phone number, and company name submitted through our Strategic Assessment form or AI Advisor chatbot.
- **Website Analysis Data:** When you submit a URL to our AI Advisor for analysis, we temporarily fetch and analyze publicly available information from that website.
- **Communication Data:** Information you provide when contacting us via email at support@portierai.com.

## Cookies and Analytics

We use essential cookies required for the operation of our website. We may use analytics services to understand website usage patterns. You can control cookie preferences through your browser settings.

## Chatbot Interactions

Our AI Advisor chatbot processes the information you provide to deliver relevant recommendations. Chat interactions are used to improve our services and qualify potential business relationships.

## How We Use Information

We use collected information to:
- Respond to your inquiries and applications
- Provide AI-powered website analysis and recommendations
- Improve our services and user experience
- Communicate about our services when you have expressed interest
- Comply with legal obligations

## Data Retention

We retain personal information only as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law.

## Third-Party Providers

We use trusted third-party services for hosting (Vercel), email delivery, and analytics. These providers are contractually obligated to protect your data and use it only for the services they provide to us.

## Your Rights

You have the right to:
- Access the personal information we hold about you
- Request correction of inaccurate information
- Request deletion of your information
- Opt out of marketing communications
- Request a copy of your data

To exercise these rights, contact us at support@portierai.com.

## Data Security

We implement industry-standard security measures to protect your information, including encryption in transit, secure cloud infrastructure, and access controls. See our [Security Practices](/security) page for details.

## Contact

Portier AI  
Chicago, Illinois, USA  
Email: support@portierai.com
    </LegalPage>
  );
}
