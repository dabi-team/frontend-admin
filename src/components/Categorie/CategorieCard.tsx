
import React from "react";
import logo from '../../logo.svg';
import './style.scss'
const CategorieCard = () => {
    return(
  <div className='horizontal-card-container shadow-lg grid grid-flow-col'>
     <div className='details-container col-span-6'>
            <div className='text-xl mb-1'>laptop</div>
            <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corporis architecto et? Ipsum facilis voluptates asperiores consequatur corrupti sequi aperiam placeat, vitae adipisci. Ratione eveniet nesciunt sequi debitis quisquam sunt!</div>
       </div>
     <img src={logo} alt='laptop' className='col-span-1'/>
     <img src={logo} alt='laptop' className='col-span-1'/>
 </div>   
    ) 
}

export default CategorieCard;