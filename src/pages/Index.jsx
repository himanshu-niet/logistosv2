
import Footer from "../component/Footer";
import Header from "../component/Header";
import Testimonial from "../component/Testomonial";
import Cal from "./Cal";

import ProductIndex from "./Products/Index";
import Preloader from "../component/PreLoader";
import { useEffect, useState } from "react";
import Why from "../component/Why";
import Cards from "./Cards";

const Index = () => {


  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1400);
  }, []);

  return (
    <>

{loading?<Preloader/>:  

    
      <>
      <Header active={1} />
        <div className="jumbotron jumbotron-fluid mb-5">
          <div className="container py-5">
          <div className="row">
          <div className="col-12 col-md-6 col-lg-7">
           <h1 className="text-primary mb-4">Bulk Shipments &amp; Small Size Shipments</h1>
            <h1 className="text-white display-3 mb-5 text-uppercase">Logistos</h1>
            <div className="mx-auto" style={{ width: "100%", maxWidth: 600 }}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-light"
                  style={{ padding: 30 }}
                  placeholder="Tracking Id"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary px-3">Track &amp; Trace</button>
                </div>
              </div>
            </div>
           </div>
           <div className="col-12 col-md-6 col-lg-5">
           <div className="booking-form">
  <form>
    <div className="form-group">
      <input
        className="form-control"
        type="text"
        placeholder="Full Name"
      />
    </div>
    <div className="form-group">
      <input
        className="form-control"
        type="text"
        placeholder="Email"
      />
    </div>
   
    <div className="form-group">
      <input
        className="form-control"
        type="text"
        placeholder="Phone Number"
      />
    </div>
    <div className="row">
      <div className="col-sm-6">
        <div className="form-group">
        <input type="checkbox" name="checkbox" />
          <p className="form-label">Track My Parcel</p>

        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
        <input type="checkbox" name="checkbox" />
          <p className="form-label">Ship Your Parcel</p>

        </div>
      </div>
    </div>
    <div className="form-group mb-1">

    <input type="checkbox" name="checkbox" />

          <p className="form-label">Join Us - ( Become Franchise )</p>
        </div>

        <div className="form-group" >
      
          <p className="form-label" style={{fontSize:'10px'}}>By submitting this form, I willingly provide my explicit consent to Logistos to contact me using the contact information I have provided. I understand that this consent allows Logistos to reach out to me regarding the subject matter indicated in the form and related services.</p>

        </div>
  
    <div className="form-btn">
      <button className="submit-btn" style={{width:'100%'}}>Get Started</button>
    </div>
  </form>
</div>

           </div>
          </div>

          </div>
        </div>
        {/* Header End */}
        {/* About Start */}
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 pb-4 pb-lg-0">
                <img className="img-fluid w-100" src="img/about.jpg" alt="" />
                <div className="bg-primary text-dark text-center p-4">
                  <h3 className="m-0">Years Of Experience</h3>
                </div>
              </div>
              <div className="col-lg-7 py-5  py-lg-0">
                <h6 className="ml-3 text-primary text-uppercase font-weight-bold">
                  A TRUSTED GROWTH PARTNER
                </h6>
                <h1 className=" ml-3 mb-5 my-3"> Lakhs of E-Commerce businesses choose
                  Logistos to streamline their customer
                  Journey from shipping to returns and beyond.</h1>

                <div className=" row">
                  <div className="col-sm-4">
                    <h1 className=" ml-3 text-primary mb-2" data-toggle="counter-up">
                      31000+
                    </h1>
                    <h6 className=" ml-3 font-weight-bold mb-4">Pincodes served</h6>
                  </div>
                  <div className=" ml-3 col-sm-4">
                    <h1 className="text-primary mb-2" data-toggle="counter-up">
                      15 to 40%
                    </h1>
                    <h6 className=" ml-3 font-weight-bold mb-4">Reduction in Cost</h6>
                  </div>

                </div>
              </div>
            </div>
          </div>
          {/* Video Modal */}

        </div>
        {/* About End */}




        {/* Services Start */}
        <div className="container-fluid py-5">
          <div className="container">
            <div className="text-center pb-2">
              <h1 className="text-dark text-uppercase font-weight-bold my-5">
                Why Logistos ?
              </h1>
            </div>
            <Why/>
          </div>
        </div>
        {/* Services End */}




<div id="cal">
<Cal/>
</div>
   <ProductIndex/>
        {/* Testimonial Start */}



        <div className="container-fluid py-5 main_blog">
          <div className="container">
            <div className="text-center pb-2">
              <h1 className="text-dark text-uppercase font-weight-bold mt-3 mb-5">
              Recommended Cards
              </h1>
            </div>
            <Cards/>
          </div>
        </div>



        <Testimonial />
        {/* Testimonial End */}

        <Footer />
      </>


  }

    </>

  )

}

export default Index;