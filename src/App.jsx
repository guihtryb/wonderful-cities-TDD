import './App.css';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header/Header';
import CitiesSection from './components/CitiesSection/CitiesSection';
import CitiesFaq from './components/CitiesFaq/CitiesFaq';
import CitiesPopulation from './components/CitiesPopulation/CitiesPopulation';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import LoginModal from './components/LoginModal/LoginModal';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="app">
      <Header />
      <CitiesSection />
      <CitiesFaq />
      <CitiesPopulation />
      <Contact />
      <Footer />
      <LoginModal />
    </div>
  );
}

export default App;
