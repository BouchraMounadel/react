import './Fastbutton.css';

import '@/css/bootstrap.min.css';
import '@/css/style.css';
import '@/lib/owlcarousel/assets/owl.theme.default.css';
import '@/lib/owlcarousel/assets/owl.carousel.min.css';
import '@/lib/animate/animate.css';


const Fastbutton = () => {
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
              <h1 className="mb-0">Des services cartographique pour vos projets réussis </h1>
            </div>
            <div className="row g-5">
              <ServiceItem
                iconClass="fas fa-globe text-white"
                title="Cartographie interactive"
                description="Ce module vous permet de consulter les données cartographiques, d'interagir avec elles et de les télécharger"
                btnLink="/map"
              />
              <ServiceItem
                iconClass="fa fa-chart-pie text-white"
                title="Tableaux de bord"
                description="Consultez les indicateurs clès de la province Rehamna suivant plusieurs dimensions"
                btnLink="/dashboard"
              />
              <ServiceItem
                iconClass="fa fa-puzzle-piece text-white"
                title="Les geostory"
                description="Vous pouvez désormais voir l'histoire d'évolution de la province pour des thèmatiques diverses"
                btnLink="/geostory"
              />
              <ServiceItem
                iconClass="fa fa-puzzle-piece text-white"
                title="Vulnérabilité territoriale"
                description="Identifier les territoires vulnérables et simuler les communes de la province avec vos propres données"
                btnLink="/vulnerability"
              />
              <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s" style={{ visibility: 'visible', animationDelay: '0.9s', animationName: 'zoomIn' }}>
                <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                  <h3 className="text-white mb-3">Observatoire du Séisme d'Al Haouz</h3>
                  <p className="text-white mb-3">Découvrez l'impact du séisme d'Al Haouz : Explorez les données géospatiales, les récits locaux et les indicateurs clés pour comprendre l'ampleur des dommages et les efforts de reconstruction en cours.</p>
                  <a className="btn btn-lg btn-light rounded" href="sinistre.php">
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    const ServiceItem = ({ iconClass, title, description, btnLink }) => {
      return (
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon">
              <i className={iconClass}></i>
            </div>
            <h4 className="mb-3">{title}</h4>
            <p className="m-0">{description}</p>
            <a className="btn btn-lg btn-primary rounded" href={btnLink}>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      );
    };
export default Fastbutton;
