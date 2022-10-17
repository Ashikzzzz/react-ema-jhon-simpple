import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <h1 className="form-title">Please Log In</h1>
      <form>
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
