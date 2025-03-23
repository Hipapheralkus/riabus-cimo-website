import React, { useState } from 'react';

// Component for optimized images with webp format
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  fallbackType = 'jpg',
  loading = 'lazy',
  ...props
}) => {
  const [imageError, setImageError] = useState(false);
  
  // Get the base part of the source without extension
  const getBaseSrc = (src) => {
    if (!src) return '';
    return src.substring(0, src.lastIndexOf('.')) || src;
  };
  
  // Handle image load error
  const handleError = () => {
    if (!imageError) {
      setImageError(true);
    }
  };
  
  // In a real environment, we'd have both webp and fallback images
  // For this demo, we'll use placeholder images
  const baseSrc = getBaseSrc(src);
  const webpSrc = `${baseSrc}.webp`;
  const fallbackSrc = `${baseSrc}.${fallbackType}`;
  
  // For demo purposes, we're using placeholders
  const placeholderSrc = `/api/placeholder/${width || 400}/${height || 300}`;

  return (
    <picture>
      {!imageError && (
        <source srcSet={webpSrc} type="image/webp" />
      )}
      <source srcSet={imageError ? placeholderSrc : fallbackSrc} type={`image/${fallbackType}`} />
      <img
        src={imageError ? placeholderSrc : fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        className={`${className}`}
        loading={loading}
        onError={handleError}
        {...props}
      />
    </picture>
  );
};

// Email Image component to prevent email scraping
const EmailImage = ({ email, width = 200, height = 30, className = '', ...props }) => {
  // In a real implementation, this would be a pre-generated webp image of the email
  // For demo purposes, we'll use a placeholder
  return (
    <img
      src={`/api/placeholder/${width}/${height}`}
      alt="E-mail contact"
      width={width}
      height={height}
      className={className}
      title="Contact email (image to prevent spam)"
      {...props}
    />
  );
};

export { OptimizedImage, EmailImage };