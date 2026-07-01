import axios from "axios";

const api = axios.create({
  baseURL: "https://pizzashopreact.onrender.com",
});

export default api;