import React, { useState } from 'react'
import ProductList from '../components/ProductsList';
import classes from "./AllProducts.module.css";
import { nanoid } from 'nanoid';

function AllProducts() {
    
    const [products, setProducts] = useState ([
    {
        id : nanoid(),
        name : "sample1",
        price : "$25",
        inWishList : false,
        inCart : false,
    },
    {
        id : nanoid(),
        name : "sample2",
        price : "$25",
        inWishList : false,
        inCart : false,
    },
    {
        id : nanoid(),
        name : "sample3",
        price : "$25",
        inWishList : false,
        inCart : false,
    },
    {
        id : nanoid(),
        name : "sample4",
        price : "$25",
        inWishList : false,
        inCart : false,
    },
])
    


  return (
    <div>
        <header>
            <h1>All Products</h1>
        </header>
        <ProductList products={products} />
    </div>
  )
}

export default AllProducts;

