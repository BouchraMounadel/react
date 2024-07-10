import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import '@/css/bootstrap.min.css';
import '@/css/style.css';
import tab from '@/img/tab.png' ;
import './ContentSection.css'; // Assurez-vous de créer ce fichier CSS pour styliser votre composant

const ContentSection = () => {
  return (
    <div>
      <div className="container py-1">
        <h2 style={{ marginLeft: '250px' }}>
          La province de Rehamna en chiffres : Découvrez les données clés sur la province et ses communes
        </h2>
      </div>

      <div className="container py-5">
      <div id="test">
      
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '20px', id: "test" }}>
          <a href=""><button className="Mbouton" style={{ backgroundColor: '#1593bd' }}>Thématiques</button></a>
          <a href="/Dashboard/Demography"><button className="Mbouton">Démographie</button></a>
          <a href="/Dashboard/Social"><button className="Mbouton">Socio-économie</button></a>
          <a href="/Dashboard/Infrastructure"><button className="Mbouton">Infrastructure</button></a>
          <a href="/Dashboard/Environnement"><button className="Mbouton">Environnement</button></a>
          <a href="/Dashboard/Women"><button className="Mbouton">Situation de la femme</button></a>
        </div>

        <img id="Mimage" src={tab} alt="Description de l'image" style={{ width: '412px', height: '280px', marginLeft: '-24px' }} />

        <div id="Mtexte">
          La province de Rehamna est l'une des 8 provinces de la région de Marrakech-Safi au Maroc. Elle est située à
          environ 60 kilomètres au nord de la ville de Marrakech. La province de Rehamna a été créée en 2015, lors du
          nouveau découpage territorial marocain. Elle regroupe 25 communes et elle est réputée pour son agriculture et
          sa production de céréales, d'olives et de légumes. Le chef-lieu de la province est la ville de Benguérir, qui
          est une ville en pleine croissance économique.
          <br /> &nbsp; Ces tableaux de bord ont été réalisés en se basant sur les données fournies par le
          Haut-Commissariat au Plan (HCP) pour le Recensement Général de la Population et de l'Habitat (RGPH) de 2014,
          ainsi que sur des données extraites des images satellites pour les périodes du 21 mars 2021 et du 21 mars
          2022.
        </div>
      </div>
      </div>

      <div className="container py-5">
        <div id="mycharts">
          <Doughnut
            data={{
              labels: ['Taux de Scolarisation'],
              datasets: [
                {
                  data: [93.6, 6.4],
                  backgroundColor: ['#1593bd', 'lightblue'],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              responsive: false,
              cutoutPercentage: 50,
              animation: {
                animateScale: true,
              },
              legend: {
                display: false,
              },
              tooltips: {
                enabled: false,
              },
              text: 'Taux de Scolarisation',
            }}
          />
          <Doughnut
            data={{
              labels: ['Taux d\'activité'],
              datasets: [
                {
                  data: [47,53],
                  backgroundColor: ['#1593bd', 'lightblue'],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              responsive: false,
              cutoutPercentage: 50,
              animation: {
                animateScale: true,
              },
              legend: {
                display: false,
              },
              tooltips: {
                enabled: false,
              },
              text: 'Taux d\'activité',
            }}
          />



                    <Doughnut
            data={{
              labels: ['Taux d\'urbanisation'],
              datasets: [
                {
                  data: [33,67],
                  backgroundColor: ['#1593bd', 'lightblue'],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              responsive: false,
              cutoutPercentage: 50,
              animation: {
                animateScale: true,
              },
              legend: {
                display: false,
              },
              tooltips: {
                enabled: false,
              },
              text: 'Taux d\'urbanisation',
            }}
          />
          {/* Ajoutez deux autres graphiques ici en utilisant la même structure */}
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
