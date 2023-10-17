import Footer from "../component/Footer";
import Header from "../component/Header";

const Contact=()=>{
    return(
        <>
   <Header active={5}/>

  
  <div className="container-fluid py-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 pb-4 pb-lg-0">
          <div className="bg-primary text-dark text-center p-4">
            <h6 className="m-0">
            <svg className="icon_footer" style={{marginTop:'-3px'}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#fffff" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"/>
</svg>
              1202,Business Bay, Kamdhenu, Nerul Sector-1, Near Juinagar Railway Station, Navi-Mumbai 400-706.
            
            </h6>
          </div>
          <iframe
            style={{ width: "100%", height: 470 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.264137205009!2d73.01666827520468!3d19.052120882147616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c36c22646f5f%3A0xe2627436f4b34fa3!2sKamdhenu%20realities%20business%20bay!5e0!3m2!1sen!2sin!4v1692899273015!5m2!1sen!2sin"
            frameBorder={0}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
        <div className="col-lg-7">
          <h6 className="text-primary text-uppercase font-weight-bold">
            Contact Us
          </h6>
          <h1 className="mb-4">Contact For Any Queries</h1>
          <div className="contact-form bg-secondary" style={{ padding: 30 }}>
            <div id="success" />
            <form name="sentMessage" id="contactForm" noValidate="novalidate">
              <div className="control-group">
                <input
                  type="text"
                  className="form-control border-0 p-4"
                  id="name"
                  placeholder="Your Name"
                  required="required"
                  data-validation-required-message="Please enter your name"
                />
                <p className="help-block text-danger" />
              </div>
              <div className="control-group">
                <input
                  type="email"
                  className="form-control border-0 p-4"
                  id="email"
                  placeholder="Your Email"
                  required="required"
                  data-validation-required-message="Please enter your email"
                />
                <p className="help-block text-danger" />
              </div>
              <div className="control-group">
                <input
                  type="text"
                  className="form-control border-0 p-4"
                  id="subject"
                  placeholder="Subject"
                  required="required"
                  data-validation-required-message="Please enter a subject"
                />
                <p className="help-block text-danger" />
              </div>
              <div className="control-group">
                <textarea
                  className="form-control border-0 py-3 px-4"
                  rows={3}
                  id="message"
                  placeholder="Message"
                  required="required"
                  data-validation-required-message="Please enter your message"
                  defaultValue={""}
                />
                <p className="help-block text-danger" />
              </div>
              <div>
                <button
                  className="btn btn-primary py-3 px-4"
                  type="submit"
                  id="sendMessageButton"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
 <Footer/>
        </>
    )
}

export default Contact;