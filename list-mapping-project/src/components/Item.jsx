import React from 'react';

const Item = ({ item }) => {
    return (
        <div className="border rounded p-4 shadow-md">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <span className="text-sm font-medium text-blue-500">{item.category}</span>
        </div>
    );
};

export default Item;
