import React from 'react';
import { Button, Card } from 'react-bootstrap';

const OrderDetails = ({ bundle }) => {
    console.log(bundle);
    const { name, color, picture, price } = bundle.consignment;

    const handleAlert = () => {
        alert("PARCEL is Going");
    }
    return (
        <div style={{ float: 'left', marginLeft: '40px' }} className="row">
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={picture} style={{ height: '200px', width: '200px' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{color}</Card.Text>
                    <Card.Text>${price}</Card.Text>
                    <Button variant="primary" onClick={handleAlert}>PARCEL ORDER</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default OrderDetails;