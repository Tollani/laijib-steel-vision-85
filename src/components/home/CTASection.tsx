
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-steel hero-pattern">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Steel Construction Project?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact our team for a consultation and let us help bring your vision to life with quality steel construction solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-orange hover:bg-orange-light">
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">
                <MessageSquare size={18} className="mr-2" /> Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
