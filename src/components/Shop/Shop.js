import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    // states 
    const [products,setProducts]=useState([])
    const[cart,setCart]=useState([])
    
    // console.log(products)

    // data loaded 
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    // add btn eventhandler 
    const handleAddBtn=(product)=>{
        const newCart=[...cart,product]
        // console.log(newCart)
        setCart(newCart)
 }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {/* sending products data from shop to product  */}
              {
                    products.map(product=><Product
                    key={product.id}
                    product={product}
                    handleAddBtn={handleAddBtn}
                    ></Product>)
              }
            </div>
            <div className="cart-container">
            <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;