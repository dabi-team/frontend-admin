import React from "react";
import logo from '../../logo.svg';
import './style.scss'
const Card = () => {
    return(
  <div className='card-container shadow-lg'>
     <img src={logo} alt='laptop'/>
     <div className='details-container'>
       <div className='font-bold text-xl mb-1'>laptop</div>
        <div className="description">Asus</div>
        <div className="buying flex justify-between">
          <div className="price text-lg font-bold pt-2">$1000</div>
          <div className="flex">
            <button>Buy</button>
            <button>Cart</button>
          </div>
        </div>
       </div>
 </div>   
    ) 
}

export default Card