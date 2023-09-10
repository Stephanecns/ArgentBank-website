import React from 'react';
import Logo from "../img/argentBankLogo.png"
import 'font-awesome/css/font-awesome.min.css';
function Header() {
    return (
        <nav className="main-nav">
        <a className="main-nav-logo" href="./index.html">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <a className="main-nav-item" href="./sign-in.html">
            <i className="fa fa-user-circle" />
            Sign In
          </a>
        </div>
      </nav>
    );
  }

  export default Header;