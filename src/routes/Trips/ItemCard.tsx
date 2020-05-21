import React, { useState } from 'react';
import SVGIcon from '../../components/SVGIcon';

const ItemCard = ({ item }: any) => {
  const [toggle, setToggle] = useState(true);

  const onClickHandler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  return (
    <div className="flex items-center h-8">
      <div onClick={onClickHandler} className="w-8 ml-2">
        {toggle ? <SVGIcon icon="NoCheck" /> : <SVGIcon icon="Checked" />}
      </div>
      <div className="border-b-2 border-gray-200 w-full">{item.label}</div>
    </div>
  );
};

export default ItemCard;
