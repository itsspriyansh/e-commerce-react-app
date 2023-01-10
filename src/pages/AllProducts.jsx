import React, { useContext, useEffect, useState } from 'react'
import ProductList from '../components/ProductsList';
import classes from "./AllProducts.module.css";

function AllProducts({products}) {

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

