import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './Menu.css';

export default function Menu() {
  const items = [
    'cities',
    'faq',
    'population',
    'contact',
  ];

  return (
    <nav data-testid="header-nav" className="header-nav">
      <ul id="menu-list">
        { items.map((item) => (
          <MenuItem itemName={item} key={item} />
        ))}
      </ul>
    </nav>
  );
}
