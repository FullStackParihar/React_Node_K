import React from 'react';
import { items } from './utility/data';

const App = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">List Mapping Project</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="border rounded p-4 shadow-md">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <span className="text-sm font-medium text-blue-500">{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
