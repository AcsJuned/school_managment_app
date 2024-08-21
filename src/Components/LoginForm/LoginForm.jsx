import React from 'react';
import './LoginForm.css'; 
import logo from '../../assets/logo.png';

function LoginForm() {
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form">
            <span className="login100-form-logo">
              <i className="zmdi zmdi-landscape">
                <img src={logo} alt="Logo" width={170} />
              </i>
            </span>
            <span className="login100-form-title p-b-34 p-t-27">
              Log in
            </span>
            
            <div className="wrap-input100">
              <input className="input100" type="text" name="username" required />
              <label className="label100">
                
                Username</label>
            </div>
            
            <div className="wrap-input100">
              <input className="input100" type="password" name="pass" required />
              <label className="label100">Password</label>
            </div>
            
            <div className="contact100-form-checkbox">
              <input className="input-checkbox100 " id="ckb1" type="checkbox" name="remember-me" />
              <label className="label-checkbox100  text-white" htmlFor="ckb1">
                Remember me
              </label>
            </div>
            
            <div className="container-login100-form-btn">
              <button className="login100-form-btn">
                Login
              </button>
            </div>
            
            <div className="text-center p-t-90">
              <a className="txt1" href="#">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
