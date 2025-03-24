import React, { useEffect } from 'react';

const ImageModal = ({ isOpen, imageUrl, alt, onClose }) => {
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Stop propagation to prevent closing when clicking on the image
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={handleContentClick}>
        <button className="image-modal-close" onClick={onClose} aria-label="Close image">
          ×
        </button>
        <img 
          src={imageUrl} 
          alt={alt} 
          className="image-modal-image" 
        />
        <div className="mt-2 text-center text-gray-700">{alt}</div>
      </div>
    </div>
  );
};

export default ImageModal;