import React from 'react'
import TeacherForm from './teacherForm'

function ContactUs() {
  return (
    <>
        <div className="container mt-5 mb-5 pt-5">
            <div className="row">
                <div className="col-lg-6">
                    <div className="container bg-danger p-5  text-white">
                        <h1>Our Address</h1>
                        <hr />
                        <h5>Tula's International School</h5>
                        <strong>VILL.DHOOLKOT, NEAR TULAS INSTITUTE SELAQUI NEAR MANDIR</strong>
                        <h6>Dehradun, Uttarakhand, 248197</h6>
                        <hr />
                        <h5>Tula’s Gurugram Corporate Office</h5>
                        <h6>Office No. 745, 7th floor, JMD Megapolis, Sector 48, Gurugram – 122018 (Haryana)</h6>
                    </div>
                </div>
                <div className="col-lg-6">
                <div className="container bg-success p-5  text-white">
                        <h1>Our Email</h1>
                        <hr />
                        <h5>info@tis.edu.in</h5>
                        <h5>info@tis.edu.in</h5>
                        
                        <h1>Our Phone no.</h1>
                        <hr />
                        <h5>91+ 9125469875</h5>
                        <h5>91+ 9259875742</h5>
                        
                    </div>
                </div>
            </div>
            <div className="container bg-light border border-4 p-5 mt-5">
                <TeacherForm/>
            </div>
        </div>
    </>
  )
}

export default ContactUs