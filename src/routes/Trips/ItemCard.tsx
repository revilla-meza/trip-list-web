import React, { useState } from 'react';
import SVGIcon from '../../components/SVGIcon';

const ItemCard = ({ item }: any) => {
  const [isChecked, toggleChecked] = useState(false);
  const [textCheck, setTextCheck] = useState('text-gray-800');

  const onClickHandler = () => {
    if (isChecked) {
      toggleChecked(false);
      setTextCheck('text-gray-500');
    } else {
      toggleChecked(true);
      setTextCheck('text-gray-800');
    }
  };
  return (
    <div className="flex items-center h-8">
      <div onClick={onClickHandler} className="w-8 ml-2">
        {isChecked ? <SVGIcon icon="Checked" /> : <SVGIcon icon="NoCheck" />}
      </div>
      <div className="border-b-2 w-full">
        <p className={`${textCheck} text-xl`}>{item.label}</p>
      </div>
    </div>
  );
};

export default ItemCard;
