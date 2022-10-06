import React from "react";
import CitiesSection from "../components/CitiesSection/CitiesSection";
import { render, screen } from '@testing-library/react'
import Provider from "../context/Provider";

describe('CitesSection component', () => {
  it('Render correctly', () => {
    render(<Provider>
      <CitiesSection />
    </ Provider>);
  });
  it('has a section with the data-testid equal cites-section', () => {
    render(<Provider>
      <CitiesSection />
    </ Provider>);

    expect(screen.getByTestId('cities-section')).toBeInTheDocument();
  });
  it('has a h1 with the data-testid equal title', () => {
    render(<Provider>
      <CitiesSection />
    </ Provider>);

    const title = screen.getByRole('heading', { level: 1, name: 'Amazing Cities'});

    expect(title).toBeInTheDocument();
  });
  it('has a ul with the data-testid equal cities-gallery', () => {
    render(<Provider>
      <CitiesSection />
    </ Provider>);

    const citiesGallery = screen.getByTestId('cities-gallery');
    expect(citiesGallery).toBeInTheDocument();

    const citiesImages = citiesGallery.children.length;

    expect(citiesImages).toBeGreaterThanOrEqual(1);
  });
  it('has a div with the data-testid equal city-introduction', () => {
    render(
    <Provider>
      <Provider>
      <CitiesSection />
    </ Provider>
    </Provider>
    );

    expect(screen.getByTestId('city-introduction')).toBeInTheDocument();
  });
  it('has a section with the data-testid equal city-introduction-section', () => {
    render(
      <Provider>
      <CitiesSection />
    </ Provider>
    );

    expect(screen.getByTestId('city-introduction-section')).toBeInTheDocument();
  });
  it('has a subtitle with the data-testid city-name', () => {
    render(
    <Provider>
      <CitiesSection />
    </ Provider>);

    expect(screen.getByTestId('city-name')).toBeInTheDocument();
  });
});
