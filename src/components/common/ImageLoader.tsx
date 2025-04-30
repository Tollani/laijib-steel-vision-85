
import React, { useState } from 'react';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'auto';
  loadingColor?: string;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ 
  src, 
  alt, 
  className = '', 
  aspectRatio = 'auto',
  loadingColor = 'orange'
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    console.log(`Failed to load image: ${src}`);
    setIsLoading(false);
    setHasError(true);
  };

  // Determine aspect ratio class
  let aspectRatioClass = '';
  if (aspectRatio === 'square') {
    aspectRatioClass = 'aspect-square';
  } else if (aspectRatio === 'video') {
    aspectRatioClass = 'aspect-video';
  } else {
    aspectRatioClass = 'aspect-auto';
  }

  return (
    <div className={`relative overflow-hidden bg-gray-200 ${aspectRatioClass} ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-10 h-10 border-4 border-${loadingColor} border-t-transparent rounded-full animate-spin`}></div>
        </div>
      )}
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 p-4">
          <div className="text-gray-500 text-lg text-center">Image unavailable</div>
          <div className="text-gray-400 text-sm text-center mt-2">{alt}</div>
        </div>
      )}
    </div>
  );
};

export default ImageLoader;
