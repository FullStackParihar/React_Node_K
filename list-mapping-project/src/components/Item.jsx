import React from 'react';

const Item = ({ item }) => {
  return (
    <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white hover:bg-blue-50">
      <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
      <p className="text-gray-600 mt-2">{item.description}</p>
      <span className={`text-sm font-medium mt-4 inline-block px-3 py-1 rounded-full ${
        item.category === 'Book'
          ? 'bg-green-200 text-green-800'
          : item.category === 'Movie'
          ? 'bg-blue-200 text-blue-800'
          : 'bg-yellow-200 text-yellow-800'
      }`}>
        {item.category}
      </span>
    </div>
  );
};

export default Item;
