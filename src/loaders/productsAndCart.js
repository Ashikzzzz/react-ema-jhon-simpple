import { getStoredCart } from "../utilities/fakedb";

export const productsAndCart = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();
  // console.log(products);
  //   get cart

  const savedCart = getStoredCart();
  // console.log(savedCart);
  const initialCart = [];
  console.log(initialCart);
  //   console.log("savedacrt", savedCart);
  for (const id in savedCart) {
    const addedProducts = products.find((product) => product.id === id);
    // console.log(addedProducts);
    if (addedProducts) {
      const quantity = savedCart[id];
      addedProducts.quantity = quantity;
      initialCart.push(addedProducts);
    }
  }

  return { products, initialCart };
};
