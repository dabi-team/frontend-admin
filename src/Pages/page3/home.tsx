import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchAllBuy } from "../../redux/buy_now/buy_now_api_slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./style.scss";
import logo from "../../logo.svg";

const Page3 = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.auth);
  const products = useAppSelector((state) => state.buynow.buynow);
  const location = useLocation();
  useEffect(() => {
    dispatch(fetchAllBuy(user?.user._id!));
  }, []);
  return (
    <div className="nav-container">
      {products.map((product) => (
        <div>
          <div className="horizontal-card-container shadow-lg grid grid-flow-col">
            <img
              src={product.product.images[0]}
              alt="laptop"
              className="col-span-1"
            />
            <div className="details-container col-span-12">
              <div className="buying flex justify-between">
                <div>
                  <div className="text-xl mb-1">{product.product.title}</div>
                  <div className="description">
                    {product.product.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page3;
