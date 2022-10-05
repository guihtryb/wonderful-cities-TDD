import './CitiesGallery.css';
import React from 'react';
import PropTypes, { shape } from 'prop-types';
import CityImageItem from '../CityImageItem/CityImageItem';

export default function CitiesGallery({ cities }) {
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

CitiesGallery.propTypes = {
  cities: PropTypes.arrayOf(shape({
    cityName: PropTypes.string.isRequired,
    cityMainImage: PropTypes.string.isRequired,
  })).isRequired,
};
