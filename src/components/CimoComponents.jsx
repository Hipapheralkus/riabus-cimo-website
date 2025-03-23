import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '../utils/ImageComponents';

// Layout wrapper for Cimo pages
const CimoLayout = ({ children }) => {
  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <CimoNavbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <CimoFooter />
    </div>
  );
};

// Navbar component for Cimo
const CimoNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  // Categories from the uploaded document
  const categories = [
    { name: "Súbory kartičiek", path: "/cimo/karty" },
    { name: "Obal na kartičky", path: "/cimo/obaly" },
    { name: "Kartičky (veľké)", path: "/cimo/karticky-velke" },
    { name: "Kartičky (malé)", path: "/cimo/karticky-male" },
    { name: "Rozvrhy hodín", path: "/cimo/rozvrhy" },
    { name: "Záložky", path: "/cimo/zalozky" },
    { name: "Pozvánky", path: "/cimo/pozvanky" },
    { name: "Pexesá", path: "/cimo/pexesa" },
    { name: "Zošitové štítky", path: "/cimo/stitky" },
    { name: "Cenovky", path: "/cimo/cenovky" },
    { name: "Nálepky", path: "/cimo/nalepky" },
  ];

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

  // Handle dropdown toggle for desktop
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="bg-emerald-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/cimo" className="font-bold text-xl md:text-2xl flex items-center">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </span>
            Čimo - výrobný sortiment
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
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/cimo" className="hover:text-emerald-200 transition-colors navbar-link">Domov</Link>
            <div className="relative group">
              <button 
                className="flex items-center hover:text-emerald-200 transition-colors navbar-link"
                onClick={() => toggleDropdown(0)}
                aria-expanded={activeDropdown === 0}
              >
                Produkty
                <svg className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 0 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg transition-all duration-200 z-50 ${
                  activeDropdown === 0 ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="py-1 max-h-96 overflow-y-auto">
                  {categories.map((category, index) => (
                    <Link 
                      key={index}
                      to={category.path} 
                      className="block px-4 py-2 text-gray-800 hover:bg-emerald-100 hover:text-emerald-800"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/cimo/kontakt" className="hover:text-emerald-200 transition-colors navbar-link">Kontakt</Link>
            <Link to="/" className="hover:text-emerald-200 transition-colors navbar-link">Späť na výber</Link>
          </div>
        </div>
        
        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-emerald-500 mt-2 pt-2">
            <Link to="/cimo" className="block py-2 hover:text-emerald-200 transition-colors" onClick={() => setIsOpen(false)}>Domov</Link>
            <div className="py-2">
              <button 
                className="flex items-center hover:text-emerald-200 transition-colors w-full text-left"
                onClick={() => toggleDropdown(1)}
                aria-expanded={activeDropdown === 1}
              >
                Produkty
                <svg className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 1 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`pl-4 mt-2 space-y-2 ${activeDropdown === 1 ? 'block' : 'hidden'}`}>
                {categories.map((category, index) => (
                  <Link 
                    key={index}
                    to={category.path} 
                    className="block py-1 hover:text-emerald-200 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/cimo/kontakt" className="block py-2 hover:text-emerald-200 transition-colors" onClick={() => setIsOpen(false)}>Kontakt</Link>
            <Link to="/" className="block py-2 hover:text-emerald-200 transition-colors" onClick={() => setIsOpen(false)}>Späť na výber</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

// Footer component for Cimo
const CimoFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-emerald-700 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} Čimo - výrobný sortiment. Všetky práva vyhradené.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-emerald-200 transition-colors">Obchodné podmienky</a>
            <a href="#" className="hover:text-emerald-200 transition-colors">Ochrana osobných údajov</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { CimoLayout, CimoNavbar, CimoFooter };