import axios from 'axios';

export const FETCH_CAKES = 'FETCH_CAKES';
export const FETCH_CAKE = 'FETCH_CAKE';
export const CREATE_CAKE = 'CREATE_CAKE';
export const DELETE_CAKE = 'DELETE_CAKE';

const ROOT_URL =
  'https://stark-wildwood-94955.herokuapp.com?http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api';
const API_KEY = '?key=KAIROSCAKES7678';

export function fetchCakes() {
  const request = axios.get(`${ROOT_URL}/cakes${API_KEY}`);

  return {
    type: FETCH_CAKES,
    payload: request
  };
}

export function fetchCake(id) {
  const request = axios.get(`${ROOT_URL}/cakes/${id}${API_KEY}`);

  return {
    type: FETCH_CAKE,
    payload: request
  };
}

export function createCake(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/cakes${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_CAKE,
    payload: request
  };
}

export function deleteCake(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/cakes/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_CAKE,
    payload: id
  };
}
