import React, { useState } from 'react';
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

  const toDelete = (): any => {
    setItemBeingDeleted(!itemBeingDeleted);
  };

  const onDeleteItem = () => deleteItem(item.id, listId, itemIds);
  if (itemBeingDeleted) {
    return (
      <div className="p-3 m-2 bg-red-200 flex flex-row items-center rounded justify-between shadow-sm">
        <p className=" text-gray-800 text-xl">Delete Item?</p>
        <div className="flex  mr-3">
          <button className=" text-green-800 mx-2" onClick={onDeleteItem}>
            Yes
          </button>

          <button className=" text-red-800 mx-2" onClick={() => setItemBeingDeleted(!itemBeingDeleted)}>
            No
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="p-3 m-2 flex flex-row items-center rounded justify-between shadow-sm">
      <div className="flex flex-row items-center justify-between ">
        <div style={{ marginLeft: '-10px' }} onClick={toDelete}>
          <SVGIcon icon="deleteIcon" />
        </div>
        <p className={`${textColor} text-xl ml-5`}>{item.label}</p>
      </div>
      <div onClick={toggleState} className="mr-3">
        {isChecked ? <SVGIcon icon="Checked" /> : <SVGIcon icon="NoCheck" />}
      </div>
    </div>
  );
};

export default ItemCard;
