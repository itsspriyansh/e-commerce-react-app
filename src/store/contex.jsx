import { createContext, useState } from "react";

export const Context = createContext ({
    addToWishlist : (favoriteProduct) => {},
    WishList : [],
})

export function ContextProvider (props) {
    const [userFavorites, setUserFavorites] = useState ([]);

    function addWishlistHandler (favoriteProduct) {
        setUserFavorites (prevUserFavorite => {
            return prevUserFavorite.concat (favoriteProduct);
        })
    }

    const context = {
        addToWishList : addWishlistHandler,
        WishList : userFavorites
    }

    return (
        <Context.Provider value = {context}>
            {props.children}
        </Context.Provider>
    )
}

export default Context;

