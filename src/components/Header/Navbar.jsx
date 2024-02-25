import { NavLink } from 'react-router-dom';
import '../../Css/style.css';
import { FcMenu } from "react-icons/fc";

function Navbar() {
  let color = "text-white";

  return (
    <>

      <nav className="navbar sticky-top navbar-expand-lg  w-100  p-0" >
        <div className="container ">
          {/* <Link className={`navbar-brand ${color}`} style={{ fontFamily: 'sans-serif', textShadow: '2px 3px black' }}><b>GOVT.SR.SEC. SCHOOL</b></Link> */}
          <button className={`navbar-toggler ${color}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FcMenu size={30}/>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-0 d-flex justify-content-evenly  w-100">
              <li className="nav-item rounded-3">
                <NavLink className={({isActive})=>`nav-link  ${isActive? 'text-info' : color}  `} aria-current="page" to={'/'} >Home</NavLink>
              </li>
              <li className="nav-item dropdown rounded-3">
                <NavLink className={`nav-link dropdown-toggle ${color}`}> About Us </NavLink>
                <ul className="dropdown-menu ">
                  <li><NavLink className="dropdown-item" to={'academic'}>Acamedic calander</NavLink></li>
                  <li><NavLink className="dropdown-item" to={'principle'}>Chairman</NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><NavLink className="dropdown-item" to={'curriculan'}>Something else here</NavLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown rounded-3">
                <NavLink className={`nav-link dropdown-toggle ${color}`}>Admission</NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to={'admission-procedure'}>Admission Procedure</NavLink></li>
                  <li><NavLink className="dropdown-item" to={'registration-procedure'}>Registration Procedure for Addmission</NavLink></li>
                  <li><NavLink className="dropdown-item" to={'fee-structure'}>Fee Sructure</NavLink></li>
                  <li><NavLink className="dropdown-item" to={'online-payment'}>Online Fee Payment</NavLink></li>
                </ul>
              </li>
              <li className="nav-item rounded-3">
                <NavLink className={({isActive})=>`nav-link active ${isActive? "text-info" :color}`}to={'gallery'}>Gallery</NavLink>
              </li>
              <li className="nav-item dropdown rounded-3">
                <NavLink className={`nav-link dropdown-toggle ${color}`}>Facilities</NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to={'smart-class'}>Smart Classroom</NavLink></li>
                  <li><NavLink className="dropdown-item" to={'computer-lab'}>Computer Lab</NavLink></li>
                  <li><NavLink className="dropdown-item" to={'library'}>Liberary</NavLink></li>
                  <li><NavLink className="dropdown-item" to={'music-lab'}>Music & Dance</NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><NavLink className="dropdown-item" to={'sports'}>Sports</NavLink></li>
                </ul>
              </li>
              <li className="nav-item rounded-3">
                <NavLink className={({isActive})=>`nav-link active ${isActive? "text-info" : color}`} aria-current="page" to={'contact'}>Contact Us</NavLink>
              </li>

              <li className="nav-item dropdown rounded-3">
                <NavLink className={`nav-link dropdown-toggle ${color}`}>Admin</NavLink>
                <ul className="dropdown-menu ">
                  <li><NavLink className="dropdown-item" to={'login'}>Admin Login</NavLink></li>
                  <li><NavLink className="dropdown-item" to={'#'}> Main Portal</NavLink></li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
