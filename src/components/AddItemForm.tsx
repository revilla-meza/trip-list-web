import React, { useState } from 'react';
import SVGIcon from './SVGIcon';

const AddItemForm = ({ listOfItems }: any) => {
  const [newItem, setNewItem] = useState('');

  const onchangeHandler = (e: any) => {
    setNewItem(e.target.value);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler} className="flex items-center h-8">
      <div onClick={submitHandler} className="w-8 ml-2">
        <SVGIcon icon="AddItemIcon" />
      </div>
      <div className="border-b-2 w-full text-xl">
        <input
          className="w-full"
          name="newItem"
          type="text"
          placeholder={listOfItems === 0 ? 'Add your first item!' : 'Add new item'}
          value={newItem}
          onChange={onchangeHandler}
        ></input>
      </div>
    </form>
  );
};

export default AddItemForm;
