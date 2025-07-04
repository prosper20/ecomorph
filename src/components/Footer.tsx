import React from 'react';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const navigationLinks = [
    {
      title: 'Our Work',
      url: '/work'
    },
    {
      title: 'About Us', 
      url: '/about'
    },
    {
      title: 'Contact Us',
      url: '/contact'
    },
    {
      title: 'Privacy Policy',
      url: '/privacy'
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-50 py-16 px-8 lg:px-16">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center mb-6">
                <Link href="/" className="z-50 inline-flex items-baseline gap-[2px]">
                              <img
                                src={"/new-logo.png" }
                                alt="Ecomorph Logo"
                                className="h-18 w-auto"
                              />
                            </Link>
                          {/* <div className="text-white">
                            <div className="text-2xl font-bold tracking-wider text-[#198bc9]">ECOMORPH</div>
                            <div className="text-xs tracking-widest font-semibold text-black">PROJECTS</div>
                          </div> */}
            </div>
            
            {/* Tagline */}
            <p className="text-gray-600 text-sm leading-relaxed">
              The legacy of innovation.
            </p>
          </div>

          {/* Contact Information Section */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              <div className="text-gray-800 font-medium">
                
6 Peter Odili Road, Trans Amadi, Port Harcourt, Rivers State.
              </div>
              <div className="text-gray-800 font-medium">
              ecomorphprojects@proton.me
              </div>
              <div className="text-gray-800 font-medium">
              +234 806 097 4090
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-8">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 border border-gray-400 flex items-center justify-center hover:border-gray-600 hover:bg-gray-100 transition-all duration-200"
                  >
                    <IconComponent className="w-5 h-5 text-gray-600" />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="mt-8">
              <p className="text-gray-600 text-sm">
                © 2025 Ecomorph Projects Ltd
              </p>
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="lg:col-span-1">
            <nav className="space-y-4">
              {navigationLinks.map((link, index) => (
                <div key={index}>
                  <a
                    href={link.url}
                    className="text-gray-800 font-medium hover:text-gray-600 transition-colors duration-200 block"
                  >
                    {link.title}
                  </a>
                </div>
              ))}
            </nav>

            {/* Site Attribution */}
            {/* <div className="mt-12">
              <p className="text-gray-500 text-sm">
                Site by <a href='www.9stack.co' target='_blank'>9stack</a>
              </p>
            </div> */}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;