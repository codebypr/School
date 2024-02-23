import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
function StudentSection() {
    const [viewBtn,setViewBtn]=useState(false)
    const [viewText,setViewText]=useState('view all')
    const [stdInfo,setStdInfo]=useState({})
   
    const studentData = [{ id: '1', name: 'Ram', class: '12th', phone: '1234567890' },
    { id: '2', name: 'Shyam', class: '12th', phone: '123453330' },
    { id: '3', name: 'Anand', class: '2nd', phone: '8976564890' },
    { id: '4', name: 'Ram', class: '10th', phone: '1234567890' },
    { id: '5', name: 'Rani', class: '11th', phone: '1234567890' },
    { id: '6', name: 'Shiva', class: '5th', phone: '1234567890' },
    { id: '7', name: 'Ram', class: '12th', phone: '1234567890' },
    { id: '8', name: 'Neha', class: '10th', phone: '1234567890' },
    { id: '9', name: 'Radha', class: '12th', phone: '1234567890' },
    { id: '10', name: 'Ram', class: '6th', phone: '1234567890' },
    { id: '11', name: 'Ram', class: '12th', phone: '1234567890' },
    ]
   
    const toggel=()=>{
        setViewBtn(!viewBtn)
         viewText=='view all'? setViewText('Add student') :   setViewText('view all')              
                    }

   const viewStdDetails=(id)=>{
        let arr=studentData.filter((std)=>(std.id==id))
        let realObj=arr[0];
        setStdInfo(realObj)
    }    
                
    return (
        <>

<div className="container text-end">
    <button className='stdViewBtn border '
    onClick={toggel}>
        {
            !viewBtn? (<FaEye color='blue' className='me-2'/>) : (<IoMdPersonAdd color='blue' className='me-2'/>)
        }
         {viewText}
    </button>
</div>
                {
                    viewBtn===true && (

                        
                        <section class="h-100 h-custom gradient-custom-2">
                        <div class="container py-5 h-100">
                            <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-12">
                                <div class="card card-registration card-registration-2" style={{borderRadius:'15px'}}>
                                <div class="card-body p-0">
                                    <div class="row g-0">
                                    <div class="col-lg-6 p-5">
                  <h3 class="fw-normal mb-5" style={{color:'#4835d4'}}>General Infomation</h3>

                                <table>
                            {
                                studentData.map((student) => (
                                    <tr><td>{student.id}</td><td>
                                        <button className='stdNameBtn'>{student.name}</button>
                                    </td><td>{student.class}</td><td>{student.phone}</td>
                                        <td><button className='stdViewBtn '
                                        onClick={()=>viewStdDetails(student.id)}
                                        ><FaEye color='blue' /></button></td>
                                    </tr>
                                ))
                            }

                                </table>
                                </div>
                                
              <div class="col-lg-6 text-white" style={{backgroundColor:'#4835d4'}}>
                <div class="p-5">
                  <h3 class="fw-normal mb-5">Contact Details</h3>

                  <div class="mb-3 ">
                      <input type="text" id="form3Examplea2" class="form-control form-control-lg"
                      value={stdInfo.name}
                      />
                      <label >Name of student</label>                   
                  </div>
                  <div class="mb-3 ">
                      <input type="text" id="form3Examplea2" class="form-control form-control-lg" 
                      value={'kuldeep'}
                      />
                      <label >Father name</label>                   
                  </div>

                  <div class="row">
                    <div class="col-md-5 mb-4 pb-2">

                      <div class="form-outline form-white">
                        <input type="text" id="form3Examplea4" class="form-control form-control-lg" 
                        value={stdInfo.class}
                        />
                        <label>Class</label>
                      </div>

                    </div>
                    <div class="col-md-7 mb-4 pb-2">

                      <div class="form-outline form-white">
                        <input type="text" id="form3Examplea5" class="form-control form-control-lg" />
                        <label >Place</label>
                      </div>

                    </div>
                  </div>

                  <div class="mb-4 pb-2">
                    <div class="form-outline form-white">
                      <input type="text" id="form3Examplea6" class="form-control form-control-lg" />
                      <label >Country</label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-5 mb-4 pb-2">

                      <div class="form-outline form-white">
                        <input type="text" id="form3Examplea7" class="form-control form-control-lg" />
                        <label >Code +</label>
                      </div>

                    </div>
                    <div class="col-md-7 mb-4 pb-2">

                      <div class="form-outline form-white">
                        <input type="text" id="form3Examplea8" class="form-control form-control-lg" 
                        value={stdInfo.phone}
                        />
                        <label >Phone Number</label>
                      </div>

                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-start mb-4 pb-3">
                    <input class="form-check-input me-3" type="checkbox" value="" id="form2Example3c" />
                    <label >I do accept theTerms and Conditions. </label>
                  </div>

                  <button type="button" class="btn btn-light btn-lg"
                    data-mdb-ripple-color="dark">Register</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
                   

                    )
                }
           


                    {/* section registration........... */}


                {
                    viewBtn===false && (

                        <section class="container h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col">
                                <div class="card card-registration my-4">
                                    <div class="row g-0">
                                        <div class="col-xl-6 d-none d-xl-block">
                                            <img src={"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"}
                                                alt="Sample photo" class="img-fluid"
                                                style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }} />
                                        </div>
                                        <div class="col-xl-6">
                                            <div class="card-body p-md-5 text-black">
                                                <h3 class="mb-5 text-uppercase">Add New Student </h3>
        
                                                <div class="row">
                                                    <div class="col-md-6 mb-4">
                                                        <div class="form-outline">
                                                            <input type="text" id="form3Example1m" class="form-control form-control-lg" />
                                                            <label class="form-label" for="form3Example1m">First name</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 mb-4">
                                                        <div class="form-outline">
                                                            <input type="text" id="form3Example1n" class="form-control form-control-lg" />
                                                            <label class="form-label" for="form3Example1n">Father's name</label>
                                                        </div>
                                                    </div>
                                                </div>
        
                                                <div class="form-outline mb-4">
                                                    <input type="text" id="form3Example9" class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Example9">DOB</label>
                                                </div>
        
        
                                                <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
        
                                                    <h6 class="mb-0 me-4">Gender: </h6>
        
                                                    <div class="form-check form-check-inline mb-0 me-4">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                                            value="option1" />
                                                        <label class="form-check-label" for="femaleGender">Female</label>
                                                    </div>
        
                                                    <div class="form-check form-check-inline mb-0 me-4">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                                            value="option2" />
                                                        <label class="form-check-label" for="maleGender">Male</label>
                                                    </div>
        
                                                    <div class="form-check form-check-inline mb-0">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                                            value="option3" />
                                                        <label class="form-check-label" for="otherGender">Other</label>
                                                    </div>
        
                                                </div>
        
        
        
        
                                                <div class="form-outline mb-4">
                                                    <input type="text" id="form3Example99" class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Example99">Course</label>
                                                </div>
        
                                                <div class="form-outline mb-4">
                                                    <input type="text" id="form3Example97" class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Example97">Email ID</label>
                                                </div>
        
                                                <div class="row">
                                                    <div class="col-md-6 mb-4">
        
                                                        <select class="select">
                                                            <option value="1">State</option>
                                                            <option value="2">Option 1</option>
                                                            <option value="3">Option 2</option>
                                                            <option value="4">Option 3</option>
                                                        </select>
        
                                                    </div>
                                                    <div class="col-md-6 mb-4">
        
                                                        <select class="select">
                                                            <option value="1">City</option>
                                                            <option value="2">Option 1</option>
                                                            <option value="3">Option 2</option>
                                                            <option value="4">Option 3</option>
                                                        </select>
        
                                                    </div>
                                                </div>
        
                                                <div class="form-outline mb-4">
                                                    <input type="text" id="form3Example8" class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Example8">Address</label>
                                                </div>
        
                                                <div class="d-flex justify-content-end pt-3">
                                                    <button type="button" class="btn btn-light btn-lg">Reset all</button>
                                                    <button type="button" class="btn btn-warning btn-lg ms-2">Submit form</button>
                                                </div>
        
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    )
                }
           



        </>
    )
}

export default StudentSection