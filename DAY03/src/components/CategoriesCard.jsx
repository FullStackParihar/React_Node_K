import React from 'react';
import categories from './../utility/data';



const CategoriesCard = ({ categories }) => {
    return (
        <div className="min-h-screen bg-gray-100 text-center">
            <h1 className="text-4xl font-bold text-gray-900 py-6">Nested List Mapping</h1>
            <div className="flex flex-wrap gap-6 justify-center p-6">

                {categories.map((categories) => (
                    <div
                        key={categories.id}
                        className="flex flex-col items-center relative  bg-gradient-to-r bg-gradient-to-r from-red-500 to-orange-500 shadow-lg rounded-lg p-4 w-[400px] h-[80px]"
                    >
                        
                            <h1 className="text-lg font-bold bg-gradient-to-r from-lime-400 to-lime-500 text-white absolute left-0 top-0 m-0 rounded p-4 text-gray-800"> {categories.id}</h1>
                            <h2 className="text-lg font-bold text-gray-800">{categories.name}</h2>
                            <div className="flex gap-4">
                                {categories.items.map((item, x) => (
                                    <p key={x} className="text-gray-600 text-sm">{item}</p>
                                ))}
                            </div>



                        </div>
                ))}
                    </div>
        </div>
            );
};

            export default CategoriesCard;