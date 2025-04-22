
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/common/SectionTitle';
import ServiceCard from '@/components/services/ServiceCard';
import ProcessStep from '@/components/services/ProcessStep';
import { serviceCategories } from '@/data/serviceCategories';
import { processSteps } from '@/data/processSteps';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-steel">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Comprehensive steel construction solutions tailored for Nigerian projects, combining international standards with local expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Comprehensive Steel Solutions" 
            subtitle="From design and fabrication to installation and maintenance, we provide end-to-end steel construction services."
            alignment="left"
          />

          <div className="grid grid-cols-1 gap-24 mt-16">
            {serviceCategories.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Process" 
            subtitle="We follow a systematic approach to ensure quality, efficiency, and client satisfaction at every stage of your project."
          />
          
          <div className="relative">
            {/* Process timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 relative">
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  isReversed={index % 2 === 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-steel text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Project?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our team for a consultation and let us help bring your vision to life with quality steel construction solutions.
          </p>
          <Button asChild size="lg" className="bg-orange hover:bg-orange-light">
            <Link to="/contact">Request a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
