import { render, screen } from "@testing-library/react";
import Contact from '../components/Contact/Contact';
import Provider from "../context/Provider";

describe('Contact component', () => {
  it('Render correctly', () => {
    render(
    <Provider>
      <Contact />
    </Provider>
    );
  });
  it('It has a section with the data-testid equal contact-section', () => {
    render(
    <Provider>
      <Contact />
    </Provider>
    );

    expect(screen.getByTestId('contact-section')).toBeInTheDocument();
  });
  it('It has a h1 tag with content equals "contact"', () => {
    render(
    <Provider>
      <Contact />
    </Provider>
    );

    expect(screen.getByRole('heading', {
      name: /contact/i,
      level: 1,
    })).toBeInTheDocument();
  });
  it('It has a img tag with the test id equal "map-image"', () => {
    render(
    <Provider>
      <Contact />
    </Provider>
    );

    expect(screen.getByTestId('map-image')).toBeInTheDocument();
  });
  it('It has a list with the test id equal "contact-infos-list"', () => {
    render(
    <Provider>
      <Contact />
    </Provider>
    );

    expect(screen.getByTestId('contact-infos-list')).toBeInTheDocument();
  });
});
