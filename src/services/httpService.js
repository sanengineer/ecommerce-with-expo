import axios from "axios";

const api = axios.create({
  baseURL: "https://sosmetend.herokuapp.com/api/v1",
  headers: {
    "content-type": "application/json",
  },
});

const apiEcommerce = axios.create({
  baseURL: "http://localhost:1337",
  headers: {
    "content-type": "application/json",
  },
});

//
//debug
console.log("api", api);
console.log("api_products", apiEcommerce);

export { api, apiEcommerce };
