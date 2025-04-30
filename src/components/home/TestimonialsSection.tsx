
import React from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import TestimonialCard from '@/components/common/TestimonialCard';

const TestimonialsSection = () => {
  // Sample data for testimonials
  const testimonials = [
    {
      quote: "LAIJIB Steel delivered our commercial building project ahead of schedule with exceptional quality. Their attention to detail and structural expertise made a complex project seamless.",
      name: "Adamu Johnson",
      title: "Project Manager",
      company: "Cosgrove Realties",
    },
    {
      quote: "The structural integrity of our factory expansion was critical for our operations. LAIJIB's engineering team provided innovative solutions that saved us time and resources.",
      name: "Faruk Seluman",
      title: "Senior Supervisor",
      company: "Brains and Hammer",
    },
    {
      quote: "Working with LAIJIB Steel was a pleasure. Their communication throughout our project was excellent, and they accommodated design changes efficiently.",
      name: "Mohammed Ibrahim",
      title: "Director",
      company: "Bilad Realties",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Client Testimonials" 
          subtitle="Hear what our satisfied clients have to say about their experience working with LAIJIB Steel Design Co."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
