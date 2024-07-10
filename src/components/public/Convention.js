import './Convention.css';

import '@/css/bootstrap.min.css';
import '@/css/style.css';
import '@/lib/owlcarousel/assets/owl.theme.default.css';
import '@/lib/owlcarousel/assets/owl.carousel.min.css';
import '@/lib/animate/animate.css';
import OCP from '@/img/OCP.jpg' ;

const Convention = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary text-uppercase">Conventions et Partenariats</h5>
              <h1 className="mb-0">La fondation OCP</h1>
            </div>
            <p className="mb-4">La Fondation OCP est un partenaire stratégique de la School of Architecture Planning and Design (SAP+D) dans la réalisation du projet TOP. Fondée par le Groupe OCP, un leader mondial de l'industrie des phosphates, la Fondation OCP s'engage activement dans des initiatives axées sur le développement durable, l'éducation, la recherche et la responsabilité sociale. La Fondation OCP joue un rôle clé dans la collaboration avec la SAP+D pour promouvoir la recherche multidisciplinaire et la mise en œuvre de solutions novatrices en matière de performance territoriale. Grâce à son soutien, la SAP+D peut tirer parti de l'expertise et des ressources de la Fondation OCP pour atteindre les objectifs du projet TOP, contribuant ainsi au développement durable et à l'amélioration des conditions de vie dans la région de Rhamna.</p>
          </div>
          <div className="col-lg-5" style={{ maxHeight: '300px' }}>
            <br />
            <br />
            <br />
            <br />
            <div className="position-relative h-100">
              <img className="position-absolute w-200 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src={OCP} style={{ objectFit: 'cover' }} alt="OCP" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convention;
