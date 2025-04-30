
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
  image: string;
}

interface ServiceCardProps {
  service: ServiceDetail;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
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
    <div 
      key={service.id} 
      id={service.id} 
      className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
    >
      <div className={`order-2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl bg-gray-200 relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-orange border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img 
            src={service.image} 
            alt={service.title}
            className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="text-gray-500 text-lg">Image unavailable</div>
            </div>
          )}
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
  );
};

export default ServiceCard;
