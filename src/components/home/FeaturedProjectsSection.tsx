
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
      image: 'lovable-uploads/photo_6028199742439277780_x (1).jpg',
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
          <Button asChild variant="outline" className="border-2 border-orange text-orange hover:bg-orange hover:text-white transition-all duration-300 shadow-md transform hover:scale-105">
            <Link to="/projects" className="flex items-center">View All Projects <ArrowRight size={16} className="ml-2 animate-pulse" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
