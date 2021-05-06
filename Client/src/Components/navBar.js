import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Css/navbar.css';
export default class NavbarBlog extends Component {
  render() {
    return (
        <Navbar className="NavBarMain" bg="dark" variant="dark" sticky="top">
         <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto ContentNav">
                <Link className="link-set" to="/home">
                    <i className="fas fa-home link-set" />
                    Home
                </Link>
                <Link className="link-set" to="/technology">
                    <i className="fas fa-home link-set" />
                    Technology
                </Link>
                <Link className="link-set" to="/lifestyle">
                    <i className="fas fa-home link-set" />
                    LifeStyle
                </Link>
                <Link className="link-set" to="/food">
                    <i className="fas fa-home link-set" />
                    Food
                </Link>
                <Link className="link-set" to="/features">
                    <i className="fas fa-home link-set" />
                    Features
                </Link>
                <Link className="link-set" to="/tag-archive">
                    <i className="fas fa-home link-set" />
                    Tag Archive
                </Link>
                <Link className="link-set" to="/aboutus">
                    <i className="fas fa-home link-set" />
                    About Us
                </Link>
                <Link className="link-set" to="/contactus">
                    <i className="fas fa-home link-set" />
                    Contact Us
                </Link>
                <Link className="link-set" to="/create">
                    <i className="fas fa-home link-set" />
                    Create Blog
                </Link>
                </Nav>
              </Navbar.Collapse>
        </Navbar>
    );
  }
}