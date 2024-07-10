
import React, { useState } from 'react';
import '@/css/bootstrap.min.css';
import '@/css/style.css';
import '@/lib/owlcarousel/assets/owl.theme.default.css';
import '@/lib/owlcarousel/assets/owl.carousel.min.css';
import '@/lib/animate/animate.css';



const Actualite = () => {
  const [visibleNews, setVisibleNews] = useState(3);
  const news = [
    {
      id: 1,
      titre: "Titre de l'article 1",
      date_publication: "2023-01-01",
      texte: "Contenu de l'article 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "../../img/carousel-2.jpeg",
    },
    {
      id: 2,
      titre: "Titre de l'article 2",
      date_publication: "2023-01-02",
      texte: "Contenu de l'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "../../img/carousel-1.jpeg",
    },
    {
      id: 3,
      titre: "Titre de l'article 3",
      date_publication: "2023-01-03",
      texte: "Contenu de l'article 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "../../img/carousel-2.jpeg",
    },
    {
      id: 4,
      titre: "Titre de l'article 4",
      date_publication: "2023-01-03",
      texte: "Contenu de l'article 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "../../img/carousel-2.jpeg",
    },
    {
      id: 5,
      titre: "Titre de l'article 5",
      date_publication: "2023-01-03",
      texte: "Contenu de l'article 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "../../img/carousel-2.jpeg",
    },
   
    // Ajoutez autant d'articles que nécessaire
  ];
 
  const loadMoreNews = () => {
    setVisibleNews((prevCount) => prevCount + 3);
  };

  return (
    <div className="container py-5">
      <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
        <h1 className="mb-0">Lire les derniers articles d'actualités</h1>
      </div>
      <div className="row g-5" id="newsContainer">
        {news.slice(0, visibleNews).map((article) => (
          <div key={article.id} className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
            <div className="blog-item bg-light rounded overflow-hidden" style={{ minHeight: '500px' }}>
              <div className="blog-img position-relative overflow-hidden" style={{ maxHeight: '300px' }}>
                <img className="img-fluid" src={article.image} alt="" />
              </div>
              <div className="p-4">
                <div className="d-flex mb-3">
                  <small><i className="far fa-calendar-alt text-primary me-2"></i>{article.date_publication}</small>
                </div>
                <h4 className="mb-3">{article.titre}</h4>
                <p>{article.texte.substr(0, 100)}</p>
                <a className="text-uppercase" href={`/article/${article.id}`}>Savoir Plus <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleNews < news.length && (
        <div className="text-center mt-3">
          <button className="btn btn-primary" onClick={loadMoreNews}>
            Afficher plus d'actualités <i className="bi bi-arrow-down"></i>
          </button>
        </div>
      )}
    </div>
  );
};
export default Actualite
