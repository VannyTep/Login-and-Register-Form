import { useState } from "react";
import "../styles/RegisterForm.css";
import RegisterValidation from "../js/registerValidation";
import { Link } from "react-router-dom";

function RegisterForm() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmed_password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(RegisterValidation(values));
  };

  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="username-input-container">
          <input
            type="text"
            name="username"
            id="username-input"
            placeholder="Username"
            onChange={handleInput}
          />
          <span id="errors-username">
            {errors.username ? errors.username : ""}
          </span>
        </div>

        <div className="email-input-container">
          <input
            type="email"
            name="email"
            id="email-input"
            placeholder="Email"
            onChange={handleInput}
          />
          <span id="errors-email">{errors.email ? errors.email : ""}</span>
        </div>

        <div className="password-input-container">
          <input
            type="password"
            name="password"
            id="password-input"
            placeholder="Password"
            onChange={handleInput}
          />
          <span id="errors-email">
            {errors.password ? errors.password : ""}
          </span>
        </div>

        <div className="confirmed-password-input-container">
          <input
            type="password"
            name="confirmed_password"
            id="confirmed-password-input"
            placeholder="Confirmed Password"
            onChange={handleInput}
          />
          <span id="errors-confirmed-password">
            {errors.confirmed_password ? errors.confirmed_password : ""}
          </span>
        </div>

        <p id="having-acc-txt">
          Already have an account?{" "}
          <Link id="login-link-btn" to="/login">
            Login Here
          </Link>
        </p>

        <input type="submit" value="Login" id="submit-btn" />
      </form>
    </div>
  );
}

export default RegisterForm;
