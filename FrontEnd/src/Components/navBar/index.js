import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions/authActions";
import "./navbar.css";
import Search from "./search/index";
class NavbarBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    //const user = null;
    const { loggedOn } = this.props;
    console.log("Hell", loggedOn);
    const isAuthenticated = this.props.auth;
    const user = this.props.auth;
    console.log("auth", isAuthenticated);
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
            {isAuthenticated.isAuthenticated && (
              <Link className="link-set" to="/create">
                <i className="fa fa-plus-square link-set" />
                Create Blog
              </Link>
            )}
            <Search></Search>
            {!isAuthenticated.isAuthenticated && (
              <Link className="link-set" to="/register">
                <i className="fa fa-user-plus link-set" />
                SignUp
              </Link>
            )}
            {!isAuthenticated.isAuthenticated && (
              <Link className="link-set" to="/login">
                <i class="fa fa-sign-in link-set" aria-hidden="true"></i>
                Login
              </Link>
            )}
            {isAuthenticated.isAuthenticated && (
              <>
                <Link
                  className="link-set"
                  to="/login"
                  onClick={this.onLogoutClick}
                >
                  <i class="fa fa-sign-out link-set" aria-hidden="true"></i>
                  Logout
                </Link>
                <div className="link-set">
                  <img
                    src="/images/img_avatar.png"
                    alt="Avatar"
                    class="avatar"
                  ></img>
                </div>
                <Link to="/dashboard" className="link-set">
                  <div>{user.user.name}</div>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

NavbarBlog.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(NavbarBlog);
