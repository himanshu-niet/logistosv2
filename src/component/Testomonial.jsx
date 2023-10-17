
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

const Testimonial=()=>{
    const options = {
        center: true,
    loop:true,      
        margin: 30,
        responsiveClass: true,
       
        dots: true,
        autoplay: true,
        nav:true,
        
        smartSpeed: 1500,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        },
    };
    return(
        <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center pb-2">
            <h4 className="text-primary text-uppercase font-weight-bold">
              Reviews
            </h4>
            <h1 className="mb-4 ">Our Clients Say</h1>
          </div>
         <OwlCarousel {...options} >  
        <div className="position-relative bg-secondary p-4">
          <i
            className="fa fa-3x fa-quote-right text-primary position-absolute"
            style={{ top: "-6px", right: 0 }}
          />
          <div className="d-flex align-items-center mb-3">
            <img
              className="img-fluid rounded-circle"
              src="img/testimonial-1.jpg"
              style={{ width: 60, height: 60 }}
              alt=""
            />
            <div className="ml-3">
              <h6 className="font-weight-semi-bold m-0">Vineet Sharma</h6>
              <small>- Operations Manager</small>
            </div>
          </div>
          <p className="m-0">
            Logistos has transformed the way we handle logistics. Their attention to detail and efficient processes have optimized our supply chain, allowing us to focus on growing our business. A truly reliable partner.
          </p>
        </div>
        <div className="position-relative bg-secondary p-4">
          <i
            className="fa fa-3x fa-quote-right text-primary position-absolute"
            style={{ top: "-6px", right: 0 }}
          />
          <div className="d-flex align-items-center mb-3">
            <img
              className="img-fluid rounded-circle"
              src="img/testimonial-2.jpg"
              style={{ width: 60, height: 60 }}
              alt=""
            />
            <div className="ml-3">
              <h6 className="font-weight-semi-bold m-0">Rajendra Pandey</h6>
              <small>-  E-commerce Director</small>
            </div>
          </div>
          <p className="m-0">
            
          Impressed by Logistos' commitment to excellence. Their personalized approach and seamless solutions have elevated our distribution network, ensuring timely deliveries and satisfied customers.
                                
          </p>
        </div>
        <div className="position-relative bg-secondary p-4">
          <i
            className="fa fa-3x fa-quote-right text-primary position-absolute"
            style={{ top: "-6px", right: 0 }}
          />
          <div className="d-flex align-items-center mb-3">
            <img
              className="img-fluid rounded-circle"
              src="img/testimonial-3.jpg"
              style={{ width: 60, height: 60 }}
              alt=""
            />
            <div className="ml-3">
              <h6 className="font-weight-semi-bold m-0">Mr Subhash Vyas</h6>
              <small>- Supply Chain Manager</small>
            </div>
          </div>
          <p className="m-0">
            
          Logistos delivers beyond expectations. Their expertise in warehousing and global shipping has expanded our market reach and improved order fulfillment. An invaluable asset to our team.
                                
          </p>
        </div>
      </OwlCarousel> 
        </div>
      </div>
        
    )
}

export default Testimonial;