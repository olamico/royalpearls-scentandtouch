import React from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Product from "./Components/Product";
import Categories from "./Components/Categories";
const App = () => {
  return (
    <div className="bg-red-600">
      <Navbar />
      <Homepage />
      <Product />
      <Categories />
    </div>
  );
};

export default App;
