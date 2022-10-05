import React from 'react';
import CitiesGallery from '../CitiesGallery/CitiesGallery';
import Title from '../Title/Title';
import './CitiesSection.css';

export default function CitiesSection() {
  return (
    <section data-testid="cities-section" className="grid-section cities">
      <Title />
      <CitiesGallery />
    </section>
  );
}
