
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import CategorieCard from '../../components/Categorie/CategorieCard';
import './style.scss';

const Page2 = () =>{
  const location = useLocation();
    return(
      <div className='mx-12'>
          <CategorieCard/>
          <CategorieCard/>
      </div>
    )
}

export default Page2;