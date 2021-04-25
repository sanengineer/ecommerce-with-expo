import axios from "axios";

const api = axios.create({
  baseURL: `http://${process.env.LOCAL_BACKEND_API_HOSTNAME}:${process.env.LOCAL_BACKEND_API_PORT}/${process.env.LOCAL_BACKEND_API_VERSION}`,
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
