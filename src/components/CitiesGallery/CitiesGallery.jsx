/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import './CitiesGallery.css';
import React, { useContext, useEffect } from 'react';
import CityImageItem from '../CityImageItem/CityImageItem';
import context from '../../context/Context';
import previousIcon from '../../images/left-arrow.png';
import nextIcon from '../../images/right-arrow.png';

export default function CitiesGallery() {
  const {
    cities, setCity, setCityIndex, cityIndex,
  } = useContext(context);
  const goToPreviousSlide = () => (cityIndex === 0
    ? setCityIndex(cities.length - 1) : setCityIndex(cityIndex - 1));
  const goToNextSlide = () => (cityIndex === cities.length - 1
    ? setCityIndex(0) : setCityIndex(cityIndex + 1));

  useEffect(() => {
    setCity(cities[cityIndex]);
  }, [cityIndex]);

  return (
    <div
      className="cities-gallery"
      data-aos="fade-right"
      data-aos-duration="1050"
    >
      <ul data-testid="cities-gallery" className="cities-list">
        <li>
          <button
            onClick={goToPreviousSlide}
            className="slide-button previous"
            type="button"
            id="slide-button-previous"
          >
            <img src={previousIcon} alt="previous city icon" />
          </button>
        </li>
        {
        cities.map(({ cityName, cityMainImage }, index) => (
          <CityImageItem
            key={cityName}
            cityName={cityName}
            image={cityMainImage}
            index={index}
          />
        ))
      }
        <li>
          <button
            className="slide-button next"
            type="button"
            onClick={goToNextSlide}
            id="slide-button-next"
          >
            <img src={nextIcon} alt="next city icon" />
          </button>
        </li>
      </ul>
    </div>
  );
}
