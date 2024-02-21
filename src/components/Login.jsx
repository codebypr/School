import React, { useState } from 'react';
import { account } from './AppWrite/Apprite';
import { NavLink, useNavigate } from 'react-router-dom';

function Login() {
  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null);
  const [msg,setMsg]=useState();
  const navigate=useNavigate();

  const loginTeacher= async()=>{
    setMsg('loding...')
      await account.createEmailSession(email,password).then(()=>navigate('/admin')).catch(()=>
        setMsg('Invalid Email or Password!')
      )
  }
  return (
    <>

      <section className="container-fluid mt-5 py-3" style={{ backgroundColor: '#9A616D' }}>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center " >
            <div className="col col-xl-10" >
              <div className="card" style={{ borderRadius: '1rem' }}>
                <div className="row g-0 " >
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form onSubmit={loginTeacher}>

                        <div className="d-flex align-items-center mb-3 pb-1">
                          
                          <span className="h1 fw-bold mb-0">Login</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                        <div className="form-outline mb-4">
                          <input type="email" id="form2Example17" className="form-control form-control-lg"
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                          required
                          />
                          <label>Email</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input type="password" id="form2Example27" className="form-control orm-control-lg"
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)}
                          required
                          />
                          <label >Password</label>
                        </div>

                        <div className="pt-1 mb-4 d-flex justify-content-between">
                        <button type="submit" className="btn btn-success btn-lg btn-block">Login here</button>
                        <h5 className='text-danger'>{msg}</h5>
                        </div>

                        <NavLink className="small text-muted" href="#">Forgot password?</NavLink>
                        <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? 
                        <a href="#/reg" style={{ color: '#393f81' }}> Register here</a></p>
                        <a href="#!" className="small text-muted">Terms of use.</a>
                        <a href="#!" className="small text-muted">Privacy policy</a>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login