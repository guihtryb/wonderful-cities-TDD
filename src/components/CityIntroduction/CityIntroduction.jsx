import React, { useContext } from 'react';
import context from '../../context/Context';
import CityName from '../CityName/CityName';
import './CityIntroduction.css';

export default function CityIntroduction() {
  const { city } = useContext(context);

  return (
    <div
      className="city-introduction"
      data-testid="city-introduction"
    >
      {
        city
      && (
      <section data-testid="city-introduction-section">
        <CityName />
      </section>
      )
      }
    </div>
  );
}
