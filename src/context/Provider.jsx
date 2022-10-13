/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import context from './Context';
import Cities from '../api/cities';

function Provider({ children }) {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState();
  const [cityIndex, setCityIndex] = useState(0);
  const [openLogin, setOpenLogin] = useState(false);

  useEffect(() => {
    const getCities = () => {
      setCity(Cities[0]);
      setCities(Cities);
    };
    getCities();
  }, []);

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
