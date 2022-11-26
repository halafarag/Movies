import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/",
  apiKey: "b02d9ad500f63e5b8ad2d64f29b1534a",
});
export default instance;
