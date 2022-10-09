/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import context from '../../context/Context';

export default function DefinitionTitle({ title, onClick, open }) {
  const { city } = useContext(context);

  return (
    <dt onClick={onClick} className={`definition-title ${open ? 'open' : ''}`}>
      { title }
      {' '}
      { city.cityName }
      ?
    </dt>
  );
}

DefinitionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  open: PropTypes.bool.isRequired,
};

DefinitionTitle.defaultProps = {
  onClick: () => null,
};
