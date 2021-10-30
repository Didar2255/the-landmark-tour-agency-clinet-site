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
        fetch(`http://localhost:5000/myOrders/${userEmail}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [deleted])

    const handelOrderPlace = (id) => {
        const proceed = window.confirm('Are you sure to Delete Order')
        if (proceed) {
            fetch(`http://localhost:5000/deleteOrders/${id}`, {
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
        <div>
            <h2>All Order here {orders.length}</h2>
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
                                                <h4>Package Price : {order.price}</h4>
                                            </Card.Text>
                                            <Link to='/placeOrder'><button className='btn btn-info m-2'>Place Order</button></Link>
                                            <button className='btn btn-danger' onClick={() => handelOrderPlace(order._id)}>Cancel</button>

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