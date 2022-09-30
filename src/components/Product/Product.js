import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {name,img,seller,price,ratings}=product;
    return (
        <div className='product'>
            <img src={img} alt="" />
        </div>
    );
};

export default Product;