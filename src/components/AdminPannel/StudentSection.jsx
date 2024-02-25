import React, { useEffect, useState } from 'react'
import user from '../../MyImages/user.jpg'
import { FaEye } from "react-icons/fa";
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
function StudentSection() {
    const studentinfo=useSelector(state=>state.stdReducer.studentData)
    const [viewBtn, setViewBtn] = useState(false)
    const [viewText, setViewText] = useState('view all')
    const [search, setSearch] = useState('')
    const [studentData, setStudentData] = useState([])
    
    const columns=[
        {
            name:'Photo',
            selector:row=><img className='' src={user} style={{ width: '7vmin', height: '7vmin', objectFit: 'cover', borderRadius: '50%', padding:'5px' }} />
        },
        {
            name:'Name',
            selector:row=>row.name
        },
        {
            name:'Roll No',
            selector:row=>row.roll,
            sortable:'true'
        },
        {
            name:'Class',
            selector:row=>row.clas
        },
        {
            name:'City',
            selector:row=>row.city
        },
        {
            name:'Phone',
            selector:row=>row.phone
        },
        {
            name:'View',
            selector:row=><button className='stdViewBtn 'onClick={() => viewStdDetails(row.name)}> <FaEye color='blue' /></button>
        },
    ]
    
    const toggel = () => {
        setViewBtn(!viewBtn)
        viewText == 'view all' ? setViewText('Add student') : setViewText('view all')
    }

    const viewStdDetails = (name) => {
        alert(name)
    }

   useEffect(()=>{
        setStudentData(studentinfo);
        const result=studentinfo.filter((student)=>(
            student.name.toLowerCase().match(search.toLowerCase())
        ))
        setStudentData(result)
   },[search])


    return (
        <>

                                                          
                                        <DataTable data={studentData} columns={columns} 
                                            title='All Student'
                                            pagination
                                            fixedHeader
                                            fixedHeaderScrollHeight='60vmin'
                                            subHeader
                                            subHeaderComponent={
                                                <input type='text' placeholder='search fere'
                                                value={search}
                                                onChange={(e)=>setSearch(e.target.value)}
                                                />
                                            }
                                        />
                
        </>
    )
}

export default StudentSection