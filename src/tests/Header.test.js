import React from 'react';
import Header from '../components/Header/Header'; 
import { render, screen } from '@testing-library/react';
import Provider from '../context/Provider';

describe('Header component', () => {
  it('Render correctly', () => {
    render(
      <Provider>
        <Header />
      </Provider>
    );
  });
  it("Has a test-id equal `header`", () => {
    render(
    <Provider>
      <Header />
    </Provider>
    );
    expect(screen.getByTestId('header')).toBeInTheDocument();

  });
  it("Has a nav element with test-id equal `header-nav`", () => {
    render(
      <Provider>
        <Header />
      </Provider>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByTestId('header-nav')).toBeInTheDocument();
  });
  it("Has a navbar with the correct menu-list", () => {
    render(
      <Provider>
        <Header />
      </Provider>
    );

    const items = ['cities', 'faq', 'population'];

    const itemsList = screen.getByRole('list');

    expect(itemsList).toHaveAttribute('id', 'menu-list');

    for (let itemName of items) {
      expect(screen.getByRole('link', { name: itemName,  })).toBeInTheDocument();
      expect(screen.getByTestId(`${itemName}-item`)).toBeInTheDocument();
    }
  });
  it("Has a login button", () => {
    render(
      <Provider>
        <Header />
      </Provider>
    );

    const loginButton = screen.getByRole('button', { name: 'login' });

    expect(loginButton).toBeInTheDocument();
  });
});
