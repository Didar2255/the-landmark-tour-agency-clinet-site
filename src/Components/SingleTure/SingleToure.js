import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleToure = (props) => {
    const { tourName, description, tourImg } = props.tour
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={tourImg} />
                    <Card.Body>
                        <Card.Title>{tourName}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleToure;