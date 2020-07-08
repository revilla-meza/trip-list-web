import React from 'react';
import useLongPress from '../../util/useLongPress';
import SVGIcon from '../../components/SVGIcon';

const ItemCard = ({ item, isChecked, toggleChecked, deleteItem, itemIds, listId }: any) => {
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

  const onLongPress = () => deleteItem(item.id, listId, itemIds);

  const longPressEvent = useLongPress(onLongPress, null, defaultOptionsForLongPress);

  return (
    <div className="p-3 m-2 flex flex-row items-center rounded shadow-md" {...longPressEvent}>
      <div onClick={toggleState} className="mr-3">
        {isChecked ? <SVGIcon icon="Checked" /> : <SVGIcon icon="NoCheck" />}
      </div>
      <p className={`${textColor} text-xl`}>{item.label}</p>
    </div>
  );
};

export default ItemCard;
