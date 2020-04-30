import React from 'react';
import { Link } from 'react-router-dom';
import PastIcon from './PastIcon';
import AddIcon from './AddIcon';
import ItemsIcon from './ItemsIcon';

const NavBar = () => {
  const navBarButtons = [
    {
      path: '/past',
      icon: <PastIcon />,
      label: 'my trips',
    },
    {
      path: '/add',
      icon: <AddIcon />,
      label: 'add trip',
    },
    {
      path: '/items',
      icon: <ItemsIcon />,
      label: 'my items',
    },
  ];

  return (
    <div className="flex flex-row justify-around border-gray-500 border-t inset-x-0 bottom-0 absolute fixed h-16 text-center">
      {navBarButtons.map(({ icon, label, path }) => (
        <NavBarButton icon={icon} label={label} path={path} key={path} />
      ))}
    </div>
  );
};

export default NavBar;

//Nav Bar Buttons
const NavBarButton = ({ icon, label, path }: any) => {
  return (
    <Link to={path} className="flex flex-col mt-2 justify-end items-center">
      {icon}
      <span>{label}</span>
    </Link>
  );
};
