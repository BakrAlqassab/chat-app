import React from "react";
import RegisterImage from "../../assets/images/Register.svg";
import "./Auth.scss";
const Register = () => {
  return (
    <div id="auth-container">
      <div id="auth-card">
        <div className="card-shadow">
          <div id="image-section">
            <img src={RegisterImage} alt="Register" />
          </div>
          <div id="form-section">
            <h2>CREATE ACCOUNT</h2>
            <form>
              <div className="input-field mb-1">
                <input placeholder="First Name" />
              </div>

              <div className="input-field mb-1">
                <input placeholder="Last Name" />
              </div>

              <div className="input-field mb-1">
                <input placeholder="Email" />
              </div>
              <div className="input-field mb-1">
                <select>
                  <option value="male"> Male</option>
                  <option value="female"> Female</option>
                </select>
              </div>

              <div className="input-field mb-2">
                <input placeholder="Passowrd" />
              </div>

              <button>Register</button>
            </form>
            <p>
              Already have account?  <a href="./login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
