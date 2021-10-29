import React from 'react';
import pic1 from '../../Images/Gellery/pic1.jpg'
import pic2 from '../../Images/Gellery/pic 2.jpg'
import pic3 from '../../Images/Gellery/pic 3.jpg'
import pic4 from '../../Images/Gellery/pic 4.jpg'
import pic5 from '../../Images/Gellery/pic4.jpg'
const TourGellery = () => {
    return (
        <div>
            <div className="row g-2">
                <div className="col-md-4 col-12">
                    <h2>Why Choose use</h2>
                </div>
                <div className="col-md-8 col-12">
                    <div className="col-md-4">
                        <img src={pic1} alt="" className='img-fluid' />
                        <img src={pic2} alt="" className='img-fluid' />
                        <img src={pic3} alt="" className='img-fluid' />
                        <img src={pic4} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourGellery;