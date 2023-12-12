import { Routes, Route } from "react-router-dom";
import RegisterForm from "./pages/RegisterForm";
import LoginForm from "./pages/LoginForm";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}

export default App;
