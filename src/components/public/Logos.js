import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import '@/css/bootstrap.min.css';


import '@/css/style.css';
import OCP from '@/img/OCP.jpg';
import School from '@/img/Logos_SAP+D.png';

const options = {
  items: 8,
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
};

const Logos = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5 mb-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
          <h1 className="mb-0">Nos partenaires</h1>
        </div>
        <div className="bg-white">
          <OwlCarousel options={options}>
            <img src={OCP} alt="" />
            <img src={School} alt="" />
            {/* Ajoutez d'autres logos ici */}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Logos;
