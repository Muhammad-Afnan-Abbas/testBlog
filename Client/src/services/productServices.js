import axios from "axios";
import jwtDecode from "jwt-decode";

export function getSellerProducts() {
    const jwt = localStorage.getItem("jwtToken");
    console.log("mytoken",jwtDecode(jwt));
    const names = jwtDecode(jwt)
    return axios.get('http://localhost:3001'+'/seller/'+names.name);
  }