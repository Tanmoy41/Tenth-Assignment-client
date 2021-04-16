import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Products = ({ product }) => {
    console.log(product);

    const history = useHistory();
    const handleClick = (id) => {
        const url = `/checkout/${id}`;
        history.push(url)
        console.log(id);
    }

    const { name, color, price, picture, _id } = product;

    return (
        <div style={{ float: 'left', className: 'row' }}>
            <Card style={{ width: '18rem', margin: '30px 40px' }}>
                <Card.Img variant="top" src={picture} style={{ height: '200px', border: 0 }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Color: {color}</Card.Text>
                </Card.Body>
                <Card.Footer style={{ display: 'flex', justifyContent: 'space-between', border: 0, backgroundColor: 'white' }}>
                    <Card.Text style={{ color: 'Blue', fontSize: '25px', fontWeight: 'bold' }}>${price}</Card.Text>
                    <Button variant="primary" onClick={() => handleClick(_id)}>Buy Now</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Products;