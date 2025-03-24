import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CimoLayout } from './CimoComponents';
import { OptimizedImage } from '../utils/ImageComponents';


// Complete product data
const productData = {
  // Súbory kartičiek
  "karty": [
    // Slovenský jazyk
    { id: "Sj - 1", name: "Podstatné mená", dimensions: "181 mm x 131 mm", category: "Slovenský jazyk", hasBackside: true },
    { id: "Sj - 2", name: "Prídavné mená", dimensions: "181 mm x 131 mm", category: "Slovenský jazyk", hasBackside: true },
    { id: "Sj - 3", name: "Zámená", dimensions: "181 mm x 131 mm", category: "Slovenský jazyk", hasBackside: true },
    { id: "Sj - 4", name: "Číslovky", dimensions: "181 mm x 131 mm", category: "Slovenský jazyk", hasBackside: true },
    { id: "Sj - 5", name: "Slovesá", dimensions: "181 mm x 131 mm", category: "Slovenský jazyk", hasBackside: true },
    { id: "Sj - 6", name: "Neohybné slovné druhy", dimensions: "181 mm x 131 mm", category: "Slovenský jazyk", hasBackside: true },
    { id: "Sj - 7", name: "Veta", dimensions: "181 mm x 131 mm", category: "Slovenský jazyk", hasBackside: true },
    { id: "Sj - 8", name: "Vetné členy", dimensions: "181 mm x 131 mm", category: "Slovenský jazyk", hasBackside: true },
    { id: "Sj - 9", name: "Vybrané slová", dimensions: "181 mm x 131 mm", category: "Slovenský jazyk", hasBackside: true },
    { id: "Sj - 10", name: "Písanie veľkých začiatočných písmen", dimensions: "181 mm x 131 mm", category: "Slovenský jazyk", hasBackside: true },
    { id: "Sj - 11", name: "Tvorenie slov", dimensions: "181 mm x 131 mm", category: "Slovenský jazyk", hasBackside: true },
    
    // Nemecký jazyk
    { id: "Nj - 1", name: "Das Verb I. (Sloveso I.)", dimensions: "181 mm x 131 mm", category: "Nemecký jazyk", hasBackside: true },
    { id: "Nj - 2", name: "Das Verb II. (Sloveso II.)", dimensions: "181 mm x 131 mm", category: "Nemecký jazyk", hasBackside: true },
    { id: "Nj - 3", name: "Das substantiv (Podstatné meno)", dimensions: "181 mm x 131 mm", category: "Nemecký jazyk", hasBackside: true },
    { id: "Nj - 4", name: "Das Adjektiv (Prídavné meno)", dimensions: "181 mm x 131 mm", category: "Nemecký jazyk", hasBackside: true },
    { id: "Nj - 5", name: "Das Adverb (Príslovka)", dimensions: "181 mm x 131 mm", category: "Nemecký jazyk", hasBackside: true },
    { id: "Nj - 6", name: "Das Pronomen (Zámeno)", dimensions: "181 mm x 131 mm", category: "Nemecký jazyk", hasBackside: true },
    { id: "Nj - 7", name: "Numeralien (Číslovky)", dimensions: "181 mm x 131 mm", category: "Nemecký jazyk", hasBackside: true },
    { id: "Nj - 8", name: "Präpositionen (Predložky)", dimensions: "181 mm x 131 mm", category: "Nemecký jazyk", hasBackside: true },
    { id: "Nj - 9", name: "Konjunktionen (Spojky)", dimensions: "181 mm x 131 mm", category: "Nemecký jazyk", hasBackside: true },
    
    // Anglický jazyk
    { id: "Aj - 1", name: "Verbs I. (Slovesá I.)", dimensions: "181 mm x 131 mm", category: "Anglický jazyk", hasBackside: true },
    { id: "Aj - 2", name: "Verbs II. (Slovesá II.)", dimensions: "181 mm x 131 mm", category: "Anglický jazyk", hasBackside: true },
    { id: "Aj - 3", name: "Verbs III. (Slovesá III.)", dimensions: "181 mm x 131 mm", category: "Anglický jazyk", hasBackside: true },
    { id: "Aj - 4", name: "Verbs IV. (Slovesá IV.)", dimensions: "181 mm x 131 mm", category: "Anglický jazyk", hasBackside: true },
    { id: "Aj - 5", name: "Nouns I. (Podstatné mená I.)", dimensions: "181 mm x 131 mm", category: "Anglický jazyk", hasBackside: true },
    { id: "Aj - 6", name: "Nouns II. (Podstatné mená II.)", dimensions: "181 mm x 131 mm", category: "Anglický jazyk", hasBackside: true },
    { id: "Aj - 7", name: "Nouns III. (Podstatné mená III.)", dimensions: "181 mm x 131 mm", category: "Anglický jazyk", hasBackside: true },
    { id: "Aj - 8", name: "Pronouns (Zámená)", dimensions: "181 mm x 131 mm", category: "Anglický jazyk", hasBackside: true },
    { id: "Aj - 9", name: "Numerals (Číslovky)", dimensions: "181 mm x 131 mm", category: "Anglický jazyk", hasBackside: true },
    { id: "Aj - 10", name: "Adjectives (Prídavné mená)", dimensions: "181 mm x 131 mm", category: "Anglický jazyk", hasBackside: true },
    { id: "Aj - 11", name: "Adverbs (Príslovky)", dimensions: "181 mm x 131 mm", category: "Anglický jazyk", hasBackside: true },
    { id: "Aj - 12", name: "Prepositions (Predložky)", dimensions: "181 mm x 131 mm", category: "Anglický jazyk", hasBackside: true },
    { id: "Aj - 13", name: "Conjuctions (Spojky)", dimensions: "181 mm x 131 mm", category: "Anglický jazyk", hasBackside: true },
    { id: "Aj - 14", name: "Word Order (Slovosled)", dimensions: "181 mm x 131 mm", category: "Anglický jazyk", hasBackside: true },
    { id: "Aj - 15", name: "Conditional Clauses (Podmienkové vety)", dimensions: "181 mm x 131 mm", category: "Anglický jazyk", hasBackside: true },
    
    // Ruský jazyk
    { id: "Rj - 1", name: "Hlásky a písmená", dimensions: "181 mm x 131 mm", category: "Ruský jazyk", hasBackside: true },
    { id: "Rj - 2", name: "Podstatné mená I.", dimensions: "181 mm x 131 mm", category: "Ruský jazyk", hasBackside: true },
    { id: "Rj - 3", name: "Podstatné mená II.", dimensions: "181 mm x 131 mm", category: "Ruský jazyk", hasBackside: true },
    { id: "Rj - 4", name: "Prídavné mená", dimensions: "181 mm x 131 mm", category: "Ruský jazyk", hasBackside: true },
    { id: "Rj - 5", name: "Zámená", dimensions: "181 mm x 131 mm", category: "Ruský jazyk", hasBackside: true },
    { id: "Rj - 6", name: "Číslovky I.", dimensions: "181 mm x 131 mm", category: "Ruský jazyk", hasBackside: true },
    { id: "Rj - 7", name: "Číslovky II.", dimensions: "181 mm x 131 mm", category: "Ruský jazyk", hasBackside: true },
    { id: "Rj - 8", name: "Sloveso", dimensions: "181 mm x 131 mm", category: "Ruský jazyk", hasBackside: true },
    { id: "Rj - 9", name: "Sloveso II.", dimensions: "181 mm x 131 mm", category: "Ruský jazyk", hasBackside: true },
    { id: "Rj - 10", name: "Príslovky", dimensions: "181 mm x 131 mm", category: "Ruský jazyk", hasBackside: true },
    { id: "Rj - 11", name: "Predložky", dimensions: "181 mm x 131 mm", category: "Ruský jazyk", hasBackside: true },
    { id: "Rj - 12", name: "Spojky", dimensions: "181 mm x 131 mm", category: "Ruský jazyk", hasBackside: true },
    { id: "Rj - 13", name: "Prehľad ruského pravopisu", dimensions: "181 mm x 131 mm", category: "Ruský jazyk", hasBackside: true },
    { id: "Rj - 14", name: "Veta", dimensions: "181 mm x 131 mm", category: "Ruský jazyk", hasBackside: true },
    
    // Matematické tabuľky
    { id: "MT - 1", name: "Geometrické vzorce - 1 (Rovinné obrazce)", dimensions: "181 mm x 131 mm", category: "Matematické tabuľky", hasBackside: true },
    { id: "MT - 2", name: "Geometrické vzorce - 2 (Telesá)", dimensions: "181 mm x 131 mm", category: "Matematické tabuľky", hasBackside: true },
    { id: "MT - 3", name: "Matematické značky", dimensions: "181 mm x 131 mm", category: "Matematické tabuľky", hasBackside: true },
    { id: "MT - 4", name: "Prevody jednotiek", dimensions: "181 mm x 131 mm", category: "Matematické tabuľky", hasBackside: true },
    { id: "MT - 5", name: "Druhá mocnina", dimensions: "181 mm x 131 mm", category: "Matematické tabuľky", hasBackside: true },
    { id: "MT - 6", name: "Druhá odmocnina", dimensions: "181 mm x 131 mm", category: "Matematické tabuľky", hasBackside: true },
    { id: "MT - 7", name: "Tretia mocnina", dimensions: "181 mm x 131 mm", category: "Matematické tabuľky", hasBackside: true },
    { id: "MT - 8", name: "Tretia odmocnina", dimensions: "181 mm x 131 mm", category: "Matematické tabuľky", hasBackside: true },
    { id: "MT - 9", name: "Hodnoty goniometrických funkcií - 1 (0°- 45°)", dimensions: "181 mm x 131 mm", category: "Matematické tabuľky", hasBackside: true },
    { id: "MT - 10", name: "Hodnoty goniometrických funkcií - 2 (45°- 90°)", dimensions: "181 mm x 131 mm", category: "Matematické tabuľky", hasBackside: true },
    { id: "MT - 11", name: "Rozklad čísel na súčin prvočísel", dimensions: "181 mm x 131 mm", category: "Matematické tabuľky", hasBackside: true },
    { id: "MT - 12", name: "Prevrátené čísla", dimensions: "181 mm x 131 mm", category: "Matematické tabuľky", hasBackside: true },
    
    // Dejepis
    { id: "D - 1a", name: "Pravek", dimensions: "181 mm x 131 mm", category: "Dejepis", hasBackside: true },
    { id: "D - 1b", name: "Starovek", dimensions: "181 mm x 131 mm", category: "Dejepis", hasBackside: true },
    { id: "D - 2a", name: "Stredovek", dimensions: "181 mm x 131 mm", category: "Dejepis", hasBackside: true },
    { id: "D - 2b", name: "Slovensko (833 - 1711)", dimensions: "181 mm x 131 mm", category: "Dejepis", hasBackside: true },
    { id: "D - 3a", name: "Novovek", dimensions: "181 mm x 131 mm", category: "Dejepis", hasBackside: true },
    { id: "D - 3b", name: "Slovensko (1711 - 1914)", dimensions: "181 mm x 131 mm", category: "Dejepis", hasBackside: true },
    { id: "D - 4a", name: "Najnovšie dejiny", dimensions: "181 mm x 131 mm", category: "Dejepis", hasBackside: true },
    { id: "D - 4b", name: "Slovensko (1914 - súčastnosť)", dimensions: "181 mm x 131 mm", category: "Dejepis", hasBackside: true },
    { id: "D - Slovník", name: "Slovník pojmov", dimensions: "181 mm x 131 mm", category: "Dejepis", hasBackside: true },
  ],
  
  // Kartičky (181 mm × 131 mm)
  "karticky-velke": [
    { id: "PrvkyTabulka", name: "Periodická sústava prvkov", dimensions: "181 mm x 131 mm", hasBackside: true },
    { id: "GeomVzorce", name: "Základné geometrické vzorce", dimensions: "181 mm x 131 mm", hasBackside: true },
    { id: "GonioFunkcie", name: "Funkcie sin, cos, tg, cotg", dimensions: "181 mm x 131 mm", hasBackside: true },
    { id: "DopZnacky1", name: "Dopravné značky - 1", dimensions: "181 mm x 131 mm", hasBackside: true },
    { id: "DopZnacky2", name: "Dopravné značky - 2", dimensions: "181 mm x 131 mm", hasBackside: true },
    { id: "DopZnacky3", name: "Dopravné značky - 3", dimensions: "181 mm x 131 mm", hasBackside: true },
    { id: "RimGre", name: "Rímske čísla / Grécka abeceda", dimensions: "181 mm x 131 mm", hasBackside: true },
    { id: "SlrKarta", name: "Slovenská republika", dimensions: "181 mm x 131 mm", hasBackside: true },
  ],
  
  // Kartičky (131 mm × 91 mm)
  "karticky-male": [
    { id: "DvojtvaryI", name: "Dvojtvary I.", dimensions: "131 mm x 91 mm", hasBackside: true },
    { id: "DvojtvaryII", name: "Dvojtvary II.", dimensions: "131 mm x 91 mm", hasBackside: true },
    { id: "PodmMenuL", name: "Neživotné podstatné mená na -l", dimensions: "131 mm x 91 mm", hasBackside: true },
    { id: "PodmMenuR", name: "Neživotné podstatné mená na -r", dimensions: "131 mm x 91 mm", hasBackside: true },
    { id: "RimskaGreckaMala", name: "Rímska sústava/Grécka abeceda", dimensions: "131 mm x 91 mm", hasBackside: true },
    { id: "NasobTab", name: "Veľká násobilka/Malá násobilka", dimensions: "131 mm x 91 mm", hasBackside: true },
    { id: "Nasob120", name: "Násobilka 1-20", dimensions: "131 mm x 91 mm", hasBackside: true },
    { id: "KarZemSK", name: "Slovensko - kartičkový zemepis", dimensions: "131 mm x 91 mm", hasBackside: true },
    { id: "KarZemEN", name: "Anglicko - kartičkový zemepis", dimensions: "131 mm x 91 mm", hasBackside: true },
  ],
  
  // Add other categories if needed
};

// Image Modal Component
const ProductImageModal = ({ isOpen, imageUrl, alt, onClose }) => {
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
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            e.target.src = `/api/placeholder/600/600`;
          }}
        />
        <div className="mt-2 text-center text-gray-700">{alt}</div>
      </div>
    </div>
  );
};

// Product Image Component
const ProductImage = ({ src, alt, size = 'md', productId, type, category }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  
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
    
    // Format product ID for filename (handle special cases)
    // Example: "Sj - 1" should become "sj-1" (not "sj---1")
    const formattedId = productId.toLowerCase()
      .replace(/\s*-\s*/g, '-') // Replace " - " with a single "-"
      .replace(/\s+/g, '-')     // Replace other spaces with "-"
      .replace(/\//g, '-');     // Replace "/" with "-"
    
    return `/images/products/${folder}/cimo-${folder}-${formattedId}-${type}.webp`;
  };
  
  const imagePath = getImagePath();
  const placeholderSrc = `/api/placeholder/${size === 'lg' ? '200/200' : '128/128'}`;
  
  return (
    <>
      <div 
        className={`${containerClass} bg-gray-100 rounded flex items-center justify-center overflow-hidden`}
        onClick={() => modalOpen === false && setModalOpen(true)}
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
            onError={() => {
              console.log("Image failed to load:", imagePath);
              setImageError(true);
            }}
          />
        )}
      </div>
      
      {modalOpen && (
        <ProductImageModal
          isOpen={modalOpen}
          imageUrl={imageError ? placeholderSrc : imagePath}
          alt={alt}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
};

// Product Card View Component
const ProductCardView = ({ products, category }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {products.map((product, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="p-6">
            <h3 className="text-lg font-bold text-emerald-700 mb-2">{product.id}</h3>
            <h4 className="text-gray-800 font-medium mb-4">{product.name}</h4>
            
            <div className="flex flex-col space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600 font-medium">Rozmery:</span>
                <span className="text-gray-800">{product.dimensions}</span>
              </div>
              
              {category === "cenovky" && (
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Balenie:</span>
                  <span className="text-gray-800">{product.packaging}</span>
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <ProductImage
                productId={product.id}
                type="front"
                category={category}
                alt={`${product.name} predná strana`}
                size="lg"
              />
              {product.hasBackside && (
                <ProductImage
                  productId={product.id}
                  type="back"
                  category={category}
                  alt={`${product.name} zadná strana`}
                  size="lg"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// View Toggle Component
const ViewToggle = ({ currentView, onViewChange }) => {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <span className="text-sm font-medium text-gray-700">Zobrazenie:</span>
      <div className="relative inline-flex rounded-md shadow-sm">
        <button
          type="button"
          className={`py-2 px-4 text-sm font-medium rounded-l-md focus:outline-none ${
            currentView === 'table'
              ? 'bg-emerald-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
          onClick={() => onViewChange('table')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M3 18h18M3 6h18" />
          </svg>
          <span className="sr-only">Tabuľka</span>
        </button>
        <button
          type="button"
          className={`py-2 px-4 text-sm font-medium rounded-r-md focus:outline-none ${
            currentView === 'cards'
              ? 'bg-emerald-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
          onClick={() => onViewChange('cards')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <span className="sr-only">Karty</span>
        </button>
      </div>
    </div>
  );
};

// Categories mapping for display names
const categoryNames = {
  "karty": "Súbory kartičiek",
  "obaly": "Obal na kartičky",
  "karticky-velke": "Kartičky (181 mm × 131 mm)",
  "karticky-male": "Kartičky (131 mm × 91 mm)",
  "rozvrhy": "Rozvrhy hodín",
  "zalozky": "Záložky",
  "pozvanky": "Pozvánky",
  "pexesa": "Pexesá",
  "stitky": "Zošitové štítky",
  "cenovky": "Cenovky",
  "nalepky": "Nálepka – SK",
};

// Component to display products by category
const CimoProductCategory = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'cards'
  
  useEffect(() => {
    if (category && productData[category]) {
      setProducts(productData[category]);
      
      // Get unique subcategories
      const subCats = [...new Set(productData[category].map(p => p.category))].filter(Boolean);
      setSubcategories(subCats);
    }
  }, [category]);
  
  const filteredProducts = selectedSubcategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedSubcategory);
  
  const handleViewChange = (mode) => {
    setViewMode(mode);
  };
  
  if (!category || !productData[category]) {
    return (
      <CimoLayout>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Kategória nenájdená</h1>
          <p className="mb-6">Požadovaná kategória produktov neexistuje.</p>
          <Link
            to="/cimo"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded font-medium hover:bg-emerald-700 transition-colors"
          >
            Späť na domovskú stránku
          </Link>
        </div>
      </CimoLayout>
    );
  }
  
  return (
    <CimoLayout>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <Link to="/cimo" className="text-emerald-600 hover:text-emerald-800">
            Domov
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">{categoryNames[category]}</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6">{categoryNames[category]}</h1>
        
        {subcategories.length > 0 && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Filtrovať podľa podkategórie:</label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSubcategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedSubcategory === 'all'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Všetky
              </button>
              {subcategories.map((subcat, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSubcategory(subcat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedSubcategory === subcat
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {subcat}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <ViewToggle currentView={viewMode} onViewChange={handleViewChange} />
        
        {viewMode === 'table' ? (
          <div className="overflow-x-auto bg-white rounded-lg shadow-md mb-8">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Názov
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rozmery
                  </th>
                  {category === "cenovky" && (
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Balenie
                    </th>
                  )}
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ukážka
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProducts.map((product, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {product.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.dimensions}
                    </td>
                    {category === "cenovky" && (
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.packaging}
                      </td>
                    )}
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap items-center gap-4">
                        <ProductImage
                          productId={product.id}
                          type="front"
                          category={category}
                          alt={`${product.name} predná strana`}
                          size="md"
                        />
                        {product.hasBackside && (
                          <ProductImage
                            productId={product.id}
                            type="back"
                            category={category}
                            alt={`${product.name} zadná strana`}
                            size="md"
                          />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <ProductCardView 
            products={filteredProducts} 
            category={category} 
          />
        )}
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-600">Žiadne produkty neboli nájdené v tejto kategórii.</p>
          </div>
        )}
      </div>
    </CimoLayout>
  );
};

// Home page for Cimo
const CimoHome = () => {
  return (
    <CimoLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6">Čimo - výrobný sortiment</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-lg mb-4">
            Vitajte na stránke Čimo - výrobný sortiment. Ponúkame širokú škálu vzdelávacích pomôcok a učebných materiálov pre školy, učiteľov a žiakov.
          </p>
          <p className="text-lg">
            Náš sortiment zahŕňa rôzne súbory kartičiek, učebné pomôcky, rozvrhy hodín, záložky, pexesá, zošitové štítky a mnoho ďalších produktov.
          </p>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-4">Kategórie produktov</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(categoryNames).map(([key, name]) => (
            <CategoryCard key={key} title={name} path={`/cimo/${key}`} />
          ))}
        </div>
      </div>
    </CimoLayout>
  );
};

// Category Card Component
const CategoryCard = ({ title, path }) => {
  return (
    <Link to={path}>
      <div className="bg-white rounded-lg shadow hover:shadow-md p-4 transition-shadow">
        <h3 className="text-lg font-semibold text-emerald-700 mb-2">{title}</h3>
        <div className="flex justify-end mt-2">
          <span className="text-emerald-600 hover:text-emerald-800">
            Zobraziť produkty →
          </span>
        </div>
      </div>
    </Link>
  );
};

// Contact page for Cimo
const CimoContact = () => {
  return (
    <CimoLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6">Kontaktujte nás</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">Kontaktné údaje</h2>
            
            <div className="space-y-4">
              <p className="flex items-start text-lg">
                <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  Čimo - výrobný sortiment<br />
                  Adresa spoločnosti<br />
                  PSČ Mesto
                </span>
              </p>
              
              <p className="flex items-center text-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +421 900 000 000
              </p>
              
              <div className="flex items-center text-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <img src="/api/placeholder/200/30" alt="E-mail" className="h-6" />
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Otváracie hodiny:</h3>
                <ul className="space-y-1">
                  <li><span className="font-medium">Pondelok - Piatok:</span> 8:00 - 16:00</li>
                  <li><span className="font-medium">Sobota:</span> 9:00 - 12:00</li>
                  <li><span className="font-medium">Nedeľa:</span> Zatvorené</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">Napíšte nám</h2>
            
            <form className="space-y-4 cimo-form">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Meno a priezvisko</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Vaše meno"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Váš e-mail"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">Telefón</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Vaše telefónne číslo"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-1">Predmet</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Predmet správy"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Správa</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Vaša správa"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-emerald-600 text-white px-6 py-3 rounded font-medium hover:bg-emerald-700 transition-colors"
              >
                Odoslať správu
              </button>
            </form>
          </div>
        </div>
      </div>
    </CimoLayout>
  );
};

export { CimoProductCategory, CimoHome, CimoContact, categoryNames };