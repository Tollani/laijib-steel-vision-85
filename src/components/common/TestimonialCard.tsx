
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  company,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-xl border border-gray-100 h-full flex flex-col">
      <Quote size={40} className="text-orange/30 mb-4" />
      <p className="text-gray-700 italic mb-6">{quote}</p>
      <div className="mt-auto flex items-center">
        {image ? (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-steel/10 text-steel flex items-center justify-center mr-4">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-semibold text-steel">{name}</h4>
          <p className="text-sm text-gray-500">{title}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
