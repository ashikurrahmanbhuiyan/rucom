import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './product.css'

const Product = (props) => {
    const {img,name,seller,price,stock} =  props.product ;
    return (
        <div className='product'>
            <div>
                <img src={img} alt=''/>
            </div>
            <div className='pro-name'>
                <h5>{name}</h5>
                <p><small>by : {seller}</small></p>
                <p>${price}</p>
                <p><small>only{stock} left in stock - order soon</small></p>
                <button 
                className='cart'
                    onClick={()=> props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
            </div>
        </div>
    );
};

export default Product;