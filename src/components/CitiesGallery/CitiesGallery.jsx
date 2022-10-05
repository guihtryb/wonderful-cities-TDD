import './CitiesGallery.css';
import React from 'react';
import singapure from '../../images/main-singapure.jpg';

export default function CitiesGallery() {
  return (
    <ul data-testid="cities-gallery" className="cities-list">
      <li>
        <img alt="city" src={singapure} />
      </li>
    </ul>
  );
}
