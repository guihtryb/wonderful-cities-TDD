import React, { useContext } from 'react';
import CitiesGallery from '../CitiesGallery/CitiesGallery';
import Title from '../Title/Title';
import './CitiesSection.css';
import CityAbout from '../CityIntroduction/CityIntroduction';
import context from '../../context/Context';

export default function CitiesSection() {
  const { cities } = useContext(context);
  return (
    <section
      data-testid="cities-section"
      className="grid-section cities"
      id="cities"
    >
      <Title title="Wonderful Cities" />
      {
        cities
        && (
        <>
          <CitiesGallery />
          <CityAbout />
        </>
        )
      }
    </section>
  );
}
