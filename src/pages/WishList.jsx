import React from 'react'
import classes from "../components/ProductsList.module.css"
import Product from '../components/Product';

function WishList() {
  return (
    <div>
        <header>
            <h1>Wishlist</h1>
        </header>
        <div className={classes.container}>
            <div className={classes.notesList}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    </div>
  )
}

export default WishList;


