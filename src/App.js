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
        name : "MacBook Pro",
        price : "$1200",
        url : "https://images.macrumors.com/t/PJemPEph0tylNgWFGNZ8o-JjfcI=/2769x/article-new/2013/09/16-inch-macbook-pro.jpg",
    },
    {
        id : nanoid(),
        name : "Alienware Aurora R13",
        price : "$1350",
        url : "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/alienware-desktops/alienware-aurora-r13/media-gallery/mg-0010-alienware-aurora-r13-lunar-light-wh-clear-panel-liquid-cooled-liq-cooled/desktop_alienware_awaurora_r13_wh_clear-panel_liq-cooled_gallery_1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3662&hei=3987&qlt=100,1&resMode=sharp2&size=3662,3987&chrss=full&imwidth=5000",
    },
    {
        id : nanoid(),
        name : "HP Specter x360",
        price : "$890",
        url : "https://m.media-amazon.com/images/I/81KPk6ZeglL._SL1500_.jpg",
    },
    {
        id : nanoid(),
        name : "boAt Airdopes 121 Pro",
        price : "$25",
        url : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/iiolo_800x.png?v=1658150489",
    },
    {
        id : nanoid(),
        name : "Bose noise cancelling 700",
        price : "$330",
        url : "https://m.media-amazon.com/images/I/51BcwAyqVZL._AC_SS450_.jpg",
    },
    {
        id : nanoid(),
        name : "Amazon Echo",
        price : "$120",
        url : "https://i.pcmag.com/imagery/reviews/00EU3U5rRoe9swRlkJE2yDa-1..v1601052236.jpg",
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

