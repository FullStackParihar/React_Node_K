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
                    className="w-[20rem] bg-gradient-to-br from-purple-50 to-purple-100 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                >
                    <img
                        className="w-full h-44 object-contain bg-white"
                        src={product.image}
                        alt={product.name}
                    />
                    <div className="p-4">
                        <h2 className="text-lg font-semibold text-purple-800 mb-2">
                            {product.name}
                        </h2>
                        <p className="text-sm text-gray-700 mb-3">
                            {product.productdesc}
                        </p>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-bold text-purple-900">
                                {product.price}
                            </span>
                            <span className="bg-purple-200 text-purple-800 py-1 px-3 rounded-full text-sm font-medium">
                                ⭐ {product.rating}
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <button
                                className="flex-1 bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 rounded-lg text-center hover:from-purple-700 hover:to-purple-500 transition-all duration-300"
                                onClick={() => handleAddToCart(product)}
                            >
                                Add to Cart
                            </button>
                            <button
                                className="flex-1 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-900 py-2 rounded-lg text-center hover:from-gray-400 hover:to-gray-300 transition-all duration-300"
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
