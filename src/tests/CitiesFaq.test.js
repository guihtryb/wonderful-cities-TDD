import { render, screen } from "@testing-library/react";
import CitiesFaq from '../components/CitiesFaq/CitiesFaq';
import Provider from "../context/Provider";

describe('CitiesFaq component', () => {
  it('Render correctly', () => {
    render(
    <Provider>
      <CitiesFaq />
    </Provider>
    );
  });
  it('It has a section with the data-testid equal faq-section', () => {
    render(
    <Provider>
      <CitiesFaq />
    </Provider>
    );

    expect(screen.getByTestId('faq-section')).toBeInTheDocument();
  });
  it('It has a h1 tag with content equals "FAQ"', () => {
    render(
    <Provider>
      <CitiesFaq />
    </Provider>
    );

    expect(screen.getByRole('heading', {
      name: /faq/i,
      level: 1,
    })).toBeInTheDocument();
  });
  it('It has a dl tag with the test id equal "definition-list"', () => {
    render(
    <Provider>
      <CitiesFaq />
    </Provider>
    );

    expect(screen.getByTestId('definition-list')).toBeInTheDocument();
  });
});
