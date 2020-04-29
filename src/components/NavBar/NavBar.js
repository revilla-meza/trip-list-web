import React from 'react';
import { Link } from 'react-router-dom';
import add from './add.svg';
import past from './past.svg';
import items from './items.svg';

const NavBar = () => {
  const navBarButtons = [
    {
      path: '/past',
      iconSrc: past,
      label: 'my trips',
    },
    {
      path: '/add',
      iconSrc: add,
      label: 'add trip',
    },
    {
      path: '/items',
      iconSrc: items,
      label: 'my items',
    },
  ];

  return (
    <div className="flex flex-row justify-around border-gray-500 border-t inset-x-0 bottom-0 absolute fixed h-16 text-center">
      {navBarButtons.map(({ iconSrc, label, path }) => (
        <NavBarButton iconSrc={iconSrc} label={label} path={path} key={path} />
      ))}
    </div>
  );
};

export default NavBar;

//Nav Bar Buttons 
const NavBarButton = ({ iconSrc, label, path }) => {
  return (
    <Link to={path} className="flex flex-col mt-2">
      <img src={iconSrc} alt='nav-bar button' />
      <span>{label}</span>
    </Link>
  );
};
