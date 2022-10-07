/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import context from './Context';
import citiesApi from '../api/cities';

function Provider({ children }) {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState({});
  const [cityIndex, setCityIndex] = useState(0);

  useEffect(() => {
    const getCities = async () => {
      setCities(citiesApi);
    };

    getCities();
  }, []);

  useEffect(() => {
    const getCity = async () => {
      setCity(citiesApi[cityIndex]);
    };

    getCity();
  }, [cityIndex]);

  const contextValue = {
    cities,
    city,
    setCityIndex,
    cityIndex,
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
