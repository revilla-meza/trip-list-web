import React from 'react';
import { connect } from 'react-redux';
import createUser from '../actions/createUser';

interface UserFormProps {
  registerUser: any;
  status: any;
}

const UserForm = ({ registerUser, status }: UserFormProps) => {
  const textInputRef: any = React.useRef(null);

  const onSubmit = (event: any) => {
    event.preventDefault();

    if (textInputRef.current) {
      registerUser(textInputRef.current.value);
      textInputRef.current.value = '';
    }
  };
  return (
    <div>
      <h1 className="mt-8 text-center mb-8 font-sans text-xl font-bold">Welcome to Trip List</h1>
      <form className="px-6" onSubmit={onSubmit}>
        <input
          ref={textInputRef}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mb-4 text-center"
          placeholder="Please sign up or in with your email"
          type="email"
        />

        <button
          className="mx-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-20 mt-64"
          type="submit"
        >
          Sign up/in
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  status: state.user.status,
});

const mapDispatchToProps = {
  registerUser: (email: string) => createUser(email),
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
