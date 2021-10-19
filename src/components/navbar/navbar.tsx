import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss';

const Navbar = () =>{
    return(
        <nav className='nav'>
          <div className="px-3">
            <Link to='/' className="icon">
              <h4 className="m-0 p-2">dabi</h4>
            </Link>
          </div>
          <div className="px-3 d-flex">
              <a>
                  <Link to="/Form" className="active">Form</Link>
              </a>
              <a>
                  <Link to="/Art">Art</Link>
              </a>
              <a>
                  <Link to='/Artwork'>Artwork</Link>
              </a>
              <div className = 'p-2'>
              </div>
          </div>
        </nav>
    )
}

export default Navbar;