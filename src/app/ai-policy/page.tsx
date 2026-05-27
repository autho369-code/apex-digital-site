import LegalPage, { generateLegalMetadata } from "@/components/legal-page";

export const metadata = generateLegalMetadata(
  "AI Transparency & Responsible AI Policy",
  "How Portier AI uses artificial intelligence responsibly and transparently."
);

export default function Page() {
  return (
    <LegalPage
      title="AI Transparency & Responsible AI Policy"
      description="How Portier AI uses artificial intelligence responsibly and transparently."
  lastUpdated="May 26, 2025"
    >
      ## Our Approach to AI

Portier AI builds and deploys artificial intelligence systems to help service businesses capture more calls, book more jobs, and increase visibility. We are committed to doing so responsibly, transparently, and with appropriate human oversight.

## AI-Generated Outputs

Our AI systems generate various outputs including:
- Website content and design recommendations
- Voice agent responses and call handling
- Review responses and management
- Search optimization recommendations
- Chatbot interactions and lead qualification

**Important:** AI-generated outputs are tools to assist human decision-making. They may require human review before publication, deployment, or client delivery. We do not guarantee perfect accuracy of AI-generated content.

## Human Oversight

We maintain human oversight throughout our AI operations:
- AI-generated client deliverables are reviewed before delivery
- Voice agent responses operate within defined guardrails with escalation paths to humans
- Automated review responses are monitored and can be overridden
- Clients retain final approval authority over AI-generated content representing their business

## Client Responsibility

Clients using Portier AI services are responsible for:
- Reviewing AI-generated content before publication
- Ensuring AI outputs align with their brand voice and values
- Complying with applicable laws and regulations regarding automated communications
- Maintaining appropriate disclosures where legally required

## Data Confidentiality

- Client data used to train or configure AI systems remains confidential
- We do not use client data to train general-purpose AI models without explicit permission
- AI interactions are processed securely and not shared with third parties for training purposes

## Automation Transparency

We believe in transparency about automation:
- Our AI Voice Receptionist identifies itself when appropriate
- Automated review responses are designed to reflect the client's genuine voice
- Chatbot interactions clearly indicate they are AI-powered
- Clients are informed about which systems are AI-driven

## Responsible AI Usage

We design our AI systems to:
- Operate within defined ethical boundaries
- Avoid generating harmful, misleading, or deceptive content
- Respect user privacy and data rights
- Comply with applicable laws and regulations
- Include fail-safes and escalation paths

## Continuous Improvement

We regularly audit our AI systems for:
- Accuracy and quality of outputs
- Bias and fairness
- Safety and alignment with intended use
- Client satisfaction and outcomes

## Contact

For questions about our AI practices, contact:  
Portier AI  
Chicago, Illinois, USA  
Email: support@portierai.com
    </LegalPage>
  );
}
