import React from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <img
        src="/projects/project18.jpeg"
        alt="Construction site background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="z-50 inline-flex items-baseline gap-[2px]">
            <img
              src="/new-logo.png"
              alt="Ecomorph Logo"
              className="h-18 w-auto"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/eco" className="text-white hover:text-gray-300 transition-colors font-medium">
            ECO-FRIENDLY
          </Link>
          <Link href="/work" className="text-white hover:text-gray-300 transition-colors font-medium">
            OUR WORK
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300 transition-colors font-medium">
            ABOUT US
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300 transition-colors font-medium">
            CONTACT US
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Horizontal line under navigation */}
      <div className="w-full h-px bg-gray-600"></div>

      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-1px)]">
        {/* Left side - Text content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 py-16 relative">
          {/* Background particles/dots effect */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              ></div>
            ))}
          </div>

          <div className="relative z-10">
            {/* Large title */}
            <h1 className="text-4xl lg:text-8xl font-bold text-white mb-8 leading-none">
              ECOMORPH PROJECTS
            </h1>

            {/* Arrow pointing down */}
            <div className="mb-12">
              <svg className="w-8 h-8 md:w-16 md:h-16 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Subtitle */}
            <div className="text-white">
              <h2 className="text-2xl lg:text-3xl font-light mb-2">A Legacy of</h2>
              <h2 className="text-2xl lg:text-3xl font-light">Innovation</h2>
            </div>
          </div>
        </div>

        {/* Right side - for large screen: extra image or accents */}
        {/* <div className="hidden lg:block lg:w-1/2 relative">
          <div className="absolute bottom-0 right-0 w-64 h-32 bg-gradient-to-l from-red-500 to-yellow-500 opacity-80"></div>
          <div className="absolute bottom-32 right-0 w-48 h-24 bg-gradient-to-l from-green-500 to-blue-500 opacity-60"></div>
        </div> */}
      </div>
      <div className="absolute bottom-0 right-0 z-10">
        <div className="absolute inset-0 bg-black/60 z-11" />
        <div className="absolute bottom-0 right-0 w-64 h-32 bg-gradient-to-l from-red-500 to-yellow-500 opacity-50"></div>
        <div className="absolute bottom-32 right-0 w-48 h-24 bg-gradient-to-l from-green-500 to-blue-500 opacity-50"></div>
      </div>
    </div>
  );
};

export default HeroSection;
