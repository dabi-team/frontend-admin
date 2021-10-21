import React from "react";
import logo from "../../logo.svg";
import "./style.scss";
interface CardProp {
  name: string;
  description: string;
  price: number;
  clickAction: any;
  image: string;
}

const HorizontalCard = (props: CardProp) => {
  return (
    <div className="horizontal-card-container shadow-lg grid grid-flow-col">
      <img src={props.image} alt="laptop" className="col-span-1" />
      <div className="details-container col-span-12">
        <div className="buying flex justify-between">
          <div>
            <div className="text-xl mb-1">{props.name}</div>
            <div className="description">{props.description}</div>
          </div>
          <div className="price text-lg font-bold pt-2">$1000</div>
        </div>
        <button className="mt-4" onClick={props.clickAction}>
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default HorizontalCard;
