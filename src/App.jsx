import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import CitiesSection from './components/CitiesSection/CitiesSection';
import CitiesFaq from './components/CitiesFaq/CitiesFaq';

function App() {
  return (
    <div className="app">
      <Header />
      <CitiesSection />
      <CitiesFaq />
    </div>
  );
}

export default App;
