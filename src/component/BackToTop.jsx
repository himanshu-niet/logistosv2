import React, {useState} from 'react';


const BackToTop = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	

<span  className="btn btn-lg btn-primary back-to-top" onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none'}}>
    <i className="fa fa-angle-double-up" />

  </span>
	
	
);
}

export default BackToTop;
