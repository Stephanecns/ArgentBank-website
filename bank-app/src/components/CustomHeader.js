import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../img/argentBankLogo.webp";

function CustomHeader({ username }) {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="/user">
          <i className="fa fa-user-circle"></i>
          {username}
        </Link>
        <Link className="main-nav-item" to="/" onClick={() => { /* ici mettre la logique de déconnexion */ }}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
    </nav>
  );
}

export default CustomHeader;

//Green code = non