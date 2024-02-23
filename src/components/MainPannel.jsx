import { useRef, useState } from "react";
import TeacherForm from "./teacherForm";
import '../Css/style.css'
import logo from '../MyImages/logo.jpg'
import user from '../MyImages/user.jpg'
import { PiStudentBold ,PiExam} from "react-icons/pi";
import { MdOutlineDashboard,MdCoPresent } from "react-icons/md"
import { SiBookstack } from "react-icons/si"
import { GiTeacher } from "react-icons/gi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import StudentSection from "./StudentSection";
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
        <div className="container-fluid d-flex  p-0" style={{height:'100vh',backgroundColor:'#fff'}}>
            <div className="adminbtn container d-flex flex-column justify-content-start p-3 m-3 rounded" style={{width:'35vmin',backgroundColor:'#171533'}}>

                <div className={`text-center my-1 ${textColor}`}>
                    <img onClick={connectRef} src={img} style={{width:'15vmin',height:'15vmin',objectFit:'cover',border:'2px solid #fff',borderRadius:'50%',cursor:'pointer'    }}/>
                    <input type="file" ref={imgRef} onChange={showImg} className="d-none"/>
                    <p>Teacher name</p>
                </div>
                    

            <button type="button"  onClick={()=>location.reload()}><MdOutlineDashboard size={20} className="me-2"/>Dashboard </button>
            <button type="button" onClick={()=>setShow('teacher')}><GiTeacher size={20} className="me-2"/>Teacher</button>
            <button type="button" onClick={()=>setShow('student')}><PiStudentBold size={20} className="me-2"/>Student</button>
            <button type="button"  onClick={()=>setShow('attendence')}><MdCoPresent size={20} className="me-2"/>Attendence</button>
            <button type="button" onClick={()=>setShow('corse')}><SiBookstack size={20} className="me-2"/>Course</button>
            <button type="button"  ><PiExam size={20} className="me-2"/>Exame </button>
            <button type="button" className="mt-auto" ><RiLogoutCircleRLine size={20} className="me-2"/>Logout </button>
            </div>

           
            <div className="container-fluid p-0 m-3 shadow-lg " 
            style={{backgroundColor:'#fff',overflow:'auto'}} >              
               <div className="container py-5 b">
                    { show =='logo' && (<div className=" container text-center"><img src={logo} width={'45%'}/></div>)}
                    {show=='teacher' && (<TeacherForm/>)}
                    {show=='student' && (<StudentSection/>)}
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