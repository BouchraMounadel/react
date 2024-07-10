import React from 'react';
import logo from '../../img/monlogo.png';

const Environnement = () => {
  const retourAccueil = () => {
    // Retourne à la page précédente
    window.history.back();
  };

  const headerStyle = {
    backgroundColor: '#0f2d5c', // Bleu foncé
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  };
  const buttonStyle = {
    backgroundColor: '#63a4ff', // Bleu clair
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const logoStyle = {
    width: '50px', // Ajustez la taille du logo selon vos besoins
    marginRight: '10px',
  };

  const titleStyle = {
    fontSize: '28px', // Ajustez la taille du titre selon vos besoins
    margin: '0',
    color:'white',
    textAlign: 'center', // Pour centrer le texte
    flex: '1', // Pour centrer le titre au milieu
  };

  const iframeStyle = {
    border: 'none',
    width: '100%',
    height: 'calc(100vh - 60px)',
  };

  return (
    <div>
      <header style={headerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', flex: '1' }}>
          <img src={logo} alt="Logo" style={logoStyle} />
          <h1 style={titleStyle}>Suivi de la qualité de l'environnement de Rehamna</h1>
        </div>
        <button style={buttonStyle} className="back-button" onClick={retourAccueil}>
          Retour
        </button>
      </header>
      <iframe allowFullScreen style={iframeStyle} src="http://localhost:8082/mapstore/dashboard-embedded.html#/859"></iframe>
    </div>
  );
};

export default Environnement;
