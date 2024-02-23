import '../Css/style.css';

import {TypeAnimation} from 'react-type-animation';
import student from '../MyImages/school_student.jpg';
import infra from '../MyImages/infra.jpg';
import rank from '../MyImages/rank.jpg';
import news1 from '../MyImages/news1.jpg';
import news2 from '../MyImages/news2.jpeg';
import news3 from '../MyImages/news3.jpeg';
import h from '../MyImages/h.jpg';
import feedback from '../MyImages/user.jpg'

import { BiArch } from "react-icons/bi";
import { BiBulb } from "react-icons/bi";
import { BiBuilding } from "react-icons/bi";
import { BiDoorOpen } from "react-icons/bi";
import { FaStar  } from "react-icons/fa";

import Card from './Card';

const Home=()=> {

   
    return (
        <>
            
             
             <div className='responsive-bg container-fluid pt-5 mb-5 '>
             <h3 className=' px-5 fw-bold' style={{textShadow:'2px 2px #fff',color:'#171533'}}>72 Years of<br /> <TypeAnimation sequence={[' Establishing Legacies',' ' ]} repeat={Infinity} speed={10} /></h3>
                        <div className="container text-white p-5 rounded-5 d-flex align-items-center justify-contend-center flex-column " style={{backgroundColor:"#171533",width:'350px'}} >
                        <h2 style={{textShadow:'3px 3px black'}} >Registration Open 2024-25</h2>
                        <b><FaStar color='yellow'/> Scholarship Available</b>
                        </div>
             </div>
             
            <div className="container-fluid card mb-3 mt-3 border border-0" >
                <div className="row g-0">
                    <div className="col-lg-6">
                        <img src={h} className="img-fluid rounded-start w-100" alt="..." />
                    </div>
                    <div className="col-lg-6">
                        <div className="card-body">
                            <h2 className="card-title">About School</h2>
                            <p className="card-text">Established in 1991 under the leadership of Mr. S Shyam, Triveni School has consistently delivered high-quality education. Guided by our core principle - "To provide exceptional education to all, regardless of their background, and to nurture the potential within each individual," we remain driven and dedicated day after day. Our commitment to quality education is further reflected in the various scholarships awarded to students who excel in academics, sports, and diverse fields.</p>

                            <h5 className="card-title">Where Ambitions Soar</h5>
                            <p className="card-text">
                                Our institution boasts exceptional infrastructure that supports comprehensive growth. From modern classrooms to advanced facilities, we provide an environment conducive to nurturing academic, physical, and personal development.</p>
                        </div>
                    </div>
                </div>
            </div>

                                 {/* section ----- 2 */}

            <div className="container-fluid mt-5 mb-5">
                <div className="container text-center mb-5">
                    <h2>Why Choose This School</h2>
                    <p>Educating Since 1991</p>
                </div>
                <div className="container pt-3">
                    <div className=" row">
                        <div className="col-lg-3">
                    <Card para={`Discover our school's exceptional, globally recognized infrastructure, fostering unparalleled educational experiences that inspire growth, curiosity, and success in every student.`} 
                    title={`World-Class Infra`} 
                    img={<BiArch className='w-100' style={{ fontSize: '100px', color: '#0275d8' }} />}
                    text={`text-center`}/>
                    
                    </div>
                    <div className="col-lg-3">
                    <Card para={`Ranking No.1, our school's unmatched excellence shines through outstanding academic achievements and accolades, showcasing our commitment to unparalleled educational standards and holistic development.`} 
                    title={`TOP Ranking`} 
                    img={<BiBuilding className='w-100' style={{ fontSize: '100px', color: '#0275d8' }} />}
                    text={`text-center`}/>
                    
                    </div>
                    <div className="col-lg-3">
                    <Card para={`Nurturing and empowering students to become visionary leaders equipped with skills, knowledge, and values that inspire positive change in their communities and beyond.`} 
                    title={`Making Leaders`} 
                    img={<BiDoorOpen className='w-100' style={{ fontSize: '100px', color: '#0275d8' }} />}
                    text={`text-center`}/>
                    
                    </div>
                    <div className="col-lg-3">
                    <Card para={`Our comprehensive facilities, encompassing state-of-the-art language and science laboratories enhance students' practical learning experiences, fostering curiosity and academic excellence.`} 
                    title={`Hands-on Learning`} 
                    img={<BiBulb className='w-100' style={{ fontSize: '100px', color: '#0275d8' }} />}
                    text={`text-center`}/>
                    
                    </div>
                    </div>
                </div>
            </div>

                                {/* section ----- 3 */}  

            <div  className="container-fluid mt-5 mb-5">
                <div className="container text-center mb-5 mt-3">
                    <p>OUR EKIT SCHOOL COURSES</p>
                    <h1>News Events</h1>
                </div>
                <div className="container pt-3">
                    <div className="row">
                        <div className="col-lg-4 mb-3">
                      
                    <div className="card border border-0 rounded-0  shadow-lg  ">
                                <img src={news1} className="card-img-top rounded-0" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title mt-3 mb-4">Your Complete Guide to Photography</h4>
                                    <p className="card-text">A small river named Duden flows by their place and supplies it with the necessary</p>
                                    <a href="#" className="btn btn-warning rounded-0 mt-3">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className="card border border-0 rounded-0  shadow-lg  ">
                                <img src={news2} className="card-img-top rounded-0" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title mt-3 mb-4">Learn Python – Interactive Python</h4>
                                    <p className="card-text">A small river named Duden flows by their place and supplies it with the necessary</p>
                                    <a href="#" className="btn btn-warning rounded-0 mt-3">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div  className="col-lg-4 mb-3">
                            <div className="card border border-0 rounded-0  shadow-lg  ">
                                <img src={news3} className="card-img-top rounded-0" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title mt-3 mb-4">Introduction to Edu_Learn LMS Plugin</h4>
                                    <p className="card-text">A small river named Duden flows by their place and supplies it with the necessary</p>
                                    <a href="#" className="btn btn-warning rounded-0 mt-3">Read more</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
                
                                 {/* section ----- 4 Gallery */} 

            <div className="container mb-5 mt-5">
                <div className="container text-center mb-5 ">
                    <h1>Gallery</h1>
                </div>
                <div className="row mb-3">
                    <div className="col ">
                        <div style={{ height: '40vmin', backgroundSize: 'cover', backgroundImage: `url(${infra})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
                    </div>
                    <div className="col ">
                        <div style={{ height: '40vmin', backgroundSize: 'cover', backgroundImage: `url(${rank})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col ">
                        <div style={{ height: '40vmin', backgroundSize: 'cover', backgroundImage: `url(${student})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
                    </div>
                    <div className="col ">
                        <div style={{ height: '40vmin', backgroundSize: 'cover', backgroundImage: `url(${news3})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
                    </div>
                    <div className="col">
                        <div style={{ height: '40vmin', backgroundSize: 'cover', backgroundImage: `url(${news2})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
                    </div>
                </div>
            </div>

                                 {/* section ----- 5 */} 

            <div className="container mb-5">
                <div className="container text-center">
                    <b>OUR HOLISTIC & TECHNICAL APPROACH TO EDUCATION HAS WON HEARTS!</b>
                    <h1>Hear What Parents have to Say</h1>
                </div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="card ">
                                <div className="card-body"> 
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <p className="card-text">The school's rigorous academic curriculum aligned with CBSE standards, coupled with its state-of-the-art infrastructure, has created an environment where learning is both stimulating and rewarding. The school's consistent efforts to keep parents involved through regular communication and interactive events have made me feel like an integral part of my child's educational journey.</p>
                                    <h5 className="card-title">
                                    <img src={feedback} width={30} className='me-2' />
                                        Shruti Sethi</h5>
                                    <small className='text-body-secondary'>Mother of Aryan, VII class</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card" >
                                <div className="card-body"> 
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <p className="card-text">The school's rigorous academic curriculum aligned with CBSE standards, coupled with its state-of-the-art infrastructure, has created an environment where learning is both stimulating and rewarding. The school's consistent efforts to keep parents involved through regular communication and interactive events have made me feel like an integral part of my child's educational journey.</p>
                                    <h5 className="card-title">
                                    <img src={feedback} width={30} className='me-2' />
                                        Shruti Sethi</h5>
                                    <small className='text-body-secondary'>Mother of Aryan, VII class</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card" >
                                <div className="card-body"> 
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <FaStar color='#fcba03' className='m-1 mb-4'/>
                                    <p className="card-text">The school's rigorous academic curriculum aligned with CBSE standards, coupled with its state-of-the-art infrastructure, has created an environment where learning is both stimulating and rewarding. The school's consistent efforts to keep parents involved through regular communication and interactive events have made me feel like an integral part of my child's educational journey.</p>

                                    <h5 className="card-title">
                                        <img src={feedback} width={30} className='me-2' />
                                         Shruti Sethi</h5>
                                    <small className='text-body-secondary'>Mother of Aryan, VII class</small>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

           
        </>
    );
}
export default Home;

