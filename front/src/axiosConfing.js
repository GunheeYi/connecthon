import axios from "axios";

const client = axios.create({
  baseURL: "http://ori5ri.shop:4000/",
});

export default client;
