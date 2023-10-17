import Air from "./Air";
import B2b from "./B2b";
import B2c from "./B2c";
import Ftl from "./Ftl";
import Suply from "./Suply";
import Warehouse from "./Warehouse";

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 



function ProductIndex() {
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
  return (
   
<article className="col-md-12 mt-5" id="products">
<div className="text-center py-2">
           
            <h1 className="mb-4 ">Our Services</h1>
          </div>
<div className="cards-1 ">
  <div className="container">
    <div className="row">
      <OwlCarousel {...options}>  
        
        <div className="position-relative">
        <B2c />
        </div>

        <div className=" ">
     
        <B2b />
        </div>


        <div className="">
        <Ftl  />
        </div>



        <div className="">
        <Air />
        </div>


        <div className=" ">
        <Warehouse/>
          
        </div>


        {/* <div className="">
        <Suply/>
        </div> */}

      </OwlCarousel> 

    
    </div>
  </div>
</div>

</article>

          


  )
}

export default ProductIndex