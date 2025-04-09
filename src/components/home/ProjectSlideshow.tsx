
import React, { useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

const ProjectSlideshow = () => {
  const [api, setApi] = React.useState<CarouselApi>();
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

  useEffect(() => {
    if (!api) return;

    // Set up auto-scrolling every 5 seconds
    const autoScrollInterval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    // Clean up interval on unmount
    return () => clearInterval(autoScrollInterval);
  }, [api]);

  return (
    <div className="relative w-full">
      <Carousel 
        setApi={setApi} 
        className="w-full" 
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent>
          {projectImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProjectSlideshow;
