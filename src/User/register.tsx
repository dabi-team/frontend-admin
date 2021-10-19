
import React from 'react'
import './login.scss';

const Login = () =>{
  return(
      <div>
          <div>
          <form>
                <h3>Welcome</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className='grid-button'>
                <button type="submit" className="btn btn-primary btn-block m-1">login</button>
                <button type="submit" className="btn btn-primary btn-block m-1 signup">create an account</button>
                </div>
            </form>
            </div>
     </div>
    )
}

export default Login;