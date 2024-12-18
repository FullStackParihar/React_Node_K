import React from 'react';
import { items } from './utility/data';
import ItemList from './components/ItemList';

const App = () => {
  return (
    <div className="p-2 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-4 text-black-600">List Mapping Project</h1>
      <ItemList items={items} />
    </div>
  );
};

export default App;
