import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Css/navbar.css';
export default class NavbarBlog extends Component {
  render() {
    const user = null;
    return (
        // <Navbar className="NavBarMain" bg="dark" variant="dark" sticky="top">
        //  <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="ml-auto ContentNav">
        //         <Link className="link-set" to="/home">
        //             <i className="fas fa-home link-set" />
        //             Home
        //         </Link>
        //         <Link className="link-set" to="/technology">
        //             <i className="fas fa-home link-set" />
        //             Technology
        //         </Link>
        //         <Link className="link-set" to="/lifestyle">
        //             <i className="fas fa-home link-set" />
        //             LifeStyle
        //         </Link>
        //         <Link className="link-set" to="/food">
        //             <i className="fas fa-home link-set" />
        //             Food
        //         </Link>
        //         <Link className="link-set" to="/features">
        //             <i className="fas fa-home link-set" />
        //             Features
        //         </Link>
        //         <Link className="link-set" to="/tag-archive">
        //             <i className="fas fa-home link-set" />
        //             Tag Archive
        //         </Link>
        //         <Link className="link-set" to="/aboutus">
        //             <i className="fas fa-home link-set" />
        //             About Us
        //         </Link>
        //         <Link className="link-set" to="/contactus">
        //             <i className="fas fa-home link-set" />
        //             Contact Us
        //         </Link>
        //         <Link className="link-set" to="/create">
        //             <i className="fas fa-home link-set" />
        //             Create Blog
        //         </Link>
        //         </Nav>
        //       </Navbar.Collapse>
        // </Navbar>
        <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
            <Navbar.Brand href="#home">Afnan's Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto ContentNav">
                <Link className="link-set" to="/home">
                     <i className="fa fa-home link-set" />
                     Home
                 </Link>
                 <Link className="link-set" to="/technology">
                     <i className="fa fa-laptop link-set" />
                     Technology
                 </Link>
                 <Link className="link-set" to="/lifestyle">
                     <i className="fa fa-home link-set" />
                     LifeStyle
                 </Link>
                 <Link className="link-set" to="/food">
                     <i className="fa fa-cutlery link-set" />
                     Food
                 </Link>
                 <Link className="link-set" to="/tag-archive">
                     <i className="fa fa-tags link-set" />
                     Tag Archive
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
                 { user ? (
                    <Link className="link-set" to="/create">
                     <i className="fa fa-plus-square link-set" />
                     Logout
                 </Link>
                 ) : (
                    <Link className="link-set" to="/auth">
                     <i className="fa fa-plus-square link-set" />
                     Login
                 </Link>
                 )}
                </Nav>
                </Navbar.Collapse>
            </Navbar>

    );
  }
}