import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import mockData from './mockData.js';
import ItemCard from './ItemCard';

const Items = () => {
  const [mockItems] = useState(mockData);
  return (
    <div>
      <div className="bg-indigo-200 text-center mt-16">Untitled List</div>
      <div className="grid grid-cols-1 ">
        {mockItems.map((item: any) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>

      <NavBar />
    </div>
  );
};

export default Items;
