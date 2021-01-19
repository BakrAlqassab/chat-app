import React, { useState } from "react";
// https://undraw.co/search
import loginImage from "../../assets/images/Login.svg";
// import axios from "axios";
// //
// import authService from "../../services/authServices";
import "./Auth.scss";
import {useDispatch} from 'react-redux'
//
import {login} from '../../store/actions/auth'



const Login = ({history}) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("alqassab31@gmail.com");
  const [password, setPassword] = useState("secret");
  const submitForm = (e) => {
    e.preventDefault();

    dispatch(login({email,password},history))


//     authService.Login({email, password}).then( res =>{

//    console.log(res)
//  });
      // axios
      //   .post("http://127.0.0.1:3000/login", { email, password })
      //   .then((res) => {
      //     console.log("res", res);
      //   })
      //   .catch((error) => {
      //     console.log("error", error);
      //   });
    //   // console.log(email, password);


  };
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
            <form onSubmit={submitForm}>
              <div className="input-field mb-1">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required="required"
                  type="text"
                  placeholder="Email"
                />
              </div>

              <div className="input-field mb-2">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required="required"
                  type="password"
                  placeholder="Passowrd"
                />
              </div>

              <button>LOGIN</button>
            </form>
            <p>
              Don't have account? <a href="./register">Register</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
