import React from 'react'
import contactUs from '../components/pics/contact us.png'
import Button from './Button'

function Contact() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img className="imgg" src={contactUs} alt="" />
          </div>
          <div className="col-lg-6">
            <form action="" className='form2'>
              <div className="form">
                <h1>Contact Us</h1>
                <h1>Crusty Pizza</h1>
              </div>
              <div className="row">
                <div className="col-lg-6"> <input className='inp w-100' placeholder='First Name' type="text" name="" id="" /> </div>
                <div className="col-lg-6 "> <input className='inp w-100' placeholder='Last Name' type="text" name="" id="" /></div>
              </div>
              <div className="row py-2">
                <div className="col-lg-12">
                  <input className='inp w-100' placeholder='Contact Number' type="text" name="" id="" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6"> <input className='inp w-100' placeholder='E-mail Address' type="text" name="" id="" /> </div>
                <div className="col-lg-6 "> <input className='inp w-100' placeholder='Address' type="text" name="" id="" /></div>
              </div>
              <div className="row py-2">
                <div className="col-lg-12">
                  <textarea className='inp w-100' placeholder='Please Enter the Message' name="" id="" cols="30" rows="5"></textarea>
                </div>
              </div>
              <Button className="quick"
                read={"Sumbit"}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
