import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from '../Products/Products';
import { CircularProgress } from '@material-ui/core';


const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            {
                products.length === 0 && <CircularProgress style={{ marginLeft: '750px' }} />
            }
            {
                products.map(product => <Products product={product}></Products>)
            }
        </div>
    );
};

export default Home;