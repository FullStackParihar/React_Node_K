import React from "react";

const CardComponent = ({ contacts }) => {
    let cart = [];

    const handleAdd = (product) => {
        cart.push(product);
        console.log("Added to cart:", cart);
    };

    const handleRemove = (productId) => {
        cart = cart.filter((item) => item.id !== productId);
        console.log("Removed from cart:", cart);
    };

    return (
        <div className="flex flex-wrap justify-center gap-8">
            {contacts.map((product) => (
                <div
                    key={product.id}
                    className="w-[21rem] h-auto bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300"
                >
                    <h2 className="text-center text-gray-800 text-xl font-semibold mb-4">
                        {product.name}
                    </h2>
                    <img
                        className="w-full h-48 object-cover mb-4 rounded-lg"
                        src={product.image}
                        alt={product.name}
                    />
                    <p className="text-gray-600 text-center mb-4">
                        {product.productdesc}
                    </p>
                    <div className="flex justify-between items-center">
                        <button
                            className="bg-green-500 text-white py-2 px-4 rounded-xl hover:bg-green-600 transition-all duration-300"
                            onClick={() => handleAdd(product)}
                        >
                            Add
                        </button>
                        <button
                            className="bg-red-500 text-white py-2 px-4 rounded-xl hover:bg-red-600 transition-all duration-300"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardComponent;