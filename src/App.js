import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import WishList from "./pages/WishList";
import { useState} from "react";
import { nanoid } from "nanoid";

function App() {

  const [products, setProducts] = useState ([
    {
        id : nanoid(),
        name : "sample1",
        price : "$25",
    },
    {
        id : nanoid(),
        name : "sample2",
        price : "$25",
    },
    {
        id : nanoid(),
        name : "sample3",
        price : "$25",
    },
    {
        id : nanoid(),
        name : "sample4",
        price : "$25",
    },
])

  return (
    <div>
      <Layout>
      <Routes>
        <Route path = "/" element={<AllProducts products={products} setProducts={setProducts} />}></Route>
        <Route path = "/cart" element={<Cart products={products} setProducts={setProducts} />}></Route>
        <Route path = "/wishlist" element={<WishList products={products} setProducts={setProducts} />}></Route>
        <Route path = "/checkout" element={<Checkout products={products} setProducts={setProducts} />}></Route>
      </Routes>
    </Layout>
    </div>
  );
}

export default App;

