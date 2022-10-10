import { render, screen } from "@testing-library/react";
import Footer from '../components/Footer/Footer';
import Provider from "../context/Provider";

describe('Footer component', () => {
  it('Render correctly', () => {
    render(
    <Provider>
      <Footer />
    </Provider>
    );
  });
  it('It has a section with the data-testid equal footer', () => {
    render(
    <Provider>
      <Footer />
    </Provider>
    );

    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
  it('It has a text tag with the test id equal "developed-by"', () => {
    render(
    <Provider>
      <Footer />
    </Provider>
    );

    expect(screen.getByTestId('developed-by')).toBeInTheDocument();
  });
});
