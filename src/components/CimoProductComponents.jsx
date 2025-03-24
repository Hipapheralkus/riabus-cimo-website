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

// Very simple direct path building - no fancy formatting that could cause issues
const getImagePath = (product, category, side) => {
  // Convert ID: Remove spaces, convert to lowercase
  let id = product.id.toLowerCase()
    .replace(/\s+/g, '')      // Remove spaces
    .replace(' - ', '-');     // Ensure consistent dash format
  
  // Determine folder based on category
  let folder = 'unknown';
  if (category === 'karty') folder = 'subory';
  else if (category === 'karticky-velke') folder = 'karticky';
  else if (category === 'karticky-male') folder = 'kartickyMale';
  else folder = category;
  
  // Build the path
  return `/images/products/${folder}/cimo-${folder}-${id}-${side}.webp`;
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
  
  useEffect(() => {
    // Debug the category parameter
    console.log("🔍 Current category from URL:", category);
    console.log("🔍 Available categories:", Object.keys(productData));
    
    if (category && productData[category]) {
      console.log(`✅ Found ${productData[category].length} products in category "${category}"`);
      setProducts(productData[category]);
      
      // Get unique subcategories
      const subCats = [...new Set(productData[category].map(p => p.category))].filter(Boolean);
      console.log("🔍 Subcategories:", subCats);
      setSubcategories(subCats);
    } else {
      console.error(`❌ Category "${category}" not found in product data!`);
    }
  }, [category]);
  
  const filteredProducts = selectedSubcategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedSubcategory);

  // Debug the first product's image path if any products exist
  useEffect(() => {
    if (filteredProducts.length > 0 && category) {
      const firstProduct = filteredProducts[0];
      const frontPath = getImagePath(firstProduct, category, 'front');
      const backPath = firstProduct.hasBackside ? getImagePath(firstProduct, category, 'back') : null;
      
      console.log("🔍 First product:", firstProduct);
      console.log("🔍 Front image path:", frontPath);
      if (backPath) console.log("🔍 Back image path:", backPath);
      
      // Check if image exists
      const checkImage = (url) => {
        const img = new Image();
        img.onload = () => console.log(`✅ Image exists: ${url}`);
        img.onerror = () => console.error(`❌ Image not found: ${url}`);
        img.src = url;
      };
      
      checkImage(frontPath);
      if (backPath) checkImage(backPath);
    }
  }, [filteredProducts, category]);
  
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
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="overflow-x-auto">
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <div className="h-16 w-16 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                          <OptimizedImage 
                            src={getImagePath(product, category, 'front')}
                            alt={`${product.name} predná strana`}
                            className="object-contain max-h-full"
                            placeholderSrc="/images/missing-image.webp"
                            width={64}
                            height={64}
                          />
                        </div>
                        {product.hasBackside && (
                          <div className="h-16 w-16 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                            <OptimizedImage 
                              src={getImagePath(product, category, 'back')}
                              alt={`${product.name} zadná strana`}
                              className="object-contain max-h-full"
                              placeholderSrc="/images/missing-image.webp"
                              width={64}
                              height={64}
                            />
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
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
          </div>
        </div>
      </div>
    </CimoLayout>
  );
};

// A direct test component to help debug image loading
const TestImageComponent = () => {
  // Test with specific direct paths
  const testPaths = [
    '/images/products/subory/cimo-subory-sj1-front.webp',
    '/images/products/karticky/cimo-karticky-prvkytabulka-front.webp',
    '/images/products/kartickyMale/cimo-kartickyMale-dvojtvaryi-front.webp'
  ];
  
  // Test with standard image tag
  const testWithRegularImg = (path) => {
    return (
      <div key={path} className="mb-8 border p-4 rounded bg-gray-50">
        <p className="mb-2 font-bold">Testing: {path}</p>
        <div className="h-40 flex items-center justify-center bg-white border rounded">
          <img 
            src={path} 
            alt="Test image" 
            className="max-h-full"
            onLoad={() => console.log(`✅ Image loaded successfully: ${path}`)}
            onError={(e) => {
              console.error(`❌ Image failed to load: ${path}`);
              e.target.src = '/api/placeholder/120/120';
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <CimoLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-emerald-800 mb-6">Image Loading Test</h1>
        
        {/* Testing direct image references */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Testing Direct Image References</h2>
          
          {testPaths.map(path => testWithRegularImg(path))}
          
          <div className="mt-6 border-t pt-4">
            <h3 className="font-bold mb-2">File Structure Check:</h3>
            <p className="mb-4">
              Make sure your image files are placed exactly at:<br/>
              <code className="bg-gray-100 p-1 rounded">/public/images/products/subory/cimo-subory-sj1-front.webp</code>
            </p>
            
            <p className="text-sm text-gray-600">
              Note: In development, the "public" folder is served from the root, so paths start with "/images/..."
            </p>
          </div>
        </div>
        
        {/* Debug tools */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Debugging Tools</h2>
          
          <div className="space-y-4">
            <button 
              onClick={() => {
                const file = new Image();
                file.onload = () => alert('✅ Test image exists!');
                file.onerror = () => alert('❌ Test image NOT found!');
                file.src = '/images/products/subory/cimo-subory-sj1-front.webp';
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Check First Image Exists
            </button>
            
            <button 
              onClick={() => {
                console.log('🔍 Available categories:', Object.keys(productData));
                console.log('🔍 Sample product:', productData.karty[0]);
                const path = getImagePath(productData.karty[0], 'karty', 'front');
                console.log('🔍 Sample image path:', path);
                alert(`Check console for debugging info for path: ${path}`);
              }}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Log Path Debugging Info
            </button>
            
            <button 
              onClick={() => {
                // List all files in public folder (doesn't work in browser, just for reference)
                alert('This would list files in the public folder, but browser security prevents this. Check server logs or use developer tools Network tab.');
              }}
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              Try List Files (Demo Only)
            </button>
          </div>
        </div>
        
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-bold">Debugging Tips:</h3>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Check browser console (F12) for errors</li>
            <li>Verify file paths and case sensitivity</li>
            <li>Check the Network tab to see if images are being requested</li>
            <li>Ensure Vite is properly configured to serve static assets</li>
            <li>Try using standard <code className="bg-gray-200 p-1 rounded">&lt;img&gt;</code> tags as a test</li>
          </ul>
        </div>
      </div>
    </CimoLayout>
  );
};

export { CimoProductCategory, CimoHome, CimoContact, categoryNames, TestImageComponent };