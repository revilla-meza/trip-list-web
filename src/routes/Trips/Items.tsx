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

  useEffect(() => {
    if (!listsById[currentTrip.listId]) {
      fetchList(currentTrip.listId);
    }
  }, [id]);
  if (status === 'loading') {
    return <p className="mt-32  font-sans text-lg font-bold text-center  ">loading...</p>;
  }
  return (
    <div>
      <div className="bg-indigo-200 text-center mt-16 text-xl">{listsById.title}</div>
      {listsById && (
        <div className="grid grid-cols-1 ">
          {listsById.items.map((item: any) => (
            <ItemCard key={item.id} item={item} />
          ))}
          <AddItemForm />
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
