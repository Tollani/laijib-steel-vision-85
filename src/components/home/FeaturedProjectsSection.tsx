
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/common/SectionTitle';
import ProjectCard from '@/components/common/ProjectCard';

const FeaturedProjectsSection = () => {
  // Sample data for featured projects
  const featuredProjects = [
    {
      id: '1',
      title: 'Commercial Office Tower',
      category: 'Commercial',
      image: '/lovable-uploads/a0f9ca8a-4749-4cb0-a299-10d648ca6501.png',
      location: 'Abuja Central Business District',
    },
    {
      id: '2',
      title: 'Industrial Factory Complex',
      category: 'Industrial',
      image: '/lovable-uploads/78d9c899-c770-45ad-8088-a02382ed3c48.png',
      location: 'Kaduna Industrial Zone',
    },
    {
      id: '3',
      title: 'Luxury Residential Building',
      category: 'Residential',
      image: '/lovable-uploads/d74c46af-0b0b-4018-9938-deb1656d587b.png',
      location: 'Maitama, Abuja',
    },
  ];

  return (
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
  );
};

export default FeaturedProjectsSection;
