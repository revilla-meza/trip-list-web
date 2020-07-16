import React from 'react';
import { DebounceInput } from 'react-debounce-input';
import { connect } from 'react-redux';
import createItem from '../actions/createItem';

interface ComponentStateProps {
  queryHandler: any;
  newLabel: boolean;
  zeroItems: boolean;
  createItem: any;
  listId: any;
}

type AppState = ComponentStateProps;

const FilterItemForm = ({ queryHandler, newLabel, zeroItems, createItem, listId }: AppState) => {
  const [newItemLabel, setNewItemLabel] = React.useState('');

  const onchangeHandler = (e: any) => {
    const label = e.target.value.trim(); // remove whitespace
    queryHandler(label);
    setNewItemLabel(label);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (newLabel) createItem({ list: listId, label: newItemLabel });
    setNewItemLabel(''); // clear input
    queryHandler(''); // clear filter
  };

  return (
    <div className="m-2 border-2 py-2 text-xl">
      <form onSubmit={submitHandler} className="flex justify-between items-center h-8">
        <DebounceInput
          minLength={1}
          debounceTimeout={500}
          className="p-2 w-3/4"
          name="newItem"
          value={newItemLabel}
          type="text"
          placeholder={zeroItems ? 'New item' : 'Search item'}
          onChange={onchangeHandler}
        ></DebounceInput>
        {/*If label is new or list has zero items, we prompt users to add a new item
          we will update this behavior to prompt for item creation if the list has just a few items that all fit in the viewport (searching isn't 'necessary' in such scenario)
        */}
        {(newLabel || zeroItems) && (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            ADD
          </button>
        )}
      </form>
    </div>
  );
};

export default connect(null, { createItem })(FilterItemForm);
