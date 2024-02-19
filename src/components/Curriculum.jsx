import React from 'react'
import curriculam from '../MyImages/curriculam1.jpg'
function Curriculum() {
  return (
    <>
    <div className="container card mb-3 mt-5 pt-5  border border-0" style={{height:'80vh'}} >
                <div className="row g-0">                
                    <div className="col-lg-6">
                        <div className="card-body">
                            <h3 className="card-title">Our Methodology</h3>
                            <p className="card-text">We at Lotus Veda, one of the best play school in Ashok Vihar completely discard the practice of copying answers from the board. Hence, we start working on English from an early age. The students frame and write their own answers in their notebooks/ workbooks and in the worksheets. As a result, the students of this school never face the challenge of cramming information.</p>
                            <button type="button" class="btn btn-light w-100 d-flex align-items-center"><h1> &#10133;</h1>  Assessment: An ongoing process</button>
                            <button type="button" class="btn btn-light w-100 d-flex align-items-center"><h1> &#10133;</h1>  Exposure to new activities</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={curriculam} className="img-fluid rounded-start w-100" alt="..." />
                    </div>
                </div>
            </div>
    </>
  )
}

export default Curriculum;
