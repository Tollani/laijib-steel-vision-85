
import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'white';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  const textColor = variant === 'white' ? 'text-white' : 'text-steel';
  const accentColor = 'text-redaccent';
  
  return (
    <div className="flex items-center">
      <img 
        src="/lovable-uploads/4044509a-c7b5-47e0-9cd0-6d9fc060143e.png" 
        alt="LAIJIB STEEL NIG. LTD Logo" 
        className="h-12 mr-3"
      />
      <div className="flex flex-col">
        <span className={`font-montserrat font-extrabold text-xl tracking-tight ${textColor}`}>
          LAIJIB <span className={accentColor}>STEEL NIG. LTD</span>
        </span>
        <span className={`text-xs font-semibold tracking-wider ${textColor} opacity-80`}>RC: 1486830</span>
      </div>
    </div>
  );
};

export default Logo;
