"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const slides = [
    {
      image: '/images/hero1.jpg',
    title: 'LOGISTICS & PROCUREMENT',
    subtitle: 'Seamless supply chain management and strategic procurement'
    },
    {
      image: '/images/hero1.jpg',
      title: 'EXPERT CIVIL ENGINEERING',
      subtitle: 'Innovative civil engineering'
    },

    {
      image: '/images/hero1.jpg',
      title: 'PORTACABIN FABRICATION',
      subtitle: 'Customizable portacabin solutions'
    },
    {
      image: '/images/hero2.jpg',
      title: 'OIL & GAS SERVICES',
      subtitle: 'Specialized upstream, midstream, and downstream solutions in Nigeria’s oil and gas sector.'
    },
    // {
    //   image: '/images/hero1.jpg',
    //   title: 'OPEN DOORS FASTER',
    //   subtitle: 'Innovative Eco Friendly solutions'
    // },
    // {
    //   image: '/images/hero2.jpg',
    //   title: 'BUILD SMARTER TODAY',
    //   subtitle: 'Revolutionary construction technology'
    // },
    // {
    //   image: '/images/hero3.jpg', 
    //   title: 'FUTURE OF BUILDING',
    //   subtitle: 'Next-generation housing systems'
    // }
  ];

  const menuItems = [
    {
      title: 'ECO-FRIENDLY',
      url: 'eco'
    },
    {
      title: 'OUR WORK',
      url: 'work'
    },
    {
      title: 'ABOUT US',
      url: 'about'
    },
    {
      title: 'CONTACT US',
      url: 'contact'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`w-full h-full bg-cover bg-center transition-transform duration-[5000ms] ease-out ${
              index === currentSlide ? 'scale-110' : 'scale-100'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.image})`,
            }}
          />
        </div>
      ))}

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="flex items-center justify-between px-4 md:px-8 py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="z-50 inline-flex items-baseline gap-[2px]">
              <img
                src={"/new-logo.png"}
                alt="Ecomorph Logo"
                className="h-18 w-auto"
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-8">
            {/* Decorative Line */}
            <div className="hidden md:block w-20 h-px bg-white opacity-60"></div>
            
            {/* Menu Items - Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="text-white text-sm font-medium tracking-wide hover:opacity-80 transition-opacity duration-200"
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white z-30 relative"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6 flex flex-col justify-center">
                <div 
                  className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : 'mb-1'
                  }`}
                ></div>
                <div 
                  className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'opacity-0' : 'mb-1'
                  }`}
                ></div>
                <div 
                  className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : ''
                  }`}
                ></div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-25 lg:hidden transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 left-0 right-0 bg-white z-30 lg:hidden transform transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0 shadow-2xl' : '-translate-y-full'
        }`}
      >
        {/* Mobile Menu Header */}
        {/* Mobile Menu Header */}
<div className="flex items-center justify-between px-4 py-6 border-b border-gray-100">
  <Link
    href="/"
    className="inline-flex items-baseline gap-[2px]"
    onClick={closeMobileMenu}
  >
    <img src={"/new-logo.png"} alt="Ecomorph Logo" className="h-16 w-auto" />
  </Link>

  <button
    onClick={closeMobileMenu}
    className="text-gray-700 hover:text-gray-900 focus:outline-none"
    aria-label="Close menu"
  >
    {/* X Icon as SVG */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
</div>

        {/* Mobile Menu Items */}
        <nav className="px-4 py-8">
          <div className="space-y-6">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`transform transition-all duration-500 ease-out ${
                  isMobileMenuOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 100 + 200}ms` : '0ms'
                }}
              >
                <Link
                  href={item.url}
                  className="block text-gray-900 text-lg font-medium tracking-wide py-3 border-b border-gray-100 hover:text-blue-600 transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>

        </nav>
      </div>

      {/* Main Content */}
            {/* Main Content */}
            <div className="absolute inset-0 flex items-center justify-start z-10">
        <div className="px-8 lg:px-16 max-w-4xl">
          <div className="overflow-hidden">
            <h1 
              key={currentSlide}
              className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight animate-slideUp"
            >
              {slides[currentSlide].title.split(' ').map((word, index) => (
                <div key={index} className="overflow-hidden">
                  <div 
                    className="animate-slideUp"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: 'both'
                    }}
                  >
                    {word}
                  </div>
                </div>
              ))}
            </h1>
          </div>
          
          <div className="overflow-hidden mt-6">
            <p 
              key={`subtitle-${currentSlide}`}
              className="text-xl lg:text-2xl text-white opacity-90 font-light tracking-wide animate-slideUp"
              style={{ 
                animationDelay: '0.4s',
                animationFillMode: 'both'
              }}
            >
              {slides[currentSlide].subtitle}
            </p>
          </div>

          {/* CTA Button */}
          <div className="overflow-hidden mt-12">
          <Link
              href='/work'
              >
            <button 
              className="cursor-pointer bg-transparent border-2 border-white text-white px-8 py-4 text-sm font-semibold tracking-widest hover:bg-white hover:text-black transition-all duration-300 animate-slideUp"
              style={{ 
                animationDelay: '0.6s',
                animationFillMode: 'both'
              }}
            >
              LEARN MORE
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-8 lg:left-16 z-10">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 border border-white transition-all duration-300 hover:scale-110 ${
                index === currentSlide 
                  ? 'bg-white' 
                  : 'bg-transparent hover:bg-white hover:bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Slide Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-20 z-10">
        <div 
          className="h-full bg-white transition-all duration-200 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>
    </div>
  );
};

export default Hero;