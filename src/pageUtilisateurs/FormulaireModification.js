// FormulaireModification.js
import React, { useState } from 'react';

const FormulaireModification = ({ utilisateur, onSave, onCancel }) => {
  const [modifications, setModifications] = useState({
    nom: utilisateur.nom,
    prenom: utilisateur.prenom,
    adresse: utilisateur.adresse,
    email: utilisateur.email,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModifications((prevModifications) => ({ ...prevModifications, [name]: value }));
  };

  return (
    <div className="formulaire-modification-modal">
      <form>
        <label>Nom:</label>
        <input type="text" name="nom" value={modifications.nom} onChange={handleInputChange} />

        <label>Prénom:</label>
        <input type="text" name="prenom" value={modifications.prenom} onChange={handleInputChange} />

        <label>Adresse:</label>
        <input type="text" name="adresse" value={modifications.adresse} onChange={handleInputChange} />

        <label>Email:</label>
        <input type="email" name="email" value={modifications.email} onChange={handleInputChange} />

        <button type="button" onClick={() => onSave(modifications)}>Enregistrer</button>
        <button type="button" onClick={onCancel}>Annuler</button>
      </form>
    </div>
  );
};

export default FormulaireModification;
