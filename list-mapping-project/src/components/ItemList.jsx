import React from 'react';
import Item from './Item';


const ItemList = ({ items }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {items.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;
