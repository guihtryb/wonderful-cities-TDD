import React from 'react';
import PropTypes from 'prop-types';

export default function DefinitionDescription({ description, open, tag }) {
  return tag === 'ranking' ? (
    <dd className={`definition-description ${open ? 'open' : ''}`}>
      {description.split('-').map((topic) => (<p className="topic">{topic}</p>))}
    </dd>
  ) : (
    <dd className={`definition-description ${open ? 'open' : ''}`}>
      {description}
    </dd>
  );
}

DefinitionDescription.propTypes = {
  description: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};
