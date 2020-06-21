import React, { useEffect } from 'react';
import NavBar from '../../components/NavBar';
import ItemCard from './ItemCard';
import { connect } from 'react-redux';
import fetchList from '../../actions/fetchList';
import fetchOneTrip from '../../actions/fetchOneTrip';
import setItemState from '../../actions/setItemState';
import { useParams } from 'react-router-dom';
import AddItemForm from '../../components/AddItemForm';

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
}: AppState) => {
  const { id }: any = useParams();

  const currentTrip = tripsById[id];

  const listId = currentTrip && currentTrip.listId;

  const isTripPresentOrOnTheWay = currentTrip || getOneTripStatus == 'loading';

  const isListPresentOrOnTheWay = listsById[listId] || getListStatus == 'loading' || getOneTripStatus == 'loading';

  const isListLoading = getListStatus === 'loading' || getOneTripStatus == 'loading';

  const isListPresent = currentTrip && listsById[listId];

  useEffect(() => {
    if (!isTripPresentOrOnTheWay) {
      fetchOneTrip(id);
    } else if (!isListPresentOrOnTheWay) {
      fetchList(currentTrip.listId);
    }
  });
  useEffect(() => {
    const string = JSON.stringify(itemsStateByListId);
    console.log(string);
    window.localStorage.setItem('itemsStateByListId', string);
  }, [itemsStateByListId]);

  if (isListLoading) {
    return <p className="mt-32  font-sans text-lg font-bold text-center  ">loading...</p>;
  }

  if (isListPresent) {
    return (
      <div>
        <div className="bg-indigo-200 text-center mt-16 text-xl">{listsById[listId].title}</div>
        {listsById && (
          <div className="grid grid-cols-1 ">
            {listsById[currentTrip.listId].itemIds.map((itemId: any) => (
              <ItemCard
                key={itemId}
                item={items[itemId]}
                isChecked={itemsStateByListId[listId] ? itemsStateByListId[listId][itemId] : false}
                toggleChecked={() => {
                  const state = itemsStateByListId[listId] ? !itemsStateByListId[listId][itemId] : true;
                  setItemState({ listId, itemId, state });
                }}
              />
            ))}
            <AddItemForm isListEmpty={listsById[listId].itemIds.length === 0} listId={currentTrip.listId} />
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
export default connect(mapStateToProps, { fetchList, fetchOneTrip, setItemState })(Items);
