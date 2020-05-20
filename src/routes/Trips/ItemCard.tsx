import React from 'react';

const ItemCard = ({ item }: any) => {
  return (
    <div className="flex">
      <div className='w-8'>icon</div>
      <div className="border-b-2 border-gray-200 w-11/12">{item.label}</div>
    </div>
  );
};

export default ItemCard;
