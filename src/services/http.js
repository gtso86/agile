import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://sample-api-78c77.firebaseio.com/tv-shows',
});
