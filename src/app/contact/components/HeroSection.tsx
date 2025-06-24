// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const HeroSection: React.FC = () => {
//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 w-full h-full">
//   <Image
//     src="/projects/project18.jpeg"
//     alt="Construction image"
//     fill
//     priority
//     className="object-cover"
//     sizes="100vw"
//   />
//   {/* Optional overlay */}
//   <div className="absolute inset-0 bg-black bg-opacity-40"></div>
// </div>


//       {/* Navigation */}
//       <nav className="relative z-20 flex items-center justify-between px-8 py-4">
//         {/* Logo */}
//         <div className="flex items-center">
//         <Link href="/" className="z-50 inline-flex items-baseline gap-[2px]">
//             <img
//               src="/new-logo.png"
//               alt="Ecomorph Logo"
//               className="h-18 w-auto"
//             />
//           </Link>
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden md:flex items-center space-x-8">
//           <Link 
//             href="#" 
//             className="text-white hover:text-yellow-300 transition-colors duration-300 font-medium text-sm tracking-wide"
//           >
//             MODULAR CONSTRUCTION
//           </Link>
//           <Link 
//             href="#" 
//             className="text-white hover:text-yellow-300 transition-colors duration-300 font-medium text-sm tracking-wide"
//           >
//             OUR WORK
//           </Link>
//           <Link 
//             href="#" 
//             className="text-white hover:text-yellow-300 transition-colors duration-300 font-medium text-sm tracking-wide border-b border-white pb-1"
//           >
//             ABOUT US
//           </Link>
//           <Link 
//             href="#" 
//             className="text-white hover:text-yellow-300 transition-colors duration-300 font-medium text-sm tracking-wide underline"
//           >
//             CONTACT US
//           </Link>
//         </div>

//         {/* Mobile menu button */}
//         <button className="md:hidden text-white z-30">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//       </nav>

//       {/* Horizontal line under navigation */}
//       <div className="relative z-20 w-full h-px bg-white bg-opacity-30"></div>

//       {/* Hero Content */}
//       <div className="relative z-10 flex items-center justify-center min-h-screen -mt-20">
//         <div className="text-center px-8">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight tracking-wide">
//             CREATE SOMETHING
//             <br />
//             <span className="block">AMAZING</span>
//           </h1>
          
//           {/* Optional CTA Button */}
//           {/* <div className="mt-12">
//             <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//               Start Your Project
//             </button>
//           </div> */}
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-40 hidden">
//         <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
//           <Link href="#" className="text-white text-2xl font-medium">MODULAR CONSTRUCTION</Link>
//           <Link href="#" className="text-white text-2xl font-medium">OUR WORK</Link>
//           <Link href="#" className="text-white text-2xl font-medium border-b border-white pb-2">ABOUT US</Link>
//           <Link href="#" className="text-white text-2xl font-medium underline">CONTACT US</Link>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
//         <div className="animate-bounce">
//           <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/projects/project1.jpeg"
          alt="Construction image"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-40" /> */}
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link href="/" className="z-50 inline-flex items-baseline gap-[2px]">
          <img
            src="/new-logo.png"
            alt="Ecomorph Logo"
            className="h-18 w-auto"
          />
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-white hover:text-yellow-300 transition-colors duration-300 font-medium text-sm tracking-wide">
            MODULAR CONSTRUCTION
          </Link>
          <Link href="#" className="text-white hover:text-yellow-300 transition-colors duration-300 font-medium text-sm tracking-wide">
            OUR WORK
          </Link>
          <Link href="#" className="text-white hover:text-yellow-300 transition-colors duration-300 font-medium text-sm tracking-wide border-b border-white pb-1">
            ABOUT US
          </Link>
          <Link href="#" className="text-white hover:text-yellow-300 transition-colors duration-300 font-medium text-sm tracking-wide underline">
            CONTACT US
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white z-30 relative"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center relative">
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : 'mb-1'}`} />
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'mb-1'}`} />
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Line under nav */}
      <div className="relative z-20 w-full h-px bg-white bg-opacity-30" />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center md:justify-start min-h-[70vh] -mt-20">
        <div className="px-8 md:px-16">
          <h1 className="text-6xl md:text-lg sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight tracking-wide">
            Create Something
            <br />
            <span className="">Amazing</span>
          </h1>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-70 z-40 transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 bg-white z-50 transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0 shadow-2xl' : '-translate-y-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-6 border-b border-gray-100">
          <Link href="/" className="inline-flex items-baseline gap-[2px]" onClick={closeMobileMenu}>
            <img src="/new-logo.png" alt="Ecomorph Logo" className="h-16 w-auto" />
          </Link>
          <button
            onClick={closeMobileMenu}
            className="text-gray-700 hover:text-gray-900"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="px-4 py-8">
          <div className="space-y-6">
            {['MODULAR CONSTRUCTION', 'OUR WORK', 'ABOUT US', 'CONTACT US'].map((text, idx) => (
              <div
                key={text}
                className={`transform transition-all duration-500 ease-out ${
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${idx * 100 + 200}ms` : '0ms'
                }}
              >
                <Link
                  href="#"
                  className="block text-gray-900 text-lg font-medium tracking-wide py-3 border-b border-gray-100 hover:text-blue-600 transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  {text}
                </Link>
              </div>
            ))}
          </div>
        </nav>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
