import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../img/argentBankLogo.webp";
import "font-awesome/css/font-awesome.min.css";
function Header() {
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
        <Link className="main-nav-item" to="/sign-in">
          <i className="fa fa-user-circle" />
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Header;


  //Green code = oui 