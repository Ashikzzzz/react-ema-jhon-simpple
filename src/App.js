// import logo from './logo.svg';
import "./App.css";

// aos imported
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import About from "./components/About/About";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("products.json");
          },
          element: <Shop></Shop>,
        },
        {
          path: "orders",
          loader: async () => {
            return fetch("products.json");
          },
          element: <Orders></Orders>,
        },
        {
          path: "inventory",
          element: <Inventory></Inventory>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
