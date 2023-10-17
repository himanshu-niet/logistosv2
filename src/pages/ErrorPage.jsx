import { useRouteError } from "react-router-dom";

const ErrorPage=()=>{

    const error = useRouteError();
    console.error(error);

    return(
      
<>
    

<div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>404</h1>
			</div>
			<h2>We are sorry, Page not found!</h2>
			<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
			<i>{error.statusText || error.message}</i>
            <br></br>
            <a href="/">Back To Homepage</a>
		</div>
	</div>


</>

    )
}



export default ErrorPage;