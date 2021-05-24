import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:3001/create",
  headers: {
    "Content-type": "application/json"
  }
});