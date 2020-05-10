import React from 'react';
import { connect } from 'react-redux';
import createUser from '../../actions/createUser';
import { Link, Redirect } from 'react-router-dom';

interface SignupFormProps {
  registerUser: any;
  status: any;
}

const SignupForm = ({ registerUser, status }: SignupFormProps) => {
  const textInputRef: any = React.useRef(null);

  const onSubmit = (event: any) => {
    event.preventDefault();

    if (textInputRef.current) {
      registerUser(textInputRef.current.value);
      textInputRef.current.value = '';
    }
  };
  if (status === 'loggedIn') {
    return <Redirect to="/past" />;
  }
  return (
    <div>
      <h1 className="mt-8 text-center mb-8 font-sans text-xl font-bold">Welcome to Trip List</h1>
      <form className="px-6 flex-col flex items-center" onSubmit={onSubmit}>
        <input
          ref={textInputRef}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mb-4 text-center"
          placeholder="Please sign up or in with your email"
          type="email"
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-32 mt-64"
          type="submit"
        >
          Sign up
        </button>
        <div className="mt-4 text-center">
          <Link to="/login" className="no-underline text-blue-500 text-md">
            I already have an account
          </Link>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
