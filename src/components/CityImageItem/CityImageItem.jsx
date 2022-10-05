import React from 'react';
import PropTypes from 'prop-types';

export default function CityImageItem({ cityName, image }) {
  return (
    <li>
      <img alt={`${cityName} city`} src={image} />
    </li>
  );
}

CityImageItem.propTypes = {
  cityName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
