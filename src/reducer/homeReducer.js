import { GAMES_FETCHED } from '../actions/actionTypes';

const initialState = {
  games: []
};

export default (state = initialState, action) => {
  const newState = {};
  switch (action.type) {
    case GAMES_FETCHED:
      newState.games = [...action.payload.data];
      return newState;
    default:
      return state
  }
}
