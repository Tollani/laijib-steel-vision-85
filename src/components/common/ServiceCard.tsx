
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
      className={`rounded-2xl p-6 shadow-md border border-white/30 transition-all duration-300 group
        bg-white/40
        hover:bg-white/60
        backdrop-blur-md
        hover:shadow-2xl
        hover:-translate-y-2
        cursor-pointer
        `}
      style={{
        background: 'linear-gradient(135deg, #D3E4FDcc 0%, #e9f6ff88 100%)',
        boxShadow:
          '0 8px 24px 0 rgba(31,38,135,0.10), 0 1.5px 0px 0px rgba(14,165,233,0.04)',
        border: '1.5px solid rgba(255, 255, 255, 0.20)',
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

