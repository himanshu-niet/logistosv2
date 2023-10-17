import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import Header from '../component/Header';
const AdminLogin=()=>{

  

    return(


      <>
      <Header active={6}/>
      <div className="loginPage">
     
     <div className='row'>
<div className='col-10 col-md-5  mx-auto'>
<div className="form-container sign-in-container">
          <form>
            <h1 className='my-3'>Admin - Sign in</h1>
            
            <input type="text" placeholder="Email or Phone Number" />
            <input type="password" placeholder="Password" />
           <div style={{display:'flex',justifyContent:'flex-end',width:'100%'}}>
          <Link to="#"> <span className='text-dark '>Forgot password?</span></Link>
           </div>
            <button>Sign In</button>
            
          
          </form>
        </div>
</div>
     </div>
      
    </div>
    
<Footer/>
</>
    )
}


export default AdminLogin;