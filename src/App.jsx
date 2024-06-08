import Navbar from "./components/Navbar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
