import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/authActions';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import AllProducts from '../Dashboard/products/allProducts'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ViewBlogs: false,
    }
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  onView = e => {
    this.setState({ ViewBlogs: !this.state.ViewBlogs })
  }
  onView2 = e => {
    this.setState({ ViewBlogs: !this.state.ViewBlogs })
  }

  render() {
    const { user } = this.props.auth;
    const { ViewBlogs } = this.state
    //console.log("hello")
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Welcome <b>{user.name.split(' ')} </b></h1>
            <div className="content">
              <Link to="/create">
                <button
                  className="btn btn-lg btn-success mt-5"
                >
                  Create a Blog
                 </button>
              </Link>
              {/* <button
                   onClick={this.onLogoutClick}
                   className="btn btn-lg btn-warning mt-5"
                 >
                   Logout
                 </button> */}
              <button
                onClick={(e) => this.onView(e)}
                value="View"
                className="btn btn-lg btn-warning mt-5"
              >
                View Blogs
                 </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {ViewBlogs == true &&
              <AllProducts></AllProducts>
            }
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
