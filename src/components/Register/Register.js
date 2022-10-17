import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="form-container">
      <h1 className="form-title">Register Here</h1>
      <form>
        <div className="form-control">
          <label>Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <div className="form-control">
          <label>Confirm Password</label>
          <input type="password" name="confirm password" id="" required />
        </div>
        <button className="btn-submit" type="submit">
          Register
        </button>
      </form>
      <p className="register-text">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
