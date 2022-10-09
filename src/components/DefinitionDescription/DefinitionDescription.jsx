import React from 'react';
import PropTypes from 'prop-types';

export default function DefinitionDescription({ description, open }) {
  return (
    <dd className={`definition-description ${open ? 'open' : ''}`}>
      {description}
    </dd>
  );
}

DefinitionDescription.propTypes = {
  description: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};
