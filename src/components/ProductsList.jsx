import Product from "./Product";
import classes from "./ProductsList.module.css"

function ProductList (props) {

    return (
        <div className={classes.container}>
            <div className={classes.notesList}>

                {props.products.map(productDetails => {
                    return (
                        <Product 
                        key={productDetails.id} 
                        id={productDetails.id} 
                        name={productDetails.name}
                        price={productDetails.price}
                        url={productDetails.url}
                        />
                    )
                })}

            </div>
        </div>
    )
}

export default ProductList;

