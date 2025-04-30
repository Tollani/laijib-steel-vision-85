
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageLoader from './ImageLoader';

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
    <div className="group relative overflow-hidden rounded-lg transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1">
      <div className="aspect-w-16 aspect-h-10 overflow-hidden bg-gray-200">
        <ImageLoader
          src={image}
          alt={title}
          aspectRatio="video"
          className="transition-transform duration-500 group-hover:scale-110"
          loadingColor="orange"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-90"></div>
      <div className="absolute bottom-0 left-0 p-6 text-white transform transition-transform duration-300 w-full">
        <span className="inline-block mb-2 text-sm bg-orange px-3 py-1 rounded-full shadow-lg">{category}</span>
        <h3 className="text-xl font-semibold mb-1 group-hover:text-orange transition-colors">{title}</h3>
        <p className="text-gray-200 mb-4">{location}</p>
        <Link 
          to={`/projects/${id}`}
          className="inline-flex items-center text-white group-hover:text-orange transition-all duration-300"
        >
          <span className="border-b border-transparent group-hover:border-orange">View Project</span> 
          <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
