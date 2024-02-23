import React from 'react'
import '../../Css/style.css';
import logo from '../../MyImages/logo.jpg'

function Header() {
  return (
    <>
        <div className="container-fluid header d-flex justify-content-center flex-column align-items-center headerGif text-white p-2">
        <img className='image' src={logo} />
            <h4 className='p-0 m-0'>GOVT.SR.SEC. SCHOOL</h4>
            <h6><b>NEW DELHI</b></h6>
        </div>
    </>
  )
}

export default Header