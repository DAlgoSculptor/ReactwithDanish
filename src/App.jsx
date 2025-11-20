import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Header from './Components/header'
import Card from "./pages/Card";

const App = () => {
  return (
    
    <div >
      {/* <Header /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes> */}
      <Card user="Ali" />
      <Card user="Ansari"/>
      <Card user="Bania"/>
      <Card user="Bania"/>
      <Card user="Alishah"/>
      <Card user="Kushwaha"/>
      <Card user="Bahia"/>
      <Card user="Alo beraa"/>
    </div>
  );
};

export default App;
