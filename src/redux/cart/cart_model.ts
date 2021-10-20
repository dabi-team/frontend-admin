import { Product } from "../products/products_model";

export interface Cart {
  _id: string;
  userId: string;
  productId: string;
  quantity: number;
  product: Product;
}
