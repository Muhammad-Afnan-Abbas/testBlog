import React from "react";
import NavbarBlog from "./Components/navBar/index";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Footer from "./Components/footer/index";
import ContactUS from "./Components/contactus/index";
import CreateBlog from "./Components/createblog/index";
import BlogDetail from "./Components/blogDetail/index";
import Home from "./Components/home/index";
//import SignUp from "./Components/signup/signUp";
//import Login from "./Components/login/login";
import Logout from "./Components/logout/logout";
import ProtectedRoute from "./Components/protectedRoutes/protectedRoutes";
import PrivateRoute from './Components/private-route/PrivateRoute';
import HomeTest from "./Components/home/home";
import store from './Components/redux/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './Components/redux/actions/authActions';
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded)); // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser()); // Redirect to login
      window.location.href = '/login';
    }
  }
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavbarBlog />
        <Switch>
          <Route exact path="/products"></Route>
          {/* <Route path="/home" component={Home} /> */}
          <Route path="/technology" component={Home} />
          <Route path="/lifestyle" />
          <Route path="/food" />
          <Route path="/features" />
          <Route path="/tag-archive" />
          <Route path="/aboutus" />
          <Route path="/home" component={HomeTest} />
          <Route path="/blog-detail/:id" component={BlogDetail} />
          {/* <Route path="/create" component={CreateBlog} /> */}
          <Route path="/blogs/:id" />
          <Route path="/contactus" component={ContactUS} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/create" component={CreateBlog} />
          </Switch>
          {/* <ProtectedRoute exact path="/create" component={CreateBlog} ></ProtectedRoute> */}
          {/* <Route path="/logout" component={Logout} /> */}
          {/* <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" /> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
