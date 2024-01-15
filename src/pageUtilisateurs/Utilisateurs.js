// Utilisateurs.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormulaireModification from './FormulaireModification';

const Utilisateurs = () => {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [formulaireVisible, setFormulaireVisible] = useState(false);
  const [utilisateurAModifier, setUtilisateurAModifier] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/facture_gestion/v1/utilisateurs/All')
      .then(response => setUtilisateurs(response.data))
      .catch(error => console.error('Erreur lors de la récupération des utilisateurs:', error));
  }, []);

  const handleSupprimer = (id) => {
    axios.delete(`http://localhost:8080/facture_gestion/v1/utilisateurs/delete/${id}`)
      .then(response => {
        setUtilisateurs(prevUtilisateurs =>
          prevUtilisateurs.filter(user => user.id !== id)
        );
      })
      .catch(error => {
        console.error('Erreur lors de la suppression de l\'utilisateur:', error);
        if (error.response) {
          console.error('Server response data:', error.response.data);
          console.error('Server response status:', error.response.status);
          console.error('Server response headers:', error.response.headers);
        }
      });
  };
  

  const handleModifier = (utilisateur) => {
    // Afficher le formulaire de modification
    setUtilisateurAModifier(utilisateur);
    setFormulaireVisible(true);
  };

  const handleSaveModification = (modifications) => {
    const { id, email, password } = utilisateurAModifier;
  
    axios.put(`http://localhost:8080/facture_gestion/v1/utilisateurs/${id}`, {
      ...modifications, // Include all modifications
      email, // Preserve the email
      password, // Preserve the password
    })
      .then(response => {
        console.log('Server response after update:', response.data);
        // Update state or perform other actions if needed
        setUtilisateurs(prevUtilisateurs =>
          prevUtilisateurs.map(user =>
            user.id === id ? { ...user, ...modifications, email, password } : user
          )
        ); 
        setFormulaireVisible(false);
      })
      .catch(error => {
        console.error('Error updating user information:', error);
      });
  };
  
  

  const handleCancelModification = () => {
    // Annuler la modification, masquer le formulaire
    setFormulaireVisible(false);
  };

  return (
    <div className='ulti'>
      <h2>Liste des Utilisateurs</h2>
      <button onClick={() => console.log('Nouvel utilisateur')}>Nouveau</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Adresse</th>
            <th>Email</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {utilisateurs.map(utilisateur => (
            <tr key={utilisateur.id}>
              <td>{utilisateur.id}</td>
              <td>{utilisateur.nom}</td>
              <td>{utilisateur.prenom}</td>
              <td>{utilisateur.adresse}</td>
              <td>{utilisateur.email}</td>
              <td>{utilisateur.userType}</td>
              <td>
                <button onClick={() => handleModifier(utilisateur)}>Modifier</button>
                <button onClick={() => handleSupprimer(utilisateur.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {formulaireVisible && utilisateurAModifier && (
        <FormulaireModification
          utilisateur={utilisateurAModifier}
          onSave={handleSaveModification}
          onCancel={handleCancelModification}
        />
      )}
    </div>
  );
};

export default Utilisateurs;
