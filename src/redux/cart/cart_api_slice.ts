import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api";

import { Cart } from "./cart_model";

interface CartState {
  cart: Cart[];
}
const initialState: CartState = {
  cart: [],
};

export const fetchAllCart = createAsyncThunk(
  "cart/getAllProduct",
  async (userId: string) => {
    console.log(userId);

    const responce: any = await api.get("/cart/getAll/" + userId);
    console.log(responce);

    return responce.data as any;
  }
);
interface CartInfo {
  userId: string;
  productId: string;
}
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (cartInfo: CartInfo) => {
    await api.post("/cart/add", {
      userId: cartInfo.userId,
      productId: cartInfo.productId,
    });
    const responces: any = await api.get("/cart/getAll/" + cartInfo.userId);

    return responces.data as any;
  }
);
export const increaseInCart = createAsyncThunk(
  "cart/increaseCart",
  async (id: string) => {
    await api.post("/cart/increase", {
      id,
    });
    const responces: any = await api.get("/cart/getAll/" + id);
    console.log(responces);

    return responces.data as any;
  }
);
export const decreaseInCart = createAsyncThunk(
  "cart/decreaseCart",
  async (id: string) => {
    await api.post("/cart/decrease", {
      id,
    });
    const responces: any = await api.get("/cart/getAll/" + id);
    console.log(responces);

    return responces.data as any;
  }
);
export interface CartDeleInfo {
  userId: string;
  productId: string;
  cartId: string;
}
export const addToBuyAll = createAsyncThunk(
  "buynow/addToBuynowAll",
  async (cartInfos: any) => {
    cartInfos.forEach(async (cartInfo: any) => {
      await api.post("/buynow/add", {
        userId: cartInfo.userId,
        productId: cartInfo.productId,
        quantity: 1,
        status: false,
      });
      await api.delete("/cart/remove/" + cartInfo.cartId);
    });
    const responces: any = await api.get("/cart/getAll/" + cartInfos[0].userId);
    console.log(responces);

    return responces.data as any;
  }
);

export const deleteInCart = createAsyncThunk(
  "cart/delete",
  async (cartInfo: CartInfo) => {
    await api.delete("/cart/remove/" + cartInfo.productId);
    const responces: any = await api.get("/cart/getAll/" + cartInfo.userId);

    return responces.data as any;
  }
);
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    builder.addCase(increaseInCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    builder.addCase(decreaseInCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    builder.addCase(deleteInCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    builder.addCase(addToBuyAll.fulfilled, (state, action) => {
      state.cart = [];
    });
  },
});
export default CartSlice.reducer;
