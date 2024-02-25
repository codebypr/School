import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function Attendance() {

    const [clas, setClas] = useState('12th');
    const studentData = useSelector(state => state.stdReducer.studentData)
    const box = ['A', 'P', 'A', 'A', 'P', 'A', 'A', 'P', 'A', 'A', 'P', 'A', 'A', 'A', 'A', 'P', 'A', 'A', 'P', 'A', 'A'];

    const present = () => {
        setClas('11th')

    }


    return (
        <>


            <div className="container mt-2 p-3" style={{ backgroundColor: '#E6E6FA' }}>
                <div className="container mb-5 d-flex justify-content-between">
                    <select className="select">
                        <option value="0">select Class</option>
                        {
                            studentData.map((student) => (
                                <option value={student
                                .clas}>{student.clas} class</option>
                            ))
                        }

                    </select>
                    <div className="adminbtn">
                        <button className='px-3' data-bs-toggle="modal" data-bs-target="#staticBackdrop"> Attendance</button>
                    </div>
                </div>
                <table className='AttTable'>
                    <th >Name</th>
                    <th colSpan={33} className='text-center'>ATTENDDENCE</th>
                    {
                        studentData.map((student) => (

                            // student.clas===clas &&
                            <tr className='AttRow'>
                                <td className='AttCol'>{student.name}</td>
                                {box.map((ele) => (<td className={`AttCol `}>{ele}</td>)
                                )}
                            </tr>
                        ))
                    }
                </table>
            </div>




            {/*  Attentance Modal.................... */}

            <div className="modal fade " id="staticBackdrop" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header ">

                            <h1 className="modal-title fs-5" id="staticBackdropLabel">All status</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='container'>
                        <select className="select">
                        <option value="0">select Class</option>
                        {
                            studentData.map((student) => (
                                <option value={student
                                .clas}>{student.clas} class</option>
                            ))
                        }

                    </select>
                        </div>
                        <div className="modal-body  ">
                            <table className='attTable'>
                                <th>S.NO</th>
                                <th>Name</th>
                                <th>Present</th>
                                <th>Absent</th>
                                <th>Leave</th>
                                {
                                    studentData.map((student, i) => (
                                        <tr className='AttRow'>
                                            <td className="AttCol">{student.id}</td>
                                            <td className='AttCol'>{student.name}</td>
                                            <td className='AttCol pre'
                                                onClick={() => present('pre', student.id)} id={student.id}></td>
                                            <td className='AttCol ab'
                                                onClick={() => present('ab', student.id)} id={student.id}></td>
                                            <td className='AttCol lev'
                                                onClick={() => present('lev', student.id)} id={student.id}></td>
                                        </tr>
                                    ))
                                }
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Attendance