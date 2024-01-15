import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Inscription.css';

const Inscription = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [adresse, setAdresse] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInscription = () => {
    const newUser = { nom, prenom, adresse, email, password };

    axios.post('http://localhost:8080/facture_gestion/v1/utilisateurs/create', newUser)
      .then(response => {
        console.log('Inscription réussie :', response.data);
        // Rediriger vers la page de connexion ou effectuer d'autres actions nécessaires après l'inscription réussie
      })
      .catch(error => {
        console.error('Erreur lors de l inscription :', error);
      });
  };

  return (
    <div className="inscription-container">
      <div className="inscription-box">
        <h2>Inscription</h2>
        <form>
          <label>Nom:</label>
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />

          <label>Prénom:</label>
          <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />

          <label>Adresse:</label>
          <input type="text" value={adresse} onChange={(e) => setAdresse(e.target.value)} />

          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Mot de passe:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="button" onClick={handleInscription}>S'inscrire</button>
        </form>
        <p>Vous avez déjà un compte? <Link to="/Authentification">Connectez-vous ici</Link>.</p>
      </div>
    </div>
  );
};

export default Inscription;
