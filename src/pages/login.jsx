import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import Header from '../component/Header';
const Login=()=>{

  

    return(


      <>
      <Header active={6}/>
      <div className="loginPage">
     
     <div className='row'>
<div className='col-10 col-md-5  mx-auto'>
<div className="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>
            <div className="social-container">
              <a  className="social cursor-pointer">
                <i className="fab fa-facebook-f" />
              </a>
              <a  className="social">
                <i className="fab fa-google-plus-g" />
              </a>
              
            </div>
            <span>Or Use Your Email & Password</span>
            <input type="text" placeholder="Email or Phone Number" />
            <input type="password" placeholder="Password" />
           <div style={{display:'flex',justifyContent:'flex-end',width:'100%'}}>
          <Link to="#"> <span className='text-dark '>Forgot password?</span></Link>
           </div>
            <button>Sign In</button>
            
           <h6 className='text-dark font-weight-bold mt-3'>Don't have an account?<Link to="/signup">&nbsp; SignUp </Link></h6>
           
          </form>
        </div>
</div>
     </div>
      
    </div>
    
<Footer/>
</>
    )
}


export default Login;