import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Header from './Components/header'

const App = () => {
  return (
    
    <div className="w-full h-screen bg-zinc-800 text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;
