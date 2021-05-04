import React, { Component } from "react";
import { TAGS } from "./constants";
import { toastr } from "react-redux-toastr";
import "./Css/createBlog.css";
class CreateBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortList: [],
      results: [],
      value: "",
    };
  }
  handleOptions = (event) => {
    let key = event.target.value;
    //console.log(key)
    let temp = [...this.state.results];
    temp.indexOf(key) === -1
      ? temp.push(key)
      : toastr.error("Subject is already selected");
    //console.log(array)
    //temp.push(key);
    //console.log(temp);
    //console.log("Array",temp)
    this.setState({
      results: temp,
    });
  };

  handleOptionsExit = (key) => {
    console.log(key);
    let temp = [...this.state.results];
    // 	this.setState({
    // 		results: this.state.temp.filter(key => key.id !== key)

    // 	})
    //let items =
    this.setState({ results: temp.filter((item) => item !== key) });
    //console.log(results)
  };
  render() {
    const { results, value } = this.state;
    return (
      <>
        <div className="fluid-container section" id="section1">
          <h2>Create Blog Post</h2>
          <p>Please Enter following details for publishing your Blog</p>

          <div className="container">
            <form method="POST" action="/post-feedback">
              <div className="row">
                <div className="col-25">
                  <label for="title">Title</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="title"
                    name="posttitle"
                    placeholder="Enter Title"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="lname">Post Content</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="pcontent"
                    name="pcontent"
                    placeholder="Write or paste Content"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="tags">Tags</label>
                </div>
                <div className="col-75">
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
                <div className="col-25">
                  <label for="subject">Upload Image</label>
                </div>
                <div className="col-75">
                  <input type="file" className="form-control" id="customFile" />
                </div>
              </div>
              <div className="row">
                <div className="col-75">
                  <input type="submit" value="Create" className="bgc" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default CreateBlog;
