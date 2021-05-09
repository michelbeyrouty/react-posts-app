import axios from 'axios';

// Internal API
export const INTERNAL_API = axios.create({
  baseURL: process.env.REACT_APP_INTERNAL_API,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  },
  timeout: 10000
});
