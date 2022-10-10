import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.css';

export default function MenuItem({ itemName }) {
  const handleClick = (event) => {
    event.preventDefault();
    const href = event.target.getAttribute('href');

    const goTo = document.querySelector(href);

    goTo.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };

  return (
    <li className="menu-item">
      <a onClick={handleClick} href={`#${itemName}`} data-testid={`${itemName}-item`}>
        {itemName}
      </a>
    </li>
  );
}

MenuItem.propTypes = {
  itemName: PropTypes.string.isRequired,
};
