
import React, { useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import ImageLoader from '@/components/common/ImageLoader';

const ProjectSlideshow = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const projectImages = [
    {
      src: "/lovable-uploads/583086d0-81c0-4b7e-b36e-4376abb942d6.png",
      alt: "Decorative metal fence with intricate design"
    },
    {
      src: "/lovable-uploads/205dc646-d5c3-4674-9e52-8e2bf32d4608.png",
      alt: "Construction workers in safety gear at a worksite"
    },
    {
      src: "/lovable-uploads/40b42f1e-9f53-4a37-a5da-3ca49cad43a9.png",
      alt: "Steel frame structure for buildings under construction"
    },
    {
      src: "/lovable-uploads/74beb545-679c-4dc6-9bdd-48ffedab8179.png",
      alt: "Construction worker overseeing steel frame installation at a multi-story building"
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
                <ImageLoader 
                  src={image.src} 
                  alt={image.alt} 
                  aspectRatio="video"
                  className="w-full"
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
