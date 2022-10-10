import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import CitiesSection from './components/CitiesSection/CitiesSection';
import CitiesFaq from './components/CitiesFaq/CitiesFaq';
import CitiesPopulation from './components/CitiesPopulation/CitiesPopulation';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="app">
      <Header />
      <CitiesSection />
      <CitiesFaq />
      <CitiesPopulation />
      <Contact />
      <footer className="copy">
        <p>All rights reserved</p>
        <p>Developed by Guilherme Viana</p>
      </footer>
    </div>
  );
}

export default App;
