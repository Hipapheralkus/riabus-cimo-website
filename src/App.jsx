import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css';

// Import shared components
import { OptimizedImage, EmailImage } from './utils/ImageComponents';
import { RiabusLayout, RiabusNavbar, RiabusFooter, BusCard, ContactCard } from './components/RiabusComponents';
import { CimoLayout, CimoNavbar, CimoFooter } from './components/CimoComponents';

// Import the Cimo product components
import { CimoProductCategory, CimoContact, categoryNames } from './components/CimoProductComponents';

// Common Components
const Layout = ({ children, className }) => {
  return (
    <div className={`min-h-screen ${className}`}>
      {children}
    </div>
  );
};

// Landing Page Component
const LandingPage = () => {
  return (
    <Layout className="flex flex-col items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Vyberte si oblasť záujmu</h1>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <BusinessCard 
            title="Mimoškolská činnosť - exkurzie" 
            bgColor="bg-blue-600" 
            textColor="text-white"
            path="/riabus"
            description="Autobusová preprava RIABUS"
          />
          <BusinessCard 
            title="Čimo - výrobný sortiment" 
            bgColor="bg-emerald-600" 
            textColor="text-white"
            path="/cimo"
            description="Vzdelávacie pomôcky a učebné materiály"
          />
        </div>
      </div>
    </Layout>
  );
};

const BusinessCard = ({ title, bgColor, textColor, path, description }) => {
  return (
    <Link to={path} className="w-full md:w-1/2 max-w-md">
      <div className={`${bgColor} ${textColor} p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full`}>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg md:text-xl">{description}</p>
        <div className="mt-6">
          <span className="inline-block px-6 py-3 border-2 border-white rounded-full font-medium hover:bg-white hover:text-gray-800 transition-colors duration-300">
            Prejsť na stránku
          </span>
        </div>
      </div>
    </Link>
  );
};

const RiabusHome = () => {
  // Define the bus information
  const buses = [
    {
      id: 'iliade',
      name: 'Renault ILIADE',
      description: '49-miestny klimatizovaný autobus',
      imageSrc: '/images/renault-iliade.webp',
    },
    {
      id: 'master',
      name: 'Renault MASTER',
      description: '15-miestny klimatizovaný minibus',
      imageSrc: '/images/renault-master.webp',
    }
  ];

  return (
    <RiabusLayout>
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Autobusová preprava RIABUS</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg mb-4">
              Spoločnosť RIABUS pôsobí úspešne na Východnom Slovensku už niekoľko rokov. Špecializujeme sa na vnútroštátnu aj medzinárodnú autobusovú prepravu klimatizovaným 49-miestnym autobusom a 15-miestnym minibusom na organizovanie domácich a zahraničných exkurzií pre školy, kluby a iné.
            </p>
            <p className="text-lg mb-4">
              Ak potrebujete autobusovú prepravu, alebo zorganizovanie exkurzií za priaznivú cenu, sme tu pre vás.
            </p>
            <p className="text-lg mb-4">
              Prepravný poriadok si môžete stiahnuť na tomto <a href="#" className="text-blue-600 hover:underline font-medium">odkaze</a>.
            </p>
            <p className="text-lg font-medium text-blue-700">
              V spoločnosti RIABUS je vaša spokojnosť na prvom mieste.
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">Naše vozidlá</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {buses.map(bus => (
              <BusCard 
                key={bus.id}
                name={bus.name}
                description={bus.description}
                imageSrc={bus.imageSrc}
              />
            ))}
          </div>
        </section>
        
        <section>
          <div className="text-center">
            <Link 
              to="/riabus/sluzby" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg text-lg"
            >
              Zobraziť naše služby
            </Link>
          </div>
        </section>
      </div>
    </RiabusLayout>
  );
};

const RiabusServices = () => {
  // Define the bus information with features
  const buses = [
    {
      id: 'iliade',
      name: 'Renault ILIADE',
      description: '49-miestny klimatizovaný autobus',
      imageSrc: '/images/renault-iliade.webp',
      features: [
        'Klimatizácia',
        'Pohodlné sedadlá s nastaviteľným operadlom',
        'Audio-video systém s LCD obrazovkami',
        'Veľký batožinový priestor',
        'WiFi pripojenie',
        'USB nabíjačky pri každom sedadle'
      ]
    },
    {
      id: 'master',
      name: 'Renault MASTER',
      description: '15-miestny klimatizovaný minibus',
      imageSrc: '/images/renault-master.webp',
      features: [
        'Klimatizácia',
        'Ideálny pre menšie skupiny',
        'Pohodlné sedadlá',
        'Dostatočný batožinový priestor',
        'Flexibilné usporiadanie interiéru',
        'Ekonomická prevádzka'
      ]
    }
  ];
  
  // Define our services
  const services = [
    'Vnútroštátnu a medzinárodnú dopravu',
    '49 miestny autobus - Renault ILIADE',
    '15 miestny mini-bus - Renault MASTER',
    'Organizovanie domácich exkurzií',
    'Organizovanie zahraničných exkurzií',
    'Sprievodcovskú činnosť',
    'Dopravu pre školské výlety a exkurzie',
    'Dopravu pre firemné akcie a športové podujatia',
    'Individuálne plánovanie trás podľa požiadaviek klienta'
  ];

  return (
    <RiabusLayout>
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Naše služby</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">Ponúkame:</h2>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">Naše vozidlá</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {buses.map(bus => (
              <BusCard 
                key={bus.id}
                name={bus.name}
                description={bus.description}
                features={bus.features}
                imageSrc={bus.imageSrc}
              />
            ))}
          </div>
        </section>
        
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Exkurzie na mieru</h2>
          
          <p className="text-lg mb-6">
            Ponúkame organizovanie exkurzií na mieru pre školy, firmy a organizácie. Naši skúsení sprievodcovia vám pomôžu naplánovať ideálnu trasu a program podľa vašich požiadaviek.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-blue-800 mb-2">Domáce exkurzie</h3>
              <p>Objavujte krásy Slovenska, historické pamiatky, prírodné rezervácie a kultúrne podujatia.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-blue-800 mb-2">Zahraničné exkurzie</h3>
              <p>Navštívte európske metropoly, zábavné parky, múzeá a ďalšie atrakcie v zahraničí.</p>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <Link 
              to="/riabus/kontakt" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Kontaktujte nás pre cenovú ponuku
            </Link>
          </div>
        </section>
      </div>
    </RiabusLayout>
  );
};

const RiabusContact = () => {
  // Contact people information
  const contactPeople = [
    {
      name: "PaedDr. Jana Šimková",
      title: "Sprievodcovské služby a plánovanie exkurzií",
      phone: "0908 191 439",
      email: "sikmova@riabus.sk" // This would be displayed as an image
    },
    {
      name: "Dušan Noga",
      title: "Autobusová preprava RIABUS",
      phone: "0905 236 503",
      email: "noga@riabus.sk", // This would be displayed as an image
      address: "Pod papierňou 36\n085 01 Bardejov"
    }
  ];

  return (
    <RiabusLayout>
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Kontaktujte nás</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">Kontaktné osoby</h2>
                
                <div className="space-y-6">
                  {contactPeople.map((person, index) => (
                    <ContactCard key={index} person={person} />
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-bold text-blue-700 mb-3">Prevádzková doba</h2>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Pondelok - Piatok:</span>
                    <span>8:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sobota:</span>
                    <span>9:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Nedeľa:</span>
                    <span>Zatvorené</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Napíšte nám</h2>
              
              <form className="space-y-4 riabus-form">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">Meno a priezvisko *</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Vaše meno"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">E-mail *</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Váš e-mail"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1">Telefón</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Vaše telefónne číslo"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-1">Predmet *</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Predmet správy"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1">Správa *</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Vaša správa"
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="gdpr" 
                    className="mt-1 mr-2"
                    required
                  />
                  <label htmlFor="gdpr" className="text-sm text-gray-700">
                    Súhlasím so spracovaním osobných údajov podľa zákona o GDPR.
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded font-medium hover:bg-blue-700 transition-colors"
                >
                  Odoslať správu
                </button>
                
                <p className="text-sm text-gray-600 italic">* Povinné údaje</p>
              </form>
            </div>
          </div>
        </section>
        
        <section>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Kde nás nájdete</h2>
            
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded overflow-hidden mb-4">
              {/* In a real application, this would be a Google Maps embed */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-500">Mapa lokality (Google Maps)</span>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://maps.google.com/?q=Pod+papierňou+36,+085+01+Bardejov" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded font-medium hover:bg-blue-200 transition-colors"
              >
                Zobraziť na Google Maps
              </a>
            </div>
          </div>
        </section>
      </div>
    </RiabusLayout>
  );
};

// Sample Cimo Product Listing Component
const CimoProductListing = ({ category, title, products }) => {
  return (
    <CimoLayout>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <Link to="/cimo" className="text-emerald-600 hover:text-emerald-800">
            Domov
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">{category}</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6">{title}</h1>
        
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
                  {category === "Cenovky" && (
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
                {products.map((product, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {product.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.dimensions}
                    </td>
                    {category === "Cenovky" && (
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.packaging}
                      </td>
                    )}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <div className="h-16 w-16 bg-gray-100 rounded flex items-center justify-center">
                          <img src="/api/placeholder/64/64" alt={`${product.name} predná strana`} className="max-h-full" />
                        </div>
                        {product.hasBackside && (
                          <div className="h-16 w-16 bg-gray-100 rounded flex items-center justify-center">
                            <img src="/api/placeholder/64/64" alt={`${product.name} zadná strana`} className="max-h-full" />
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
      </div>
    </CimoLayout>
  );
};

// NotFound Component
const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">Stránka nenájdená</h2>
      <p className="text-lg text-gray-600 mb-8 text-center">Ľutujeme, ale stránka, ktorú hľadáte, neexistuje alebo bola presunutá.</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          to="/" 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
        >
          Späť na hlavnú stránku
        </Link>
      </div>
    </div>
  );
};

// App Component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* Riabus Routes */}
        <Route path="/riabus" element={<RiabusHome />} />
        <Route path="/riabus/sluzby" element={<RiabusServices />} />
        <Route path="/riabus/kontakt" element={<RiabusContact />} />
        
        {/* Cimo Routes */}
        <Route path="/cimo" element={<CimoHome />} />
        <Route path="/cimo/kontakt" element={<CimoContact />} />
        
        {/* Cimo Product Categories */}
        <Route path="/cimo/karty" element={<CimoProductCategory />} />
        <Route path="/cimo/obaly" element={<CimoProductCategory />} />
        <Route path="/cimo/karticky" element={<CimoProductCategory />} />
        <Route path="/cimo/karticky-velke" element={<CimoProductCategory />} />
        <Route path="/cimo/karticky-male" element={<CimoProductCategory />} />
        <Route path="/cimo/rozvrhy" element={<CimoProductCategory />} />
        <Route path="/cimo/zalozky" element={<CimoProductCategory />} />
        <Route path="/cimo/pozvanky" element={<CimoProductCategory />} />
        <Route path="/cimo/pexesa" element={<CimoProductCategory />} />
        <Route path="/cimo/stitky" element={<CimoProductCategory />} />
        <Route path="/cimo/cenovky" element={<CimoProductCategory />} />
        <Route path="/cimo/nalepky" element={<CimoProductCategory />} />
        
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;