import { Link } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
const Register=()=>{
    return(
       <>
        <Header active={6}/>
        <div className="loginPage">
     
     <div className='row'>
<div className='col-10 col-md-5  mx-auto'>
<div className="form-container sign-up-container">
          <form >
            <h1>Create Account</h1>
            <div className="social-container">
              <a className="social">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="social">
                <i className="fab fa-google-plus-g" />
              </a>
         
            </div>
            <span>or use your email & phone number for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Phone Number" />
            <input type="password" placeholder="Password" />
            <div>
            <p>   By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
            </div>
        
            <button>Sign Up</button>

            <h6 className='text-dark font-weight-bold mt-3'>Already have an account?<Link to="/signin">&nbsp; SignIn</Link></h6>
           
          </form>
        </div>
</div>
     </div>
      
    </div>
    

     
    <Footer/>
    </>
    


    )
}


export default Register;