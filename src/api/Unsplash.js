import axios from 'axios';
import env from './env.json';

export default axios.create({
  baseURL: 'https://api.unsplash.com/search/photos',
  headers: {
    Authorization: `Client-ID ${env.clientId}`
  }
});
