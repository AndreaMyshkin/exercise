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

export const allProducts = (slug, page, value) => {
  const request = axios
    .get(`${proxyUrl}${apiProducts}?category__slug=${slug}&page=${page}${value}`)
    .then(res => res.data);
  return { type: "GET_PRODUCTS", payload: request };
};

export const searchProduct = (product) => {
  const request = axios
    .get(`${proxyUrl}${apiProducts}?search=${product}`)
    .then(res => res.data);
  return { type: "GET_PRODUCT", payload: request };
};