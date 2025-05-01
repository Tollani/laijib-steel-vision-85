
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ImageLoader from '@/components/common/ImageLoader';
import SectionTitle from '@/components/common/SectionTitle';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  location: string;
  description: string;
}

interface ProjectDetailProps {
  projects: Project[];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="py-20 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Not Found</h2>
        <p className="text-gray-600 mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/projects" className="flex items-center justify-center">
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-steel">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              {project.location}
            </p>
            <span className="inline-block mb-2 text-sm bg-orange px-3 py-1 rounded-full shadow-lg">{project.category}</span>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-10">
                <ImageLoader
                  src={project.image}
                  alt={project.title}
                  aspectRatio="video"
                  className="w-full h-full object-cover"
                  loadingColor="orange"
                />
              </div>
            </div>
            <div>
              <SectionTitle 
                title="Project Overview" 
                subtitle={`Learn more about our ${project.category.toLowerCase()} steel construction project in ${project.location}.`}
                alignment="left"
              />
              <div className="mt-6">
                <p className="text-gray-700 mb-6">
                  {project.description}
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-steel">Project Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">{project.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Category</p>
                      <p className="font-medium">{project.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Project ID</p>
                      <p className="font-medium">#{project.id}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild className="mr-4">
                  <Link to="/contact" className="flex items-center">
                    Request Similar Project
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/projects" className="flex items-center">
                    <ArrowLeft size={16} className="mr-2" />
                    Back to Projects
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
