import React from "react";

const CardComponent = ({ contacts }) => {
    let cart = [];
    let wishlist = [];

    const handleAddToCart = (product) => {
        cart.push(product);
        console.log("Added to cart:", cart);
    };

    const handleAddToWishlist = (product) => {
        wishlist.push(product);
        console.log("Added to wishlist:", wishlist);
    };

    return (
        <div className="flex flex-wrap justify-center gap-6 px-4">
            {contacts.map((product) => (
                <div
                    key={product.id}
                    className="w-[20rem] bg-white shadow-md rounded-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                >
                    <img
                        className="w-full h-44 object-contain"
                        src={product.image}
                        alt={product.name}
                    />
                    <div className="p-4">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                            {product.name}
                        </h2>
                        <p className="text-sm text-gray-600 mb-3">
                            {product.productdesc}
                        </p>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-bold text-gray-900">
                                {product.price}
                            </span>
                            <span className="bg-green-100 text-green-700 py-1 px-3 rounded-full text-sm font-medium">
                                ⭐ {product.rating}
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <button
                                className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-center hover:bg-blue-600 transition-colors duration-300"
                                onClick={() => handleAddToCart(product)}
                            >
                                Add to Cart
                            </button>
                            <button
                                className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg text-center hover:bg-gray-300 transition-colors duration-300"
                                onClick={() => handleAddToWishlist(product)}
                            >
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardComponent;
