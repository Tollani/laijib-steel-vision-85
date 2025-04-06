
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-xl border border-gray-100 h-full flex flex-col">
      <div className="rounded-full bg-orange/10 p-3 w-fit mb-4 text-orange">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-steel">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-orange hover:underline mt-2"
      >
        Learn More <ArrowRight size={18} className="ml-2" />
      </Link>
    </div>
  );
};

export default ServiceCard;
