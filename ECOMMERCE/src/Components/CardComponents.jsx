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
        <div className="flex flex-wrap justify-center gap-8">
            {contacts.map((product) => (
                <div
                    key={product.id}
                    className="w-[22rem] bg-gradient-to-r from-purple-500 to-teal-400 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 text-white"
                >
                    <img
                        className="w-full h-48 object-cover"
                        src={product.image}
                        alt={product.name}
                    />
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                        <p className="text-lg mb-2">{product.productdesc}</p>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xl font-semibold">{product.price}</span>
                            <span className="bg-yellow-400 text-gray-800 py-1 px-3 rounded-full text-sm font-medium">
                                ⭐ {product.rating}
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <button
                                className="bg-white text-purple-500 py-2 px-4 rounded-full shadow-md hover:bg-purple-700 hover:text-white transition-all duration-300"
                                onClick={() => handleAddToCart(product)}
                            >
                                Add to Cart
                            </button>
                            <button
                                className="bg-white text-teal-500 py-2 px-4 rounded-full shadow-md hover:bg-teal-700 hover:text-white transition-all duration-300"
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
