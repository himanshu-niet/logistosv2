import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Header = ({ active }) => {
    const navigate = useNavigate();

    const product=(e) => {

        e.preventDefault();
        navigate("/");
        window.scrollTo({
            top: document.querySelector("#products").offsetTop,
            behavior: "smooth",
        });
    }
    return (
        <>
            <div className="container-fluid bg-dark">
                <div className="row py-2 px-lg-5">
                    <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center text-white">
                            <small> <svg className="icon_footer" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#ffffff" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z" />
                            </svg>+91 9560099686</small>
                            <small className="px-3">|</small>
                            <small>  <svg className="icon_footer" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#ffffff" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7l8-5V6l-8 5l-8-5v2l8 5Z" />
                            </svg>support@logistos.in</small>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <a  title="Follow on Facebook" className="text-white px-2" target="_blank" href="https://www.facebook.com/logistos.in">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a title="Follow on Twitter/X" className="text-white px-2 font-weight-bold text-decoration-none" target="_blank" href="https://twitter.com/logistos">
                                X
                            </a>
                            <a  title="Follow on LinkedIn" className="text-white px-2" target="_blank" href="https://www.linkedin.com/in/logistos">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a  title="Follow on Instagram" className="text-white px-2" target="_blank" href="https://www.instagram.com/logistos.in">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a  title="Connect on Whatsapp" className="text-white pl-2" target="_blank" href="https://api.whatsapp.com/send?phone=9560099686">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5 ">
                    <Link to="/" className="navbar-brand ml-lg-3">
                        <h1 className="m-0 display-6 text-uppercase text-primary " style={{ display: 'flex', alignItems: 'center' }}><img className="mr-3" style={{ height: '80px' }} src="./img/Logistos-4.png" />
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span>Logistos</span> <h6 className="text-dark salogan font-weight-bold">THE NEW LOGISTIC REVOLUTION</h6></div>
                        </h1>

                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse pl-lg-3 " id="navbarCollapse">
                        <div className="navbar-nav ml-auto py-0">

                            <Link to="/" className={`nav-item nav-link ${active == 1 ? 'active' : ''}`}>Home</Link>

                            <Link to="/about">   <span className={`nav-item nav-link ${active == 2 ? 'active' : ''}`}>About</span></Link>

                            <> <span onClick={(e) => {
                                e.preventDefault();
                                navigate("/");
                                window.scrollTo({
                                    top: document.querySelector("#cal").offsetTop,
                                    behavior: "smooth",
                                });
                            }} className={`nav-item nav-link ${active == 3 ? 'active' : ''}`}>Freight Estimator</span></>

<div className="nav-item dropdown">
                                <span className={`nav-item nav-link dropdown-toggle ${active == 4 ? 'active' : ''}`} data-toggle="dropdown">Services & Products</span>
                                <div className="dropdown-menu rounded-0 m-0">
                                <span onClick={product} className="dropdown-item">Business-to-Consumer (B2C)</span>
                                <span onClick={product} className="dropdown-item">Business-to-Business (B2B/BULK)</span>
                                <span onClick={product} className="dropdown-item">Full Truck load Service</span>
                                <span onClick={product} className="dropdown-item">Air Freight Service</span>
                                {/* <span onClick={product} className="dropdown-item">Supply Chain Service</span>  */}
                                <span onClick={product} className="dropdown-item">Warehousing Service</span>

                                </div>
                            </div>




                            <Link to="/contact"><span className={`nav-item nav-link ${active == 5 ? 'active' : ''}`}>Contact</span></Link>
                            <div className="nav-item dropdown">
                                <span className={`nav-item nav-link dropdown-toggle ${active == 6 ? 'active' : ''}`} data-toggle="dropdown">Login</span>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <Link to="/signin"> <span className="dropdown-item">Login</span></Link>
                                    <Link to="/signup"> <span className="dropdown-item">Register</span></Link>
                                    <Link to="/admin"> <span className="dropdown-item">Admin</span></Link>


                                </div>
                            </div>

                            

                        </div>


                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header;