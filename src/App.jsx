// First, make sure your import statements at the top of App.jsx include CimoHome:
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css';
import { Analytics } from "@vercel/analytics/react"

// Import shared components
import { OptimizedImage, EmailImage } from './utils/ImageComponents';
import { ExkurzieLayout, ExkurzieNavbar, ExkurzieFooter, TripCard, ContactCard } from './components/ExkurzieComponents';
import { CimoLayout, CimoNavbar, CimoFooter } from './components/CimoComponents';

// Import the Cimo product components
import { CimoProductCategory, CimoContact, categoryNames, CimoHome } from './components/CimoProductComponents';
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
            title="Organizovanie exkurzií" 
            bgColor="bg-blue-600" 
            textColor="text-white"
            path="/exkurzie"
            description="Exkurzie s profesionálnym sprievodcom"
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

const ExkurzieHome = () => {
  // Define the popular destinations
  const destinations = [
    {
      id: 'krakow',
      name: 'Krakov',
      description: 'Historické centrum, Wawel, Kazimierz',
      imageSrc: '/images/krakow.webp',
    },
    {
      id: 'budapest',
      name: 'Budapešť',
      description: 'Budínsky hrad, Parlament, Dunaj',
      imageSrc: '/images/budapest.webp',
    }
  ];

  return (
    <ExkurzieLayout>
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Exkurzie s profesionálnym sprievodcom</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg mb-4">
              Naša spoločnosť pôsobí úspešne na Východnom Slovensku už niekoľko rokov. Špecializujeme sa na organizovanie domácich a zahraničných exkurzií pre školy, kluby a iné skupiny. Každá exkurzia zahŕňa služby profesionálneho sprievodcu.
            </p>
            <p className="text-lg mb-4">
              Ak hľadáte zážitky v mestách ako Krakov, Budapešť, Wieliczka, Brno či Viedeň za priaznivú cenu, sme tu pre vás.
            </p>
            <p className="text-lg mb-4">
              Prepravný poriadok si môžete stiahnuť na tomto <a href="/files/prepravnyPoriadok.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">odkaze</a>.
            </p>
            <p className="text-lg font-medium text-blue-700">
              Vaša spokojnosť s exkurziou je našou prioritou.
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">Obľúbené destinácie</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {destinations.map(destination => (
              <TripCard 
                key={destination.id}
                name={destination.name}
                description={destination.description}
                imageSrc={destination.imageSrc}
              />
            ))}
          </div>
        </section>
        
        <section>
          <div className="text-center">
            <Link 
              to="/exkurzie/sluzby" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg text-lg"
            >
              Zobraziť naše služby
            </Link>
          </div>
        </section>
      </div>
    </ExkurzieLayout>
  );
};

const ExkurzieServices = () => {
  // Define popular destinations with features
  const destinations = [
    {
      id: 'krakow',
      name: 'Krakov',
      description: 'Historické centrum Poľska',
      imageSrc: '/images/krakow.webp',
      features: [
        'Prehliadka Wawelského hradu',
        'Návšteva židovskej štvrte Kazimierz',
        'Fakultatívny výlet do Oswienčimu',
        'Prehliadka námestia Rynek Główny',
        'Mariánsky kostol',
        'Fakultatívny výlet do Wieliczky'
      ]
    },
    {
      id: 'budapest',
      name: 'Budapešť',
      description: 'Perla na Dunaji',
      imageSrc: '/images/budapest.webp',
      features: [
        'Prehliadka Budínskeho hradu',
        'Rybárska bašta s výhľadom na mesto',
        'Návšteva parlamentu',
        'Bazilika sv. Štefana',
        'Plavba po Dunaji',
        'Námestie hrdinov'
      ]
    }
  ];
  
  // Define our services
  const services = [
    'Organizovanie domácich exkurzií',
    'Organizovanie zahraničných exkurzií',
    'Profesionálne sprievodcovské služby',
    'Exkurzie pre školské skupiny',
    'Exkurzie pre firemné akcie a kolektívy',
    'Tematické poznávacie zájazdy',
    'Individuálne plánovanie trás podľa požiadaviek klienta',
    'Sprievodcu hovoriaceho po slovensky aj po anglicky'
  ];

  return (
    <ExkurzieLayout>
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
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">Obľúbené destinácie</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map(destination => (
              <TripCard 
                key={destination.id}
                name={destination.name}
                description={destination.description}
                features={destination.features}
                imageSrc={destination.imageSrc}
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
              <p>Navštívte európske metropoly, kultúrne pamiatky, múzeá a ďalšie atrakcie v zahraničí.</p>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <Link 
              to="/exkurzie/kontakt" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Kontaktujte nás pre cenovú ponuku
            </Link>
          </div>
        </section>
      </div>
    </ExkurzieLayout>
  );
};

const ExkurzieContact = () => {
  // Contact people information
  const contactPeople = [
    {
      name: "PaedDr. Jana Šimková",
      title: "Sprievodcovské služby a plánovanie exkurzií",
      phone: "0908 191 439",
      email: "sikmova@exkurzie.sk", // This would be displayed as an image
      address: "Pod papierňou 36\n085 01 Bardejov"
    }
  ];

  return (
    <ExkurzieLayout>
      <div className="max-w-4xl mx-auto">
        <section>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Kontaktujte nás</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Kontaktné osoby</h2>
            
            <div className="space-y-6">
              {contactPeople.map((person, index) => (
                <ContactCard key={index} person={person} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </ExkurzieLayout>
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

// App Component with fixed routes
function App() {
  return (
    <Router>
      <Analytics />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* Exkurzie Routes */}
        <Route path="/exkurzie" element={<ExkurzieHome />} />
        <Route path="/exkurzie/sluzby" element={<ExkurzieServices />} />
        <Route path="/exkurzie/kontakt" element={<ExkurzieContact />} />
        
        {/* Cimo Routes */}
        <Route path="/cimo" element={<CimoHome />} />
        <Route path="/cimo/kontakt" element={<CimoContact />} />
        
        {/* Cimo Product Categories - use a single route with parameter */}
        <Route path="/cimo/:category" element={<CimoProductCategory />} />
        
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;