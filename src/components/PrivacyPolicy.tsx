const privacySections = [
  {
    title: "A. Data Collection",
    paragraphs: [
      `[PLACEHOLDER TEXT] Ecomorph Projects Ltd collects minimal personal data necessary for providing our logistics, procurement, and construction services. This may include contact information, project details, and professional credentials.`,
      `[PLACEHOLDER TEXT] We process personal data in compliance with Nigerian data protection regulations (NDPR) and only for legitimate business purposes such as service delivery, contract fulfillment, and regulatory compliance.`,
      `[PLACEHOLDER TEXT] By engaging with our services, you consent to this data processing. You may withdraw consent at any time by contacting privacy@ecomorphprojects.com, though this may affect our ability to provide services.`,
    ],
  },
  {
    title: "B. Data Security",
    paragraphs: [
      `[PLACEHOLDER TEXT] We implement industry-standard security measures to protect your data from unauthorized access. Our systems are regularly audited to maintain the highest security standards for our clients in the oil & gas and construction sectors.`,
    ],
  },
  {
    title: "C. Third-Party Sharing",
    paragraphs: [
      `[PLACEHOLDER TEXT] Ecomorph may share necessary data with trusted partners only when required for project execution (e.g., logistics providers, construction subcontractors). All third parties are contractually bound to equivalent privacy standards.`,
    ],
  },
  {
    title: "D. Data Retention",
    paragraphs: [
      `[PLACEHOLDER TEXT] Project-related data is retained for 7 years to comply with Nigerian business regulations. Non-essential data is purged annually through secure deletion protocols.`,
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="bg-white min-h-screen text-gray-900 !pb-20">
      <div className="privacy-width  w-[780px] !mx-auto">
        <h1 className="text-[20px] md:text-4xl font-semibold text-center">Privacy Policy</h1>

        <p className="!mt-3 md:!mt-14 md:text-[25px]">
          [PLACEHOLDER TEXT] Ecomorph Projects Ltd (&quot;Ecomorph&quot;) values your privacy and complies with the Nigeria Data Protection Regulation (NDPR 2019). This policy outlines how we handle personal data for our logistics, construction, and oil & gas services.
        </p>

        {privacySections.map((section, idx) => (
          <section key={idx}>
            <h2 className="!mt-14 text-[18px] font-semibold !mb-4">{section.title}</h2>
            {section.paragraphs.map((text, pIdx) => (
              <p key={pIdx} className="mb-4 leading-[30px] text-gray-500">
                {text}
              </p>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
}