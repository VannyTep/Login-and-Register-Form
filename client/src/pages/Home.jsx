/* Styles */
import "../styles/Home.css";

/* Components */
import Footer from "../components/Footer";
import LoginRegisterBtn from "../components/Home/LoginRegisterBtn";

function Home() {
  return (
    <>
      <LoginRegisterBtn />
      <Footer />
    </>
  );
}

export default Home;
