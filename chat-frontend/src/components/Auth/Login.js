import React from "react";
// https://undraw.co/search
import loginImage from "../../assets/images/Login.svg";
import './Auth.scss'
const Login = () => {
  return (
    // <h1>Login screen </h1>
    <div id="auth-container">
      <div id="auth-card">
        <div className="card-shadow">
          <div id="image-section">
            <img src={loginImage} alt="Login" />
          </div>
          <div id="form-section">
            <h2>Welcome back</h2>
            <form>
              <div className="input-field mb-1">
                <input placeholder="Email" />
              </div>
 
              <div className="input-field mb-2">
                <input placeholder="Passowrd" />
              </div>

              <button>LOGIN</button>
            </form>
            <p>Don't have account? <a href="./register">Register</a> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
