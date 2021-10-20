import { Product } from "../products/products_model";

export interface Wishlist {
  _id: string;
  userId: string;
  productId: string;
  product: Product;
}
