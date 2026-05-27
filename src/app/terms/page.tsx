import LegalPage, { generateLegalMetadata } from "@/components/legal-page";

export const metadata = generateLegalMetadata(
  "Terms of Service",
  "Terms governing the use of Portier AI's website and services."
);

export default function Page() {
  return (
    <LegalPage
      title="Terms of Service"
      description="Terms governing the use of Portier AI's website and services."
  lastUpdated="May 26, 2025"
    >
      ## Acceptance of Terms

By accessing or using the Portier AI website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.

## Services Description

Portier AI provides AI growth infrastructure services including but not limited to website development, AI-powered voice receptionists, review automation, search visibility optimization, booking systems, and related consulting services.

## Intellectual Property

All content, design, code, and materials on the Portier AI website are owned by Portier AI or licensed to us. You may not reproduce, distribute, or create derivative works without our express written permission.

Client deliverables become the property of the client upon full payment, subject to any third-party licenses or components used in the deliverables.

## Payments

Payment terms are specified in individual service agreements or through our published pricing. All fees are in US dollars unless otherwise stated.

## Client Obligations

Clients agree to:
- Provide accurate information necessary for service delivery
- Review AI-generated outputs before publication or deployment
- Maintain the security of any credentials or access we provide
- Comply with applicable laws and regulations

## Limitation of Liability

Portier AI provides services on an "as available" basis. We are not liable for indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the fees paid for the specific service giving rise to the claim.

## AI Output Disclaimer

AI-generated content, recommendations, and analyses are provided as tools to assist human decision-making. They are not substitutes for professional judgment. Clients are responsible for reviewing and validating all AI outputs before use.

## Third-Party Services

Our services may integrate with or recommend third-party platforms. We are not responsible for the availability, security, or practices of third-party services.

## Governing Law

These terms are governed by the laws of the State of Illinois, USA. Any disputes shall be resolved in the courts of Cook County, Illinois.

## Changes to Terms

We reserve the right to update these terms. Material changes will be communicated through our website or via email to active clients.

## Contact

Portier AI  
Chicago, Illinois, USA  
Email: support@portierai.com
    </LegalPage>
  );
}
