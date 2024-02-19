import React from 'react'
import acadmic1 from '../MyImages/acadmic1.jpg';
import acadmic2 from '../MyImages/acadmic2.jpg';
import dance1 from '../MyImages/dance1.jpg';
import art from '../MyImages/Art.jpg';
export default function Academic() {
    return (
        <>
        <div className="container text-center m-5 pt-5">
            <h1>Academic Support <br /><u>Programs</u></h1>
        </div>
            <div className="container card mb-3 mt-3 border border-0" >
                <div className="row g-0">
                    
                    <div className="col-lg-6">
                        <div className="card-body">
                            <h3 className="card-title">Thriving all round development of a child through co-curricular activities</h3>
                            <p className="card-text">Merely having knowledge about a few academic concepts doesn’t enrich one’s personality. A person must need `think beyond academics. Striking a right balance between curriculum, syllabus, books and co-curricular activities is must. Co-curricular activities give a unique experience, i.e. outside the typical pen and pencil classroom experience. These activities allow kids to develop particular skills and exhibit their non – academic abilities.</p>
                            <button type="button" class="btn btn-light bg-warning d-flex align-items-center"><h1> &#8594;</h1>  SEND AN INQUIRY TODAY</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={acadmic1} className="img-fluid rounded-start w-100" alt="..." />
                    </div>
                </div>
            </div>
            <div className="container card mb-3 mt-3 border border-0" >
                <div className="row g-0">
                <div className="col-lg-6">
                        <img src={dance1} className="img-fluid rounded-start w-100" alt="..." />
                    </div>
                    <div className="col-lg-6">
                        <div className="card-body">
                            <h3 className="card-title">Music & Dance</h3>
                            <p className="card-text">India has a great heritage of classical dance and music. Using the body and voice as a medium of expression is one of the mediums to lure the hearts of people. They also bring out a happy feeling within oneself. Music and Dance improve the ability of higher-level thinking. Music and Dance help children untap their inner creativity and bring out their passion with great enthusiasm. This activity gives a beautiful break from the daily activities and helps students form a bond across communities. That’s the best activity to provide the perfect nourishment for the mind, body and soul.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="container card mb-3 mt-3 border border-0" >
                <div className="row g-0">
                    
                    <div className="col-lg-6">
                        <div className="card-body">
                            <h3 className="card-title">Technology</h3>
                            <p className="card-text">Technology has the ability to enhance relationships between teachers and students. When teachers effectively integrate technology into subject areas, teachers grow into roles of adviser, content expert, and coach. Technology helps make teaching and learning more meaningful and fun. Lotus Veda being one of the best preschool in Ashok Vihar provides its children with the opportunity to use and interact with this technology at different levels.</p>
                            <button type="button" class="btn btn-light bg-warning d-flex align-items-center"><h1> &#8594;</h1>  SEND AN INQUIRY TODAY</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={acadmic2} className="img-fluid rounded-start w-100" alt="..." />
                    </div>
                </div>
            </div>

            <div className="container card mb-3 mt-3 border border-0" >
                <div className="row g-0">
                <div className="col-lg-6">
                        <img src={art} className="img-fluid rounded-start w-100" alt="..." />
                    </div>
                    <div className="col-lg-6">
                        <div className="card-body">
                            <h3 className="card-title">Art & Craft</h3>
                            <p className="card-text">The Art & Craft program is the most engaging activity to connect creativity and innovation during an early stage of children’s development. This program helps build skills, develop competencies and offer resources. They support creative learning for our students. Most importantly, Art & Craft gives children the chance to use their imagination. Writing, Painting, Drawing, Photography and Clay Sculpting are some of the activities that are included in this program. This activity helps build cognitive, physical, and social development. This program develops fine – motor skills and hand – eye coordination</p>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
             
        </>
    )
}
