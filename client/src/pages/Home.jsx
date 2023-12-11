import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Welcome to Home Page</h1>
      <Link to="/register">Register</Link>
    </>
  );
}

export default Home;
