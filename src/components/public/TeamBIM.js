import React from 'react';
import OwlCarousel from 'react-owl-carousel2';

import nahiduzzaman from '@/img/nahiduzzaman.png';
import hassan_radoine from '@/img/hassan_radoine.png';
import laila_elghazouani from '@/img/laila_elghazouani.PNG';
import hassan_jarar from '@/img/hassan_jarar.PNG';
import rafika_hajji from '@/img/rafika_hajji.png';

const options = {
  items: 1, // Afficher un élément à la fois
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
};

const teamMembers = [
  {
    image: hassan_radoine,
    name: 'PROF. Hassan RADOINE',
    role: 'Directeur Pédagogique',
    description:
      "Hassan Radoine est un Full-Professor et Directeur de la School of Architecture, Planning & Design de l'UM6P. Il a obtenu son PhD en architecture et city planning à l'Université de Pennsylvanie, États-Unis. Il a enseigné et a mené des recherches dans plusieurs universités nationales et internationales. Il a été expert-consultant pour l'UNESCO, ONU-Habitat, ICCROM, MCC, Banque Mondiale et Prix Aga Khan d'Architecture.",
  },
  {
    image: laila_elghazouani,
    name: 'Laila ElGHAZOUANI',
    role: 'Architecte, docteur en Architecture et enseignante-chercheuse à la SAP+D.',
    description:
      "Tout au long de sa carrière, elle a cumulé des expériences riches et diversifiées entre les études urbaines, la conception architecturale, l’enseignement, la gestion de projet et la recherche scientifique. Durant ses années de thèse, elle a été doublement primée par le prix For Women In Science de l'Oréal-Unesco et le programme américain Fulbright.",
  },
  {
    image: hassan_jarar,
    name: 'Hassane JARAR',
    role: 'Professeur à l’Ecole Hassania des Travaux Publics (EHTP)',
    description:
      "Il cumule 18 ans d’expérience en recherche et en développement dans le milieu universitaire et industriel. De 2006 à 2009, il était chercheur au GFZ German Research Centre for Geosciences à Helmholtz Potsdam. Il a occupé le poste de chef de département Mathématiques, Informatique et Géomatique de 2015 à 2018 à l’EHTP. Il est responsable de l’équipe de recherche en Sciences Géomatiques (SGEO) depuis 2019, il est également responsable du programme CSGA à l’ENSG/IGN de Paris en France.",
  },
  {
    image: rafika_hajji,
    name: 'Rafika HAJJI',
    role: 'Professeur à l’école des Sciences Géomatiques et Ingénierie Topographique à l’Institut Agronomique et Vétérinaire Hassan II à Rabat.',
    description:
      "Elle a obtenu son doctorat en Sciences à l’Université de Liège en 2013 pour sa thèse sur les Systèmes d’Informations Géographiques 3D. Depuis 2017, elle est cheffe de département de Géodésie Topographie. Elle a également le statut de Professeur collaborateur de l’université de Liège. Elle a participé à plusieurs projets de recherche et a coordonné plusieurs programmes Erasmus.",
  },
  {
    image: nahiduzzaman,
    name: 'KH MD NAHIDUZZAMAN',
    role: 'Professeur',
    description:
      "Avant de rejoindre l'Université de la Colombie-Britannique (UBC) Okanagan (Canada), M. Nahiduzzaman a occupé des postes de professeur au département de planification urbaine et régionale de l'Université King Fahd du pétrole et des minéraux (Arabie saoudite) et au département de planification urbaine et de l'environnement de l'Institut royal de technologie (Suède).",
  },
];

const TeamBIM = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{ maxWidth: '600px' }}>
          <h5 className="fw-bold text-primary text-uppercase">BOARD PÉDAGOGIQUE</h5>
          <h1 className="mb-0">Equipe du Master</h1>
        </div>
        <OwlCarousel options={options}>
          {teamMembers.map((member, index) => (
            <div key={index} className="testimonial-item bg-light my-4">
              <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                <img className="img-fluid rounded" src={member.image} style={{ width: '60px', height: '60px' }} alt={member.name} />
                <div className="ps-4">
                  <h4 className="text-primary mb-1">{member.name}</h4>
                  <small className="text-uppercase">{member.role}</small>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5">{member.description}</div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default TeamBIM;
