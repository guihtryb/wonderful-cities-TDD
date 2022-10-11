/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import context from './Context';
import Cities from '../api/cities.json';

function Provider({ children }) {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState();
  const [cityIndex, setCityIndex] = useState(0);
  const [openLogin, setOpenLogin] = useState(false);

  useEffect(() => {
    const getCities = () => {
      setCities(Cities);
      setCity(Cities[0]);
    };
    getCities();
  }, []);

  // useEffect(() => {
  //   setCity(cities[cityIndex]);
  // }, [cityIndex]);

  const contextValue = {
    cities,
    city,
    setCity,
    setCityIndex,
    cityIndex,
    openLogin,
    setOpenLogin,
  };

  return (
    <context.Provider value={contextValue}>
      {children}
    </context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
