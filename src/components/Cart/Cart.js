import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div>
            <h1>Order summery</h1>
           <div className='my-cart'>
           <h4>selected item: {cart.length}</h4>
           </div>
        </div>
    );
};

export default Cart;