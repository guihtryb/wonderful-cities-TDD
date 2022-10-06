/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import context from './Context';
import citiesApi from '../api/cities';

function Provider({ children }) {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState({});

  useEffect(() => {
    const getCities = async () => {
      setCities(citiesApi);
    };

    const getCity = async () => {
      setCity(citiesApi[0]);
    };

    getCities();
    getCity();
  }, []);

  const contextValue = {
    cities,
    city,
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
