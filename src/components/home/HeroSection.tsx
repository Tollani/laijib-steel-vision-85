
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <img 
          src="https://images.unsplash.com/photo-1460574283810-2aab119d8511" 
          alt="Steel Construction" 
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/70"></div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-3xl text-white">
          <span className="inline-block bg-grassgreen text-white px-4 py-1 rounded-full text-sm font-semibold mb-6 animate-pulse">
            Premier Steel Construction
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Building Abuja's Future with Steel
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Precision-engineered steel structures with innovation and reliability for Nigeria's growing infrastructure needs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-grassgreen hover:bg-grassgreen-light shadow-md transition-all duration-300 transform hover:scale-105">
              <Link to="/contact">Get a Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="relative overflow-hidden border-2 border-orange text-white bg-orange/20 backdrop-blur-sm hover:bg-orange hover:text-white transition-all duration-300 shadow-lg pulse-animation">
              <Link to="/projects">
                <span className="relative z-10">Explore Our Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange/30 to-orange/60 opacity-70 transform -skew-x-12 animate-pulse"></span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
