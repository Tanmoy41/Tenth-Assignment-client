import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const CheckOut = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    console.log(product);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    const productData = {
        name: product.name,
        price: product.price,
        color: product.color,
        picture: product.picture
    }

    const { name, price } = product;

    const orderData = { ...loggedInUser, consignment: productData, orderTime: new Date().toDateString('dd/MM/yyyy') }

    const handleCheckOut = () => {
        fetch(`http://localhost:5000/addOrder`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
        .then(res => res.json())
        .then(data => {
            if (data){
                alert("Order is Submitted Successfully")
            }
        })
    }


    return (
        <div style={{ backgroundColor: 'lightblue', height: '790px' }}>
            <div style={{ width: '800px', marginLeft: '350px' }}>
                <h1 style={{ textAlign: 'center', color: 'green', margin: '20px 20px' }}>CheckOut</h1>
                <Table responsive="sm md lg xl">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>1</td>
                            <td>${price}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>1</td>
                            <td>${price}</td>
                        </tr>
                    </tbody>
                </Table>
                <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                    <Button variant="primary" onClick={handleCheckOut}>CheckOut</Button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;