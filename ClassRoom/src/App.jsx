import React from "react";
import ProductCard from "./Components/CardComponent";
import products from "./utility/data";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <div>
    
      <NavBar />

       
      <div className="flex flex-wrap gap-6 p-12 justify-start">
      {products[0].map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
};

export default App;
