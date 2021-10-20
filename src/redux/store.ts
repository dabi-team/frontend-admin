import { configureStore } from "@reduxjs/toolkit";
import auth_api_slice from "./auth/auth_api_slice";
import cart_api_slice from "./cart/cart_api_slice";
import product_api_slice from "./products/product_api_slice";
import wishlist_api_slice from "./wishlist/wishlist_api_slice";

export const store = configureStore({
  reducer: {
    auth: auth_api_slice,
    products: product_api_slice,
    cart: cart_api_slice,
    wish: wishlist_api_slice,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
