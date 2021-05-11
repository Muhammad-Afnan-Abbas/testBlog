import React, { Component, useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { signin, signup } from "../actions/auth";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Auth = () => {
  const state = null;
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignup((previsSignup) => !previsSignup);
    //handleShowPassword(false);
  };

  const googleSuccess = (res) => {
    console.log(res);
  };

  const googleFailure = () => {
    console.log("sign in failed");
  };

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  return (
    <div className="container">
      <div>
        <Avatar className="avatar"></Avatar>
        <h5>{isSignup ? "Sign up" : "Sign in"}</h5>
        <form
          className="form"
          onClick={(e) => handleSubmit(e)}
          method="POST"
          action="/user"
        >
          <div className="container">
            {isSignup && (
              <>
                <div className="row">
                  <div className="col-lg-3 col-md-5 col-sm-12">
                    <label for="title">
                      <strong>First Name</strong>
                    </label>
                  </div>
                  <div className="col-lg-9 col-md-7 col-sm-12 style-inp">
                    <input
                      name="firstName"
                      label="First Name"
                      onChange={handleChange}
                      placeholder="Enter First Name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-5 col-sm-12">
                    <label for="title">
                      <strong>Last Name</strong>
                    </label>
                  </div>
                  <div className="col-lg-9 col-md-7 col-sm-12 style-inp">
                    <input
                      name="lastName"
                      label="Last Name"
                      onChange={handleChange}
                      placeholder="Enter Last Name"
                    />
                  </div>
                </div>
              </>
            )}
            <div className="row">
              <div className="col-lg-3 col-md-5 col-sm-12">
                <label for="title">
                  <strong>Email</strong>
                </label>
              </div>
              <div className="col-lg-9 col-md-7 col-sm-12 style-inp">
                <input
                  name="email"
                  label="Email"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-5 col-sm-12">
                <label for="title">
                  <strong>Password</strong>
                </label>
              </div>
              <div className="col-lg-9 col-md-7 col-sm-12 style-inp">
                <input
                  name="password"
                  label="Password"
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                />
                <i className="fa fa-eye" onClick={handleShowPassword} />
              </div>
            </div>
            {isSignup && (
              <div className="row">
                <div className="col-lg-3 col-md-5 col-sm-12">
                  <label for="title">
                    <strong>Confirm Password</strong>
                  </label>
                </div>
                <div className="col-lg-9 col-md-7 col-sm-12 style-inp">
                  <input
                    name="confirmPassword"
                    label="Repeat Password"
                    handleChange={handleChange}
                    type="password"
                  ></input>
                </div>
              </div>
            )}
          </div>
          <GoogleLogin
            clientId="1045868687652-3r8bd4kt24aku1b95hpo8dg3hsits4ne.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                className="gbtn"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={
                  <svg
                    style={{ width: "20px", height: "20px" }}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"
                    />
                  </svg>
                }
              >
                Google Sign In
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <button type="submit">{isSignup ? "Sign up" : "Sign in"}</button>
          {/* <Grid item>
        <button onClick={switchMode}>
        {
          isSignup ? 'Already have an account? Sign In': 'Dont have an account? Sign Up'
        }
        </button>
      </Grid> */}
        </form>
        <div className="btn-div">
          <button onClick={switchMode}>
            {isSignup
              ? "Already have an account? Sign In"
              : "Dont have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
