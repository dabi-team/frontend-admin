import React from "react";
import logo from '../../logo.svg';
import './style.scss';
import {BsFillCartPlusFill} from 'react-icons/bs';
const Card = () => {
    return(
  <div className='card-container shadow-lg'>
     <img src={logo} alt='laptop'/>
     <div className='details-container'>
       <div className='text-xl mb-1'>laptop</div>
        <div className="description">Asus</div>
        <div className="buying flex justify-between">
          <div className="price text-lg font-bold pt-2">$1000</div>
          <div className="flex">
            <button><BsFillCartPlusFill/></button>
          </div>
        </div>
       </div>
 </div>   
    ) 
}

export default Card