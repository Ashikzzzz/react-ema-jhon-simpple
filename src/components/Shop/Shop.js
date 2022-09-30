import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {

    // states 
    const [products,setProducts]=useState([])
    console.log(products)

    // data loaded 
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='shop-container'>
            <div className="product-container">
               <h1> This is shop{products.length}</h1>
            </div>
            <div className="cart-container">
            <h1>Order summery</h1>
            </div>
        </div>
    );
};

export default Shop;