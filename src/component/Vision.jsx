import React from 'react'

const Vision = () => {
  return (
    <div className="container py-5">
  {/* For demo purpose */}
  <div className="row mb-5">
    <div className="col-lg-8 text-white py-4 text-center mx-auto">
      <h1 className="display-6">Our Vision, Mission and Values</h1>
      
    </div>
  </div>
  {/* End */}
  <div className="p-5 bg-white rounded shadow mb-5">
    {/* Rounded tabs */}
    <ul
      id="myTab"
      role="tablist"
      className="nav nav-tabs nav-pills flex-column flex-sm-row text-center bg-light border-0 rounded-nav"
    >
      <li className="nav-item flex-sm-fill">
        <a
          id="home-tab"
          data-toggle="tab"
          href="#home"
          role="tab"
          aria-controls="home"
          aria-selected="true"
          className="nav-link border-0 text-uppercase font-weight-bold active"
        >
          Vision
        </a>
      </li>
      <li className="nav-item flex-sm-fill">
        <a
          id="profile-tab"
          data-toggle="tab"
          href="#profile"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
          className="nav-link border-0 text-uppercase font-weight-bold"
        >
          Mission
        </a>
      </li>
      <li className="nav-item flex-sm-fill">
        <a
          id="contact-tab"
          data-toggle="tab"
          href="#contact"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
          className="nav-link border-0 text-uppercase font-weight-bold"
        >
          Values
        </a>
      </li>
    </ul>
    <div id="myTabContent" className="tab-content">
      <div
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
        className="tab-pane fade px-4 py-5 show active"
      >
        <h5 className='my-3 text-center'>Navigating Excellence in Logistics</h5>
        <p className="text-muted text-center">
        At Logistos, we envision a world where logistics transcends boundaries, propelling businesses toward unparalleled success. Our vision is to redefine industry standards by seamlessly connecting global commerce through innovative solutions. With unwavering commitment, we strive to be the catalyst that transforms challenges into opportunities, facilitating growth and prosperity for our clients. As we steer towards the future, we remain dedicated to fostering efficiency, sustainability, and seamless connectivity, ultimately shaping a logistics landscape that empowers businesses and enriches lives.
        </p>
        
      </div>
      <div
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
        className="tab-pane fade px-4 py-5"
      >
        <h5 className='my-3 text-center'>Empowering Journeys, Delivering Impact</h5>
        <p className="text-muted text-center">
        At Logistos, our mission is to revolutionize logistics by providing tailored solutions that empower businesses to thrive in an ever-evolving global landscape. We are committed to delivering more than just packages; we deliver value, reliability, and trust. By embracing innovation, sustainability, and customer-centricity, we aim to simplify complex supply chains, enhance operational efficiency, and create lasting partnerships. Through every mile and challenge, our mission is to inspire growth, elevate industries, and leave a positive impact on the world of logistics.
        </p>
       
      </div>
      <div
        id="contact"
        role="tabpanel"
        aria-labelledby="contact-tab"
        className="tab-pane fade px-4 py-5"
      >
        <h5 className='my-3 text-center'> Guiding Principles for Excellence</h5>
        <p className="text-muted text-center">
        At Logistos, our values are the foundation of our mission. We uphold innovation, seeking new pathways to optimize logistics while reducing environmental impact. Customer-centricity drives us to exceed expectations, fostering long-lasting partnerships. We value integrity, ensuring transparency, honesty, and ethical practices in all interactions. Collaboration fuels our journey, as we work hand in hand with clients, partners, and employees to create a unified logistics ecosystem. Embracing diversity and inclusion, we celebrate differences and harness collective strengths. As we navigate the future, these values guide us, ensuring excellence in every step we take.
        </p>
        
      </div>
    </div>
    {/* End rounded tabs */}
  </div>
 
</div>

    )
}

export default Vision
