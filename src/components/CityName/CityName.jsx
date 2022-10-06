import React, { useContext } from 'react';
import context from '../../context/Context';
import './CityName.css';

export default function CityName() {
  const { city } = useContext(context);
  return (
    <h2 data-testid="city-name" className="city-name">
      { city.cityName }
      ,
      {' '}
      { city.country }
      .
    </h2>
  );
}
