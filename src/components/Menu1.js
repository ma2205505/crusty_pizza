import React from 'react'

function Menu1({ image, Des, title }) {
    return (
        <>
            {/* <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="menu2">
                                <h2>Pizza Menu</h2>
                                <h1>WELCOME TO</h1>
                                <h1>CRUSTY PIZZA</h1>
                                <hr />
                            </div>

                        </div>
                    </div>
                </div> */}
                <div classname="row row-cols-1 row-cols-md-3 g-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="card">
                                    <img src={image} className='img-fluid w-50 img' alt="" />
                                    <div className="dec">
                                        {Des}
                                    </div>
                                    <div className="tittle"> {title}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            )
}

            export default Menu1
