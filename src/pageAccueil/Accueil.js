import React, { useState } from 'react';
import axios from 'axios';
import './Accueil.css';

const Accueil = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [facture, setFacture] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/facture_gestion/v1/factures/${searchQuery}`);
      setFacture(response.data);
    } catch (error) {
      console.error('Erreur lors de la recherche de facture:', error);
      setFacture(null);
    }
  };
  

  const handlePayFacture = () => {
    // Add logic to handle payment for the facture
    console.log('Paying facture:', facture);
  };

  return (
    <div className="accueil-container">
      <h2>Page d'Accueil</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher des factures..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Rechercher</button>
      </div>

      {facture && (
        <div className="facture-details">
          <h3>Informations sur la facture</h3>
          <p>ID: {facture.id}</p>
          <p>Référence: {facture.ref}</p>
          <p>Date: {facture.date}</p>
          <p>Prix: {facture.prix}</p>
          <p>Client: {facture.user ? `${facture.user.nom} ${facture.user.prenom}` : 'N/A'}</p>

          <button onClick={handlePayFacture}>Payer la facture</button>
        </div>
      )}
      {/* Ajoutez d'autres éléments de la page d'accueil au besoin */}
    </div>
  );
};

export default Accueil;
