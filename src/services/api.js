/* eslint-disable object-curly-newline */
// eslint-disable-next-line object-curly-newline
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
