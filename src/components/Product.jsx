import classes from "./Product.module.css";
import Card from "../UI/Card";
import { BsFillBookmarkHeartFill, BsCartPlusFill, BsBookmarkXFill } from "react-icons/bs"
import useWishlist from "../store/store";

function Product ({id, name, price, url}) {

    const addToWishlist = useWishlist( state => state.addToWishlist)
    const wishlist = useWishlist (state => state.wishlist)
    const removeFromWishlist = useWishlist (state => state.removeFromWishlist)

    const inWishlist = () => wishlist.some (item => item.id == id)

    const wishlistClickHandler = () => {
        const existing = wishlist.find (item => item.id == id)
        if (!existing) {
            addToWishlist({id, name, price})        
        } else {
            removeFromWishlist(id)
        }
    }


    return (
        <Card>
        <li className={classes.item}>
                {inWishlist() && <BsBookmarkXFill className={classes.wishListIcon} onClick={wishlistClickHandler}/>}
                {!inWishlist() && <BsFillBookmarkHeartFill className={classes.wishListIcon} onClick={wishlistClickHandler}/>}
            <div className={classes.image}>
                <img src={url}/>
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

