import React, { Component } from "react";
import { TAGS } from "../contants/constants";
import { toastr } from "react-redux-toastr";
import "./createBlog.css";
import http from "../../http-common";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from "axios";

class EditBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortList: [],
      results: [],
      value: "",
      title: "",
      content: "",
      file: "",
    };
  }
  handleTitle = (e) => {
    this.setState({ title: e.target.value });
    console.log("title", this.title);
  };
  handleContent = (c) => {
    this.setState({ content: c.target.value });
    console.log("content", this.content);
  };
  handleOptions = (event) => {
    let key = event.target.value;
    //console.log(key)
    let temp = [...this.state.results];
    temp.indexOf(key) === -1
      ? temp.push(key)
      : toastr.error("Subject is already selected");
    this.setState({
      results: temp,
    });
  };

  handleOptionsExit = (key) => {
    console.log(key);
    let temp = [...this.state.results];
    this.setState({ results: temp.filter((item) => item !== key) });
  };

  handleClick(event) {
    event.preventDefault();
    const { user } = this.props.auth;
    const newForm = {
      title: this.state.title,
      content: this.state.content,
      file: this.state.file,
      results: this.state.results,
      username: user.name
    };
    console.log(newForm);
    console.log(this.state.file);
    console.log("logged in is",user.id)
    axios.post("http://localhost:3001/edit", newForm);
    this.setState({
      title: "",
      content: "",
      results: [],
      file: "",
    });
    this.props.history.push("/home");
  }

  onChangeHandler = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => this.setState({ file: reader.result });
  };

  render() {
    const { results } = this.state;
    return (
      <>
        <div className="fluid-container section" id="section1">
          <h2>Create Blog Post</h2>
          <p>Please Enter following details for publishing your Blog</p>

          <div className="container">
            <form method="POST" action="/create" enctype="multipart/form-data">
              <div className="row">
                <div className="col-lg-3 col-md-5 col-sm-12">
                  <label for="title">
                    <strong>Post Title</strong>
                  </label>
                </div>
                <div className="col-lg-9 col-md-7 col-sm-12 style-inp">
                  <input
                    type="text"
                    id="title"
                    onChange={(event) => this.handleTitle(event)}
                    name="title"
                    placeholder="Enter Title"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-5 col-sm-12">
                  <label for="lname">
                    <strong>Post Content</strong>
                  </label>
                </div>
                <div className="col-lg-9 col-md-7 col-sm-12 style-inp">
                  <input
                    type="text"
                    id="pcontent"
                    onChange={(event) => this.handleContent(event)}
                    name="content"
                    placeholder="Write or paste Content"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-5 col-sm-12">
                  <label for="tags">
                    <strong>Tags</strong>
                  </label>
                </div>
                <div className="col-lg-9 col-md-7 col-sm-12 style-inp">
                  <select
                    id="country"
                    name="tags"
                    onChange={this.handleOptions}
                  >
                    {TAGS.map((sort, index) => {
                      return (
                        <option key={index} value={sort.value}>
                          {sort.tagCategory}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="options-filter">
                {results.map((sort, index) => {
                  return (
                    <ul>
                      <li>
                        <a key={index}>
                          {sort}
                          <i
                            className="fa fa-times ml-2"
                            aria-hidden="true"
                            onClick={() => this.handleOptionsExit(sort)}
                          ></i>
                        </a>
                      </li>
                    </ul>
                  );
                })}
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-5 col-sm-12">
                  <label for="subject">
                    <strong>Upload Image</strong>
                  </label>
                </div>
                <div className="col-lg-9 col-md-7 col-sm-12 style-inp">
                  <input
                    onChange={(event) => this.onChangeHandler(event)}
                    type="file"
                    className="form-control"
                    id="customFile"
                    required
                  />
                </div>
              </div>
              <div className="row">
                {this.state.file && (
                  <img className="imgt" src={this.state.file}></img>
                )}
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-5 col-sm-12"></div>
                <div className="col-lg-9 col-md-7 col-sm-12">
                  <button
                    type="submit"
                    onClick={(event) => this.handleClick(event)}
                    value="Create"
                    className="bgc"
                  >
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

EditBlog.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

// export default (connect(mapStateToProps))(CreateBlog);
export default connect(mapStateToProps)(EditBlog);