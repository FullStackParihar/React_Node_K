import React from "react";
import ProductCard from "./Components/CardComponent";
import products from "./utility/data";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
const App = () => {
  return (
    <div>
    
      <NavBar />

       <SideBar className="border-2" />
      <div className="flex flex-wrap gap-6 p-8 justify-start">
      {products[0].map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
};

export default App;
