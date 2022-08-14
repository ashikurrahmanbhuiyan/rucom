//import { toContainHTML } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = cart.reduce((total,prd) => total+prd.price,0)
    let shipping = 12.99;
    if(total >35){
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    total = total +shipping;
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Item ordered : {cart.length}</p>
            <p>Total Price : {total}</p>
            <p><small>shiping : {shipping}</small></p>
        </div>
    );
};

export default Cart;