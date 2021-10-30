import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../../Components/Banner/Banner';
import SingleToure from '../../Components/SingleTure/SingleToure';
import './Home.css'
import img1 from '../../Images/Guide/img39.jpg'
import img2 from '../../Images/Guide/img42.jpg'
import img3 from '../../Images/Guide/img43.jpg'
import img4 from '../../Images/Guide/img38.jpg'
import TourGellery from '../../Components/TourGellery/TourGellery';

const Home = () => {
    const [tours, setTours] = useState([])
    useEffect(() => {
        fetch('https://sleepy-springs-36451.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className="my-5">
                <h1 className='mb-4'>Special Tour Package</h1>
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        {
                            tours.map((tour, index) =>
                                <SingleToure
                                    key={tour._id}
                                    tour={tour}
                                    index={index}
                                    tours={tours}
                                ></SingleToure>)
                        }
                    </Row>
                </Container>
                <Container>
                    <div className="row g-6 my-4 ">
                        <h1>OUR TOUR GUIDE</h1>
                        <div className="col-md-3 col-12 tour-guide p-2">
                            <img src={img1} alt="" className='img-fluid rounded' />
                            <h4>Alison White</h4>
                            <p className='text-primary'>Tavel Guide</p>
                            <div className='social-icon'>
                                <i className="fab fa-facebook-square"></i>
                                <i className="fab fa-instagram-square"></i>
                                <i className="fab fa-twitter-square"></i>
                                <i className="fab fa-linkedin"></i>
                            </div>
                        </div>
                        <div className="col-md-3 col-12 tour-guide p-2">
                            <img src={img2} alt="" className='img-fluid rounded' />
                            <h4>Jennie Bennett</h4>
                            <p className='text-primary'>Toure Guide</p>
                            <div className='social-icon'>
                                <i className="fab fa-facebook-square"></i>
                                <i className="fab fa-instagram-square"></i>
                                <i className="fab fa-twitter-square"></i>
                                <i className="fab fa-linkedin"></i>
                            </div>
                        </div>
                        <div className="col-md-3 col-12 tour-guide p-2 ">
                            <img src={img3} alt="" className='img-fluid rounded' />
                            <h4>William Hobb</h4>
                            <p className='text-primary'>Travel Guide</p>
                            <div className='social-icon'>
                                <i className="fab fa-facebook-square"></i>
                                <i className="fab fa-instagram-square"></i>
                                <i className="fab fa-twitter-square"></i>
                                <i className="fab fa-linkedin"></i>
                            </div>
                        </div>
                        <div className="col-md-3 col-12 tour-guide p-2">
                            <img src={img4} alt="" className='img-fluid rounded' />
                            <h4>Sony Madison</h4>
                            <p className='text-primary'>Toure Guide</p>
                            <div className='social-icon'>
                                <i className="fab fa-facebook-square"></i>
                                <i className="fab fa-instagram-square"></i>
                                <i className="fab fa-twitter-square"></i>
                                <i className="fab fa-linkedin"></i>
                            </div>
                        </div>
                    </div>
                </Container>
                <TourGellery></TourGellery>
            </div>
        </div>
    );
};

export default Home;