import React from 'react'
import gallery1 from '../MyImages/gallery1.jpg';
import gallery2 from '../MyImages/gallery2.jpg';
import gallery3 from '../MyImages/gallery3.jpg';
import gallery6 from '../MyImages/gallery6.jpg';
import gallery7 from '../MyImages/gallery7.jpg';
import gallery8 from '../MyImages/gallery8.jpg';
import gallery9 from '../MyImages/gallery9.jpg';
function Gallery() {

    const images = [gallery1, gallery2, gallery3, gallery6, gallery7, gallery8, gallery9];
    return (
        <>
            <div className="container mb-5 pt-5">
                <div className="container text-center ">
                    <h1>Gallery</h1>
                    <div className="row ">
                        {
                            images.map((val) => (
                                <div className="col-lg-4 col-md-12 mb-4 mb-2">
                                    <img src={val} className="w-100 h-100 " />
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Gallery