export const CREATE_USER_START = "CREATE_USER_START";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_ERROR = "CREATE_USER_ERROR";

export enum userStatus { 
  loggedOut = "loggedOut", 
  loading = "loading", 
  loggedIn = "loggedIn", 
  error = "error", 
};

export type userActions = "CREATE_USER_START" | "CREATE_USER_SUCCESS" | "CREATE_USER_ERROR";

export interface UserState {
  userId?: number;
  email?: string;
  status: userStatus;
};

interface UserAction {
  type: userActions;
  payload?: any;
}

const defaultState = {
  userId: undefined,
  email: undefined,
  status: userStatus.loggedOut,
};

const getDefaultState = () => {
  const userJson = window.localStorage.getItem("user");
  
  let initialState;
  if (userJson) {
    const user = JSON.parse(userJson);

    initialState = {
      status: userStatus.loggedIn,
      ...user,
    };
  } else {
    initialState = defaultState;
  }


  return initialState;
};

const userReducer = (state = getDefaultState(), action: UserAction): UserState => {
  switch (action.type) {
    case CREATE_USER_START:
      return { ...state, status: userStatus.loading };
    case CREATE_USER_SUCCESS:
      return {
        userId: action.payload.id,
        email: action.payload.email,
        status: userStatus.loggedIn,
      };
    case CREATE_USER_ERROR:
      return {
        status: userStatus.error,
        email: undefined,
        userId: undefined,
      };
    default:
      return state;
  }
}

export default userReducer;