import React from 'react'
import { FcCurrencyExchange } from "react-icons/fc";

function OnlinePayment() {
    return (
        <>
            <div className="container mt-5 mb-5 pt-5 ">
                <div className="row">
                <div className="container col shadow-lg m-2 p-5">
                       <div className='mb-5'>
                        <h3 className='text-success'><FcCurrencyExchange size={100}/> Payment For Student</h3>
                       </div>
                       <div>
                        <h3 className='text-primary'>Tula's International School</h3>
                        <p className='pb-5'>Dhoolkot, P.O - Selaqui Chakrata Road, Dehradun 248011 Uttarakhand, India.</p>
                        <h5 className='mt-5 text-primary'><strong>Terms & Conditions:</strong></h5>
                        <p>You agree to share information entered on this page with Tula's International School (owner of this page) and Razorpay, adhering to applicable laws.</p>
                       </div>
                 </div>
                 <div className="container col shadow-lg m-2">
                        <form class="row g-1 p-5">
                            <h3 className='text-primary'>Payment Details</h3>
                                <label htmlFor="">Name</label>
                                <input type="password" class="form-control" id="inputPassword4" />
                            
                                <label htmlFor="">Email</label>
                                <input type="password" class="form-control" id="inputPassword4" />
                           
                            
                                <label htmlFor="">D/O/B</label>
                                <input type="date" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                            
                           
                                <label htmlFor="">Phone</label>
                                <input type="number" class="form-control" id="inputAddress2" />

                                <label htmlFor="">Class</label>
                                <select id="inputState" class="form-select">
                                    <option selected>Choose...</option>
                                    <option>10th</option>
                                    <option>12th</option>
                                </select>
                          
                                <label htmlFor="">Address</label>
                                <input type="text" class="form-control" id="inputCity" />
                                
                                <div className="d-flex justify-content-end mt-3">
                                <button type="submit" class="btn btn-info col-4 rounded-0 "><strong>Pay &#8377; 0.00</strong></button>
                                </div>
                            
                        </form>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default OnlinePayment