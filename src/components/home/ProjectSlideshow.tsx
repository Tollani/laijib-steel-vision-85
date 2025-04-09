
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const ProjectSlideshow = () => {
  const projectImages = [
    {
      src: "/lovable-uploads/3afb79ee-5393-415c-892e-820ad3269c34.png",
      alt: "Multi-story residential building under construction"
    },
    {
      src: "/lovable-uploads/58a5d805-3c0f-449d-a5cf-8c672e9041f2.png",
      alt: "Steel water tower structure"
    },
    {
      src: "/lovable-uploads/b190a44b-dcf3-4abe-9ab9-a8e266f4f332.png",
      alt: "Row of modern townhouses under construction"
    }
  ];

  return (
    <div className="relative w-full h-full">
      <Carousel className="w-full">
        <CarouselContent>
          {projectImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="lg:flex hidden" />
        <CarouselNext className="lg:flex hidden" />
      </Carousel>
    </div>
  );
};

export default ProjectSlideshow;
