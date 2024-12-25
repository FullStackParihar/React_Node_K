import React from "react";
import CardComponent from "./components/CardComponents";
import products from "./utility/data";

const App = () => {
    return (
        <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100 p-5">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Showcase</h1>
            <CardComponent contacts={products} />
        </div>
    );
};

export default App;