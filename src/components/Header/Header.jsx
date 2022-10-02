import React from 'react';
import LoginButton from '../LoginButton/LoginButton';
import Menu from '../Menu/Menu';
import './Header.css';

export default function Header() {
  return (
    <header data-testid="header">
      <Menu />
      <LoginButton />
    </header>
  );
}
