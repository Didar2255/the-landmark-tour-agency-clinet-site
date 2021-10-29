import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    console.log(orders)
    const { user } = useAuth()
    const userEmail = (user.email);
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${userEmail}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [userEmail])

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