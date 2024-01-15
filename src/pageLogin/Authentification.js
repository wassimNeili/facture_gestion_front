import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Authentification.css';

const Authentification = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const credentials = { email, password };

    axios.post('http://localhost:8080/facture_gestion/v1/authenticate', credentials)
      .then(response => {
        console.log('Connexion réussie :', response.data);
        // Rediriger vers la page d'accueil ou effectuer d'autres actions nécessaires après la connexion réussie
      })
      .catch(error => {
        console.error('Erreur lors de la connexion :', error);
      });
  };

 

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Connexion</h2>
        <form>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Mot de passe:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="button" onClick={handleLogin}>Se connecter</button>
        </form>
        <p>Vous n'avez pas de compte? <Link to="/inscription">Inscrivez-vous ici</Link>.</p>
      </div>
    </div>
  );
};

export default Authentification;
