import axios from "axios";

// const API_URL = 'http://172.16.0.7:8080';
const API_URL = 'https://kevin-sds2.herokuapp.com';

export function fetchOrders(){
  return axios(`${API_URL}/orders`);
}

export function confirmDelivery(orderId: number){
  return axios.put(`${API_URL}/orders/${orderId}/delivered`)
}