import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"
import img1 from '../../Images/Banner/pic 1.jpg'
import img2 from '../../Images/Banner/pic 2.jpg'
import img3 from '../../Images/Banner/pic 3.png'
const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>TRAVELLING AROUND THE WORLD</h1>
                        <p>Travelling make man Refresh.TO go around the world.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className='text-dark'>EXPRIENCE THE NATURE'S BEAUTY</h1>
                        <p className='text-dark'>Nature is a God gifted beautiful.Enjoy the Nature and be happy.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>EXPLOR WORLD HERITAGE TURE IN SUNDORBON</h1>
                        <p>The place between your comfort zone and your dream is where life takes place.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;