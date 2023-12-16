/* packages */
import { Link } from "react-router-dom";

/* Styles */
import "../../styles/components/LoginRegisterBtn.css";

function LoginRegisterBtn() {
  return (
    <>
      <div className="login-register-btn-container">
        <div className="btn-container">
          <h1 id="title">Login | Register</h1>
          <ul id="btn-list">
            <li>
              <Link id="login-btn-link" to={"/login"}>
                Login
              </Link>
            </li>
            <li>
              <Link id="register-btn-link" to={"/register"}>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default LoginRegisterBtn;
