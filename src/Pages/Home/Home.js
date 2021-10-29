import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../../Components/Banner/Banner';
import SingleToure from '../../Components/SingleTure/SingleToure';
import './Home.css'

const Home = () => {
    const [tours, setTours] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className="my-5">
                <h1 className='mb-4'>Special Tour Package In Sundarban</h1>
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        {
                            tours.map(tour => <SingleToure
                                key={tour._id}
                                tour={tour}
                            ></SingleToure>)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;