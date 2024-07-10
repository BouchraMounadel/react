import React from 'react';
import './Navbar.css'; // Assurez-vous que ce fichier existe et gère vos styles
import '@/css/bootstrap.min.css';
import '@/css/style.css';
import logo from '@/img/monlogo.png';


const Navbar = () => {
  return (
    <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
        <a href="/" className="navbar-brand p-0">
          <h1 className="m-0">
            <img src={logo}alt="Image" style={{ width: '190px', height: '140px' }} />
          </h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a href="/" className="nav-item nav-link">
              ACCUEIL
            </a>
            <a href="/about" className="nav-item nav-link">
            A PROPOS
            </a>
            <a href="/projects" className="nav-item nav-link">
              PROJETS ET FORMATIONS
            </a>
            <a href="/ouvrages" className="nav-item nav-link">
              OUVRAGES ET DOCUMENTS
            </a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                SIG
              </a>
              <div className="dropdown-menu m-0">
                <a href="/map" className="dropdown-item">
                  Cartographie
                </a>
                <a href="/dashboard" className="dropdown-item">
                  Tableaux de bord
                </a>
                <a href="/geostory" className="dropdown-item">
                  Geostory
                </a>
                <a href="/vulnerability" className="dropdown-item">
                  Vulnérabilité territoriale
                </a>
              </div>
            </div>
          </div>
          
          <a href="auth/login" className="btn btn-primary py-2 px-4 ms-3">
            CONNEXION
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


