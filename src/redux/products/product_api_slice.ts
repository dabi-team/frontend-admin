import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api";

import { Product } from "./products_model";
interface ProductState {
  product: Product[];
}
const initialState: ProductState = {
  product: [],
};

export const fetchAllProducts = createAsyncThunk("product/getAll", async () => {
  const responce: any = await api.get("/product/getAll");
  console.log(responce.data);
  return responce.data as any;
});
export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (id: string) => {
    const responce: any = await api.get("/product/getById");
    console.log(responce.data);
    return responce.data as any;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});
export default productSlice.reducer;
