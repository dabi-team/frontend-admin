
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Card from '../../components/card/Card';
import './style.scss';

const Page1 = () =>{
  const location = useLocation();
    return(
      <div className='flex mx-12'>
          <Card/>
          <Card/>
      </div>
    )
}

export default Page1;