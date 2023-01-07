import classes from "./Product.module.css";
import Card from "../UI/Card";
import { BsFillBookmarkHeartFill, BsCartPlusFill } from "react-icons/bs"
import { useContext } from "react";
import { Context } from "../store/contex";

function Product (props) {

    const context = useContext (Context)

    function addToWishlistHandler () {
        
        context.addToWishlist ({
            id : props.id,
            name : props.name,
            price : props.price,
        })
        console.log (context.WishList)
    }

    return (
        <Card>
        <li className={classes.item}>
                <BsFillBookmarkHeartFill className={classes.wishListIcon} onClick={addToWishlistHandler}/>
            <div className={classes.image}>
                <img src="https://thumbs.dreamstime.com/b/product-icon-collection-trendy-modern-flat-linear-vector-white-background-thin-line-outline-illustration-130947207.jpg"/>
            </div>
            <div className={classes.content}>
                <p>{props.name}</p>
                <p>{props.price}</p>
            </div>
            <div className={classes.actions}>
                <button>Info</button>
                <button id={classes.buttonCart}>
                    <BsCartPlusFill className={classes.addToCartIcon} />
                </button>
            </div>
        </li>
        </Card>
    )
}

export default Product;

