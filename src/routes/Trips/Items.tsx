import React, { useEffect } from 'react';
import NavBar from '../../components/NavBar';
import ItemCard from './ItemCard';
import { connect } from 'react-redux';
import fetchList from '../../actions/fetchList';
import fetchOneTrip from '../../actions/fetchOneTrip';
import { useParams } from 'react-router-dom';
import AddItemForm from '../../components/AddItemForm';

interface ComponentStateProps {
  listsById: any;
  getListStatus: any;
  getOneTripStatus: any;
  fetchList: any;
  tripsById: any;
  fetchOneTrip: any;
}
type AppState = ComponentStateProps;

const Items = ({ listsById, getListStatus, fetchList, tripsById, getOneTripStatus, fetchOneTrip }: AppState) => {
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

  if (isListLoading) {
    return <p className="mt-32  font-sans text-lg font-bold text-center  ">loading...</p>;
  } 

  if (isListPresent) {
    return (
      <div>
        <div className="bg-indigo-200 text-center mt-16 text-xl">{listsById[listId].title}</div>
        {listsById && (
          <div className="grid grid-cols-1 ">
            {listsById[currentTrip.listId].items.map((item: any) => (
              <ItemCard key={item.id} item={item} />
            ))}
            <AddItemForm listOfItems={listsById[listId].items.length} />
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
  getListStatus: state.lists.getListStatus,
  tripsById: state.trips.byId,
  getOneTripStatus: state.trips.getOneTripStatus,
});
export default connect(mapStateToProps, { fetchList, fetchOneTrip })(Items);
