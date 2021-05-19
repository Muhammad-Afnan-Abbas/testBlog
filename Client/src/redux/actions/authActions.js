
// change the baseURL for a production build
import axios from "axios";
import API from '../../utils/API'
import { SIGN_UP, LOGIN, LOGOUT } from "../types";
import { toastr } from 'react-redux-toastr';
//import { ToastContainer } from "react-toastr";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css'
import history from "../../Components/history";

toast.configure()
const notify = (message) => toast.success(message);
const notifyError = (message) => toast.error(message);

export const signupUser = (email, password) => async (dispatch) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };
    const body = { email, password };
    const res = await API.post("/signup", body, config);
    dispatch({ type: SIGN_UP, payload: res.data.user });
    console.log(res);
  } catch (err) {
    console.log(err.response.data.message);
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };
    const body = { email, password };
    const res = await API.post("/signin", body, config, );
    dispatch({ type: LOGIN, payload: res.data.user, withCredentials: true,
      credentials: "include" });
    //console.log("Hello",res.data);
    localStorage.setItem("user", res.data.token)
    localStorage.setItem("isAuthenticated", "true");
    notify("Login Successfull!");
    //toastr.success('The title', 'The message')
    //window.history.push('/home')
    //history.push('/home');
    //window.location.reload()
  } catch (err) {
    console.log(err.response.data.message);
    notifyError("Wrong Credentials")
  }
};
export const logoutUser = () => async (dispatch) => {
  try {
    await API.get("/logout");
    dispatch({ type: LOGOUT });
    localStorage.removeItem("user")
    localStorage.removeItem("isAuthenticated");
    localStorage.clear()
  } catch (err) {
    console.log(err.response.data.message);
  }
};