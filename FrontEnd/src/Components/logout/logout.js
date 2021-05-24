import React from "react";
import { useDispatch } from "react-redux";
//import { getSecret, logoutUser } from "../../redux/actions/authActions";
import API from "../../utils/API";

const Logout = () => {
  //const dispatch = useDispatch();
  const logoutUser = async () => {
    try{
      const res = await API.get('/logout');
      console.log(res);
    }
    catch (err){
      console.log(err.response);
    }
  }
  return (
    <div className="header">
      <div className="header__item" onClick={(e) => logoutUser()}>
        Logout
      </div>
    </div>
  );
};

export default Logout;