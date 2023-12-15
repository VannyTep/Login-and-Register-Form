import { useState } from "react";
import "../styles/LoginForm.css";
import LoginValidation from "../js/loginValidation";
import { Link } from "react-router-dom";

function LoginForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
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
    setErrors(LoginValidation(values));
  };

  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit}>
          <h1>Login</h1>

          <div className="email-input-container">
            <input
              type="email"
              name="email"
              id="email-input"
              placeholder="Email"
              onChange={handleInput}
            />
            <span id="errors-email">
              {errors.username ? errors.username : ""}
            </span>
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

          <p id="no-have-acc-txt">
            Don't have an account yet?{" "}
            <Link id="register-link-btn" to="/register">
              Sign Up Here
            </Link>
          </p>

          <input type="submit" value="Login" id="submit-btn" />
        </form>
      </div>
    </>
  );
}

export default LoginForm;
