import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/common/SectionTitle';
import { Check, Award, Users, Clock, BarChart3, Shield, Globe, Landmark } from 'lucide-react';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Olaiwola A. Aliu',
      position: 'Chief Executive Officer',
      bio: 'With over 20 years in the construction industry,Engr. Olaiwola brings extensive leadership and industry knowledge to LAIJIB Steel.',
    },
    {
      name: 'Engr. Badmus',
      position: 'Chief Engineer',
      bio: 'Engr. Badmus leads our engineering team with his expertise in structural design and innovative steel construction solutions.',
    },
    {
      name: 'Omotolani Ajibona',
      position: 'I.T and Digital Marketing',
      bio: 'Omotola oversees all I.T related issues, ensuring efficient execution and delivery of digital marketing, Building and maintaining the websites',
    },
    {
      name: 'Oluwaseun Adegoke',
      position: 'Project Manager',
      bio: 'Oluwaseun specializes in managing complex steel construction projects with a focus on quality and client satisfaction.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-steel">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Building Nigeria's future with innovative steel construction solutions since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Our Company" 
                subtitle="LAIJIB STEEL DESIGN CO is a premier steel construction company in Nigeria, specializing in innovative structural solutions."
                alignment="left"
                className="mb-6"
              />

              <p className="text-gray-700 mb-6">
                Founded in 2010, LAIJIB Steel has grown to become a leading provider of steel construction services in Abuja and across Nigeria. We specialize in designing, fabricating, and installing high-quality steel structures for commercial, industrial, residential, and infrastructure projects.
              </p>
              
              <p className="text-gray-700 mb-6">
                Our commitment to excellence, innovation, and client satisfaction has established us as a trusted partner for businesses, government agencies, and individuals seeking reliable steel construction solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <Check className="mr-3 text-orange flex-shrink-0 mt-1" />
                  <span>ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-start">
                  <Check className="mr-3 text-orange flex-shrink-0 mt-1" />
                  <span>Licensed by COREN</span>
                </div>
                <div className="flex items-start">
                  <Check className="mr-3 text-orange flex-shrink-0 mt-1" />
                  <span>Member of Nigerian Society of Engineers</span>
                </div>
                <div className="flex items-start">
                  <Check className="mr-3 text-orange flex-shrink-0 mt-1" />
                  <span>Industry Safety Standards</span>
                </div>
              </div>

              <Button asChild className="bg-orange hover:bg-orange-light mt-4">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1460574283810-2aab119d8511" 
                  alt="LAIJIB Steel Facility" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
                <p className="text-xl font-bold mb-1 text-steel">13+ Years</p>
                <p className="text-sm text-gray-600">Industry Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Mission, Vision & Values" 
            subtitle="The principles that guide our operations and define our company culture."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-4 text-orange">
                <Landmark size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-steel">Our Mission</h3>
              <p className="text-gray-600">
                To deliver precision-engineered steel structures that exceed client expectations through innovation, quality craftsmanship, and sustainable practices, contributing to Nigeria's infrastructural development.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-4 text-orange">
                <Globe size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-steel">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and innovative steel construction company in West Africa, recognized for excellence in structural engineering, sustainability, and transformative projects.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-4 text-orange">
                <Shield size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-steel">Our Values</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Check className="mr-2 text-orange flex-shrink-0 mt-1" />
                  <span>Excellence in quality and safety</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-orange flex-shrink-0 mt-1" />
                  <span>Integrity and transparency</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-orange flex-shrink-0 mt-1" />
                  <span>Innovation and adaptability</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-orange flex-shrink-0 mt-1" />
                  <span>Customer satisfaction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-steel text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-orange mb-3">
                <BarChart3 size={40} />
              </div>
              <p className="text-4xl font-bold mb-2">200+</p>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div>
              <div className="text-orange mb-3">
                <Users size={40} />
              </div>
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-gray-300">Team Members</p>
            </div>
            <div>
              <div className="text-orange mb-3">
                <Award size={40} />
              </div>
              <p className="text-4xl font-bold mb-2">15+</p>
              <p className="text-gray-300">Industry Awards</p>
            </div>
            <div>
              <div className="text-orange mb-3">
                <Clock size={40} />
              </div>
              <p className="text-4xl font-bold mb-2">13+</p>
              <p className="text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team - Modified to remove images */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Leadership Team" 
            subtitle="Meet the experienced professionals guiding LAIJIB Steel's vision and operations."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-steel">{member.name}</h3>
                  <p className="text-orange font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Work Together?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
            Let's collaborate on your next steel construction project and create innovative, durable structures that stand the test of time.
          </p>
          <Button asChild size="lg" className="bg-white text-orange hover:bg-gray-100">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
