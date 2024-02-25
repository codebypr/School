import React, { useState } from 'react'
import AddTeacher from './AddTeacher';
import AddStudent from './AddStudent';
import { IoArrowBackOutline } from "react-icons/io5";

function AdminTopSection() {
    const [id,setId]=useState(1);
    const sampleArr=[
                        {id:"25",name:'STAFF',color:'#f0eb56'},
                        {id:"1226",name:'Total Student',color:'#954de8'},
                        {id:"154",name:'Register staff',color:'#4d57e8'},
                        {id:"12",name:'Notes',color:'#e8b24d'},
                        {id:"02",name:'Progress',color:'#7ee84d'},

                    ]
              
  return (
    <>
                
            
            
        {
            id!==1 && (
                <div className=" text-end">
                <button className='stdViewBtn border ' onClick={()=>setId(1)}><IoArrowBackOutline/> Back</button>
                </div>
            )
        }
        {
            id==25 && (<AddTeacher/>)
        }
        {
            id==1226 && (<AddStudent/>)
        }
        {
            id===1 && (
                <div>
        <div className="container p-3" style={{ backgroundColor: '#E6E6FA' }}>
            <div class="d-flex justify-content-evenly" style={{width:'100%',height:'15vmin'}}>
                {
                    sampleArr.map((data)=>(
                        <button className="container shadow-lg rounded d-flex justify-content-center flex-column align-items-center " style={{width:'15%',border:'none',backgroundColor:data.color,overflow:"hidden"}}
                        onClick={()=>setId(data.id)}
                        >
                            <h6 className='fs-6'>{data.name}</h6>
                            <h4 className='fs-2'>{data.id}</h4>
                        </button>

                            ))
                }
            </div>
        </div>
        <div className="container mt-5 " >
            <div className="row ">
                <div className="col-lg-4 border p-3">
                        <h6 className='text-center'>Today Active Staff</h6>
                    <div className="container d-flex justify-content-center align-items-center">
                        <div className='d-flex justify-content-center align-items-center text-white' style={{height:'200px',width:'200px',borderRadius:'50%',backgroundColor:'red'}}
                        >98%
                            <div className='d-flex justify-content-center align-items-center text-white' style={{height:'150px',width:'150px',borderRadius:'50%',backgroundColor:'green'}}>72%
                            <div className='d-flex justify-content-center align-items-center text-white' style={{height:'100px',width:'100px',borderRadius:'50%',backgroundColor:'blue'}}>80%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 border bg-dark">

                    
                </div>
            </div>
        </div>
            </div>

            )}
    </>
  )
}

export default AdminTopSection