import { getStoredCart } from "../utilities/fakedb";

export const productsAndCart = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();
  // console.log(products);
  //   get cart

  const savedCart = getStoredCart();
  const previousCart = [];
  //   console.log("savedacrt", savedCart);
  for (const id in savedCart) {
    const addedProducts = products.find((product) => product.id === id);
    if (addedProducts) {
      const quantity = savedCart[id];
      addedProducts.quantity = quantity;
      previousCart.push(addedProducts);
    }
  }

  return { products, previousCart };
};
