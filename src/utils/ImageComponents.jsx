import React, { useState } from 'react';

// Component that handles missing images gracefully
const OptimizedImage = ({
  src,
  alt,
  width = 120,
  height = 120,
  className = '',
  placeholderSrc = '/images/missing-image.webp', // Path to your missing image placeholder
  ...props
}) => {
  const [error, setError] = useState(false);
  
  // Only log the error once, not continuously
  const handleError = (e) => {
    if (!error) {
      console.log(`Image not found: ${src} - using placeholder instead`);
      setError(true);
      
      // Use the placeholder image
      e.target.src = placeholderSrc;
      
      // Remove the onerror handler to prevent infinite loops if placeholder also fails
      e.target.onerror = null;
    }
  };
  
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

// Email Image component with improved error handling
const EmailImage = ({ email, width = 200, height = 30, className = '', ...props }) => {
  const [error, setError] = useState(false);
  
  // Get the username part for the image name
  const username = email.split('@')[0];
  
  // Path to the email image
  const imagePath = `/images/emails/email-protected-${username}.webp`;
  
  const handleError = (e) => {
    if (!error) {
      console.log(`Email image not found: ${imagePath} - using placeholder`);
      setError(true);
      e.target.src = `/api/placeholder/${width}/${height}`;
      e.target.onerror = null;
    }
  };
  
  return (
    <img
      src={imagePath}
      alt="E-mail contact"
      width={width}
      height={height}
      className={className}
      title="Contact email (image to prevent spam)"
      onError={handleError}
      {...props}
    />
  );
};

export { OptimizedImage, EmailImage };