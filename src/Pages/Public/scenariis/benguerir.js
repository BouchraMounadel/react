import React, { useState } from 'react';
import './benguerir.css'; // Assurez-vous d'importer votre fichier CSS


const Benguerir = () => {
  
 
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  // Remplacez ces données par vos données réelles
  const data = {
    nom_commune: 'Nom de la commune',
    code_commune: 'Code de la commune',
    province: 'Nom de la province',
    region: 'Nom de la région',
    superficie: 'Superficie',
    // ... Autres données
  };
  const demographieData = {
    poids_demographie: 'Poids démographie',
    ivt_demographie: 'IVT démographie',
    // ... Autres données
  };
  
  const socioEconomiqueData = {
    poids_socioeconomie: 'Poids socio-économie',
    ivt_socioeconomie: 'IVT socio-économie',
    // ... Autres données
  };
  
  const infrastructuresData = {
    poids_infrastructures: 'Poids infrastructures',
    ivt_infrastructure: 'IVT infrastructures',
    // ... Autres données
  };
  
  const environnementData = {
    poids_environnement: 'Poids environnement',
    ivt_environnement: 'IVT environnement',
    // ... Autres données
  };


  const socioEconomieData = {
    tauxactivite: 75,
    tauxchomage: 10,
    tauxscolarisation: 90,
    tauxanalphabetisme: 5,
    tauxpauvrete: 12,
    tauxvulnerabilitemonetaire: 8,
    // ... Autres données
  };



  return (
    <div className="benguerir-scenariis">
    <div className="tabs">
      <div className="tabs-btn-container">
        {[1, 2, 3].map((tabIndex) => (
          <button
            key={tabIndex}
            className={`tab ${activeTab === tabIndex ? 'active-tab' : ''}`}
            onClick={() => handleTabClick(tabIndex)}
          >
            {tabIndex === 1 && 'Vue d\'ensemble'}
            {tabIndex === 2 && 'Dimensions de l\'indice'}
            {tabIndex === 3 && 'Interprétation & Recommandation'}
          </button>
        ))}
      </div>

      {/* Panel 1 */}
      <div className={`tab-content ${activeTab === 1 ? 'active-tab-content' : ''}`}>
        <span></span>
        <br />
        <h3>Commune {data.nom_commune}</h3>
        <div id="info-commune">
          <p>Code de la commune: {data.code_commune} </p>
          <p>Province {data.province} </p>
          <p>Région: {data.region} </p>
          <p>Superficie: {data.superficie} km&sup2;</p>
        </div>
        <iframe
          allowFullScreen
          style={{ border: 'none', float: 'right', marginLeft: '10px' , marginTop: '-240px'}}
          height="400"
          width="500"
          
          src="http://localhost:8082/mapstore/#/context/CommuneBenguerir"
        ></iframe>
        <h3>Définition de l'indice de vulnérabilité territoriale</h3>
        <p style={{ margin: '15px' }}>
        L'indice de vulnérabilité territoriale est un outil d'analyse qui permet d'évaluer les forces et les faiblesses d'un territoire face aux défis économiques, sociaux, environnementaux et politiques. Il permet de mieux comprendre les enjeux et de mieux orienter les politiques publiques pour améliorer la qualité de vie des habitants.
      </p>
      <p>
        La valeur de l'IVT pour la commune est: ivtMultidimensionnelle
      </p>
      <p>
        Ce qui signifie que la commune est positionnée ordre selon l'ordre des communes les plus vulnérables de la province Rehamna
      </p>

      <table className="table-container">
        <thead>
          <tr>
            <th>Dimension</th>
            <th>Pondération</th>
            <th>Score de la commune</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Démographie</td>
            <td>poidsDemographie</td>
            <td>ivtDemographie</td>
          </tr>
          <tr>
            <td>Socio-économie</td>
            <td>poidsSocioeconomie</td>
            <td>ivtSocioeconomie</td>
          </tr>
          <tr>
            <td>Infrastructures</td>
            <td>poidsInfrastructures</td>
            <td>ivtInfrastructure</td>
          </tr>
          <tr>
            <td>Environnement</td>
            <td>poidsEnvironnement</td>
            <td>ivtEnvironnement</td>
          </tr>
        </tbody>
      </table>
      </div>

      {/* Panel 2 */}
      <div className={`tab-content ${activeTab === 2 ? 'active-tab-content' : ''}`}>
  <h3 >Dimension démographique ({demographieData.poids_demographie})</h3>
  <p>
           Cette dimension prend en compte les caractéristiques de la population de la commune,
           telles que la taille, la densité, la structure par âge et par sexe, etc. 
           La dimension démographique est importante pour la vulnérabilité territoriale car elle peut influencer la capacité de la commune à 
           faire face aux risques et aux menaces, ainsi que leur impact potentiel. 
           Par exemple, une population vieillissante peut être plus vulnérable aux effets de la chaleur ou de la grippe saisonnière, 
           tandis que l'abondance de la tranche d'age jeune peut avoir des répercussions économiques et sociales importantes.
  </p>
  <table style={{ backgroundColor: '#ffecb3' }}  className="table-container">
        <thead>
          <tr>
            <th>Indicateur</th>
            <th>Coefficient</th>
            <th>Valeur pour la commune</th>
            <th>Impact sur la vulnérabilité</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Températures annuelles</td>
            <td>1.5</td>
            <td>25°C</td>
            <td>Augmentation</td>
            <td>Observatoire climatique</td>
          </tr>
          <tr>
            <td>Précipitations</td>
            <td>0.8</td>
            <td>800 mm</td>
            <td>Faible</td>
            <td>Météo France</td>
          </tr>
          <tr>
            <td>Niveau de la mer</td>
            <td>0.2</td>
            <td>+10 cm</td>
            <td>Modéré</td>
            <td>Agence environnement</td>
          </tr>
          <tr>
            <td>Biodiversité</td>
            <td>2.0</td>
            <td>60 espèces</td>
            <td>Forte</td>
            <td>WWF</td>
          </tr>
      </tbody>
    </table>
 
    <div style={{ borderBottom: '1px solid #ccc', margin: '10px 0' }}></div>


  {/* Tableau 2 - Socio-économique */}
  <h3>Dimension socio-économique ({socioEconomiqueData.poids_socioeconomie})</h3>
  <p>
          Cette dimension prend en compte les caractéristiques économiques et sociales de la commune, 
          telles que le niveau de développement économique, la vulnérabilité monétaire, le taux de chômage, l'éducation, 
          etc. La dimension socio-économique est importante pour la vulnérabilité territoriale car elle peut influencer 
          la capacité de la commune à faire face aux chocs économiques ou environnementaux, 
          ainsi que les moyens dont elle dispose pour se rétablir après une catastrophe ou une crise
        </p>
        <table style={{ backgroundColor: '#d1c4e9' }} className="table-container">
        <thead>
          <tr>
            <th>Indicateur</th>
            <th>Coefficient</th>
            <th>Valeur pour la commune</th>
            <th>Impact sur la vulnérabilité</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Températures annuelles</td>
            <td>1.5</td>
            <td>25°C</td>
            <td>Augmentation</td>
            <td>Observatoire climatique</td>
          </tr>
          <tr>
            <td>Précipitations</td>
            <td>0.8</td>
            <td>800 mm</td>
            <td>Faible</td>
            <td>Météo France</td>
          </tr>
          <tr>
            <td>Niveau de la mer</td>
            <td>0.2</td>
            <td>+10 cm</td>
            <td>Modéré</td>
            <td>Agence environnement</td>
          </tr>
          <tr>
            <td>Biodiversité</td>
            <td>2.0</td>
            <td>60 espèces</td>
            <td>Forte</td>
            <td>WWF</td>
          </tr>
      </tbody>
    </table>
    <div style={{ borderBottom: '1px solid #ccc', margin: '10px 0' }}></div>

  {/* Tableau 3 - Infrastructures */}
  <h3>Dimension d'infrastructure ({infrastructuresData.poids_infrastructures})</h3>
  <p>
          Cette dimension prend en compte la qualité et la résilience des infrastructures de la commune,
           telles que les routes, les réseaux d'eau et d'électricité, etc. 
           La dimension infrastructure est importante pour la vulnérabilité territoriale car elle peut influencer 
           la capacité de la commune à faire face aux catastrophes naturelles et aux autres risques, 
           ainsi que la rapidité et l'efficacité de la réponse en cas d'urgence.
        </p>
        <table style={{ backgroundColor: '#e0f7fa' }}  className="table-container">
        <thead>
          <tr>
            <th>Indicateur</th>
            <th>Coefficient</th>
            <th>Valeur pour la commune</th>
            <th>Impact sur la vulnérabilité</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Températures annuelles</td>
            <td>1.5</td>
            <td>25°C</td>
            <td>Augmentation</td>
            <td>Observatoire climatique</td>
          </tr>
          <tr>
            <td>Précipitations</td>
            <td>0.8</td>
            <td>800 mm</td>
            <td>Faible</td>
            <td>Météo France</td>
          </tr>
          <tr>
            <td>Niveau de la mer</td>
            <td>0.2</td>
            <td>+10 cm</td>
            <td>Modéré</td>
            <td>Agence environnement</td>
          </tr>
          <tr>
            <td>Biodiversité</td>
            <td>2.0</td>
            <td>60 espèces</td>
            <td>Forte</td>
            <td>WWF</td>
          </tr>
      </tbody>
    </table>
    <div style={{ borderBottom: '1px solid #ccc', margin: '10px 0' }}></div>

  {/* Tableau 4 - Environnement */}
  <h3>Dimension environnementale ({environnementData.poids_environnement})</h3>
       <p>
          Cette dimension prend en compte les caractéristiques environnementales de la commune, 
          telles que le climat,la végétation, les gazs à effet de serre, les précipitations etc.
           La dimension environnement est importante pour la vulnérabilité territoriale car elle peut influencer la vulnérabilité
            de la commune à différents types de risques naturels, tels que les inondations, 
            les glissements de terrain, les tempêtes, etc. Elle peut également influencer la capacité de la commune à faire face
             aux risques environnementaux à plus long terme, tels que le changement climatique ou la perte de biodiversité.
        </p>
        
        <table style={{ backgroundColor: '#c8e6c9' }}  className="table-container">
        <thead>
          <tr>
            <th>Indicateur</th>
            <th>Coefficient</th>
            <th>Valeur pour la commune</th>
            <th>Impact sur la vulnérabilité</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Températures annuelles</td>
            <td>1.5</td>
            <td>25°C</td>
            <td>Augmentation</td>
            <td>Observatoire climatique</td>
          </tr>
          <tr>
            <td>Précipitations</td>
            <td>0.8</td>
            <td>800 mm</td>
            <td>Faible</td>
            <td>Météo France</td>
          </tr>
          <tr>
            <td>Niveau de la mer</td>
            <td>0.2</td>
            <td>+10 cm</td>
            <td>Modéré</td>
            <td>Agence environnement</td>
          </tr>
          <tr>
            <td>Biodiversité</td>
            <td>2.0</td>
            <td>60 espèces</td>
            <td>Forte</td>
            <td>WWF</td>
          </tr>
      </tbody>
    </table>
</div>

      {/* Panel 3 */}
      <div className={`tab-content ${activeTab === 3 ? 'active-tab-content' : ''}`}>
        <div className="container">
          <h3>Interprétation & Recommandation</h3>
          <p>
            A Benguerir, chef lieu de la province on relève une série de projets portés par le groupe OCP. Cet élan est accompagné par le meilleur taux de raccordement aux infrastructures et une situation socio-économique jugée comme la meilleure au niveau provincial. Toutefois les faibles précipitations, le faible taux de végétation et la forte pollution au CH4 invitent à revoir la vulnérabilité de la commune quant aux risques de stress hydrique, de qualité de l’air ou d’inondations brusques.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Benguerir;
