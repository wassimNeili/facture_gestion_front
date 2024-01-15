import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Factures.css';

const Factures = () => {
  const [factures, setFactures] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/facture_gestion/v1/factures/All');
      setFactures(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des factures:', error);
    }
  };

  return (
    <div className='fact'>
      <h2>Liste des Factures</h2>
      <button onClick={() => console.log('Nouvel utilisateur')}>Nouveau</button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Référence</th>
            <th>date</th>
            <th>prix</th>
            <th>client</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {factures.map((facture) => (
            <tr key={facture.id}>
              <td>{facture.id}</td>
              <td>{facture.ref}</td>
              <td>{facture.date}</td>
              <td>{facture.prix}</td>
              <td>{facture.user ? `${facture.user.nom} ${facture.user.prenom}` : 'N/A'}</td>
              <td>
                <button>Modifier</button>
                <button>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Factures;
