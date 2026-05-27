import LegalPage, { generateLegalMetadata } from "@/components/legal-page";

export const metadata = generateLegalMetadata(
  "Accessibility Statement",
  "Our commitment to digital accessibility for all users."
);

export default function Page() {
  return (
    <LegalPage
      title="Accessibility Statement"
      description="Our commitment to digital accessibility for all users."
  lastUpdated="May 26, 2025"
    >
      ## Our Commitment

Portier AI is committed to ensuring digital accessibility for people of all abilities. We are actively working to improve the user experience for everyone and apply relevant accessibility standards.

## Standards

We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.

## Measures We Take

- **Semantic HTML:** Using proper heading hierarchies, landmarks, and ARIA attributes where appropriate
- **Keyboard Navigation:** Ensuring all interactive elements are keyboard-accessible
- **Color Contrast:** Maintaining sufficient contrast ratios for text and interactive elements
- **Responsive Design:** Supporting zoom, text resizing, and mobile devices
- **Alternative Text:** Providing descriptive alt text for images and visual elements
- **Focus Indicators:** Visible focus states for keyboard navigation
- **Form Labels:** All form inputs have associated labels for screen readers
- **Motion Consideration:** Respecting user preferences for reduced motion

## Ongoing Efforts

Accessibility is an ongoing process. We regularly review our website and services to identify and address accessibility barriers. We welcome feedback on how we can improve.

## Known Limitations

While we strive for full accessibility, some areas may have limitations:
- Third-party embedded content may not fully meet our accessibility standards
- AI-generated visual content may have variable accessibility support

We are actively working to address these limitations.

## Feedback

We welcome your feedback on the accessibility of Portier AI's website. If you encounter any barriers or have suggestions for improvement, please contact us.

## Contact

Portier AI  
Chicago, Illinois, USA  
Email: support@portierai.com

Please include "Accessibility" in your subject line for faster routing.
    </LegalPage>
  );
}
