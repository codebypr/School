import React from 'react'
import gallery1 from '../MyImages/gallery1.jpg';
import gallery2 from '../MyImages/gallery2.jpg';
import gallery3 from '../MyImages/gallery3.jpg';
import gallery6 from '../MyImages/gallery6.jpg';
import gallery7 from '../MyImages/gallery7.jpg';
import gallery8 from '../MyImages/gallery8.jpg';
import gallery9 from '../MyImages/gallery9.jpg';
import Card from './Card';
function Gallery() {
  return (
   <>
        <div className="container mt-5 mb-5 pt-5">
            <div className="container text-center ">
                <h1>Gallery</h1>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <Card img={<img src={gallery1} alt="" />}/>
                    </div>
                    <div className="col-md-4">
                         <Card img={<img src={gallery3} alt="" />}/>
                    </div>
                    <div className="col-md-4">
                        <Card img={<img src={gallery2} alt="" />}/>
                    </div>
                    <div className="col-md-4">
                        <Card img={<img src={gallery9} alt="" />}/>
                    </div>
                    <div className="col-md-4">
                         <Card img={<img src={gallery3} alt="" />}/>
                    </div>
                    <div className="col-md-4">
                        <Card img={<img src={gallery6} alt="" />}/>
                    </div>
                    <div className="col-md-4">
                        <Card img={<img src={gallery7} alt="" />}/>
                    </div>
                    <div className="col-md-4">
                         <Card img={<img src={gallery8} alt="" />}/>
                    </div>
                    <div className="col-md-4">
                        <Card img={<img src={gallery9} alt="" />}/>
                    </div>
                </div>
            </div>

        </div>
   </>
  )
}

export default Gallery