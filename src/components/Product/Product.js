import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({product,handleAddBtn}) => {
    // console.log(product)
    const {id,name,img,seller,price,ratings}=product;
    return (
        <div className='product' data-aos="zoom-in-down">
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <p>Price: ${price}</p>
            <p>Seller: {seller}</p>
            <p>Ratings: {ratings}</p>
            
                <button onClick={()=>handleAddBtn(product)} className='add-btn'>
                   <p > Add to Cart</p>
                </button>
                <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon>
        
        </div>
    );
};

export default Product;