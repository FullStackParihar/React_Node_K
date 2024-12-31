import React from 'react';

const CategoriesCard = ({ categories }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 p-8">
            <h1 className="text-5xl font-extrabold text-indigo-900 py-8 tracking-wide text-center drop-shadow-md">
                Explore Our Categories
            </h1>
            <div className="flex flex-wrap gap-8 justify-center">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="relative bg-gradient-to-b from-yellow-200 via-orange-300 to-red-400 shadow-xl rounded-xl p-6 w-[320px] h-auto transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        <h1 className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow-lg">
                            {category.id}
                        </h1>
                        <h2 className="text-2xl font-bold text-white mt-6 text-center tracking-wider">
                            {category.name}
                        </h2>
                        <div className="flex flex-wrap gap-3 justify-center mt-4">
                            {category.items.map((item, index) => (
                                <span
                                    key={index}
                                    className="text-sm text-white bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 rounded-full shadow-md hover:from-indigo-400 hover:to-purple-400 transition-colors"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesCard;
