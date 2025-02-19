import { Routes, Route } from "react-router-dom";
import RegisterForm from "./pages/RegisterForm";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
}

export default App;
