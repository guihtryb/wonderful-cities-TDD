import './CitiesGallery.css';
import React, { useContext } from 'react';
import CityImageItem from '../CityImageItem/CityImageItem';
import context from '../../context/Context';

export default function CitiesGallery() {
  const { cities } = useContext(context);

  return (
    <ul data-testid="cities-gallery" className="cities-list">
      {
        cities.map(({ cityName, cityMainImage }) => (
          <CityImageItem
            key={cityName}
            cityName={cityName}
            image={cityMainImage}
          />
        ))
      }
    </ul>
  );
}
