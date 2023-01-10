import classes from "./Product.module.css";
import Card from "../UI/Card";
import { BsFillBookmarkHeartFill, BsCartPlusFill } from "react-icons/bs"
import { useDispatch } from "react-redux";
import { wishlistActions } from "../store/wishlist-auth";

function Product ({id, name, price}) {

    const dispatch = useDispatch()
    
    function wishlistClickHandler () {
        dispatch (wishlistActions.wishlistHandler({id, name, price}))
    }
    

    return (
        <Card>
        <li className={classes.item}>
                <BsFillBookmarkHeartFill className={classes.wishListIcon} onClick={wishlistClickHandler}/>
            <div className={classes.image}>
                <img src="https://thumbs.dreamstime.com/b/product-icon-collection-trendy-modern-flat-linear-vector-white-background-thin-line-outline-illustration-130947207.jpg"/>
            </div>
            <div className={classes.content}>
                <p>{name}</p>
                <p>{price}</p>
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

