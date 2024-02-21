import React, { useState } from 'react'
import { account } from './AppWrite/Apprite'
import { ID } from 'appwrite'

function Registration() {
    const [name,setName]=useState(null);
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const [msg,setMsg]=useState();

    const newTeacherReg=async()=>{
        setMsg('LODING...')
        if(name!=null && email!=null && password!=null){
            await account.create(ID.unique(),email,password,name).then(setMsg('Registration Sucessfully')).catch((err)=>console.log(err,'err'));
        }else{
            setMsg('Please enter valied details')
        }
        setTimeout(()=>{
            setMsg(null)
            location.reload();
        },2000)
     

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

                      <form onSubmit={newTeacherReg}>

                        <div className="d-flex align-items-center mb-3 pb-1">
                          
                          <span className="h1 fw-bold mb-0">Registration</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign up your account</h5>

                        <div className="form-outline mb-4">
                          <input type="text" id="form2Example17" className="form-control form-control-lg" 
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            required
                          /><label >User name</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input type="email" id="form2Example27" className="form-control form-control-lg" 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            required
                          /><label >Email</label>
                        </div>
                        <div className="form-outline mb-4">
                          <input type="password" id="form2Example27" className="form-control orm-control-lg"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            required
                          /><label >Password</label>
                        </div>

                        <div className="pt-1 mb-4 d-flex justify-content-between">
                        <h5 className='text-danger'>{msg}</h5>
                            <button type="submit" className="btn btn-success btn-lg btn-block">Register here</button>                          
                        </div>
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

export default Registration