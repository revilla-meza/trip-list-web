import React, { useState, useEffect } from 'react';
import SVGIcon from './SVGIcon';
import { connect } from 'react-redux';
import createItem from '../actions/createItem';
import fetchList from '../actions/fetchList';

interface ComponentStateProps {
  getItemStatus: any;
  createItem: any;
  listOfItems: any;
  listId: any;
  fetchList: any;
}

type AppState = ComponentStateProps;

type InewItem = {
  list: number;
  label: string;
};

const AddItemForm = ({ listOfItems, getItemStatus, createItem, listId, fetchList }: AppState) => {
  const [newItem, setNewItem] = useState<InewItem>({ list: listId, label: '' });
  const textInputRef: any = React.useRef(null);

  const onchangeHandler = (e: any) => {
    setNewItem({ ...newItem, label: e.target.value });
  };
  const submitHandler = (e: any) => {
    e.preventDefault();
    if (newItem.label !== '') {
      createItem(newItem);
      setTimeout(() => fetchList(listId), 200);
    }
    textInputRef.current.value = '';
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
          onChange={onchangeHandler}
          ref={textInputRef}
        ></input>
      </div>
    </form>
  );
};

const mapStateToProps = (state: any) => ({
  getItemStatus: state.items.getItemStatus,
});

export default connect(mapStateToProps, { createItem, fetchList })(AddItemForm);
