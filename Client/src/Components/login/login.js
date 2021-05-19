// import React, { Component } from 'react';
// import axios from "axios";
// import './login.css'
// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email:'',
//       password:''
//     }
//     this.handleEmail =this.handleEmail.bind(this)
//     this.handlePassword =this.handlePassword.bind(this)
//     this.onSubmit= this.onSubmit.bind(this)
//   }
//   handleEmail(event){
//     this.setState({
//       email: event.target.value
//     })
//   }
//   handlePassword(event){
//     this.setState({
//       password: event.target.value
//     })
//   }
//   onSubmit(event){
//     event.preventDefault()
//     const response = fetch('http://localhost:3001/signin', {
//       method:"POST",
//       headers:{
//         "Content-Type" : "application/json"
//       },
//       body: JSON.stringify({
//         email: this.state.email,
//         password: this.state.password
//       })
//     })
//     const data = response
//     console.log(response)
//     if(response.status === 400 || !data) {
//       window.alert("Invalid credentials")
//     } else {
//       window.alert("Login successful")
//     }
//     this.setState({
//       name:'',
//       email:'',
//       password:''
//     })
//   }
//   render() {
//     return (
//       <div>
//         <div className="container">
//         <div className="row">
//         <div className="col-3">
//           </div>
//           <div className="form-div col-6 shadow">
//           <h2 className="text-center">Sign In</h2>
//             <form onSubmit={this.onSubmit}>
//             <input
//               type="text"
//               placeholder="Email"
//               onChange={this.handleEmail}
//               value={this.state.email}
//               className="form-control form-group"
//             />
//             <input
//               type="password"
//               placeholder="password"
//               onChange={this.handlePassword}
//               value={this.state.password}
//               className="form-control form-group"
//             />
//             <button type="submit" className="btn btn-danger btn-block" value="Log in">Sign In</button>
//             </form>
//           </div>
//           <div className="col-3">
//           </div>
//         </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { signupUser, loginUser } from "../../redux/actions/authActions";
import { LOGIN } from "../../redux/types";

import { ToastContainer, toast } from 'react-toastify';
import "./login.css";

const Login = () => {
  const [register, setRegister] = useState(false);
  const [loggedIn, setLoggedIn] =  useState(localStorage.getItem("isAuthenticated"))
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  // Functions
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
    setFormData({
      email: "",
      password: "",
    })
  };

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  if (loginUser.email != null) return <Redirect to="/home" />;
  toast.configure()
  const notify = (message) => toast.error(message);
  const notifyError = (message) => toast.error(message);

  //const isAuthenticated = localStorage.getItem("isAuthenticated");
  if (loggedIn){
    return (
      <div>
        {notify("Already Logged In !")}
      <Redirect to="/home"></Redirect>
      </div>
    )
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="form-div col-6 shadow">
          <h2 className="text-center">Sign In</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <input
              type="email"
              placeholder="email address"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
              className="form-control form-group"
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              minLength="8"
              value={password}
              onChange={(e) => onChange(e)}
              required
              className="form-control form-group"
            />
            <button
              type="submit"
              className="btn btn-danger btn-block"
              value="Log in"
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default withRouter(Login);
