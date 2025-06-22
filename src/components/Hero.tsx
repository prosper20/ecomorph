"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/images/hero1.jpg',
      title: 'OPEN DOORS FASTER',
      subtitle: 'Innovative Eco Friendly solutions'
    },
    {
      image: '/images/hero2.jpg',
      title: 'BUILD SMARTER TODAY',
      subtitle: 'Revolutionary construction technology'
    },
    {
      image: '/images/hero3.jpg', 
      title: 'FUTURE OF BUILDING',
      subtitle: 'Next-generation housing systems'
    }
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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
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
      <header className="absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center justify-between px-8 py-6">
          {/* Logo */}
          <div className="flex items-center">
              <Link href="/" className="z-50 inline-flex items-baseline gap-[2px]">
                <img
                  src={"/logo-square.png" }
                  alt="Ecomorph Logo"
                  className="h-16 w-auto"
                />
              </Link>
            <div className="text-white">
              <div className="text-2xl font-bold tracking-wider text-[#198bc9]">ECOMORPH</div>
              <div className="text-xs tracking-widest font-semibold text-black">PROJECTS</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-8">
            {/* Decorative Line */}
            <div className="w-20 h-px bg-white opacity-60"></div>
            
            {/* Menu Items */}
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
            <button className="lg:hidden text-white">
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-start z-10">
        <div className="px-8 lg:px-16 max-w-4xl">
          <div className="overflow-hidden">
            <h1 
              key={currentSlide}
              className="text-6xl lg:text-8xl font-bold text-white leading-tight tracking-tight animate-slideUp"
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
            <button 
              className="bg-transparent border-2 border-white text-white px-8 py-4 text-sm font-semibold tracking-widest hover:bg-white hover:text-black transition-all duration-300 animate-slideUp"
              style={{ 
                animationDelay: '0.6s',
                animationFillMode: 'both'
              }}
            >
              LEARN MORE
            </button>
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
