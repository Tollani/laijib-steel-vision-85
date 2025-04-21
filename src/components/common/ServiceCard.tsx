
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
    <div
      className="rounded-3xl p-6 shadow-lg border border-white/40 transition-all duration-300 group
        bg-white/30
        hover:bg-blue-100/80
        backdrop-blur-xl
        hover:shadow-2xl
        hover:-translate-y-3
        cursor-pointer
        "
      style={{
        background: 'linear-gradient(135deg, #e3f2fd 70%, #d8ebfb 100%)', // light blue glassmorphism
        boxShadow: '0 8px 24px 0 rgba(31,38,135,0.13), 0 1.5px 0px 0px rgba(14,165,233,0.06)',
        border: '1.5px solid rgba(255, 255, 255, 0.18)',
      }}
    >
      <div className="rounded-full bg-redaccent/10 p-3 w-fit mb-4 text-redaccent">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-steel">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-redaccent hover:underline mt-2"
      >
        Learn More <ArrowRight size={18} className="ml-2" />
      </Link>
    </div>
  );
};

export default ServiceCard;

