import { userLogin, fetchGames } from '../api';

import {
  USER_LOGOUT,
  USER_FETCHED,
  GAMES_FETCHED,
  USER_IS_LOGIN,
  USER_LOGIN_ERROR,
} from './actionTypes'

const userIsLogin = value => {
 return {
   type: USER_IS_LOGIN,
   payload: value
 }
};

const gamesFetched = value => {
  return {
    type: GAMES_FETCHED,
    payload: value
  }
};

export const login = (email, password, history) => {

  return async dispatch => {
    dispatch(userIsLogin(true));
    try {
      const response = await userLogin(email, password);
      const { access_token, user } = response.data.data;

      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', access_token);

      dispatch({type: USER_FETCHED, payload: {user, access_token}});
      dispatch(userIsLogin(false));
      history.push('/home');
    }
    catch(err) {
      dispatch(userIsLogin(false));
      dispatch({type: USER_LOGIN_ERROR, payload:err.response.data.text})
    }
  }
};

export const getTheGames = (page = 1) => {
  return async (dispatch, getState) => {

    const { token } = getState().authReducer ;
    try {
      const response = await fetchGames(page, token);
      dispatch( gamesFetched(response.data.data))
    }
    catch (err) {
      console.log(err)
    }
  }

};

export const loadGameDataSocket = (socket) => {
  return  dispatch => {
    socket.on('message',(res) => {
      console.log(res);
      dispatch(dispatch( gamesFetched(res.data.data)))
    })
  }
};

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  return {
    type: USER_LOGOUT
  }
}

