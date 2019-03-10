import {
  USER_LOGOUT,
  USER_FETCHED,
  USER_IS_LOGIN,
  USER_LOGIN_ERROR
} from '../actions/actionTypes';

import errorMessages from '../utils/errorMessages'

const initialState = {
  user: {...JSON.parse(localStorage.getItem('user'))},
  token: localStorage.getItem('token'),
  isLogin: false,
  loginError: '',
};

export default (state = initialState, action) => {
  const newState = {...state};
  switch (action.type) {
    case USER_FETCHED:
      newState.user = {...action.payload.user};
      newState.token = action.payload.access_token;
      return newState;
    case USER_IS_LOGIN:
      newState.isLogin = action.payload;
      return newState;
    case USER_LOGIN_ERROR:
      const error = errorMessages[action.payload] ? errorMessages[action.payload] : 'Unknown error';
      newState.loginError = error;
      return newState;
    case USER_LOGOUT:
      newState.user = '';
      newState.token = '';
      return newState;
    default:
      return state
  }
}