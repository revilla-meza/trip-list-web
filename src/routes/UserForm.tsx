import React from 'react';

const UserForm = (props: any) => {
  return (
    <div>
      <h1 className="mt-8 text-center mb-8 font-sans text-xl font-bold">Welcome to Trip List</h1>
      <form className="px-6" >
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mb-4 text-center"
          placeholder="Please sign up or in with your email"
          type="email"
        />
      </form>
    </div>
  );
};

export default UserForm;
