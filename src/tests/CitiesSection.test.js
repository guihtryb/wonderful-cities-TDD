import React from "react";
import CitiesSection from "../components/CitiesSection/CitiesSection";
import { render, screen } from '@testing-library/react'

describe('CitesSection component', () => {
  it('Render correctly', () => {
    render(<CitiesSection />);
  });
  it('has a section with the data-testid equal cites-section', () => {
    render(<CitiesSection />);

    expect(screen.getByTestId('cities-section')).toBeInTheDocument();
  });
  it.only('has a h1 with the data-testid equal title', () => {
    render(<CitiesSection />);

    const title = screen.getByRole('heading', { level: 1, name: 'Amazing Cities'});

    expect(title).toBeInTheDocument();
  });
  it.only('has a ul with the data-testid equal cities-gallery', () => {
    render(<CitiesSection />);

    const citiesGallery = screen.getByTestId('cities-gallery');
    expect(citiesGallery).toBeInTheDocument();

    const citiesImages = citiesGallery.children.length;

    expect(citiesImages).toBeGreaterThanOrEqual(2);
  });
});
