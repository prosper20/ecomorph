import React, { Fragment } from "react";
import { decoratedFullstop } from "@/utils/utils";

interface Services {
  title: string;
  description: string;
  tags: string[];
}

const services: Services[] = [
  {
    title: "Enterprise",
    description:
      "We create premium websites for elite brands and individuals who value craft, clarity, and performance. Every site we build is crafted to sync with the brand and give a digital experience that elevates your presence.",
    tags: ["ReactJS", "NextJS", "Tailored Design", "Performance-First", "SEO Ready"]
  },
  {
    title: "PWA",
    description:
      "PWAs (Progressive Web Apps) are the best of both worlds: websites that can be installed as apps. Fast, offline-ready, and mobile optimized without the cost of app store deployment.",
    tags: ["Installable", "Offline Support", "Push Notifications", "Add to Home Screen"]
  },
  {
    title: "UI/UX Design",
    description:
      "We don’t just design how things look — we shape how they feel and function. Minimalist elegance meets intuitive flow for interfaces that quietly command attention.",
    tags: ["User Interface Design", "Wireframes & Prototypes", "Interaction Design", "Design Systems", "User Flow Mapping"]
  },
  {
    title: "Front-end",
    description:
      "Where design becomes experience. We build interfaces that are responsive, fast, and frictionless using modern frameworks, finely tuned for every screen.",
    tags: ["ReactJS", "NextJS", "HTML/CSS", "TypeScript", "TailwindCSS", "VueJS"]
  },
  {
    title: "Back-end",
    description:
      "Powering what the user doesn't see. Our back-end systems are secure, scalable, and built to handle complex logic, data flows, and integrations with ease.",
    tags: ["NodeJS", "Django", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"]
  },
  {
    title: "Light Projects",
    description:
      "For sharp, simple, and fast builds. We design and develop lightweight sites — landing pages, blogs, portfolios — with the same care as full platforms.",
    tags: ["Landing Pages", "Portfolios", "Blogs", "Static Sites"]
  }
];

const Tag: React.FC<{ text: string }> = ({ text }) => (
  <span className="inline-flex items-center text-sm text-gray-300">
    <span className="text-gray-400 mr-1">#</span>
    <span>{text}</span>
    {decoratedFullstop('ml-2 w-1 h-1')}
  </span>
);

const ServiceDetails: React.FC<{ data?: Services[] }> = ({ data = services }) => {
  return (
    <section className="bg-black text-white py-12 px-4 md:px-8 lg:px-[5%]">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center space-y-16">
        <section className=" space-y-20">
          {data.map((service, index) => (
            <Fragment key={index}>
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <h2 className="text-xl md:text-3xl font-bold">
                    {service.title}
                    <span className="text-blue-500 text-4xl">.</span>
                  </h2>
                </div>
                <p className="text-gray-300 max-w-3xl">
                  {service.description}
                </p>
                <div className="border-t border-gray-700 w-24" />
                <div className="flex flex-wrap gap-3">
                  {service.tags.map((tag, idx) => (
                    <Tag key={idx} text={tag} />
                  ))}
                </div>
              </div>
            </Fragment>
          ))}
        </section>
      </div>
    </section>
  );
};

export default ServiceDetails;