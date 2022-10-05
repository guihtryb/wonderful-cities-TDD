import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import CitiesSection from './components/CitiesSection/CitiesSection';

function App() {
  return (
    <div className="app">
      <Header />
      <CitiesSection />
    </div>
  );
}

export default App;
