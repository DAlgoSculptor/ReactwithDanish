import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="py-7 px-10 bg-teal-950 text-white flex items-center justify-between">
      <h2 className="text-4xl gap-10">DAlgoScupltor</h2>
      <div className="flex gap-10 text-lg underline">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default header;
