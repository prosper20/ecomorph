'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  number: string;
  title: string;
  content: string;
}

const AboutSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>('mission');

  const accordionItems: AccordionItem[] = [
    {
      id: 'mission',
      number: '01',
      title: 'Our Mission',
      content: 'Our mission is to provide creative solutions to the clients business problems while delivering exceptional services that exceed our clients’ expectations, fostering long-term relationships built on trust, reliability, and expertise.'
    },
    {
      id: 'vision',
      number: '02', 
      title: 'Our Vision',
      content: 'To be a leading force in the logistics, procurement, and construction industries, delivering innovative, eﬃcient, and sustainable solutions that drive growth and development. We strive to set new	standards in service excellence, leveraging technology and expertise to create lasting value for our clients, partners and communities.'
    },
    {
      id: 'values',
      number: '03',
      title: 'Our Values and Culture',
      content: `
      <b>At Ecomorph Projects Ltd, we value:</b><br />
   <b> - Safety:</b> Ensuring the well-being of our clients, employees, and communities. <br />
   <b> - Integrity:</b> Conducting business with integrity, transparency, honesty, and ethics. <br />
   <b> - Excellence:</b> Delivering exceptional services and solutions. <br />
   <b> - Teamwork:</b> Collaborating with clients, partners, and stakeholders to achieve common goals.
  `
    }
  ];

  const handleItemClick = (itemId: string) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <div className="bg-gray-50 py-16 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            OUR HISTORY
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
              Ecomorph Projects Ltd was established in 2020, and is duly registered with the Corporate Affairs Commission. 
              </p>
              
              <p>
              Ecomorph Projects Ltd has grown rapidly, expanding our operations to serve clients across Nigeria and beyond Our team of professionals has a proven track record of delivering complex projects and services.
              </p>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="space-y-4">
            {accordionItems.map((item) => (
              <div
                key={item.id}
                className="border-b border-gray-200 last:border-b-0"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => handleItemClick(item.id)}
                  className="w-full py-6 flex items-center justify-between text-left group hover:bg-gray-100 transition-colors duration-200 rounded-lg px-4 -mx-4"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-red-600 font-medium text-sm">
                      {item.number}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-200">
                      {item.title}
                    </h3>
                  </div>
                  
                  <ChevronDown
                    className={`w-6 h-6 text-gray-500 transition-all duration-300 ease-in-out group-hover:text-red-600 group-hover:-rotate-180 ${
                      openItem === item.id ? 'rotate-180 text-red-600' : ''
                    }`}
                  />
                </button>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                    <div className="pb-6 px-4 -mx-4">
                        <div className="md:pl-8">
                            <p
                            className="text-gray-600 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: item.content }}
                            />
                        </div>
                    </div>
                  {/* <div className="pb-6 px-4 -mx-4">
                    <div className="pl-8">
                      <p className="text-gray-600 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;