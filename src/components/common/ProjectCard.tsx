
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="group relative overflow-hidden rounded-lg transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1">
      <div className="aspect-w-16 aspect-h-10 overflow-hidden bg-gray-200">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-orange border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src={image}
          alt={title}
          className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-gray-500 text-lg">Image unavailable</div>
          </div>
        )}
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
