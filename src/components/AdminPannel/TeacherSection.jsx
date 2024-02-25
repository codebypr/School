import React, { useEffect } from 'react'
import user from '../../MyImages/user.jpg'
import { FcEditImage } from "react-icons/fc";
import { MdOutlineLocationOn } from "react-icons/md";
import { useSelector } from 'react-redux';

function TeacherSection() {
   
    const teacherData=useSelector(state=>state.techReducer.teacherData)
  

    return (
        <>
         
       


            <div className="container border" style={{ backgroundColor: '#E6E6FA' }}>
                {
                    teacherData.map((teacher) => (

                        <div className="teacherbox  m-2 bg-white m-3 p-3 rounded shadow-lg">
                            <div className="row">
                                <div className="col">
                                    <div className="d-flex flex-column flex-lg-row">
                                        <div className=" d-flex align-items-center me-3">
                                            <img className='' src={user} style={{ width: '15vmin', height: '15vmin', objectFit: 'cover', border: '2px solid #fff', borderRadius: '50%', cursor: 'pointer' }} />
                                        </div>
                                        <div className=" d-flex justify-content-center flex-column">
                                            <h4>{teacher.name}</h4>
                                            <h6>{teacher.class} incharge</h6>
                                            <p><MdOutlineLocationOn/> Oakridge Lane Richardson</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col d-flex justify-content-around align-items-center">
                                    <b>{teacher.phone}</b><br />
                                    <button className='border'><FcEditImage/> Edit</button>
                                </div>
                            </div>
                        </div>

                    ))
                }

            </div>
        </>
    )
}

export default TeacherSection