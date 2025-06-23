'use client';

export const Features = () => {

const features = [
  {
    title: 'Procurement',
    description: "Sourcing, purchasing and supply chain management.",
    icon: (
    <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 200 75.6"
    width="200"
    height="150"
    fill="none"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Top container */}
    <rect x="20" y="10" width="50" height="25" rx="2" />
    
    {/* Middle container */}
    <rect x="75" y="25" width="50" height="25" rx="2" />
    
    {/* Bottom container */}
    <rect x="130" y="40" width="50" height="25" rx="2" />
    
    {/* Optional linking arrows */}
    <line x1="70" y1="22" x2="75" y2="30" />
    <line x1="125" y1="37" x2="130" y2="45" />
  </svg>
    ),
  },
  {
    title: 'Logistics',
    description: "Transportation, warehousing, and freight forwarding.",
    icon: (
      <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 200 75.6"
      width="200"
    height="150"
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Truck container */}
      <rect x="10" y="20" width="100" height="30" rx="2" />
      
      {/* Truck cab */}
      <rect x="115" y="30" width="40" height="20" rx="2" />
      
      {/* Wheels */}
      <circle cx="30" cy="60" r="6" />
      <circle cx="90" cy="60" r="6" />
      <circle cx="130" cy="60" r="6" />
    </svg>
    ),
  },
  {
    title: 'Construction',
    description: "Civil engineering, building and project management.",
    icon: (
      <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 200 75.6"
      width="200"
    height="150"
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Base container */}
      <rect x="30" y="40" width="60" height="25" rx="2" />

      {/* Upper offset container */}
      <rect x="50" y="20" width="50" height="20" rx="2" />

      {/* Windows */}
      <line x1="60" y1="25" x2="65" y2="25" />
      <line x1="60" y1="30" x2="65" y2="30" />
      <line x1="40" y1="50" x2="45" y2="50" />
      <line x1="40" y1="55" x2="45" y2="55" />

      {/* Door */}
      <rect x="75" y="50" width="10" height="15" />
    </svg>
    ),
  },
  {
    title: 'Oil and Gas',
    description: "Sales, supplies and maintenance.",
    icon: (
      <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 200 75.6"
      width="200"
    height="150"
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Storage tank */}
      <rect x="40" y="30" width="50" height="30" rx="5" />
      <line x1="40" y1="30" x2="90" y2="30" /> {/* Tank top */}

      {/* Pipeline */}
      <line x1="90" y1="45" x2="130" y2="45" />
      <rect x="130" y="40" width="30" height="10" rx="2" />

      {/* Flare stack */}
      <line x1="160" y1="50" x2="160" y2="20" />
      <path d="M155,20 Q160,10 165,20" />
    </svg>
    ),
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
                <div className="">
                <div className="mx-auto h-16 flex items-center">
                    {feature.icon}
                </div>
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
