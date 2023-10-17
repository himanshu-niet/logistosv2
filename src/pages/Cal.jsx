import React, { useState } from 'react'
import DomesticCal from './DomesticCal';
import InterCal from './InterCal';


const Cal = () => {


    const [cal, setCal] = useState(true);



    return (
        <>

            <div className="jumbotron jumbotron-fluid" style={{background:'#0c1d39'}}>
                <h2 className='text-white text-center mb-5'>Freight Estimator</h2>
                <div className="page-wrapper bg-gra-02 font-poppins">
                    <div className="wrapper wrapper--w680">
                        <div className="card card-4">
                            <div className="card-body ">
                                <div className='mb-5'>
                                    <div>
                                    <h2 style={{ display: 'inline' }} role="button" className={`cal title mx-3 ${cal ? 'active_calculator' : ''}`} onClick={() => setCal(true)}>Domestic </h2>
                                    <h2 style={{ display: 'inline' }} role="button" className={`cal title ${cal ? '' : 'active_calculator'}`} onClick={() => setCal(false)}>International </h2>

                                    </div>
                                    {cal ? <button style={{ float: 'right', fontSize: '16px' }} className='bg-primary py-2 px-3 text-white rounded font-weight-bold' >Plans</button> : <></>}


                                </div>



                                {cal ? <DomesticCal /> : <InterCal />}




                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Cal;
