// pages/privacy-policy.tsx
// data/privacyContent.ts

 const privacySections = [
    {
      title: "A. General",
      paragraphs: [
        `Based on our business connection, we receive personal-related data from you. This data is processed – if it is necessary for the provision of our services or for the fulfillment of legal and regulatory obligations – together with personal data that we obtain from publicly available sources or data that are legitimately transmitted by third parties.`,
        `We process the personal data in accordance with the data protection regulations. The legal basis for the processing is pivotal to fulfill a contract or to carry out pre-contractual measures (Art 6 (1) (b) GDPR), or to fulfill legal obligations to which we are subject (Art 6 (1) (c) GDPR).`,
        `In addition, processing is completed by us or a third party due to legitimate interest. E.g. for the protection of employees and customers, for the further development of our company, of products and services in order to win back customers in order to prevent or combat fraud, and/or to prosecute or defend against legal claims (Art. 6 (1) (f) GDPR). If you have given us your consent, the processing takes place for the stated purposes (Article 6 (1) (a) GDPR). You can revoke your consent at any time without affecting the legality of the processing, carried out on the basis of the consent until the revocation. The revocation can be submitted by e-mail to gdpr@9y.co.`,
      ],
    },
    {
      title: "B. Storage of IP addresses",
      paragraphs: [
        `When you visit our website, data is stored on our servers for backup purposes (such as IP address, call time and visited pages). We process this data for data security reasons and to ensure the stability and reliability of our system.`,
      ],
    },
    {
      title: "C. Cookies",
      paragraphs: [
        `Our website uses so-called "cookies" which are text files that are stored on your computer. Cookies allow us to analyze the overall use of the website by the use of individuals. You can prevent the installation of cookies by setting your browser software accordingly. However, please be aware that if you do this, you may not be able to use the full functionality of this website.`,
      ],
    },
  ];
  
export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen text-white !pb-20">
      <div className="privacy-width  w-[780px] !mx-auto">
        <h1 className="text-[20px] md:text-4xl font-semibold text-center">Privacy Policy</h1>

        <p className="!mt-3 md:!mt-14 md:text-[25px]">
          9Y Media Group GmbH (herein after referred to as “9Y Media“) takes data protection and protection of personal-related data very seriously. Therefore, we treat/process your data exclusively on the basis of the legal requirements (GDPR, TKG 2003). Below, we describe how we process your personal data, as a responsible data protection officer.
        </p>

        {privacySections.map((section, idx) => (
          <section key={idx}>
            <h2 className="!mt-14 text-[18px] font-semibold !mb-4">{section.title}</h2>
            {section.paragraphs.map((text, pIdx) => (
              <p key={pIdx} className="mb-4 leading-[30px] text-[#999999]">
                {text}
              </p>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
}
