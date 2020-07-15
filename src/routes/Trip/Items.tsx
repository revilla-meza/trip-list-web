import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import ItemCard from './ItemCard';
import { connect } from 'react-redux';
import fetchList from '../../actions/fetchList';
import fetchOneTrip from '../../actions/fetchOneTrip';
import setItemState from '../../actions/setItemState';
import { useParams } from 'react-router-dom';
import deleteItem from '../../actions/deleteItem';
import FilterItemForm from '../../components/FilterItemForm';

interface ComponentStateProps {
  listsById: any;
  getListStatus: any;
  getOneTripStatus: any;
  fetchList: any;
  tripsById: any;
  fetchOneTrip: any;
  items: any;
  setItemState: any;
  itemsStateByListId: any;
  deleteItem: any;
}
type AppState = ComponentStateProps;

const Items = ({
  listsById,
  getListStatus,
  fetchList,
  tripsById,
  getOneTripStatus,
  fetchOneTrip,
  items,
  setItemState,
  itemsStateByListId,
  deleteItem,
}: AppState) => {
  const [itemQuery, setItemQuery] = useState('');
  const { id }: any = useParams();

  const currentTrip = tripsById[id];

  const listId = currentTrip && currentTrip.listId;

  const isTripPresentOrOnTheWay = currentTrip || getOneTripStatus == 'loading';

  const isListPresentOrOnTheWay = listsById[listId] || getListStatus == 'loading' || getOneTripStatus == 'loading';

  const isListLoading = getListStatus === 'loading' || getOneTripStatus == 'loading';

  const isListPresent = currentTrip && listsById[listId];

  const queryHandler = (value: any) => {
    //Value from the FilterItemForm
    setItemQuery(value);
  };

  useEffect(() => {
    if (!isTripPresentOrOnTheWay) {
      fetchOneTrip(id);
    } else if (!isListPresentOrOnTheWay) {
      fetchList(currentTrip.listId);
    }
  });

  useEffect(() => {
    const jsonString = JSON.stringify(itemsStateByListId);
    window.localStorage.setItem('itemsStateByListId', jsonString);
  }, [itemsStateByListId]);

  if (isListLoading) {
    return <p className="mt-32  font-sans text-lg font-bold text-center  ">loading...</p>;
  }

  if (isListPresent) {
    const listOfItemIds = listsById[currentTrip.listId].itemIds;
    let filteredItemIds: any[] = [];
    let isItemQueryNew;

    if (itemQuery === '') {
      filteredItemIds = listOfItemIds;
    } else {
      const filtered = listOfItemIds.reduce(
        (out: any, id: any) => {
          const itemLabel = items[id].label.toLowerCase().trim();
          const query = itemQuery.toLocaleLowerCase();
          if (itemLabel.includes(query)) {
            out.itemIds.push(id);
          }
          if (query === itemLabel) {
            out.newLabel = false;
          }
          return out;
        },
        { itemIds: [], newLabel: true },
      );

      filteredItemIds = filtered.itemIds;
      isItemQueryNew = filtered.newLabel;
    }

    const itemsByState = filteredItemIds.reduce(
      (output: any, itemId: any) => {
        if (itemsStateByListId[listId] && itemsStateByListId[listId][itemId]) {
          output.checked.push(itemId);
        } else {
          output.unchecked.push(itemId);
        }
        return output;
      },
      { checked: [], unchecked: [] },
    );
    const zeroMatches = filteredItemIds.length === 0;
    return (
      <div>
        <FilterItemForm
          listId={listId}
          zeroItems={listOfItemIds.length === 0}
          queryHandler={queryHandler}
          newLabel={isItemQueryNew}
        />
        <div className="bg-indigo-200 text-center text-xl">{listsById[listId].title}</div>
        {itemQuery !== '' && zeroMatches && <p className=" text-gray-600 text-center">No item was found</p>}
        {listsById && (
          <div className="grid grid-cols-1 ">
            {itemsByState.unchecked.map((itemId: any) => (
              <ItemCard
                key={itemId}
                item={items[itemId]}
                deleteItem={deleteItem}
                itemIds={listsById[currentTrip.listId].itemIds}
                listId={currentTrip.listId}
                isChecked={itemsStateByListId[listId] ? itemsStateByListId[listId][itemId] : false}
                toggleChecked={() => {
                  const state = itemsStateByListId[listId] ? !itemsStateByListId[listId][itemId] : true;
                  setItemState({ listId, itemId, state });
                }}
              />
            ))}
            {itemsByState.checked.map((itemId: any) => (
              <ItemCard
                key={itemId}
                item={items[itemId]}
                deleteItem={deleteItem}
                itemIds={listsById[currentTrip.listId].itemIds}
                listId={currentTrip.listId}
                isChecked={itemsStateByListId[listId] ? itemsStateByListId[listId][itemId] : false}
                toggleChecked={() => {
                  const state = itemsStateByListId[listId] ? !itemsStateByListId[listId][itemId] : true;
                  setItemState({ listId, itemId, state });
                }}
              />
            ))}
          </div>
        )}
        <NavBar />
      </div>
    );
  }

  return null;
};

const mapStateToProps = (state: any) => ({
  listsById: state.lists.byId,
  items: state.items.byId,
  getListStatus: state.lists.getListStatus,
  tripsById: state.trips.byId,
  itemsStateByListId: state.itemsState.byListId,
  getOneTripStatus: state.trips.getOneTripStatus,
});
export default connect(mapStateToProps, { fetchList, fetchOneTrip, setItemState, deleteItem })(Items);
