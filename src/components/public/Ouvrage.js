import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importer axios
import '@/css/bootstrap.min.css';
import '@/css/style.css';

const Ouvrage = () => {
  const [ouvrages, setOuvrages] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/accueil/ouvrages')
      .then(response => setOuvrages(response.data))
      .catch(error => console.error('Erreur de récupération des ouvrages:', error));
  
    axios.get('http://localhost:5000/accueil/articles')
      .then(response => setArticles(response.data))
      .catch(error => console.error('Erreur de récupération des articles:', error));
  }, []);
  
  

  return (
    <div className="container">
      <h2 className="my-4">Nos Ouvrages</h2>
      <div className="row">
        {ouvrages.map((ouvrage) => (
          <div key={ouvrage.id} className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src={ouvrage.lien_image} className="card-img-top" alt={ouvrage.titre} />
              <div className="card-body">
                <h5 className="card-title">{ouvrage.titre}</h5>
                <p className="card-text">Auteurs: {ouvrage.auteurs}</p>
                <p className="card-text">Date de publication: {formatDate(ouvrage.date_publication)}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a href={ouvrage.lien_document} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">Voir le document</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-4" />

      <h2 className="my-4">Articles Publiés</h2>
      <div className="row">
        {articles.map((article) => (
          <div key={article.id} className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src={article.lien_image} className="card-img-top" alt={article.titre} />
              <div className="card-body">
                <h5 className="card-title">{article.titre}</h5>
                <p className="card-text">Auteurs: {article.auteurs}</p>
                <p className="card-text">Date de publication: {formatDate(article.date_publication)}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a href={article.lien_document} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">Lire l'article</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', options);
};

export default Ouvrage;
