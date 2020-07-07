import React from 'react';
import SVGIcon from '../../components/SVGIcon';

const ItemCard = ({ item, isChecked, toggleChecked, deleteItem, itemIds, listId }: any) => {
  const textColor = isChecked ? 'text-gray-500' : 'text-gray-800';

  const onClickHandler = () => {
    if (isChecked) {
      toggleChecked(false);
    } else {
      toggleChecked(true);
    }
  };

  return (
    <div className="flex items-center h-8">
      <div onClick={onClickHandler} className="w-8 ml-2">
        {isChecked ? <SVGIcon icon="Checked" /> : <SVGIcon icon="NoCheck" />}
      </div>
      <div className="border-b-2 w-full">
        <p className={`${textColor} text-xl`}>{item.label}</p>
      </div>
      <button className="self-end text-center text-gray-600 p-1" onClick={() => deleteItem(item.id, listId, itemIds)}>
        -
      </button>
    </div>
  );
};

export default ItemCard;
