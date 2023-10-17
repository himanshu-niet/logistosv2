import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import Vision from './Vision';


const AboutCom=()=>{

  const options = {
    center: true,
loop:true,      
    margin: 30,
    responsiveClass: true,
   
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
        <>
 
  {/* About Start */}
  <div className="container-fluid py-5">
    <div className="container">

    <h1 className="text-primary text-center text-uppercase font-weight-bold mb-5">
          About us

          </h1>
      <div className="row align-items-center">
        <div className="col-lg-5 pb-4 pb-lg-0">
          <img className="img-fluid w-100" src="img/about2.jpg" alt="" />
         
        </div>
        <div className="col-lg-7">
          
         
          <p className=" mb-4 ">
          
          <span className="text-dark font-weight-bold "> Logistos, </span>  your trusted partner in seamless logistics solutions. We are a forward-thinking logistics company dedicated to simplifying complex supply chain challenges and delivering exceptional results for businesses worldwide.
          </p >
          <p className=" mb-4 ">
          <span className="text-dark font-weight-bold "> At Logistos, our mission is simple yet profound: </span> to redefine logistics through innovation, reliability, and a client-centric approach. We strive to become the driving force behind your supply chain success, enabling you to focus on what you do best while we handle the intricacies of transportation, warehousing, and distribution.
          </p >
         
        </div>
      </div>
    </div>
   
  </div>
  {/* About End */}


  <div className="container-fluid bg-secondary my-5">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-5">
        <img className="img-fluid w-100" src="img/ashu.jpg" alt="" />
      </div>
      <div className="col-lg-7 py-5 py-lg-0">
      <h1 className="mt-2">          
Ashutosh Mohapatra</h1>
        <h6 className="text-primary text-uppercase font-weight-bold mb-4">   
        Founder & CEO
        </h6>
        

        
        

        <ul className="list-inline"  style={{display:'flex', flexDirection:'column',gap:'10px'}}>
          <li  style={{ display: 'flex' }}>
          <i className="far fa-dot-circle text-primary mr-3 mt-2" />
            <p >
               <span className="text-dark">Mr. Asuttosh Mohapatra</span> is a management professional and holds a Master degree in Business Management from the prestigious ICFAI Hyderabad. He has a rich experience of 14+ years in Logistics & Telecommunications industry in various leadership roles.

            </p>
          </li>
          <li  style={{ display: 'flex' }}>
          <i className="far fa-dot-circle text-primary mr-3 mt-2" />
            <p>
            
               He dreamt of stepping into Logistics Business with a new vision and Brand “LOGISTOS”technology Pvt LTD to change the logistic industry through innovation and technology driven.

            </p>
          </li>
          <li  style={{ display: 'flex' }}>
          <i className="far fa-dot-circle text-primary mr-3 mt-2" />
            <p>
            
               His Vision is to enable & enhance  the transport industry & Provide the best in class experience to customers with new technology which would help our small transport business houses, thus reducing customer's pain in this competitive environment.
              
              
            </p>
          </li>
        </ul>
        
      </div>
    </div>
  </div>
</div>



<div className="py-5 team3 bg-light">
  <div className="container">
    <div className="row justify-content-center mb-4">
    <div className="col-md-12 text-center">
        
        <h1 className="text-dark mb-3 text-uppercase font-weight-bold">
        Experienced &amp; Professional Team
              </h1>
        <h6 className="text-primary mb-3">
          You can relay on our amazing features list and also our customer
          services will be great experience for you without doubt and in no-time
        </h6>
      </div>
    </div>
    <div className="row text-center">
      {/* column  */}
      <div className='col-lg-2'></div>
      <div className="col-lg-4 mb-4">
        {/* Row */}
        <div className="row gap-20">
          <div className="col-8 col-md-10 pro-pic mx-auto">
            <img
              src="img/user6.png"
              alt="wrapkit"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-md-12 text-center">
            <div className="pt-2">
            <h5 className="mt-4 font-weight-bold mb-0 text-dark">Amit Rajput</h5>
              <h6 className=" mb-3 mt-1 text-primary ">Co- founder & COO</h6>
              <p>
              Embark on a journey with a distinguished professional. A commerce graduate and MBA from IIMT, boasting over two decades of expertise in Sales, Distribution, Operations, and Man Management. Having spearheaded endeavors at telecom giants like Airtel, Tata, and Reliance JIO, their unparalleled business acumen stands as an inspiration to all.
            
              </p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#" className="text-decoration-none d-block px-1">
                    <i className="icon-social-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-decoration-none d-block px-1">
                    <i className="icon-social-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-decoration-none d-block px-1">
                    <i className="icon-social-instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-decoration-none d-block px-1">
                    <i className="icon-social-behance" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Row */}
      </div>
      
      {/* <div className="col-lg-4 mb-4">
     
        <div className="row">
          <div className="col-8 col-md-10 pro-pic mx-auto">
            <img
              src="img/user9.png"
              alt="wrapkit"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-md-12 text-center">
            <div className="pt-2">
            <h5 className="mt-4 font-weight-bold mb-0 text-dark">Jitumani Bhuyan</h5>
              <h6 className=" mb-3 mt-1 text-primary ">Director- National Head for Business devlopment</h6>
       
              <p>
              Boasting a remarkable 14-year journey in business development, sales, and marketing, their prowess shines in Logistics, E-Commerce, and Telecommunications. They've contributed their expertise to renowned companies such as Tata Sky, Realme, Lava Mobile, Rivigo, and Delhivery Ltd, leaving an indelible mark.
              </p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#" className="text-decoration-none d-block px-1">
                    <i className="icon-social-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-decoration-none d-block px-1">
                    <i className="icon-social-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-decoration-none d-block px-1">
                    <i className="icon-social-instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-decoration-none d-block px-1">
                    <i className="icon-social-behance" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
     
      </div> */}
      
      <div className="col-lg-4 mb-4">
        {/* Row */}
        <div className="row">
          <div className="col-8 col-md-10 pro-pic mx-auto">
            <img
              src="img/user5.png"
              alt="wrapkit"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-md-12 text-center">
            <div className="pt-2">
          
              <h5 className="mt-4 font-weight-bold mb-0 text-dark">Sudheesh Asthana</h5>
              <h6 className="mb-3 mt-1 text-primary">Regional Manager Sales & Operations - ZBH South India</h6>
              <p>
              A 30-year veteran in Indian Logistics. Postgraduate M.A. and Sales & Marketing Graduate. Led as National Head (Transportation), Regional Sales/Operations Manager & Sales Head at Gati Ltd., Future Supply Chains, V Trans India, Patanjali Parivahan Pvt Ltd, and V Xpress.
              </p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#" className="text-decoration-none d-block px-1">
                    <i className="icon-social-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-decoration-none d-block px-1">
                    <i className="icon-social-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-decoration-none d-block px-1">
                    <i className="icon-social-instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-decoration-none d-block px-1">
                    <i className="icon-social-behance" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Row */}
      </div>
      {/* column  */}
    </div>
  </div>
</div>


<Vision/>




<div className="container-fluid  my-5">
  <div className="container">
    <div className="row ">
    
      <div className="col-lg-12 py-5 py-lg-0">
      <h1 className="mt-2 mb-5">          
      Key Points Of Logistos.</h1>
       
        
        

        <ul className="list-inline"  style={{display:'flex', flexDirection:'column',gap:'10px'}}>
          <li  style={{ display: 'flex' }}>
          <i className="far fa-dot-circle text-primary mr-3" />
            <p >
              <span className="text-primary font-weight-bold"> Expertise: </span> With years of industry experience, our team of seasoned logistics professionals possesses the knowledge and insights needed to optimize your supply chain and maximize efficiency.
            </p>
          </li>
          <li  style={{ display: 'flex' }}>
          <i className="far fa-dot-circle text-primary mr-3" />
            <p >
              <span className="text-primary font-weight-bold"> Values: </span>Providing a significant 15-25% reduction in costs directly translates to tangible financial savings for your customers.
            </p>
          </li>

          <li  style={{ display: 'flex' }}>
          <i className="far fa-dot-circle text-primary mr-3" />
            <p >
              <span className="text-primary font-weight-bold"> Tailored Solutions: </span> We understand that every business is unique. That's why we work closely with you to develop customized logistics solutions that align with your specific requirements and objectives. </p>
          </li>


          <li  style={{ display: 'flex' }}>
          <i className="far fa-dot-circle text-primary mr-3" />
            <p >
              <span className="text-primary font-weight-bold"> Cutting-Edge Technology: </span> Embracing the latest technological advancements, we leverage state-of-the-art tools to track, manage, and optimize your shipments in real-time, ensuring timely and accurate deliveries.
          </p></li>


          <li  style={{ display: 'flex' }}>
          <i className="far fa-dot-circle text-primary mr-3" />
            <p >
<span className="text-primary font-weight-bold"> Global Network: </span> Through a robust global network of partners, carriers, and agents, we offer comprehensive logistics services that span the globe. No matter where your business operates, we've got you covered.
</p>   </li>


          <li  style={{ display: 'flex' }}>
          <i className="far fa-dot-circle text-primary mr-3" />
            <p >
              <span className="text-primary font-weight-bold"> Reliability:  </span> Our commitment to reliability is unwavering. You can count on us to meet deadlines, mitigate risks, and adapt swiftly to unforeseen challenges, providing you with peace of mind.
            </p>
          </li>


          <li  style={{ display: 'flex' }}>
          <i className="far fa-dot-circle text-primary mr-3" />
            <p >
              <span className="text-primary font-weight-bold"> Sustainability: </span>We recognize our responsibility towards the environment and prioritize eco-friendly practices whenever possible. Our sustainable initiatives contribute to a greener future for all.
            </p>
          </li>
        
        </ul>
        
      </div>
    </div>
  </div>
</div>




{/* <div className="py-5 ">
  <div className="container">
    <div className="row justify-content-center mb-4">
      
    </div>
   




  <OwlCarousel {...options} >  
    <div>
    <div className="row">
          <div className="col-6 col-md-8 mx-auto">
            <img
              src="img/user6.jpg"
              alt="wrapkit"
              className="img-fluid rounded-circle border border-dark"
            />
          </div>
          <div className="col-md-12 text-center">
            <div className="pt-2">
              
              <p><h5 className="mt-4 font-weight-bold mb-0 text-dark">Amit Rajput</h5>
              <h6 className=" mb-3 mt-1 text-primary ">Co- founder & COO</h6>
              Commerce graduate and MBA from IIMT With a 20+ years of Rich experience in Sales, Distribution, Operations and Man management. Worked with Telecom giants like Airtel, Tata, Reliance JIO, has garnered business acumen that is admired by all.
              </p>
             
            </div>
          </div>
        </div>
    </div>

    <div>
    <div className="row">
          <div className="col-6 col-md-8 mx-auto">
            <img
              src="img/user9.jpg"
              alt="wrapkit"
              className="img-fluid rounded-circle border border-dark"
            />
          </div>
          <div className="col-md-12 text-center">
          <div className="pt-2">
              <h5 className="mt-4 font-weight-bold mb-0 text-dark">Jitumani Bhuyan</h5>
              <h6 className=" mb-3 mt-1 text-primary ">Director- National Head for Business devlopment</h6>
              <p>
              14 Years experience in business development, sales & marketing.. Expertise in Logistics & E-Commerce, Telecommunication Industry. Worked in companies like Tata Sky, Realme & Lava Mobile, Rivigo & Delhivery Ltd etc. </p>
             
            </div>
          </div>
        </div>
    </div>

    <div>
    <div className="row">
          <div className="col-6 col-md-8 mx-auto">
            <img
              src="img/user5.jpg"
              alt="wrapkit"
              className="img-fluid rounded-circle border border-dark"
            />
          </div>
          <div className="col-md-12 text-center">
          <div className="pt-2">
              <h5 className="mt-4 font-weight-bold mb-0 text-dark">Sudheesh Asthana</h5>
              <h6 className=" mb-3 mt-1 text-primary ">Regional Manager Sales & Operations</h6>
              <p>
              Sudheesh Asthana is an stalwart in the Indian Logistics Industry.He is a Post graduate  M.A. and a Graduate in Sales & Marketing Management.

He has a Logistics work experience of about 30 years.

Having worked in senior level management positions as National Head Transportation ,as Regional Manager Sales & Operations , as Sales Head with different Industry Pioneers namely Gati Ltd.( Gati- KWE), Future Supply Chains, V Trans India, Patanjali Parivahan Pvt Ltd and V Xpress.
 
 </p> 
             
            </div>
          </div>
        </div>
    </div>
    </OwlCarousel> 
  </div>
</div> */}


        </>
    )
}

export default AboutCom;