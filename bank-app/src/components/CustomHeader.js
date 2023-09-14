import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../img/argentBankLogo.webp";
import { useNavigate } from 'react-router-dom';
import { resetLoginState } from '../redux/loginSlice';
import { useDispatch } from 'react-redux';

function CustomHeader({ username }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    localStorage.removeItem('token');  // Supprime le token du localStorage
    dispatch(resetLoginState());  // Réinitialiser le state lors de la déconnexion
    navigate('/');  // Redirige l'utilisateur vers la page d'accueil
  };
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
        <Link className="main-nav-item" to="/" onClick={handleSignOut}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
    </nav>
  );
}

export default CustomHeader;

//Green code = non