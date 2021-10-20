import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Card from "../../components/card/Card";
import { addToCart } from "../../redux/cart/cart_api_slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAllProducts } from "../../redux/products/product_api_slice";
import "./style.scss";

const Page1 = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.products.product);
  const user = useAppSelector((state) => state.auth.auth);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  const history = useHistory();
  const addToCartLis = (productId: string) => {
    dispatch(
      addToCart({
        userId: user?.user._id!,
        productId: productId,
      })
    );
  };

  return (
    <div className="Discover-main">
      {products.map((product) => {
        return (
          <Card
            name={product.title ?? "dsda"}
            categorie={product.category ?? "dfa"}
            price={0}
            clickAction={() => addToCartLis(product._id)}
            photoclick={() => {
              history.push("/Product");
            }}
          />
        );
      })}
    </div>
  );
};

export default Page1;
