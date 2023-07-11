import React from 'react'
import Button from './Button'

function Welcome({about,welcome,crusty,Lorem}) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="content3">
                            <h2>{about}</h2>
                            <h1>{welcome}</h1>
                            <h1>{crusty}</h1>
                            <p>{Lorem}</p>
                            <Button
                                read={"Read More"}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <img className="img2" src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/maestropizzini-aboutus-bg-1.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Welcome
