import React, { useContext } from 'react';
import context from '../../context/Context';
import './LoginButton.css';

export default function LoginButton() {
  const { setOpenLogin } = useContext(context);

  return (
    <button type="button" className="login-button" onClick={() => setOpenLogin(true)}>
      login
    </button>
  );
}
