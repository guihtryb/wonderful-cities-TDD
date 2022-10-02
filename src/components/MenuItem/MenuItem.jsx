import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.css';

export default function MenuItem({ itemName }) {
  return (
    <li className="menu-item">
      <a href={`#${itemName}`} data-testid={`${itemName}-item`}>
        {itemName}
      </a>
    </li>
  );
}

MenuItem.propTypes = {
  itemName: PropTypes.string.isRequired,
};
