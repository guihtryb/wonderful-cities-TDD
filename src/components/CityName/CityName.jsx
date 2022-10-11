import React, { useContext } from 'react';
import context from '../../context/Context';
import './CityName.css';

export default function CityName() {
  const { city } = useContext(context);
  return city && (
    <h2
      data-aos="fade-right"
      data-aos-duration="1050"
      data-testid="city-name"
      className="city-name"
    >
      { city.cityName }
      ,
      {' '}
      { city.country }
      .
    </h2>
  );
}
