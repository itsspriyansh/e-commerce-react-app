import classes from "./MainNavigation.module.css"
import { Link } from "react-router-dom"

function MainNavigation () {

    return (
        <header className = {classes.header}>
            <div className = {classes.logo}>goCart</div>
            <nav>
                <ul>
                    <li><Link to='/'>AllProducts</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                    <li><Link to='/wishlist'>Wishlist</Link></li>
                    <li><Link to='/checkout'>Checkout</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;

