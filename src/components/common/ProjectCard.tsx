
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  location: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  category,
  image,
  location,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg">
      <div className="overflow-hidden">
        <AspectRatio ratio={16/10} className="w-full">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </AspectRatio>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <span className="inline-block mb-2 text-sm bg-orange px-3 py-1 rounded-full">{category}</span>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-gray-200 mb-4">{location}</p>
        <Link 
          to={`/projects/${id}`}
          className="inline-flex items-center text-white hover:text-orange transition-colors"
        >
          View Project <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
