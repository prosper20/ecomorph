import React from 'react';
import { ArrowRight } from 'lucide-react';

const EcofriendlyConstruction: React.FC = () => {
    const projects = [
        {
            id: 'oml-42-upgrade',
            title: 'OML 42 Facility Upgrade – Ecomorph/Nestoil',
            image: '/projects/project22.jpeg',
            link: '/projects/oml-42-upgrade',
            description: 'Sustainable facility upgrade at Odidi/Egwa/Jones Creek using eco-conscious methods',
          },
          {
            id: 'olero-demolition',
            title: 'Olero Creek Facility Demolition – Ecomorph/Chevron',
            image: '/projects/project28.jpeg',
            link: '/projects/olero-demolition',
            description: 'Environmentally responsible demolition with 92% material recycling rate',
          },
          {
            id: 'oml-86-88-upgrade',
            title: 'OML 86/88 Offshore Facilities Upgrade – Ecomorph/Pioneer/NEPL',
            image: '/projects/project21.jpeg',
            link: '/projects/oml-86-88-upgrade',
            description: 'Low-impact offshore upgrade with sustainable materials at Funiwa and North Apoi',
          },
    ];

  const finalSteps = [
    {
      title: "Material Selection",
      image: "/projects/project19.jpeg",
      description: "Rigorous vetting of recycled and low-carbon footprint materials"
    },
    {
      title: "Efficient Transportation",
      image: "/images/logistics.jpeg",
      description: "Optimized logistics to minimize fuel consumption and emissions"
    },
    {
      title: "Low-Impact Assembly",
      image: "/projects/project17.jpeg",
      description: "Precision installation reducing on-site waste and disturbance"
    },
    {
      title: "Green Certification",
      image: "/projects/project4.png",
      description: "Final sustainability audit and environmental compliance sign-off"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sustainable Construction
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our eco-conscious building method prefabricates structures in controlled facilities,
            reducing waste by 70% while maintaining superior quality through precision engineering.
          </p>
        </div>

        {/* Main Construction Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Project Showcase
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-red-700 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Steps */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Our Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {finalSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-red-700 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
                
            
                {index < finalSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-red-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

{/* <div className="mb-12">
  <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
    Our Process
  </h3>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
    {finalSteps.map((step, index) => (
      <div key={index} className="relative">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="aspect-w-16 aspect-h-12 bg-gray-200">
            <img 
              src={step.image} 
              alt={step.title}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-6">
            <h4 className="text-lg font-bold text-red-700 mb-2">
              {step.title}
            </h4>
            <p className="text-gray-600 text-sm">
              {step.description}
            </p>
          </div>
        </div>
        
        {index < finalSteps.length - 1 && (
          <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10">
            <div className="bg-white rounded-full p-2 shadow-md">
              <ArrowRight className="w-6 h-6 text-red-600" />
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
</div> */}

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Environmental Advantages
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Reduced Carbon Footprint</h4>
              <p className="text-gray-600">Factory production cuts emissions by 45% compared to traditional construction methods.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Material Efficiency</h4>
              <p className="text-gray-600">Precision manufacturing reduces material waste by up to 70% through optimized cutting and recycling.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Energy Smart</h4>
              <p className="text-gray-600">Our facilities use 30% renewable energy, with components designed for optimal energy performance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcofriendlyConstruction;