import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Css/home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="section" id="section1">
          <h2>Create Blog Post</h2>
          <p>
            Please Enter following details for publishing your Blog
          </p>

          <div className="container">
            <form action="/action_page.php">
              <div className="row">
                <div className="col-25">
                  <label for="title">Title</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="title"
                    name="Post-Title"
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
                    placeholder="Write or past Content"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="tags">Tags</label>
                </div>
                <div className="col-75">
                  <select id="country" name="tags">
                    <option value="Entertainment">Entertainment</option>
                    <option value="news">News</option>
                    <option value="sports">Sports</option>
                    <option value="national">National</option>
                  </select>
                </div>
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
                <input type="submit" value="Create" className="bgc"/>
              </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
