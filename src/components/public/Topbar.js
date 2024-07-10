import './Topbar.css';


import '@/css/style.css';

const Topbar = ({ title }) => {
  const topbarStyle = {
    backgroundColor: '#0f2d5c', // Remplacez par la couleur souhaitée
    backgroundImage: 'none', // Désactivez l'image de fond
    
  };

  return (
    
    <div className="container-fluid  py-4 bg-header" style={topbarStyle}>
      <div className="row py-5">
        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-4 text-white animated zoomIn">{ title }</h1>
          <a href="/" className="h5 text-white">ACCUEIL</a>
          <i className="far fa-circle text-white px-2"></i>
          <a href="/about" className="h5 text-white">À PROPOS</a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
