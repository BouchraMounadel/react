import React from 'react';
import './Geostories.css'; // Assurez-vous que ce fichier existe et gère vos styles
import '@/css/bootstrap.min.css';
import '@/css/style.css';
import rehamnag from '@/img/rehamnag.jpg' ;
import analphabetisme from '@/img/Analphabetisme.jpg' ;
import rehamna from '@/img/Rehamna.jpg' ;


const Geostories = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        {/* Première histoire */}
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h1 className="mb-0">Rehamna à travers les siècles : récits d'une province en mutation</h1>
            </div>
            <p className="mb-4">Dans un monde de plus en plus urbanisé,
              les villes et les zones métropolitaines sont des pôl selon les statistiques officielles de l’ONU,
              plus de la moitié de la population mondiale vit dans des espaces urbains, et cette proportion devrait augmenter
              à 60 % d’ici 2030. Toujours selon ces chiffres, à l’échelle du continent Africain,
              explosion démographique, enregistrant une augmentation de 950 millions d’habitants.</p>
            <a href="/Geostory/RehamnaStory" className="btn btn-primary">Continuer la lecture</a>
          </div>
          <div className="col-lg-5" style={{ minHeight: '500px' }}>
            <div className="position-relative h-100">
              <img className="position-absolute w-100 h-70 rounded wow zoomIn" data-wow-delay="0.9s" src={rehamnag} style={{ objectFit: 'cover' }} alt="Rehamna" />
            </div>
          </div>
        </div>

        {/* Deuxième histoire */}
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h1 className="mb-0">De l'analphabétisme à l'autonomisation : l'histoire inspirante des femmes de Rehamna</h1>
            </div>
            <p className="mb-4">Pendant de nombreuses années, la province de Rehamna a été confrontée à des taux élevés d'analphabétisme chez les femmes,
              ainsi qu'à une faible participation des femmes à l'éducation et au marché du travail.
              Les femmes étaient souvent confinées à des rôles traditionnels de ménagères et de mères au foyer,
              et étaient souvent limitées dans leurs choix et leurs opportunités.</p>
            <a href="/Geostory/WomenStory" className="btn btn-primary">Continuer la lecture</a>
          </div>
          <div className="col-lg-5" style={{ minHeight: '500px' }}>
            <div className="position-relative h-100">
              <img className="position-absolute w-100 h-70 rounded wow zoomIn" data-wow-delay="0.9s" src={analphabetisme} style={{ objectFit: 'cover' }} alt="Analphabétisme" />
            </div>
          </div>
        </div>

        {/* Troisième histoire */}
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h1 className="mb-0">La province de Rhamna face aux contraintes climatique</h1>
            </div>
            <p className="mb-4">Dans un monde de plus en plus urbanisé,
              les villes et les zones métropolitaines sont des pôl selon les statistiques officielles de l’ONU,
              plus de la moitié de la population mondiale vit dans des espaces urbains, et cette proportion devrait augmenter
              à 60 % d’ici 2030. Toujours selon ces chiffres, à l’échelle du continent Africain,
              explosion démographique, enregistrant une augmentation de 950 millions d’habitants.</p>
            <a href="/Geostory/ClimatStory" className="btn btn-primary">Continuer la lecture</a>
          </div>
          <div className="col-lg-5" style={{ minHeight: '500px' }}>
            <div className="position-relative h-100">
              <img className="position-absolute w-100 h-70 rounded wow zoomIn" data-wow-delay="0.9s" src={rehamna} style={{ objectFit: 'cover' }} alt="Rehamna" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geostories;
