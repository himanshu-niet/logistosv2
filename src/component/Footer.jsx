import { Link } from "react-router-dom";
import BackToTop from "./BackToTop";

const Footer=()=>{

    return(
        <>
  <div className="container-fluid bg-dark text-white  pt-5 px-sm-3 px-md-5">
    <div className="row ">
      <div className="col-lg-5 col-md-6 mb-5 pr-5">
        <h3 className="text-primary mb-4">About</h3>
        <p>
        Welcome to Logistos, your trusted partner in seamless logistics solutions. We are a forward-thinking logistics company dedicated to simplifying complex supply chain challenges and delivering exceptional results for businesses worldwide.
        </p>
       
      </div>
      <div className="col-lg-7 col-md-6">
        <div className="row">
        <div className="col-md-6 mb-5">
            <h3 className="text-primary mb-4">Quick Links</h3>
            <div className="d-flex flex-column justify-content-start">
            <Link to="/about">   <a className="text-white mb-2">
                <i className="fa fa-angle-right mr-2" />
               About
              </a>
              </Link>
             <Link to="/contact"> <a className="text-white mb-2">
                <i className="fa fa-angle-right mr-2" />
                Contact
              </a>
              </Link>
              <Link to="/tc">   <a className="text-white mb-2">
                <i className="fa fa-angle-right mr-2" />
                Terms & Conditions
              </a>
              </Link>
              <Link to="/policy">    <a className="text-white mb-2">
                <i className="fa fa-angle-right mr-2" />
                Privacy Policy
              </a>
              </Link>
              <Link to="/refund">    <a className="text-white">
                <i className="fa fa-angle-right mr-2" />
                Refund & Cancellation Policy
              </a>
              </Link>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <h3 className="text-primary mb-4">Get In Touch</h3>
            <p>
            <svg className="icon_footer" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#daa520" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"/>
</svg>
              1202, Business Bay, Kamdhenu, Nerul Sector-1, Near Juinagar Railway Station, Navi-Mumbai 400-706.
            </p>
            <p>
            <svg className="icon_footer" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#daa520" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"/>
</svg>
              95600-99686 / 73501-44999
            </p>
            <p>
            <svg className="icon_footer" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#daa520" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7l8-5V6l-8 5l-8-5v2l8 5Z"/>
</svg>
              customer.support@logistos.in
            </p>
            
          </div>
         
        </div>
      </div>
      
    </div>
  </div>
  <div
    className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
    style={{ borderColor: "#3E3E4E !important" }}
  >
    <div className="row">
      <div className="col-lg-12 text-center  mb-3 mb-md-0">
        <p className="m-0 text-white">
          © <a href="https://logistos.in/">Logistos Pvt. Ltd.</a> All Rights Reserved.
          {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
          &nbsp; Designed by <a href="https://cybronical.com/"> Cybronical India Pvt. Ltd.</a>
        </p>
      </div>
      {/* <div className="col-lg-6 text-center text-md-right">
        <ul className="nav d-inline-flex">
          <li className="nav-item">
            <a className="nav-link text-white py-0" >
              Privacy
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white py-0" >
              Terms
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white py-0" >
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white py-0" >
              Help
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <BackToTop/>
</>

    )

}

export default Footer;