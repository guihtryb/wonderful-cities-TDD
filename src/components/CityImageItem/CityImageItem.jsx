/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import context from '../../context/Context';
import './CityImageItem.css';

export default function CityImageItem({ cityName, image, index }) {
  const { cityIndex } = useContext(context);
  return (
    <li>
      <img
        className={index === cityIndex ? 'city-main-image active' : 'city-main-image'}
        alt={`${cityName} city`}
        src={image}
      />
    </li>
  );
}

CityImageItem.propTypes = {
  cityName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
