import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./blogDetail.css";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import { urlencoded } from "body-parser";
import { TAGS } from "../contants/constants";
import { useSelector } from "react-redux";
import auth from '../redux/reducers/index'

function BlogDetail() {
  const [result, setResult] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const user = useSelector(state => state.auth)
  console.log("User", user)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:3001/blog", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mainDiv">
      {loading ? (
        result
          .filter((item) => item._id === id)
          .map((b, index) => {
            return (
              <div className="container paddding">
                <div className="row mx-0">
                  <div className="col-md-8 animate box" id="fh5co-title-box">
                    <div className="bcrumb">
                      <Link to="/home">
                        <span className="cursor-learn-more clr">Home</span>
                      </Link>
                      <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                      <strong>{b.title}</strong>
                    </div>
                    <img className="mimg" src={b.file}></img>
                    <ul>
                      <li className="outer-tags">
                        {b.results.map((sort, index) => {
                          return (
                            <a key={index} className="tags-css">
                              {sort}
                            </a>
                          );
                        })}
                      </li>
                    </ul>
                    <div></div>
                    <div>
                      <span>{b.date}</span>
                      <p>Author of the Blog: {b.username}</p>
                      <h2>{b.title}</h2>
                      <p>{b.content}</p>
                    </div>
                  </div>
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <div className="fh5co_heading fh5co_heading_border_bottom pt-3 py-2 mb-4">
                      Most Popular
                    </div>
                    {result.slice(0,7).map((m, index) => {
                      return (
                        <div className="row pb-3">
                          <div className="col-5 align-self-center">
                            <img
                              src={m.file}
                              alt="img"
                              className="fh5co_most_trading"
                            />
                          </div>
                          <div className="col-7 paddding">
                            <div className="most_fh5co_treding_font">
                              {" "}
                              {m.title}
                            </div>
                            <div className="most_fh5co_treding_font_123">
                              {" "}
                              {m.date}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="container paddding">
                  <div className="row mx-0">
                    {/* <div
                        className="col-md-8 animate-box"
                      >
                      {
                        result.filter((fl => fl.results == b.results)).map((k,index)=> {
                          return (
                            <div>
                            <h1>{k.title}</h1>
                            </div>
                          )
                        })
                      }
                      </div> */}
                    <div className="col-md-8 animate-box">
                      <div>
                        <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">
                          More From Similar Category
                        </div>
                      </div>
                      <div
                        className="owl-carousel owl-theme js row"
                        id="slider1"
                      >
                        {result
                          .filter((fl) => fl.results.includes(b.results[index]))
                          .slice(0, 3)
                          .map((k, index) => {
                            return (
                              <div className="item px-2 it col-4">
                                <Link
                                  to={{
                                    pathname: `/blog-detail/${k._id}`,
                                    query: { id: k.title },
                                  }}
                                >
                                  <div className="fh5co_latest_trading_img_position_relative">
                                    <div className="fh5co_latest_trading_img">
                                      <img
                                        src={k.file}
                                        alt=""
                                        className="fh5co_img_special_relative"
                                      />
                                    </div>
                                    <div className="fh5co_latest_trading_img_position_absolute"></div>
                                    <div className="fh5co_latest_trading_img_position_absolute_1">
                                      <a className="text-white"> {k.title} </a>
                                      <div className="fh5co_latest_trading_date_and_name_color">
                                        {" "}
                                        {k.date}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                    <div
                      className="col-md-3 animate-box"
                      data-animate-effect="fadeInRight"
                    >
                      <div>
                        <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">
                          Tags
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      {TAGS.map((m, index) => {
                        return (
                          <div className="fh5co_tags_all">
                            <a href="#" className="fh5co_tagg">
                              {m.tagCategory}
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
      ) : (
        <div className="loader">
          <ReactBootStrap.Button variant="secondary" disabled>
            <ReactBootStrap.Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading ...
          </ReactBootStrap.Button>
        </div>
      )}
      <div className="social">
        <p className="cen">Share this article on</p>
        <div className="cen">
          <a href="#" className="fa fa-facebook fa-lg"></a>
          <a href="#" className="fa fa-twitter fa-lg"></a>
          <a href="#" className="fa fa-google fa-lg"></a>
          <a href="#" className="fa fa-linkedin fa-lg"></a>
          <a href="#" className="fa fa-youtube fa-lg"></a>
          <a href="#" className="fa fa-instagram fa-lg"></a>
          <a href="#" className="fa fa-pinterest fa-lg"></a>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
