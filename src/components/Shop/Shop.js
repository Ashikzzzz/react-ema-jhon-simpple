import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  //products data loaded
  const products = useLoaderData();

  // states
  const [cart, setCart] = useState([]);
  // console.log(cart);

  // load data from local storage
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProducts = products.find((product) => product.id === id);
      if (addedProducts) {
        const quantity = storedCart[id];
        addedProducts.quantity = quantity;
        savedCart.push(addedProducts);
      }
    }
    setCart(savedCart);
  }, [products]);

  // add btn eventhandler
  const handleAddBtn = (SelectedProduct) => {
    let newCart = [];

    const exists = cart.find((product) => product.id === SelectedProduct.id);
    if (!exists) {
      SelectedProduct.quantity = 1;
      newCart = [...cart, SelectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== SelectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    // console.log(newCart)
    setCart(newCart);
    addToDb(SelectedProduct.id);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {/* sending products data from shop to product  */}
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddBtn={handleAddBtn}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        {/* sending cart array from shop to cart compo  */}

        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
