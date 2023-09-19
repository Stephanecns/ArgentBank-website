import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // importez useSelector
import Logo from "../img/argentBankLogo.webp";

function CustomHeader() {
  // Utilisez useSelector pour obtenir le nom d'utilisateur depuis votre store Redux
  const userName = useSelector((state) => state.user.profile.userName);

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
          {userName ? userName : "Profile"} {/* Affichez le nom d'utilisateur s'il est disponible, sinon affichez "Profile" */}
        </Link>
        <Link className="main-nav-item" to="/">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
    </nav>
  );
}

export default CustomHeader;

//Green code = non