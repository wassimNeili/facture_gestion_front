// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/accueil">Logo</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/accueil">Accueil</Link>
          </li>
          <li>
            <Link to="/utilisateurs">Utilisateurs</Link>
          </li>
          <li>
            <Link to="/factures">Factures</Link>
          </li>
        </ul>
      </nav>
      <div className="login">
        <Link to="/authentification">Login</Link>
      </div>
    </header>
  );
};

export default Header;
