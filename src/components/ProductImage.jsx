import React, { useState, useEffect } from 'react';
import ImageModal from './ImageModal';

const ProductImage = ({ src, alt, size = 'md', productId, type, category }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Reset image error state when component props change
  useEffect(() => {
    setImageError(false);
  }, [productId, category, type]);
  
  // Determine image size based on prop
  const sizeClasses = {
    sm: "h-16 w-16",
    md: "h-32 w-32",
    lg: "h-48 w-48"
  };
  
  const containerClass = sizeClasses[size] || sizeClasses.md;
  
  // Generate actual image path based on product info
  const getImagePath = () => {
    // If a direct src is provided, use it
    if (src && !src.includes('placeholder')) {
      return src;
    }
    
    // Otherwise, construct path from product info
    let folder = '';
    if (category === 'karty') folder = 'subory';
    else if (category === 'karticky-velke') folder = 'karticky-velke';
    else if (category === 'karticky-male') folder = 'karticky-male';
    else folder = category || 'subory';
    
    // Format product ID for filename (lowercase, no spaces)
    const formattedId = productId.toLowerCase().replace(/\s+/g, '-');
    
    return `/images/products/${folder}/cimo-${folder}-${formattedId}-${type}.webp`;
  };
  
  const imagePath = getImagePath();
  
  return (
    <>
      <div 
        className={`${containerClass} bg-gray-100 rounded flex items-center justify-center overflow-hidden`}
        onClick={() => setModalOpen(true)}
      >
        {imageError ? (
          <div className="flex items-center justify-center w-full h-full text-gray-400">
            <span className="text-sm text-center">No image</span>
          </div>
        ) : (
          <img
            src={imagePath}
            alt={alt}
            className="max-h-full max-w-full product-image"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              e.target.src = `/api/placeholder/128/128`;
              setImageError(true);
            }}
          />
        )}
      </div>
      
      <ImageModal
        isOpen={modalOpen}
        imageUrl={imageError ? `/api/placeholder/128/128` : imagePath}
        alt={alt}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default ProductImage;