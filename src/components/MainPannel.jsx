import { useRef, useState } from "react";
import TeacherForm from "./teacherForm";
import './App.css'
import logo from '../MyImages/logo.jpg'
import user from '../MyImages/user.jpg'

const MainPannel= ()=> {
    let textColor='text-white';
    const [show,setShow]=useState('logo');
    const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
    const box=['A','P','A','A','P','A','A','P','A','A','P','A','A','A','A','P','A','A','P','A','A'];  
    const corse=["BA",'B.Com','MA','M.Com','B.TEch','BCA',"BA",'B.Com','MA','M.Com','B.TEch','BCA',] 

    // Hooks
    const imgRef=useRef(null);
    const [img,setImg]=useState(user);

    // Function
    const connectRef=()=>{
        imgRef.current.click();
    }
    const showImg=(e)=>{
        let imgFile=e.target.files[0];
        const reader=new FileReader();
        reader.readAsDataURL(imgFile);
        reader.onload=(e)=>{
            setImg(e.target.result)
        }
    }

    return (
        <>
        <div className="container-fluid d-flex p-0 " style={{height:'100vh',marginTop:'56px'}}>
            <div className="container d-flex flex-column justify-content-start p-0" style={{width:'35vmin',backgroundColor:'#0275d8',border:'2px solid black'}}>

                <div className={`text-center my-1 ${textColor}`}>
                   
                    <img onClick={connectRef} src={img} style={{width:'15vmin',height:'15vmin',objectFit:'cover',border:'2px solid #fff',borderRadius:'50%',cursor:'pointer'    }}/>
                    <input type="file" ref={imgRef} onChange={showImg} className="d-none"/>
                    <p>Teacher name</p>
                  
                </div>

            <button type="button" className={`w-100 mt-2 btn border border-black border-end-0 border-start-0 ${textColor}`} style={{backgroundColor:'#0275d8'}} onClick={()=>location.reload()}>Dashboard <i class="fa fa-refresh fa-spin text-warning" ></i></button>
            <button type="button" className={`w-100 mt-2 btn border border-black border-end-0 border-start-0 ${textColor}`} style={{backgroundColor:'#0275d8'}} onClick={()=>setShow('teacher')}>Add Teacher</button>
            <button type="button" className={`w-100 mt-2 btn border border-black border-end-0 border-start-0 ${textColor}`} style={{backgroundColor:'#0275d8'}} onClick={()=>setShow('student')}>Add Student</button>
            <button type="button" className={`w-100 mt-2 btn border border-black border-end-0 border-start-0 ${textColor}`} style={{backgroundColor:'#0275d8'}} onClick={()=>setShow('corse')}>Course</button>
            <button type="button" className={`w-100 mt-2 btn border border-black border-end-0 border-start-0 ${textColor}`} style={{backgroundColor:'#0275d8'}} onClick={()=>setShow('attendence')}>Attendence</button>
            <a type="button" className={`w-100 mt-2 btn border border-black border-end-0 border-start-0 ${textColor}`} style={{backgroundColor:'#0275d8'}}  href="https://www.drmgronline.in/assets/MBA%20REGNO%202022%20BATCH_jan_2022.pdf" target="_blank">Exame section</a>
            </div>

           
            <div className="container-fluid p-0 " 
            style={{backgroundColor:'#fff',border:'2px solid black',overflow:'auto'}} >              
               <div className="container py-5 b">
                    { show =='logo' && (<div className=" container text-center"><img src={logo} width={'45%'}/></div>)}
                    {show=='teacher' && (<TeacherForm/>)}
                    {show=='student' && (<TeacherForm/>)}
                    {show=='attendence' && (
                    <table >
                        <th >Name</th>
                        <th colSpan={33}>ATTENDDENCE</th>
                        {arr.map((ele)=>(<tr><td>{ele}</td>{box.map((ele)=>(<td>{ele}</td>))}</tr>))}
                    </table>
                    )}
                    {show=='corse' && corse.map((c)=>(<center><table width={'80%'}><tr><td><h4>{c}</h4></td></tr></table></center>))}
                </div>               
            </div>
        </div>
        </>
    );
}
export default MainPannel;