import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api";

import { Wishlist } from "./wishlist_model";

interface WishState {
  wishlist: Wishlist[];
}
const initialState: WishState = {
  wishlist: [],
};

export const fetchAllWish = createAsyncThunk(
  "wishList/getAllProduct",
  async (userId: string) => {
    const responce: any = await api.get("/wishlist/" + userId);
    // console.log(responce.data);
    return responce.data as any;
  }
);
interface WishInfo {
  userId: string;
  productId: string;
}
export const addToWish = createAsyncThunk(
  "wishlist/addToWishlist",
  async (cartInfo: WishInfo) => {
    await api.post("/wishlist/addToWishlist", {
      userId: cartInfo.userId,
      productId: cartInfo.productId,
    });
    const responces: any = await api.get(
      "/wishlist/getAll/" + cartInfo.productId
    );
    console.log("lol done");

    return responces.data as any;
  }
);

const WishSlice = createSlice({
  name: "Wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllWish.fulfilled, (state, action) => {
      state.wishlist = action.payload;
    });
    builder.addCase(addToWish.fulfilled, (state, action) => {
      state.wishlist = action.payload;
    });
  },
});
export default WishSlice.reducer;
