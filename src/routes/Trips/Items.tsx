import React, { useEffect } from 'react';
import NavBar from '../../components/NavBar';
import ItemCard from './ItemCard';
import { connect } from 'react-redux';
import fetchList from '../../actions/fetchList';
import { useParams } from 'react-router-dom';

interface ComponentStateProps {
  list: any;
  status: any;
  fetchList: any;
  trips: any;
}
type AppState = ComponentStateProps;

const Items = ({ list, status, fetchList, trips }: AppState) => {
  const { id } = useParams();
  const currentTrip = trips.find((trip: any) => {
    return trip.id === Number(id);
  });
  useEffect(() => {
    fetchList(currentTrip.listId);
  }, [fetchList]);
  if (status === 'loading') {
    return <p className="mt-32  font-sans text-lg font-bold text-center  ">loading...</p>;
  }
  return (
    <div>
      <div className="bg-indigo-200 text-center mt-16">{list.title}</div>
      <div className="grid grid-cols-1 ">
        {list.items.map((item: any) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
      <NavBar />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  list: state.list.listData,
  status: state.list.getListStatus,
  trips: state.trips.trips,
});
export default connect(mapStateToProps, { fetchList })(Items);
