
import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'white';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  const textColor = variant === 'white' ? 'text-white' : 'text-steel';
  const accentColor = 'text-orange';
  
  return (
    <div className="flex items-center">
      <div className="flex flex-col">
        <span className={`font-montserrat font-extrabold text-xl tracking-tight ${textColor}`}>
          LAIJIB <span className={accentColor}>STEEL</span>
        </span>
        <span className={`text-xs font-semibold tracking-wider ${textColor} opacity-80`}>DESIGN CO.</span>
      </div>
    </div>
  );
};

export default Logo;
