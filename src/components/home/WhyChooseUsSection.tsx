
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, BarChart3, HardHat, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectSlideshow from './ProjectSlideshow';

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-steel text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose LAIJIB STEEL?</h2>
            <div className="h-1 w-20 bg-grassgreen mb-8"></div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-grassgreen/20 p-3 rounded-full">
                  <Shield size={24} className="text-grassgreen" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                  <p className="text-gray-300">Rigorous quality control processes and ISO-certified manufacturing procedures ensure excellence in every project.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-grassgreen/20 p-3 rounded-full">
                  <BarChart3 size={24} className="text-grassgreen" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
                  <p className="text-gray-300">Our team of engineers and technicians brings over 20 years of combined experience in steel construction.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-grassgreen/20 p-3 rounded-full">
                  <HardHat size={24} className="text-grassgreen" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Safety Standards</h3>
                  <p className="text-gray-300">We maintain stringent safety protocols that exceed industry standards for both fabrication and installation.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-grassgreen/20 p-3 rounded-full">
                  <Settings size={24} className="text-grassgreen" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Modern Technology</h3>
                  <p className="text-gray-300">Utilizing cutting-edge technology and equipment for precision fabrication and efficient project management.</p>
                </div>
              </div>
            </div>
            
            <Button asChild className="mt-8 bg-grassgreen hover:bg-grassgreen-light">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden">
              <ProjectSlideshow />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-grassgreen text-white p-6 rounded-lg shadow-xl">
              <p className="text-xl font-bold mb-1">15+ Years</p>
              <p className="text-sm">Industry Experience</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-white text-steel p-6 rounded-lg shadow-xl">
              <p className="text-xl font-bold mb-1">200+</p>
              <p className="text-sm">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
