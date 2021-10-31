import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()
    const [deleted, setDeleted] = useState(null)
    const userEmail = (user.email);
    useEffect(() => {
        fetch(`https://sleepy-springs-36451.herokuapp.com/myOrders/${userEmail}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [deleted])

    const handelOrderPlace = (id) => {
        const proceed = window.confirm('Are you sure to Delete Order')
        if (proceed) {
            fetch(`https://sleepy-springs-36451.herokuapp.com/deleteOrders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Success fully delete')
                        setDeleted(true)
                    }
                    else {
                        setDeleted(false)
                    }

                })
        }

    }
    return (
        <div className='my-4'>
            <h2>Order Summary !</h2>
            <h6>Total order : {orders.length}</h6>
            <div className="my-4">
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        {
                            orders.map(order =>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={order.tourImg} />
                                        <Card.Body>
                                            <Card.Title>{order.tourName}</Card.Title>
                                            <Card.Text>
                                                <h6>Order id : {order._id}</h6>
                                                <p>Package Price : {order.price}</p>
                                            </Card.Text>
                                            <Link to='/placeOrder'><button className='btn btn-info m-2'>Place Order</button></Link>
                                            <button className='btn btn-danger' onClick={() => handelOrderPlace(order._id)}><i class="fas fa-trash-alt"></i> Cancel</button>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default MyOrders;