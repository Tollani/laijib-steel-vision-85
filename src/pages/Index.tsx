
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import FeaturedProjectsSection from '@/components/home/FeaturedProjectsSection';
import CTASection from '@/components/home/CTASection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

const Index = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <FeaturedProjectsSection />
      <CTASection />
      <TestimonialsSection />
    </div>
  );
};

export default Index;
