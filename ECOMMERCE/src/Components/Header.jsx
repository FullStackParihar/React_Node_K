import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

    const [wishlistCount, setWishlistCount] = useState(0);
    const [cartCount, setCartCount] = useState(0);
    const [snackbar, setSnackbar] = useState({ show: false, message: "", success: true });


    const showSnackbar = (success, message) => {
        setSnackbar({ show: true, message, success });
        setTimeout(() => {
            setSnackbar({ show: false, message: "", success });
        }, 3000);
    };


    const handleWishlistClick = () => {
        setWishlistCount(wishlistCount + 1);
        showSnackbar(true, `Wishlist contains ${wishlistCount + 1} item(s).`);
    };

    const handleCartClick = () => {
        setCartCount(cartCount + 1);
        showSnackbar(true, `Cart contains ${cartCount + 1} item(s).`);
    };

    return (
        <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-lg font-semibold flex justify-between items-center h-20 px-8 shadow-md">
            {/* Logo */}
            <div className="text-white text-4xl font-extrabold tracking-wide cursor-pointer">
                eStore
            </div>

            {/* Navigation Links */}
            <nav className="hidden lg:block">
                <ul className="flex gap-5">
                    {["Home", "Menu", "My Account", "Settings", "About"].map((item) => (
                        <li
                            key={item}
                            className="text-white px-4 py-2 hover:scale-110 hover:shadow-lg hover:bg-indigo-600 transition-transform duration-300 cursor-pointer"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-5">
                {/* Search Bar */}
                <div className="hidden sm:flex items-center gap-1 text-white text-2xl cursor-pointer">
                    <input
                        className="w-[8rem] bg-gray-100 py-1 px-5 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-teal-300"
                        type="text"
                        placeholder="Search..."
                    />
                </div>

                {/* Wishlist and Cart Buttons */}
                <div className="hidden sm:flex gap-3 relative">
                    {/* Wishlist Button */}
                    <button
                        onClick={handleWishlistClick}
                        className="bg-white text-purple-700 text-m py-2 px-4 rounded-full border-2 flex items-center gap-2 relative"
                    >
                        <FontAwesomeIcon icon={faHeart} className="text-red-500" />

                        {/* Wishlist Count Badge */}
                        {wishlistCount > 0 && (
                            <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                {wishlistCount}
                            </span>
                        )}
                    </button>

                    {/* Cart Button */}
                    <button
                        onClick={handleCartClick}
                        className="bg-white text-purple-700 text-m py-2 px-4 rounded-full border-2 flex items-center gap-2 relative"
                    >
                        <FontAwesomeIcon icon={faShoppingCart} className="text-purple-700" />

                        {/* Cart Count Badge */}
                        {cartCount > 0 && (
                            <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Snackbar */}
            {snackbar.show && (
                <div
                    className={`fixed top-4 right-4 px-8 py-4 text-xl rounded-lg shadow-lg text-white transition-all animate-bounce duration-300 ease-in-out transform ${snackbar.success ? "bg-green-500" : "bg-red-500"
                        }`}
                >
                    {snackbar.message}
                </div>
            )}
        </div>
    );
};

export default Header;
