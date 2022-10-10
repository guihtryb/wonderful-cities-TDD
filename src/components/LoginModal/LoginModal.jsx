import React, { useContext } from 'react';
import context from '../../context/Context';
import './LoginModal.css';

export default function LoginModal() {
  const { openLogin, setOpenLogin } = useContext(context);
  return (
    <section data-testid="modal-login-section" className={`modal-container ${openLogin ? 'active-modal' : ''}`}>
      <div className="modal">
        <button type="button" className="close" onClick={() => { setOpenLogin(false); }}> X </button>
        <form action="">
          <label htmlFor="email">
            Email:
            <input type="email" id="email" />
          </label>
          <label htmlFor="password">
            Password:
            <input type="password" id="password" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>

  );
}
