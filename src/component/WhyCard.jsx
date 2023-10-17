import React from 'react'

const WhyCard = ({title,img,desc}) => {
  return (

    <>

<div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <div className="card">
            <img
              className="card-img"
              src={img}
              alt="img"
            />
            
            <div className="card-body why">
              <h4 className="card-title">{title}</h4>
              
              <p className="mt-2">
              {desc}   </p>
            

              {/* <a href="#" className="btn btn-info">
                Read Recipe
              </a> */}
            </div>
            
          </div>
        </div>
  
  </>
  )
}

export default WhyCard
