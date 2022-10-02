import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Header from '../components/Header';

describe('Header component', () => {
  it('Render correctly', () => {
    render(<Header />);
  });
  it("Has a test-id equal `header`", () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();

  });
  it("Has a nav element with test-id equal `header-nav`", () => {
    render(<Header />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByTestId('header-nav')).toBeInTheDocument();
  });
  it("Has a navbar with the correct menu", () => {
    render(<Header />);

    const items = ['cities', 'faq', 'population'];

    const itemsList = screen.getByRole('list');

    expect(itemsList).toHaveAttribute('id', 'menu');

    for (let itemName of items) {
      expect(screen.getByRole('link', { name: itemName,  })).toBeInTheDocument();
      expect(screen.getByTestId(`${itemName}-item`)).toBeInTheDocument();
    }
  });
  it("Has a login button", () => {
    render(<Header />);

    const loginButton = screen.getByRole('button', { name: 'login' });

    expect(loginButton).toBeInTheDocument();
  });
});
