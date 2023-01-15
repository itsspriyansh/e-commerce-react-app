import { create } from "zustand"

const useWishlist = create ((set) => ({

   wishlist : [],
   addToWishlist : (item) =>  {
        set(state => ({
            wishlist : [item, ...state.wishlist]
        }))
    },
    removeFromWishlist : (id) => {
        set(state => ({
            wishlist : state.wishlist.filter (object => object.id !== id)
        }))
    }

}))

export default useWishlist

