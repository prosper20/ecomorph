'use client';

import Image from "next/image";

export const Features = () => {

const features = [
  {
    title: 'Procurement',
    description: "Sourcing, purchasing and supply chain management.",
    image: "/projects/project29.jpeg"
  },
  {
    title: 'Logistics',
    description: "Transportation, warehousing, and freight forwarding.",
    image: "/projects/project17.jpeg"
  },
  {
    title: 'Construction',
    description: "Civil engineering, building and project management.",
    image: "/projects/project23.jpeg"
  },
  {
    title: 'Oil and Gas',
    description: "Sales, supplies and maintenance.",
    image: "/projects/project16.jpeg"
  },
];

  return (
    <section className="py-16 px-8 lg:px-16 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          ABOUT US
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Ecomorph Projects Ltd is a leading provider of logistics and procurement services, civil/construction works and oil and gas services. We deliver tailored solutions to meet the unique needs of our clients, leveraging our expertise, resources and network to drive eﬃciency, reduce costs and enhance value.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="space-y-4 flex flex-col justify-center">
                <div className="w-full h-40 relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover "
                />
              </div>
              <h3 className="text-lg font-semibold text-red-800 mt-4">{feature.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
