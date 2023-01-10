import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice ({
    name : "wishlist",
    initialState : {
        items : [],
        totalItems : 0,
    },
    reducers : {
        addToWishlist (state, action) {
            const existingItem = state.items.some (item => item.id === action.payload.id)
            if (!existingItem) {
                state.items.push (action.payload)
            }
        }
    }
})

export const wishlistActions = wishlistSlice.actions
export default wishlistSlice

