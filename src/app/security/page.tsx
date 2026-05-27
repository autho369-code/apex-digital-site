import LegalPage, { generateLegalMetadata } from "@/components/legal-page";

export const metadata = generateLegalMetadata(
  "Security Practices",
  "How Portier AI protects your data and maintains secure infrastructure."
);

export default function Page() {
  return (
    <LegalPage
      title="Security Practices"
      description="How Portier AI protects your data and maintains secure infrastructure."
  lastUpdated="May 26, 2025"
    >
      ## Our Commitment

Portier AI follows modern security best practices and is building infrastructure aligned with future compliance standards. We treat the security of client data and systems with the highest priority.

## Infrastructure Security

- **Secure Cloud Hosting:** Our services are hosted on Vercel and industry-leading cloud providers with SOC 2 and ISO 27001 certified infrastructure.
- **Encryption in Transit:** All data transmitted between your browser and our servers is encrypted using TLS 1.3.
- **Encryption at Rest:** Stored data is encrypted using AES-256 encryption standards.

## Access Control

- **Multi-Factor Authentication:** Administrative access requires multi-factor authentication.
- **Role-Based Access:** Access to systems and data is granted on a need-to-know basis.
- **Regular Access Reviews:** We periodically review and audit access permissions.
- **Principle of Least Privilege:** Team members receive only the minimum access necessary for their role.

## Data Minimization

We collect and retain only the data necessary to provide our services. Website analysis is performed in real-time without permanent storage of crawled content. Form submissions are processed and stored only as needed for business communication.

## Authentication Safeguards

- Strong password policies enforced for all internal systems
- Session management with automatic timeouts
- Brute-force protection on authentication endpoints
- Secure credential storage using industry-standard hashing

## Monitoring and Logging

- Continuous monitoring of infrastructure and application performance
- Security event logging and alerting
- Regular vulnerability scanning of our web applications
- Dependency monitoring for known security vulnerabilities

## Backup Procedures

- Automated daily backups of critical systems
- Encrypted backup storage
- Regular backup restoration testing
- Disaster recovery planning

## Vendor Management

We carefully evaluate third-party vendors for security practices before integration. All vendors are contractually required to maintain security standards commensurate with our own.

## AI Safety Practices

- AI systems operate within defined guardrails and escalation paths
- No autonomous decision-making on behalf of clients without explicit authorization
- AI-generated content is flagged for human review
- Regular auditing of AI system outputs for quality and safety

## Compliance Alignment

Portier AI is building infrastructure aligned with SOC 2, GDPR, and CCPA frameworks. While we do not currently hold formal certifications, our security practices are designed to meet or exceed these standards.

## Incident Response

We maintain an incident response plan that includes:
- Immediate containment procedures
- Root cause analysis
- Client notification protocols
- Post-incident review and remediation

## Report a Security Concern

If you discover a security vulnerability or have concerns about our security practices, please contact us immediately at support@portierai.com.

## Contact

Portier AI  
Chicago, Illinois, USA  
Email: support@portierai.com
    </LegalPage>
  );
}
