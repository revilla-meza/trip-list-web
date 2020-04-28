import React from 'react';
import { Link } from 'react-router-dom';
import add from './add.svg';
import past from './past.svg';
import items from './items.svg';

const NavBar = () => {
  return (
    <div>
      <div className="flex flex-row justify-around border-gray-500 border-t inset-x-0 bottom-0 absolute fixed h-16 text-center">
        <Link to="/past" className="mt-2">
          <img src={past} alt="navbar" />
        </Link>
        <Link to="/add" className="mt-2">
          <img src={add} alt="navbar" />
        </Link>
        <Link to="" className="mt-2">
          <img src={items} alt="navbar" />
        </Link>
      </div>
      <div className="flex flex-row justify-around items-end inset-x-0 bottom-0 absolute fixed items-center text-gray-600">
        <p>my trips</p>
        <p>add trip</p>
        <p>my items</p>
      </div>
    </div>
  );
};

export default NavBar;
