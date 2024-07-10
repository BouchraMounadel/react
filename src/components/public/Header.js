import './Header.css';

import '@/css/bootstrap.min.css';
import '@/css/style.css';
import logo from '@/img/monlogo.png' ;
import carousel2 from '@/img/carousel-2.jpeg' ;
import carousel1 from '@/img/carousel-1.jpeg' ;






const Header = () => {
  return (
    <>

    
   
    
        <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            {/* Contenu du premier bloc */}
            </div>
            <div className="col-lg-4 text-center text-lg-end">
            <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                
                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
                <i className="fab fa-facebook-f fw-normal"></i>
                </a>
                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
                <i className="fab fa-linkedin-in fw-normal"></i>
                </a>
                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
                <i className="fab fa-instagram fw-normal"></i>
                </a>
               
            </div>
            </div>
        </div>

        </div>
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                <a href="#" className="navbar-brand p-0">
                    <h1 className="m-0">
                    <img src={logo} alt="Image" style={{ width: '190px', height: '140px' }} />

                    </h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                 <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                                    <a href="/" className="nav-item nav-link active">ACCUEIL</a>
                                    <a href="/about" className="nav-item nav-link ">A PROPOS</a>
                                    <a href="/projects" className="nav-item nav-link">PROJETS ET FORMATIONS</a>
                                    <a href="/ouvrages" className="nav-item nav-link">OUVRAGES ET DOCUMENTS</a>
                    
                                            <div className="nav-item dropdown">
                                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">SIG</a>
                                                <div className="dropdown-menu m-0">
                                                    <a href="/map" className="dropdown-item">Cartographie</a>
                                                
                                                    <a href="/dashboard" className="dropdown-item">Tableaux de bord</a>
                                                    <a href="/geostory" className="dropdown-item">Geostory</a>
                                                    <a href="/vulnerability" className="dropdown-item">Vulnérabilité  territoriale</a>
                                                </div>
                                            </div>
                        </div>
                       
                        <a href="auth/login" className="btn btn-primary py-2 px-4 ms-3">
                        CONNEXION
                        </a>
                </div>
            </nav>
        
    
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src={carousel2} alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: '900px' }}>
                        <h1 className="display-1 text-white mb-md-4 animated zoomIn">Observatoire de la performance territoriale</h1>
                        <a href="#" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Savoir Plus</a>
                        <a href="#" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contactez-Nous</a>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src={carousel1} alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: '900px' }}>
                        <h5 className="text-white text-uppercase mb-3 animated slideInDown">Géoprospection & Durabilité </h5>
                        <h1 className="display-1 text-white mb-md-4 animated zoomIn">Maroc Futur</h1>
                    </div>
                    </div>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
        </div>
      
        <div className="modal fade" id="searchModal" tabIndex="-1">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content" style={{ background: 'rgba(9, 30, 62, .7)' }}>
                <div className="modal-header border-0">
                <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body d-flex align-items-center justify-content-center">
                <div className="input-group" style={{ maxWidth: '600px' }}>
                    <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword" />
                    <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                </div>
                </div>
          </div>
          </div>
          </div>
    </div>
    

    </>
  );
};

export default Header;
