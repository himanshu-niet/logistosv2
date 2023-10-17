import React from 'react'

const Cards = () => {
    return (
        <div className=''>
            <div className="blog-card">
                <div className="meta">
                    <div
                        className="photo"
                        style={{
                            backgroundImage:
                                "url(./img/img11.jpeg)"
                        }}
                    />

                </div>
                <div className="description  " style={{ display: 'flex', flexDirection: 'column' }}>
                    <h1 className='my-2'>Punctual Shipment</h1>
                    <small className="text-muted cat my-2">
                        A Crucial Measure for Achieving eCommerce Excellence

                    </small>
                    <p>
                        In the rapid eCommerce landscape, punctual delivery is vital for customer contentment and business triumph. With the growing shift to online shopping, the demand for swift and dependable deliveries has surged. Surpassing these expectations is key to cultivating trust, nurturing loyalty, and promoting repeat business.

                    </p>
                   
                </div>
            </div>
            <div className="blog-card alt">
                <div className="meta">
                    <div
                        className="photo"
                        style={{
                            backgroundImage:
                                "url(./img/img13.jpeg)"
                        }}
                    />

                </div>
                <div className="description  " style={{ display: 'flex', flexDirection: 'column' }}>
                    <h1 className='my-2'>Expansion Catalyst</h1>
                    <small className="text-muted cat my-2">
                    The Impact of Expedited Shipping on Business Growth and Scaling

                    </small>
                    <p>
                    In the contemporary, highly competitive business environment, rapid and effective shipping is essential for business success and expansion. The growth of e-commerce and rising customer demands have made swift shipping a key driver of customer satisfaction, retention, and overall business growth.
                    </p>
                   
                </div>
            </div>
            <div className="blog-card">
                <div className="meta">
                    <div
                        className="photo"
                        style={{
                            backgroundImage:
                                "url(./img/img12.jpeg)"
                        }}
                    />

                </div>
                <div className="description  " style={{ display: 'flex', flexDirection: 'column' }}>
                    <h1 className='my-2'>Deciphering RTO</h1>
                    <small className="text-muted cat my-2">
                    Strategies to Minimize Return to Origin

                    </small>
                    <p>
                    Product returns, known as 'Return to Origin' (RTO), are common in e-commerce. Managing them is vital for revenue as India's e-commerce sector grows. E-commerce companies optimize operations to minimize RTO, including address verification, real-time tracking, and clear return policies.
                    </p>
                   
                </div>
            </div>




        </div>

    )
}

export default Cards
