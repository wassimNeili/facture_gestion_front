// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header/Header'; 
import Accueil from './pageAccueil/Accueil';
import Utilisateurs from './pageUtilisateurs/Utilisateurs';
import Factures from './pageFactures/Factures';
import Authentification from './pageLogin/Authentification';
import Inscription from './inscription/Inscription';
import Footer from './footer/Footer';

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>  
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/utilisateurs" element={<Utilisateurs />} />
        <Route path="/factures" element={<Factures />} />
        <Route path="/authentification" element={<Authentification />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
