import React, { useState } from 'react';
import fakeData from "../../fakeData";
import './shop.css'
import Product from '../product/product';

const  Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const[products] =  useState(first10);
    // eslint-disable-next-line no-unused-vars
    const[cart,setCart] = useState([]);

    const handleAddProduct = (product)=>{
console.log("product added",product);
const newCart = [...cart,product];
// eslint-disable-next-line no-const-assign
setCart = newCart
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {products.map(element =>
                    <Product
                    product = {element}
                    handleAddProduct={handleAddProduct}></Product>
                )} 
            </div>
            <div className='cart-container'>
                <h3>this is cart</h3>
                <h5>Order Summery: {cart.length}</h5>
            </div>
        </div>
    );
};

export default Shop;