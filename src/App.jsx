import React from "react";
import Navbars from "./Components/Navbar/Navbars";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";

const App = () => {
  return (
    <div className="App">
      <Navbars />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;
