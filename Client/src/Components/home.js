import React, { Component } from "react";
import { BLOGS } from "./constants";
import "./Css/home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-7">
            <img className="longerImg" src={BLOGS[0].bgImg} />
            {/* {BLOGS.map((i, index)=>{
            return (
              <ul key={index} className="outer-tags"><li className="tags-css">{i.tag}</li></ul>
            )
          })} */}

            {BLOGS.map((sort, index) => {
              return (
                <ul key={index}>
                  <li className="outer-tags" key={index}>
                    <a className="tags-css">{sort.tags[0]}</a>
                    <a className="tags-css">{sort.tags[1]}</a>
                  </li>
                </ul>
              );
            })}
            {/* <p className="bottom">{BLOGS[0].postTitle}</p> */}
            <figcaption class="design">{BLOGS[0].postTitle}</figcaption>
          </div>

          <div className="col-5">
            <div className="row">
              <div className="col">
                <img className="shorterImg" src={BLOGS[1].bgImg}></img>
                <figcaption class="designs">{BLOGS[1].postTitle}</figcaption>
              </div>
              <div className="col">
                <img className="shorterImg" src={BLOGS[2].bgImg}></img>
                <figcaption class="designs">{BLOGS[2].postTitle}</figcaption>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img className="shorterImg" src={BLOGS[3].bgImg}></img>
                <figcaption class="designs">{BLOGS[3].postTitle}</figcaption>
              </div>
              <div className="col">
                <img className="shorterImg" src={BLOGS[4].bgImg}></img>
                <figcaption class="designs">{BLOGS[4].postTitle}</figcaption>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
