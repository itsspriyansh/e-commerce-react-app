import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./wishlist-auth";

const store = configureStore ({
    reducer : {
        wishlist : wishlistSlice.reducer,
    }
})

export default store
