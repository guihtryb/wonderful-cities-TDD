import { render, screen } from "@testing-library/react";
import CitiesPopulation from '../components/CitiesPopulation/CitiesPopulation';
import Provider from "../context/Provider";

describe('CitiesPopulation component', () => {
  it('Render correctly', () => {
    render(
    <Provider>
      <CitiesPopulation />
    </Provider>
    );
  });
  it('It has a section with the data-testid equal population-section', () => {
    render(
    <Provider>
      <CitiesPopulation />
    </Provider>
    );

    expect(screen.getByTestId('population-section')).toBeInTheDocument();
  });
  it('It has a h1 tag with content equals "population"', () => {
    render(
    <Provider>
      <CitiesPopulation />
    </Provider>
    );

    expect(screen.getByRole('heading', {
      name: /population/i,
      level: 1,
    })).toBeInTheDocument();
  });
  it('It has a h3 tag with the city name', () => {
    render(
    <Provider>
      <CitiesPopulation />
    </Provider>
    );

    expect(screen.getByRole('heading', { level: 3})).toBeInTheDocument();
  });
  it('It has a tag with the data test id equal population-number', () => {
    render(
    <Provider>
      <CitiesPopulation />
    </Provider>
    );

    expect(screen.getByTestId('population-number')).toBeInTheDocument();
  });
});
