import { render, screen } from "@testing-library/react";
import LoginModal from '../components/LoginModal/LoginModal';
import Provider from "../context/Provider";

describe('LoginModal component', () => {
  it('Render correctly', () => {
    render(
    <Provider>
      <LoginModal />
    </Provider>
    );
  });
  it('It has a section with the data-testid equal modal-login-section', () => {
    render(
    <Provider>
      <LoginModal />
    </Provider>
    );

    expect(screen.getByTestId('modal-login-section')).toBeInTheDocument();
  });
  it('It has email and password fields', () => {
    render(
    <Provider>
      <LoginModal />
    </Provider>
    );

    expect(screen.getByLabelText(/email:/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password:/i)).toBeInTheDocument()
  });
});
