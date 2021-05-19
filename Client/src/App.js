import React from "react";
import NavbarBlog from "./Components/navBar/index";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Footer from "./Components/footer/index";
import ContactUS from "./Components/contactus/index";
import CreateBlog from "./Components/createblog/index";
import BlogDetail from "./Components/blogDetail/index";
import Home from "./Components/home/index";
import Auth from "./Components/auth/auth";
import SignUp from "./Components/signup/signUp";
import Login from "./Components/login/login";
import Logout from "./Components/logout/logout";
import ProtectedRoute from "./Components/protectedRoutes/protectedRoutes";
import HomeTest from "./Components/home/homeTest";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavbarBlog />
        <Switch>
          <Route exact path="/products"></Route>
          <Route path="/home" component={Home} />
          <Route path="/technology" component={Home} />
          <Route path="/lifestyle" />
          <Route path="/food" />
          <Route path="/features" />
          <Route path="/tag-archive" />
          <Route path="/aboutus" />
          <Route path="/homet" component={HomeTest} />
          <Route path="/blog-detail/:id" component={BlogDetail} />
          {/* <Route path="/create" component={CreateBlog} /> */}
          <Route path="/blogs/:id" />
          <Route path="/contactus" component={ContactUS} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={Login} />
          <ProtectedRoute exact path="/create" component={CreateBlog} ></ProtectedRoute>
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
