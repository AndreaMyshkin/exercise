import axios from "axios";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const apiMenu = "https://canastarosa.com/services/api/v1/market/categories/";
const apiProducts = "https://canastarosa.com/services/api/v1/market/products/";

export const menu = () => {
  const request = axios.get(proxyUrl + apiMenu).then(res => res.data);
  return {
    type: "GET_MENU",
    payload: request
  };
};

export const allProducts = slug => {
  const request = axios
    .get(`${proxyUrl}${apiProducts}?category__slug=${slug}`)
    .then(res => res.data);
  return { type: "GET_PRODUCTS", payload: request };
};
