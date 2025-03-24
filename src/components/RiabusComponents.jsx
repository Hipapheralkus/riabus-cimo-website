import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { OptimizedImage, EmailImage } from '../utils/ImageComponents';

// Layout wrapper for Riabus pages
const RiabusLayout = ({ children }) => {
  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <RiabusNavbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <RiabusFooter />
    </div>
  );
};

// Navbar component for Riabus
const RiabusNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/riabus" className="font-bold text-xl md:text-2xl flex items-center">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
              </svg>
            </span>
            Autobusová preprava RIABUS
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/riabus" className="hover:text-blue-200 transition-colors navbar-link">Domov</Link>
            <Link to="/riabus/sluzby" className="hover:text-blue-200 transition-colors navbar-link">Služby</Link>
            <Link to="/riabus/kontakt" className="hover:text-blue-200 transition-colors navbar-link">Kontakt</Link>
            <Link to="/" className="hover:text-blue-200 transition-colors navbar-link">Späť na výber</Link>
          </div>
        </div>
        
        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-blue-500 mt-2 pt-2">
            <Link to="/riabus" className="block py-2 hover:text-blue-200 transition-colors" onClick={() => setIsOpen(false)}>Domov</Link>
            <Link to="/riabus/sluzby" className="block py-2 hover:text-blue-200 transition-colors" onClick={() => setIsOpen(false)}>Služby</Link>
            <Link to="/riabus/kontakt" className="block py-2 hover:text-blue-200 transition-colors" onClick={() => setIsOpen(false)}>Kontakt</Link>
            <Link to="/" className="block py-2 hover:text-blue-200 transition-colors" onClick={() => setIsOpen(false)}>Späť na výber</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

// Footer component for Riabus
const RiabusFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-700 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} Autobusová preprava RIABUS. Všetky práva vyhradené.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-200 transition-colors">Prepravný poriadok</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Ochrana osobných údajov</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Bus Card Component
const BusCard = ({ name, description, features, imageSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105">
      <div className="h-96 bg-gray-200 flex items-center justify-center overflow-hidden">
        <OptimizedImage 
          src={imageSrc || "/images/bus-placeholder.webp"} 
          alt={name} 
          className="object-cover w-full h-full"
          width={800}
          height={600}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl lg:text-2xl font-bold text-blue-700 mb-2">{name}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        {features && features.length > 0 && (
          <ul className="list-disc pl-6 mt-2 space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-gray-600">{feature}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// Contact Info Card
const ContactCard = ({ person }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
      <h3 className="text-xl font-semibold text-blue-700 mb-3">{person.name}</h3>
      {person.title && <p className="text-gray-600 mb-3">{person.title}</p>}
      
      <div className="space-y-3">
        {person.phone && (
          <p className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="text-gray-700 hover:text-blue-600">
              {person.phone}
            </a>
          </p>
        )}
        
        {person.email && (
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <EmailImage email={person.email} className="h-5" />
          </div>
        )}
        
        {person.address && (
          <p className="flex items-start">
            <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-gray-700">{person.address}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export { 
  RiabusLayout, 
  RiabusNavbar, 
  RiabusFooter,
  BusCard,
  ContactCard
};