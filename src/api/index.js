import axios from 'axios';

import authorization from '../utils/authorization';

const auth = authorization();

export const userLogin = ( email, password ) => {
  return axios.post('https://api.bmakers.site/v1/login', { email, password}, {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const fetchGames = (page, token = auth) => {
  if(token) {
    return axios.get(`https://api.bmakers.site/v1/rtm/casino?sort_by=id&sort_order=desc&limit=50&page=${page}`, {
      headers: {"Authorization": token}
    })
  }
  return false
};