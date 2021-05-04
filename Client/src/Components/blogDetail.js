import React, { Component } from "react";
import { BLOGS } from "./constants";
import "./Css/blogDetail.css";
export default class BlogDetail extends Component {
  render() {
    return (
      <div className="mainDiv">
        {BLOGS.map((b, index) => {
          return (
            <div>
              {index == 0 && (
                <div>
                  <img src={b.bgImg}></img>
                  {BLOGS.map((sort, index) => {
                    return (
                      <ul key={index}>
                        <li className="outer-tags-new" key={index}>
                          <a className="tags-css-new">{sort.tags[0]}</a>
                          <a className="tags-css-new">{sort.tags[1]}</a>
                        </li>
                      </ul>
                    );
                  })}
                  <h1>{b.postTitle}</h1>
                  <p>{b.postContent}</p>
                  <p>{b.postContent}</p>
                  <p>{b.postContent}</p>
                  <p>{b.postContent}</p>
                </div>
              )}
            </div>
          );
        })}
        <div className="social">
        <p className="cen">
          Share this article on
        </p>
        <div>
        <a className="iconss">
          <i class="fab fa-facebook"></i>
          </a>
        </div>
        </div>
      </div>
    );
  }
}
