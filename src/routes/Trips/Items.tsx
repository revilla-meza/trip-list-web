import React, { useEffect } from 'react';
import NavBar from '../../components/NavBar';
import ItemCard from './ItemCard';
import { connect } from 'react-redux';
import fetchList from '../../actions/fetchList';
import { useParams } from 'react-router-dom';
import AddItemForm from '../../components/AddItemForm';

interface ComponentStateProps {
  listsById: any;
  status: any;
  fetchList: any;
  tripsById: any;
}
type AppState = ComponentStateProps;

const Items = ({ listsById, status, fetchList, tripsById }: AppState) => {
  const { id }: any = useParams();
  const currentTrip = tripsById[id];

  // here
  useEffect(() => {
    if (!listsById[currentTrip.listId] && status !== 'loading') {
      fetchList(currentTrip.listId);
    }
  });

  if (status === 'loading' || !listsById[currentTrip.listId]) {
    return <p className="mt-32  font-sans text-lg font-bold text-center  ">loading...</p>;
  }
  return (
    <div>
      <div className="bg-indigo-200 text-center mt-16 text-xl">{listsById[currentTrip.listId].title}</div>
      {listsById && (
        <div className="grid grid-cols-1 ">
          {listsById[currentTrip.listId].items.map((item: any) => (
            <ItemCard key={item.id} item={item} />
          ))}
          <AddItemForm listOfItems={listsById[currentTrip.listId].items.length} />
        </div>
      )}
      <NavBar />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  listsById: state.lists.byId,
  status: state.lists.getListStatus,
  tripsById: state.trips.byId,
});
export default connect(mapStateToProps, { fetchList })(Items);
