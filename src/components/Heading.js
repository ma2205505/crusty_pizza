// import React from 'react'
import Button from './Button'
import Navbar from './Navbar'
import Aos from 'aos';
import "aos/dist/aos.css"
import React, { useEffect } from 'react'

const Heading = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])
  return (
    <div className="bg9">
      {/* <Navbar/> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div data-aos="fade-right" className="content2">
              <h2 className='text-danger'>Pizza Delivery</h2>
              <h1>CRUSTY <br />PIZZA</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio commodi ab quod officia? Possimus, veniam
                delectus asperiores deleniti modi rem eius harum, odio
                porro nostrum officiis quos minima sint</p>
              <Button
                read={"Delivery Now"}
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="pic">
              {/* <img className='pic1'src="https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/pizza6.png" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Heading
