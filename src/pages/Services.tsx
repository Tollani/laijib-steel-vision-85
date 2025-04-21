import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/common/SectionTitle';
import { Construction, Ruler, Hammer, Building2, Wrench, HardHat, FileText, Users, Shield, Repeat } from 'lucide-react';

const Services = () => {
  // Service categories
  const serviceCategories = [
    {
      id: 'fabrication',
      title: 'Steel Fabrication',
      description: 'Custom fabrication of structural steel components with precision engineering and quality materials.',
      icon: <Construction size={48} />,
      details: [
        'Structural steel beams and columns fabrication',
        'Custom metal fabrication for specialized projects',
        'Precision cutting and welding of steel components',
        'Quality control and testing of all fabricated products',
        'Large-scale industrial fabrication capabilities',
      ],
      image: '/lovable-uploads/a20bf783-1648-474f-9158-acfb51e378ae.png',
    },
    {
      id: 'design',
      title: 'Structural Design',
      description: 'Expert structural engineering and design services for optimal performance and safety compliance.',
      icon: <Ruler size={48} />,
      details: [
        'Comprehensive structural analysis and design',
        'BIM (Building Information Modeling) implementation',
        'Engineering consultation for complex projects',
        '3D modeling and visualization services',
        'Value engineering to optimize cost and performance',
      ],
      image: '/lovable-uploads/71356a05-5001-4223-8472-548c3f9beee5.png',
    },
    {
      id: 'installation',
      title: 'Installation Services',
      description: 'Professional on-site installation with skilled technicians and modern equipment.',
      icon: <Hammer size={48} />,
      details: [
        'Certified installation teams with safety training',
        'Crane and heavy equipment operation',
        'Bolt-up and welded connections on-site',
        'Project schedule adherence and milestone tracking',
        'Quality inspection and documentation',
      ],
      image: '/lovable-uploads/27c5f576-03b3-4976-9467-e4615f33f4b4.png',
    },
    {
      id: 'construction',
      title: 'Building Construction',
      description: 'Complete steel building construction from foundation to finishing with turnkey solutions.',
      icon: <Building2 size={48} />,
      details: [
        'Pre-engineered steel building systems',
        'Industrial and commercial construction projects',
        'Warehouses and storage facilities',
        'Office buildings and multi-story structures',
        'Architectural features and decorative steel elements',
      ],
      image: '/lovable-uploads/882ec527-16a3-47ea-ba02-f52a807b3cc7.png',
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Repairs',
      description: 'Ongoing maintenance, inspection and structural repair services for steel structures.',
      icon: <Wrench size={48} />,
      details: [
        'Regular inspection and maintenance programs',
        'Structural assessments and integrity evaluations',
        'Repair of damaged steel components',
        'Reinforcement of existing structures',
        'Emergency repair services',
      ],
      image: '/lovable-uploads/5a6db9c9-051e-4060-90c1-4f630d4b0eeb.png',
    },
    {
      id: 'consultation',
      title: 'Consultation Services',
      description: 'Expert advice and guidance for all aspects of steel construction projects.',
      icon: <FileText size={48} />,
      details: [
        'Pre-construction planning and feasibility studies',
        'Material selection and specification guidance',
        'Budget development and cost analysis',
        'Regulatory compliance and permit assistance',
        'Project timeline development',
      ],
      image: '/lovable-uploads/5a6db9c9-051e-4060-90c1-4f630d4b0eeb.png',
    },
  ];

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
              <div 
                key={service.id} 
                id={service.id} 
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`order-2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className={`order-1 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="flex items-center mb-6">
                    <div className="text-orange mr-4">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-steel">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 text-orange mt-1">
                          <Shield size={18} />
                        </div>
                        <span className="ml-3 text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className="bg-orange hover:bg-orange-light mt-4">
                    <Link to="/contact">Request This Service</Link>
                  </Button>
                </div>
              </div>
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
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-steel mb-3">Consultation & Planning</h3>
                  <p className="text-gray-600">We start with understanding your needs, site assessment, and developing initial concepts aligned with your goals and budget.</p>
                </div>
                <div className="md:w-16 flex justify-center mb-4 md:mb-0 order-1 md:order-2">
                  <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">1</div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-3">
                  <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-full">
                    <FileText size={48} className="text-orange" />
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 md:pr-12 order-3 md:order-1">
                  <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-full">
                    <Ruler size={48} className="text-orange" />
                  </div>
                </div>
                <div className="md:w-16 flex justify-center mb-4 md:mb-0 order-1 md:order-2">
                  <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">2</div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left order-2 md:order-3">
                  <h3 className="text-2xl font-bold text-steel mb-3">Design & Engineering</h3>
                  <p className="text-gray-600">Our engineers create detailed structural designs, perform necessary calculations, and prepare technical drawings for approval.</p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-steel mb-3">Fabrication</h3>
                  <p className="text-gray-600">Using premium materials, we fabricate all components in our state-of-the-art facility with rigorous quality control checks.</p>
                </div>
                <div className="md:w-16 flex justify-center mb-4 md:mb-0 order-1 md:order-2">
                  <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">3</div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-3">
                  <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-full">
                    <Construction size={48} className="text-orange" />
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 md:pr-12 order-3 md:order-1">
                  <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-full">
                    <Hammer size={48} className="text-orange" />
                  </div>
                </div>
                <div className="md:w-16 flex justify-center mb-4 md:mb-0 order-1 md:order-2">
                  <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">4</div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left order-2 md:order-3">
                  <h3 className="text-2xl font-bold text-steel mb-3">Installation</h3>
                  <p className="text-gray-600">Our expert installation teams deploy on-site with modern equipment to assemble your steel structure safely and efficiently.</p>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-steel mb-3">Quality Assurance</h3>
                  <p className="text-gray-600">Comprehensive inspections and testing ensure your structure meets all safety standards and quality requirements.</p>
                </div>
                <div className="md:w-16 flex justify-center mb-4 md:mb-0 order-1 md:order-2">
                  <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">5</div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-3">
                  <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-full">
                    <Shield size={48} className="text-orange" />
                  </div>
                </div>
              </div>
              
              {/* Step 6 */}
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 md:pr-12 order-3 md:order-1">
                  <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-full">
                    <Repeat size={48} className="text-orange" />
                  </div>
                </div>
                <div className="md:w-16 flex justify-center mb-4 md:mb-0 order-1 md:order-2">
                  <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">6</div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left order-2 md:order-3">
                  <h3 className="text-2xl font-bold text-steel mb-3">Support & Maintenance</h3>
                  <p className="text-gray-600">We provide ongoing support, maintenance services, and warranty coverage to ensure lasting performance.</p>
                </div>
              </div>
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
