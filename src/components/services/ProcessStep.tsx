
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isReversed?: boolean;
}

const ProcessStep = ({ number, title, description, icon, isReversed = false }: ProcessStepProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center">
      <div className={`md:w-1/2 md:pr-12 ${isReversed ? 'order-3 md:order-1' : 'md:text-right order-2 md:order-1'}`}>
        {!isReversed ? (
          <>
            <h3 className="text-2xl font-bold text-steel mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </>
        ) : (
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-full">
            {icon}
          </div>
        )}
      </div>
      <div className="md:w-16 flex justify-center mb-4 md:mb-0 order-1 md:order-2">
        <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
          {number}
        </div>
      </div>
      <div className={`md:w-1/2 md:pl-12 ${isReversed ? 'order-2 md:order-3' : 'order-3'}`}>
        {isReversed ? (
          <>
            <h3 className="text-2xl font-bold text-steel mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </>
        ) : (
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-full">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcessStep;
