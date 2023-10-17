import AboutCom from "../component/AboutCom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Testimonial from "../component/Testomonial";

const About=()=>{
    return(
        <>
        <Header active={2}/>

<AboutCom/>

 
        <Footer/>
        </>
    )
}

export default About;