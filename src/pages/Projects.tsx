
import React, { useState } from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import ProjectCard from '@/components/common/ProjectCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Projects = () => {
  // Project categories
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'residential', label: 'Residential' },
    { id: 'infrastructure', label: 'Infrastructure' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  // Sample projects data
  const projectsData = [
    {
      id: '1',
      title: 'Commercial Office Tower',
      category: 'commercial',
      image: '/lovable-uploads/7547f88b-3fb4-448e-a802-8983ddd56f46.jpg',
      location: 'Abuja Central Business District',
    },
    {
      id: '2',
      title: 'Industrial Factory Complex',
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764',
      location: 'Kaduna Industrial Zone',
    },
    {
      id: '3',
      title: 'Luxury Residential Building',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
      location: 'Maitama, Abuja',
    },
    {
      id: '4',
      title: 'Highway Bridge Construction',
      category: 'infrastructure',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
      location: 'Lagos-Ibadan Expressway',
    },
    {
      id: '5',
      title: 'Shopping Mall Development',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511',
      location: 'Port Harcourt City Center',
    },
    {
      id: '6',
      title: 'Manufacturing Plant',
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc',
      location: 'Kano Industrial Estate',
    },
    {
      id: '7',
      title: 'Apartment Complex',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764',
      location: 'Lekki, Lagos',
    },
    {
      id: '8',
      title: 'Railway Station Framework',
      category: 'infrastructure',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
      location: 'Abuja-Kaduna Line',
    },
    {
      id: '9',
      title: 'Corporate Headquarters',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511',
      location: 'Victoria Island, Lagos',
    },
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-steel">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Explore our portfolio of completed steel construction projects across Nigeria, showcasing our expertise and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Project Gallery" 
            subtitle="Browse through our diverse range of steel construction projects, from commercial buildings to industrial facilities."
          />

          <Tabs defaultValue="all" className="w-full mt-8">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-gray-100">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className="data-[state=active]:bg-orange data-[state=active]:text-white"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={activeCategory} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
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
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Project Approach" 
            subtitle="How we manage and deliver every steel construction project from conception to completion."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-md p-8 relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-orange flex items-center justify-center text-white font-bold text-xl">1</div>
              <h3 className="text-2xl font-bold mb-4 text-steel">Initial Consultation</h3>
              <p className="text-gray-600">
                We begin with a detailed consultation to understand your project requirements, objectives, and budget constraints.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-md p-8 relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-orange flex items-center justify-center text-white font-bold text-xl">2</div>
              <h3 className="text-2xl font-bold mb-4 text-steel">Design & Engineering</h3>
              <p className="text-gray-600">
                Our team develops comprehensive designs and engineering solutions tailored to your specific project needs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-md p-8 relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-orange flex items-center justify-center text-white font-bold text-xl">3</div>
              <h3 className="text-2xl font-bold mb-4 text-steel">Execution & Completion</h3>
              <p className="text-gray-600">
                We handle fabrication, delivery, and installation with precision, ensuring quality and timely project completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-steel text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Project with Us</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready to discuss your next steel construction project? Contact our team for expert guidance and solutions tailored to your needs.
          </p>
          <Button asChild size="lg" className="bg-orange hover:bg-orange-light">
            <a href="/contact">Contact Us Today</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
