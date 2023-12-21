import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

const Galary=()=>{
  const options = {
    center: true,
loop:true,      
    margin: 30,
    responsiveClass: true,
   
    dots: true,
    autoplay: true,
    nav:false,
    
    smartSpeed: 1500,
    responsive: {
        0:{
            items:3
        },
        576:{
            items:4
        },
        768:{
            items:4
        },
        992:{
            items:5
        }
    },
};

    return(
      

        <div className="mt-5 mx-auto w-full max-w-4xl galary-logo">

        

        <div className=" ">

        <OwlCarousel {...options}>
        
        
        <div className="">
        <img src="./logos/expressbees-01.png"/>
        </div>

        <div className="">
     
        <img src="./logos/oxygen.png"/>
        </div>

        <div className="">
        <img src="./logos/ekart-01.png"/>
        </div>

        <div className="">
        <img src="./logos/Rivigo by mahindra-01.png"/>

        </div>


        <div className="">
        <img src="./logos/blue dart-01.png"/>

        </div>


        <div className="">
        <img src="./logos/Gati.png"/>

        </div>


        <div className="">
        <img src="./logos/Delhivery.png"/>
        
        </div>



        <div className="">
        <img src="./logos/DTDC-01.png"/>

        </div>


        <div className="">
        <img src="./logos/logistics.png"/>

        </div>


        <div className="">
        <img src="./logos/India_Post.png"/>

        </div>


        <div className="">
        <img src="./logos/Amazon.png"/>

        </div>


        <div className="">
        <img src="./logos/ecom express-01.png"/>

        </div>
        </OwlCarousel>
        </div>
      </div>
      
      

    )

}

export default Galary;