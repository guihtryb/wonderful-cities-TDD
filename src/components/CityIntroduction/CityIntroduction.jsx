import React from 'react';
import CityIntroParagraphs from '../CityIntroParagraphs/CityIntroParagraphs';
import CityName from '../CityName/CityName';
import './CityIntroduction.css';

export default function CityIntroduction() {
  return (
    <div
      className="city-introduction"
      data-testid="city-introduction"
    >
      <section data-testid="city-introduction-section">
        <CityName />
        <CityIntroParagraphs />
      </section>
    </div>
  );
}
