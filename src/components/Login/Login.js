import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";
import "./Login.css";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Please Log In</h1>
      <form onSubmit={handleSubmitLogin}>
        <div className="form-control">
          <label>Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <button className="btn-submit" type="submit">
          Login
        </button>
      </form>

      <p className="register-text">
        New to here? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
