import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { connect } from 'react-redux'
import "./navbar.css";
import Search from "./search/index";
class NavbarBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //isLoggedIn: false
    };
    console.log(this.props.loggedOn)
  }
  logoutUser = async () => {
    try{
      const res = await API.get('/logout');
      console.log(res);
      localStorage.removeItem("user")
      localStorage.clear()
    }
    catch (err){
      console.log(err.response);
    }
  }
  
  render() {
    const user = null;
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    return (
      <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ContentNav">
            <Link className="link-set" to="/home">
              <i className="fa fa-home link-set" />
              Home
            </Link>
            <Link className="link-set" to="/aboutus">
              <i className="fa fa-info-circle link-set" />
              About Us
            </Link>
            <Link className="link-set" to="/contactus">
              <i className="fas fa fa-address-book link-set" />
              Contact Us
            </Link>
            <Link className="link-set" to="/create">
              <i className="fa fa-plus-square link-set" />
              Create Blog
            </Link>
            <Search></Search>
              <Link className="link-set" to="/signup">
                <i className="fa fa-user-plus link-set" />
                SignUp
              </Link> 
                <Link className="link-set"  onClick={(e) => this.logoutUser()}>
              <i class="fa fa-sign-out link-set" aria-hidden="true"></i>
                Logout 
              </Link>
              <Link className="link-set" to="/signin">
                <i class="fa fa-sign-in link-set" aria-hidden="true"></i>
                Login
              </Link>
              
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state, props) => {
	return {
		loggedOn: state.loggedOn
	};
};
export default connect(mapStateToProps)(NavbarBlog);