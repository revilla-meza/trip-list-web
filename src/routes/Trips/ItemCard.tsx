import React, { useState } from 'react';
import SVGIcon from '../../components/SVGIcon';

const ItemCard = ({ item }: any) => {
  const [toggle, setToggle] = useState(true);
  const [textCheck, setTextCheck] = useState('text-gray-800');

  const onClickHandler = () => {
    if (toggle) {
      setToggle(false);
      setTextCheck('text-gray-500');
    } else {
      setToggle(true);
      setTextCheck('text-gray-800');
    }
  };
  return (
    <div className="flex items-center h-8">
      <div onClick={onClickHandler} className="w-8 ml-2">
        {toggle ? <SVGIcon icon="NoCheck" /> : <SVGIcon icon="Checked" />}
      </div>
      <div className="border-b-2 w-full">
        <p className={`${textCheck} text-xl`}>{item.label}</p>
      </div>
    </div>
  );
};

export default ItemCard;
