import React, { useState } from 'react';
import useLongPress from '../../util/useLongPress';
import SVGIcon from '../../components/SVGIcon';

const ItemCard = ({ item, isChecked, toggleChecked, deleteItem, itemIds, listId }: any) => {
  const [itemBeingDeleted, setItemBeingDeleted] = useState(false);
  const textColor = isChecked ? 'text-gray-500' : 'text-gray-800';

  const toggleState = () => {
    if (isChecked) {
      toggleChecked(false);
    } else {
      toggleChecked(true);
    }
  };

  const defaultOptionsForLongPress = {
    shouldPreventDefault: false,
    delay: 1000, // delete item after one second pressing.
  };

  const onLongPress = () => {
    setItemBeingDeleted(!itemBeingDeleted);
  };

  const onDeleteItem = () => deleteItem(item.id, listId, itemIds);

  const longPressEvent = useLongPress(onLongPress, null, defaultOptionsForLongPress);
  if (itemBeingDeleted) {
    return (
      <div className="p-3 m-2 bg-red-200 flex flex-row items-center rounded justify-between shadow-md">
        <p className=" text-gray-800 text-xl">Delete Item?</p>
        <div className="flex  mr-3">
          // eslint-disable-next-line prettier/prettier
          <button className=" text-green-800 mx-2" onClick={onDeleteItem}>Yes</button>
          // eslint-disable-next-line prettier/prettier
          <button className=" text-red-800 mx-2" onClick={() => setItemBeingDeleted(!itemBeingDeleted)}>No</button>
        </div>
      </div>
    );
  }
  return (
    <div className="p-3 m-2 flex flex-row items-center rounded justify-between shadow-md" {...longPressEvent}>
      <p className={`${textColor} text-xl`}>{item.label}</p>
      <div onClick={toggleState} className="mr-3">
        {isChecked ? <SVGIcon icon="Checked" /> : <SVGIcon icon="NoCheck" />}
      </div>
    </div>
  );
};

export default ItemCard;
