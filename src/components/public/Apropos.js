import './Apropos.css';

import '@/css/bootstrap.min.css';
import '@/css/style.css';
import '@/lib/owlcarousel/assets/owl.theme.default.css';
import '@/lib/owlcarousel/assets/owl.carousel.min.css';
import '@/lib/animate/animate.css';
import about from '@/img/about.jpg' ;

const Apropos = () => {
    return (
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
                        <div className="row g-5">
                          <div className="col-lg-7">
                            <div className="section-title position-relative pb-3 mb-5">
                              <h5 className="fw-bold text-primary text-uppercase">A PROPOS</h5>
                              <h1 className="mb-0">Observatoire de la performance territoriale</h1>
                            </div>
                            <p className="mb-4">Depuis l'instauration de la régionalisation avancée et du nouveau modèle de développement au Maroc en 2015, le pays s'est engagé dans un vaste projet de développement territorial, dans le but de réduire les disparités régionales et de favoriser une croissance économique inclusive, tout en renforçant les capacités des régions à contribuer au développement national. Néanmoins, malgré les efforts consentis, des défis subsistent pour garantir un développement territorial équitable et durable sur l'ensemble du territoire marocain. Ainsi, il est impératif de disposer d'outils performants pour la planification et la gestion du développement territorial, afin de pouvoir appréhender de manière simple et intuitive les atouts et les faiblesses d'un territoire donné dans le contexte actuel. Il est nécessaire d'identifier les facteurs qui influent sur la performance du territoire et de formuler des recommandations appropriées pour l'améliorer. Cette approche s'inscrit parfaitement dans la vision de notre projet d'observatoire de la performance territoriale.</p>
                            <h3>Valeurs et objectifs :</h3>
                            <br />
                            <div className="row g-0 mb-3">
                              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                                <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Géoprospective</h5>
                                <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Durabilité</h5>
                              </div>
                              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                                <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Support</h5>
                                <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Aide à la décision</h5>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5" style={{ minHeight: '500px' }}>
                            <div className="position-relative h-100">
                              <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src={about} style={{ objectFit: 'cover' }} alt="About" />
                            </div>
                          </div>
                        </div>
          <br />
          <br />
         
          <br />
          <br />
        </div>
      </div>
    );
  };

export default Apropos