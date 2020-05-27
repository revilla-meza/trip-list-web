import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import mockData from './mockData.js';
import ItemCard from './ItemCard';
import { connect } from 'react-redux';

interface ComponentStateProps {
  ids: any;
  data: {
    listId: any;
  };
}
type AppState = ComponentStateProps;

const Items = ({ ids, data }: AppState) => {
  const [mockItems] = useState(mockData);
  console.log(data.listId);
  return (
    <div>
      <div className="bg-indigo-200 text-center mt-16">Untitled List</div>
      <div className="grid grid-cols-1 ">
        {mockItems.map((item: any) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>

      <NavBar />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  ids: state.lists.ids,
  data: state.lists.data,
});
export default connect(mapStateToProps, {})(Items);
