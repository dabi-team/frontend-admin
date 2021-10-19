
import React from 'react'
import { useHistory } from 'react-router';
import './login.scss';

const Login = () =>{
    const history = useHistory();
  return(
      <div className='login-box'>
          <div>
          <form>
                <h3>Welcome back</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className='grid-button'>
                <button type="submit" onClick={()=>history.push('/')} className="btn btn-primary btn-block m-1">login</button>
                <button type="submit" onClick={()=>history.push('/Register')} className="btn btn-primary btn-block m-1 signup">create an account</button>
                </div>
            </form>
            </div>
     </div>
    )
}

export default Login;