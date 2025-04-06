
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/common/SectionTitle';
import ProjectCard from '@/components/common/ProjectCard';
import ServiceCard from '@/components/common/ServiceCard';
import TestimonialCard from '@/components/common/TestimonialCard';
import { ArrowRight, MessageSquare, Hammer, Ruler, Hardhat, Construction, Building2, Settings, BarChart3, Shield } from 'lucide-react';

const Index = () => {
  // Sample data for featured projects
  const featuredProjects = [
    {
      id: '1',
      title: 'Commercial Office Tower',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc',
      location: 'Abuja Central Business District',
    },
    {
      id: '2',
      title: 'Industrial Factory Complex',
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764',
      location: 'Kaduna Industrial Zone',
    },
    {
      id: '3',
      title: 'Luxury Residential Building',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
      location: 'Maitama, Abuja',
    },
  ];

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

  // Sample data for testimonials
  const testimonials = [
    {
      quote: "LAIJIB Steel delivered our commercial building project ahead of schedule with exceptional quality. Their attention to detail and structural expertise made a complex project seamless.",
      name: "Adamu Johnson",
      title: "Project Manager",
      company: "Everest Properties Ltd",
    },
    {
      quote: "The structural integrity of our factory expansion was critical for our operations. LAIJIB's engineering team provided innovative solutions that saved us time and resources.",
      name: "Chioma Okafor",
      title: "CEO",
      company: "NexGen Manufacturing",
    },
    {
      quote: "Working with LAIJIB Steel was a pleasure. Their communication throughout our project was excellent, and they accommodated design changes efficiently.",
      name: "Mohammed Ibrahim",
      title: "Director",
      company: "Ibrahim Developments",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
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
            <span className="inline-block bg-orange text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Premier Steel Construction
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Building Abuja's Future with Steel
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Precision-engineered steel structures with innovation and reliability for Nigeria's growing infrastructure needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-orange hover:bg-orange-light">
                <Link to="/contact">Get a Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                <Link to="/projects">Explore Our Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Services" 
            subtitle="Comprehensive steel construction solutions tailored to meet your project requirements with quality and precision."
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
            <Button asChild variant="outline" className="border-orange text-orange hover:bg-orange hover:text-white">
              <Link to="/services">View All Services <ArrowRight size={16} className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-steel text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose LAIJIB STEEL?</h2>
              <div className="h-1 w-20 bg-orange mb-8"></div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-orange/20 p-3 rounded-full">
                    <Shield size={24} className="text-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                    <p className="text-gray-300">Rigorous quality control processes and ISO-certified manufacturing procedures ensure excellence in every project.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-orange/20 p-3 rounded-full">
                    <BarChart3 size={24} className="text-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
                    <p className="text-gray-300">Our team of engineers and technicians brings over 20 years of combined experience in steel construction.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-orange/20 p-3 rounded-full">
                    <Hardhat size={24} className="text-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Safety Standards</h3>
                    <p className="text-gray-300">We maintain stringent safety protocols that exceed industry standards for both fabrication and installation.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-orange/20 p-3 rounded-full">
                    <Settings size={24} className="text-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Modern Technology</h3>
                    <p className="text-gray-300">Utilizing cutting-edge technology and equipment for precision fabrication and efficient project management.</p>
                  </div>
                </div>
              </div>
              
              <Button asChild className="mt-8 bg-orange hover:bg-orange-light">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1433086966358-54859d0ed716" 
                  alt="Steel Construction Process" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-orange text-white p-6 rounded-lg shadow-xl">
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

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Featured Projects" 
            subtitle="Explore our portfolio of completed steel construction projects across Nigeria, showcasing our expertise and innovation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard 
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                image={project.image}
                location={project.location}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-orange text-orange hover:bg-orange hover:text-white">
              <Link to="/projects">View All Projects <ArrowRight size={16} className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Testimonials Section */}
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
    </div>
  );
};

export default Index;
