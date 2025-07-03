import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 fade-in">
              Hello, My Name Is
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold text-amber-600 mb-6 fade-in stagger-1">
              Pelal Mahmoud
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 fade-in stagger-2">
              A passionate and creative frontend web developer
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 fade-in stagger-3"
            >
              Contact Me
            </button>
          </div>

          {/* Right Content - Profile Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative fade-in stagger-4">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-amber-600 shadow-2xl">
                <img 
                  src="https://i.ibb.co/PGwdKSbq/Whats-App-Image-2025-07-03-at-3-05-54-PM.jpg" 
                  alt="Pelal Mahmoud" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in stagger-5">
          <ArrowDown className="text-amber-600 animate-bounce" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;