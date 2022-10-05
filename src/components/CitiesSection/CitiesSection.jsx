import React, { useEffect, useState } from 'react';
import CitiesGallery from '../CitiesGallery/CitiesGallery';
import Title from '../Title/Title';
import './CitiesSection.css';
import citiesApi from '../../api/cities';

export default function CitiesSection() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getCities = async () => {
      const citiesData = await citiesApi;
      setCities(citiesData);
    };

    getCities();
  }, []);

  return (
    <section data-testid="cities-section" className="grid-section cities">
      <Title />
      <CitiesGallery cities={cities} />
    </section>
  );
}
