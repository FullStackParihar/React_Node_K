import React, { useState } from 'react';
import { items } from './utility/data';
import ItemList from './components/ItemList';
 

const App = () => {
    const [filter, setFilter] = useState('All');

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filteredItems = filter === 'All' ? items : items.filter(item => item.category === filter);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">List Mapping Project</h1>

            <label htmlFor="filter" className="mr-4 font-medium">Filter by Category:</label>
            <select id="filter" onChange={handleFilterChange} className="border px-2 py-1 rounded">
                <option value="All">All</option>
                <option value="Book">Book</option>
                <option value="Movie">Movie</option>
                <option value="Product">Product</option>
            </select>

            <ItemList items={filteredItems} />
        </div>
    );
};

export default App;
