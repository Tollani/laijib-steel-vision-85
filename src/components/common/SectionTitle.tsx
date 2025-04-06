
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  className = '' 
}) => {
  const alignmentClass = alignment === 'center' ? 'text-center mx-auto' : 'text-left';
  
  return (
    <div className={`mb-12 ${alignmentClass} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-orange mt-4 ${alignment === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;
