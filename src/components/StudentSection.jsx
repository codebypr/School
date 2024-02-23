import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
function StudentSection() {
    const [viewBtn,setViewBtn]=useState(false)
    const [viewText,setViewText]=useState('view all')
   
    const studentData = [{ id: '1', name: 'Ram', class: '12th', phone: '1234567890' },
    { id: '1', name: 'Ram', class: '12th', phone: '1234567890' },
    { id: '1', name: 'Ram', class: '12th', phone: '1234567890' },
    { id: '1', name: 'Ram', class: '12th', phone: '1234567890' },
    { id: '1', name: 'Ram', class: '12th', phone: '1234567890' },
    { id: '1', name: 'Ram', class: '12th', phone: '1234567890' },
    { id: '1', name: 'Ram', class: '12th', phone: '1234567890' },
    { id: '1', name: 'Ram', class: '12th', phone: '1234567890' },
    { id: '1', name: 'Ram', class: '12th', phone: '1234567890' },
    { id: '1', name: 'Ram', class: '12th', phone: '1234567890' },
    { id: '1', name: 'Ram', class: '12th', phone: '1234567890' },
    ]
   
    const toggel=()=>{
        setViewBtn(!viewBtn)
         viewText=='view all'? setViewText('Add student') :   setViewText('view all')              
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

                        <div className="table col">
                        <table>
                            {
                                studentData.map((student) => (
                                    <tr><td>{student.id}</td><td>
                                        <button className='stdNameBtn'>{student.name}</button>
                                    </td><td>{student.class}</td><td>{student.phone}</td>
                                        <td><button className='stdViewBtn '><FaEye color='blue' /></button></td>
                                    </tr>
                                ))
                            }

                        </table>
                    </div>

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
                                                <h3 class="mb-5 text-uppercase">Student registration </h3>
        
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