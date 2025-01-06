import React from "react";

const Form = () => {
    return (
        <div className="flex items-center justify-center p-10 bg-gradient-to-br from-purple-100 to-purple-200">
            <form
                className="w-full max-w-md bg-white rounded-lg shadow-lg p-8"
            >
                <h2 className="text-2xl font-bold text-purple-800 text-center mb-2">
                    Login
                </h2>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-purple-800 mb-1"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-purple-800 mb-1"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-purple-500 transition-all duration-300"
                >
                    Login
                </button>
                <p className="text-sm text-center text-gray-600 mt-4">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-purple-700 font-medium hover:underline">
                        Sign up
                    </a>
                </p>
            </form>
        </div>
    );
};

export default Form;
