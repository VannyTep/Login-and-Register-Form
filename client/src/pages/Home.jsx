/* Styles */
import "../styles/Home.css";

/* packages */
import { Link } from "react-router-dom";

/* Components */
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="Home">
        <div className="btn-container">
          <h1 id="title">Login | Register</h1>
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
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
