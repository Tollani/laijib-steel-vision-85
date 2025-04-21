
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Construction, Ruler, Hammer, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/common/SectionTitle';
import ServiceCard from '@/components/common/ServiceCard';

const ServicesSection = () => {
  // Sample data for services
  const servicesData = [
    {
      title: 'Steel Fabrication',
      description: 'Custom fabrication of structural steel components with precision engineering and quality materials.',
      icon: <Construction size={24} />,
      link: '/services#fabrication',
    },
    {
      title: 'Structural Design',
      description: 'Expert structural engineering and design services for optimal performance and safety compliance.',
      icon: <Ruler size={24} />,
      link: '/services#design',
    },
    {
      title: 'Installation Services',
      description: 'Professional on-site installation with skilled technicians and modern equipment.',
      icon: <Hammer size={24} />,
      link: '/services#installation',
    },
    {
      title: 'Building Construction',
      description: 'Complete steel building construction from foundation to finishing with turnkey solutions.',
      icon: <Building2 size={24} />,
      link: '/services#construction',
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#F2FCE2', color: '#000000' }}>
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Services" 
          subtitle="Comprehensive steel construction solutions tailored to meet your project requirements with quality and precision."
          // Override SectionTitle text color to black for subtitle if needed
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-redaccent text-redaccent hover:bg-redaccent hover:text-white">
            <Link to="/services">View All Services <ArrowRight size={16} className="ml-2" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

