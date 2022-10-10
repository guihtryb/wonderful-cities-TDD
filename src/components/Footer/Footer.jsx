import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="copy" data-testid="footer">
      <p>All rights reserved</p>
      <p data-testid="developed-by">Developed by Guilherme Viana</p>
    </footer>
  );
}
