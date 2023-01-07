import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import WishList from "./pages/WishList";

function App() {
  return (
    <div>
      <Layout>
      <Routes>
        <Route path = "/" element={<AllProducts />}></Route>
        <Route path = "/cart" element={<Cart />}></Route>
        <Route path = "/wishlist" element={<WishList />}></Route>
        <Route path = "/checkout" element={<Checkout />}></Route>
      </Routes>
    </Layout>
    </div>
  );
}

export default App;

