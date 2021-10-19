
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './login.scss';

const Login = () =>{
  const location = useLocation();
  const signedin:boolean = false;
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
                  {signedin? 
                  <Link to='/Artwork'>Account</Link>:
                  <Link to='/Login'>signin</Link>}
              </a>
          </div>
        </nav>
        </div>
    )
}

export default Login;