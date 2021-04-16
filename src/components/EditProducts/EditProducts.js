import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const EditProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    console.log(products)

    const deleteProduct = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {

                }
            })

    }
    return (
        <div style={{ backgroundColor: 'lightseagreen' }}>
            <Table responsive="sm md lg xl">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Product Name</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    products.map(product => <tbody>
                        <tr>
                            <td><img src={product.picture} alt="" style={{ width: '100px', height: '100px' }} /></td>
                            <td>{product.name}</td>
                            <td>{product.color}</td>
                            <td>{product.price}</td>
                            <td><Button variant="danger" onClick={() => deleteProduct(product._id)}>Delete</Button></td>
                        </tr>
                    </tbody>
                    )
                }
            </Table>
        </div>
    );
};

export default EditProducts;