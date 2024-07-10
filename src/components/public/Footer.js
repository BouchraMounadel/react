import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
        <div className="row gx-5">
            <div className="col-lg-4 col-md-6 footer-about">
                <a href="index.html" className="navbar-brand p-0">
                    <h1 className="m-0"><img src="img/monlogo.png" alt="Image" style={{ width: '250px', height: '200px' }} /></h1>
                </a>
            </div>
            <div className="col-lg-8 col-md-6">
                <div className="row gx-5">
                    <div className="col-lg-4 col-md-12 pt-5 mb-5">
                        <div className="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 className="text-light mb-0">CONTACT</h3>
                        </div>
                        <div className="d-flex mb-2">
                            <i className="bi bi-geo-alt text-primary me-2"></i>
                            <p className="mb-0">UM6P Benguerir Morocco</p>
                        </div>
                        <div className="d-flex mb-2">
                            <i className="bi bi-envelope-open text-primary me-2"></i>
                            <p className="mb-0">TOP@gmail.com</p>
                        </div>
                        <div className="d-flex mb-2">
                            <i className="bi bi-telephone text-primary me-2"></i>
                            <p className="mb-0">+012 345 67890</p>
                        </div>
                        <div className="d-flex mt-4">
                            <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                            <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                            <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                            <a className="btn btn-primary btn-square" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                        <div className="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 className="text-light mb-0">LIENS RAPIDES</h3>
                        </div>
                        <div className="link-animated d-flex flex-column justify-content-start">
                            <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>ACCUEIL</a>
                            <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>A PROPOS</a>
                            <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>CARTOGRAPHIE</a>
                            <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>INDICATEURS</a>
                            <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>GEOSTORY</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="container-fluid text-white" style={{ background: '#061429' }}>
    <div className="container text-center">
        <div className="row justify-content-end">
            <div className="col-lg-8 col-md-6">
                <div className="d-flex align-items-center justify-content-center" style={{ height: '75px' }}>
                    <p className="mb-0">&copy; <a className="text-white border-bottom" href="#">TOP</a>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

            
            
        </>
    )
}

export default Footer