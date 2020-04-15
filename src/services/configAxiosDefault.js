import axios from "axios";

// let accessToken = JSON.parse(window.localStorage.accessToken);
// Set config defaults when creating the instance
export let Api = axios.create({
  baseURL: 'http://localhost:3000'
});
