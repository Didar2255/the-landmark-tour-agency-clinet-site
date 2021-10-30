import React from 'react';
import pic1 from '../../Images/Gellery/pic1.jpg'
import pic3 from '../../Images/Gellery/1.jpg'
import pic4 from '../../Images/Gellery/2.jpg'
import pic5 from '../../Images/Gellery/12.jpg'
import pic6 from '../../Images/Gellery/7.jpg'
import { Container } from 'react-bootstrap';
import "./TourGellery.css"
const TourGellery = () => {
    return (
        <div className='p-3 bg-light'>
            <Container>
                <div className="row g-4 d-flex align-items-center justify-content-between">
                    <div className="col-md-4 col-12 my-5">
                        <h1>Why Choose us</h1>
                        <p>We are the best tour agency in Bangladesh.We are private retailer or public service that provides travel and tourism-related services.</p>
                        <button className="family-btn">Join our Family <i className="fas fa-arrow-right"></i></button>
                    </div>
                    <div className="col-md-8 col-12">
                        <div>
                            <div>
                                <img src={pic1} alt="" className='img-fluid rounded' />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="row g-3 my-4">
                <div className="col-md-3 col-12">
                    <img src={pic3} alt="" className='img-fluid rounded' />
                </div>
                <div className=" col-md-3 col-12">
                    <img src={pic4} alt="" className='img-fluid rounded' />
                </div>
                <div className=" col-md-3 col-12">
                    <img src={pic5} alt="" className='img-fluid rounded' />
                </div>
                <div className=" col-md-3 col-12">
                    <img src={pic6} alt="" className='img-fluid rounded' />
                </div>
            </div>
        </div >
    );
};

export default TourGellery;