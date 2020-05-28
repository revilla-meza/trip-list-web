import React, { useEffect } from 'react';
import NavBar from '../../components/NavBar';
import ItemCard from './ItemCard';
import { connect } from 'react-redux';
import fetchList from '../../actions/fetchList';
import { useParams } from 'react-router-dom';
import AddItemForm from '../../components/AddItemForm';

interface ComponentStateProps {
  list: any;
  status: any;
  fetchList: any;
  tripsById: any;
}
type AppState = ComponentStateProps;

const Items = ({ list, status, fetchList, tripsById }: AppState) => {
  const { id }: any = useParams();
  const currentTrip = tripsById[id];

  useEffect(() => {
    fetchList(currentTrip.listId);
  }, [id]);
  if (status === 'loading') {
    return <p className="mt-32  font-sans text-lg font-bold text-center  ">loading...</p>;
  }
  return (
    <div>
      <div className="bg-indigo-200 text-center mt-16 text-xl">{list.title}</div>
      {list && (
        <div className="grid grid-cols-1 ">
          {list.items.map((item: any) => (
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
  list: state.list.listData,
  status: state.list.getListStatus,
  tripsById: state.trips.byId,
});
export default connect(mapStateToProps, { fetchList })(Items);
