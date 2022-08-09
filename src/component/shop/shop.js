import React, { useState } from 'react';
import fakeData from "../../fakeData";
import './shop.css'

const  Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const[products] =  useState(first10);
    

    return (
        <div className='shop-container'>
            <div className='product-container'>
                <ul>{products.map(element =>
                    <li>{element.name}</li>
                )} 
                </ul> 
            </div>
            <div className='cart-container'>
                <h3>this is cart</h3>
            </div>
        </div>
    );
};

export default Shop;