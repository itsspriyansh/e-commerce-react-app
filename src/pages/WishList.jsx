import React from 'react'
import classes from "../components/ProductsList.module.css"
import Product from '../components/Product';
import { useSelector } from 'react-redux';

function WishList(props) {

    const wishlistItems = useSelector (state => state.wishlist.items)

    return (
        <div>
            <header>
                <h1>Wishlist</h1>
            </header>
            <div className={classes.container}>
                <div className={classes.notesList}>
                    {
                    wishlistItems.map (product => {
                        return (
                            <Product 
                            key={product.id} 
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            />
                            )
                        })                
                    }
                </div>
            </div>
        </div>
    )
}

export default WishList;

