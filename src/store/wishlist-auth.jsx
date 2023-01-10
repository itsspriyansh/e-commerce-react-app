import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice ({
    name : "wishlist",
    initialState : {
        items : [],
        totalItems : 0,
    },
    reducers : {
        inWishlist (state, action) {
            const itemIsPresent = state.items.some (item => item.id === action.payload.id)
            return itemIsPresent
        },
        wishlistHandler (state, action) {
            const existingItem = state.items.find (item => item.id === action.payload.id)
            
            if (!existingItem) {
                state.items.push(action.payload)
                state.totalItems++
            } else {
                const newState = state.items.filter (item => item === action.payload)
                state.items = newState
            }
        }
    }
})

export const wishlistActions = wishlistSlice.actions
export default wishlistSlice
