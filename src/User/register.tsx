
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './register.scss';

const Register = () =>{
  const location = useLocation();
    return(
      <div className='nav-container'>
        <nav className='nav'>
          <div className='flex'>
              <a>
                  <Link to='/Artwork'>dabi</Link>
              </a>
          </div>
          <div className="nav-links">
              <a>
                  <Link className={(location.pathname === '/')? 'active':''} to="/">Form</Link>
              </a>
              <a>
                  <Link className={(location.pathname === '/Form')? 'active':''} to="/Form">Form</Link>
              </a>
              <a>
                  <Link className={(location.pathname === '/Art')? 'active':''} to="/Art">Form</Link>
              </a>
          </div>
          <div className="flex">
              <a>
                  <Link to='/Artwork'>signin</Link>
              </a>
          </div>
        </nav>
        </div>
    )
}

export default Register;