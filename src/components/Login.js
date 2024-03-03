import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../Assets/logo2x.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Check credentials
    if (email === "admin@gmail.com" && password === "Admin1122") {
      // Navigate to the dashboard on successful login
      navigate("/dashboard");
    } else {
      // Display error message for incorrect credentials
      setError("Incorrect email or password. Please try again.");
    }
  };

  return (
    <div className="login-box">
      <div className="login-header">
        <img src={logo} alt="logo" />
        <h4 className="login-subheader">We are Electric</h4>
      </div>
      <form>
        <div className="user-box">
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Password</label>
        </div>
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
        {error && <p className="error-message">{error}</p>}
        <h3 className="frgt-psw">Forget Password?</h3>
      </form>
    </div>
  );
};

export default Login;
