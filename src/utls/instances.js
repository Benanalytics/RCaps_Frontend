import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});



instance.interceptors.response.use(
  response => {
    return response
  },
  function (error) {
    if (error.response.status === 401 ) {
      window.location = '/login';
      //window.location.replace(window.location.origin + '/login');
      return Promise.reject(error)
    }

    return Promise.reject(error)
  }
)