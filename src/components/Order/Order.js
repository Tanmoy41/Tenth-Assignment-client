import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderDetails from '../OrderDetails/OrderDetails';

const Order = () => {
    const [bundles, setBundles] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch(`http://localhost:5000/orderHistory?email=` + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBundles(data))
    }, [loggedInUser.email])
    return (
        <div>
            <h2 style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold', margin: '30px', color: 'coral' }}>My Orders</h2>
            {
                bundles.map(bundle => <OrderDetails bundle={bundle}></OrderDetails>)
            }
        </div>
    );
};

export default Order;