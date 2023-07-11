import React from 'react'
import Button from './Button'

function Form() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className='set5'>
                            <img className="img5" src="https://t4.ftcdn.net/jpg/02/52/32/43/360_F_252324359_OeI80GJXWtqZ9QNFNXpXgclOXaF0Yn7m.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form">
                            <h1>ORDER A</h1>
                            <h1>PIZZA NOW</h1>
                            <form className='form1' action="">
                                <div className="row">
                                    <div className="col-lg-6"> <input className='inp w-100' placeholder='First Name' type="text" name="" id="" /> </div>
                                    <div className="col-lg-6 "> <input className='inp w-100' placeholder='Last Name' type="text" name="" id="" /></div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-lg-12">
                                        <input className='inp w-100' placeholder='Enter Street Address' type="text" name="" id="" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6"> <input className='inp w-100' placeholder='Appartment/Room' type="text" name="" id="" /> </div>
                                    <div className="col-lg-6 "> <input className='inp w-100' placeholder='Phone Number' type="text" name="" id="" /></div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-lg-12">
                                        <select className='inp w-100' placeholder='Pizza Type' name="" id="">
                                            <option value="">Pizza Quantity</option>
                                            <option value="">Pizza 1</option>
                                            <option value="">Pizza 2</option>
                                            <option value="">Pizza 3</option>
                                            <option value="">Pizza 4</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6"> <input className='inp w-100' placeholder='Enter Number' type="text" name="" id="" /> </div>
                                    <div className="col-lg-6 ">
                                        <select className='inp w-100' placeholder='Pizza Type' name="" id="">
                                            <option value="">Size</option>
                                            <option value="">Small</option>
                                            <option value="">Medium</option>
                                            <option value="">Large</option>
                                            <option value="">X-Large</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-lg-12">
                                        <select className='inp w-100' placeholder='Pizza Flavours' name="" id="">
                                            <option value="">Pizza Flavours</option>
                                            <option value="">Tikka Boti</option>
                                            <option value="">Fajeeta</option>
                                            <option value="">B.B.Q</option>
                                            <option value="">Special Flavour</option>
                                        </select>
                                    </div>
                                </div>
                                <Button className="quick"
                                    read={"Quick Delivery"}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
