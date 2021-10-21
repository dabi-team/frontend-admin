import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import HorizontalCard from "../../components/Horizontalcard/Card";
import {
  addToCart,
  deleteInCart,
  fetchAllCart,
} from "../../redux/cart/cart_api_slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./style.scss";

const Cart = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.auth);
  const products = useAppSelector((state) => state.cart.cart);
  useEffect(() => {
    console.log(user?.user._id);
    console.log(user);

    dispatch(fetchAllCart(user?.user._id!));
  }, []);
  const addToCartLis = (productId: string) => {
    dispatch(
      deleteInCart({
        productId: productId,

        userId: user?.user._id!,
      })
    );
  };

  return (
    <div className="mx-12">
      <div className='flex justify-between'>
        <h1 className="text-xl px-9 poppins">Your Cart:</h1>
        <button className='bg-indigo-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-3xl mx-9'>Buy All</button>
      </div>
      <div>
        {products.map((product) => {
          return (
            <HorizontalCard
              name={product.product.title ?? "dsda"}
              price={0}
              clickAction={() => addToCartLis(product._id)}
              description={product.product.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
