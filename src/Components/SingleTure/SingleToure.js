import React from 'react';
import axios from 'axios'
import { Card, Col } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import "./SingleToure.css"

const SingleToure = (props) => {
    const { user } = useAuth()
    const { tourName, description, tourImg } = props.tour
    const index = props.index
    const handelBooking = (index) => {
        const data = props.tours[index];
        data.email = (user.email)
        data.status = 'pending'
        axios.post('https://sleepy-springs-36451.herokuapp.com/addOrder', data)
            .then(res => {
                console.log(res)
            })
    }
    return (
        <div >
            <Col>
                <Card className='tour-service shadow'>
                    <Card.Img variant="top" src={tourImg} />
                    <Card.Body>
                        <Card.Title className='text-primary'>{tourName}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <button className='buy-btn' onClick={() => handelBooking(index)}>Book now</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleToure;