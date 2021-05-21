import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import * as ReactBootStrap from "react-bootstrap";
import { TAGS } from "../contants/constants";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cResults: [],
      searchF: "",
      loading: false,
      currentPage: 1,
      blogsPerPage: 8,
      selectedValue: "1",
      sortedValue: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  async fetchedResults () {
    fetch("http://localhost:3001/blog", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          cResults: response,
          loading: true,
        });
        console.log("DataFetched", this.state.cResults);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async componentDidMount() {
    // fetch("http://localhost:3001/blog", {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     this.setState({
    //       cResults: response,
    //       loading: true,
    //     });
    //     console.log("DataFetched", this.state.cResults);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    await this.fetchedResults()
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }
  truncate = (str) => {
    return str.length > 150 ? str.substring(0, 98) + "..." : str;
  };
  handleSelect = (key) => {
    this.setState({
      selectedValue: key,
    });
  };
  handleSort = (e) => {
    if (e === "All") {
      this.setState({
        sortedValue: "All",
      });
    }
    this.setState({
      sortedValue: e,
    });
    console.log(this.state.sortedValue);
  };

  async getDataOfBlogs() {
    // const url = "http://localhost:3001/blog" ;
    // const response = await fetch(url)
    // const data = await response.json()
    // .then(response => {
    //   this.setState({
    //     cResults: response
    //   })
    //   .catch(err => { console.log(err);
    //   });
    //   console.log("DataFetched", response);
    // })
    // if (response.status !== 200) throw Error(data.message);
    // return data
    // read all entities
  }

  render() {
    const {
      cResults,
      searchF,
      loading,
      currentPage,
      blogsPerPage,
      selectedValue,
      sortedValue,
    } = this.state;
    const indexOfLastTodo = currentPage * blogsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - blogsPerPage;
    const currentBlogs = cResults.slice(indexOfFirstTodo, indexOfLastTodo);
    const filterBlogs = cResults.filter((blog) =>
      blog.title.toLowerCase().includes(searchF.toLowerCase())
    );
    const dateObj = new Date();
    const datee = dateObj.toLocaleString("default", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
    const dateFilterBlogs = cResults.filter((blog) => blog.date === datee);
    const sportsFilter = cResults.filter((blog) =>
      blog.results.includes("Sports")
    );
    const techFilter = cResults.filter((blog) =>
      blog.results.includes("Technology")
    );
    const foodFilter = cResults.filter((blog) => blog.results.includes("Food"));
    const lifeFilter = cResults.filter((blog) =>
      blog.results.includes("LifeStyle")
    );
    const eventFilter = cResults.filter((blog) =>
      blog.results.includes("Events")
    );
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(cResults.length / blogsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          className="paginationa"
        >
          {number}
        </li>
      );
    });
    const pageNumbersO = [];
    for (let i = 1; i <= Math.ceil(sportsFilter.length / blogsPerPage); i++) {
      pageNumbersO.push(i);
    }

    const renderPageNumbersO = pageNumbersO.map((number) => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          className="paginationa"
        >
          {number}
        </li>
      );
    });
    const pageNumbers1 = [];
    for (let i = 1; i <= Math.ceil(techFilter.length / blogsPerPage); i++) {
      pageNumbers1.push(i);
    }

    const renderPageNumbers1 = pageNumbers1.map((number) => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          className="paginationa"
        >
          {number}
        </li>
      );
    });
    const pageNumbers2 = [];
    for (let i = 1; i <= Math.ceil(foodFilter.length / blogsPerPage); i++) {
      pageNumbers2.push(i);
    }

    const renderPageNumbers2 = pageNumbers2.map((number) => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          className="paginationa"
        >
          {number}
        </li>
      );
    });
    const pageNumbers3 = [];
    for (let i = 1; i <= Math.ceil(lifeFilter.length / blogsPerPage); i++) {
      pageNumbers3.push(i);
    }

    const renderPageNumbers3 = pageNumbers3.map((number) => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          className="paginationa"
        >
          {number}
        </li>
      );
    });
    const pageNumbers4 = [];
    for (let i = 1; i <= Math.ceil(eventFilter.length / blogsPerPage); i++) {
      pageNumbers4.push(i);
    }

    const renderPageNumbers4 = pageNumbers4.map((number) => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          className="paginationa"
        >
          {number}
        </li>
      );
    });
    return (
      <div className="container">
        <div className="container-fluid pt-3">
          <div className="filtering">
            <p>Filter by:</p>
            <ul>
              <li
                className={selectedValue == "1" ? "active" : ""}
                onClick={() => {
                  this.handleSelect("1");
                  this.handleSort("All");
                }}
              >
                <a>All</a>
              </li>
              <li
                className={selectedValue == "2" ? "active" : ""}
                onClick={() => {
                  this.handleSelect("2");
                  this.handleSort("Sports");
                }}
              >
                <a>Sports</a>
              </li>
              <li
                className={selectedValue == "3" ? "active" : ""}
                onClick={() => {
                  this.handleSelect("3");
                  this.handleSort("Technology");
                }}
              >
                <a>Technology</a>
              </li>
              <li
                className={selectedValue == "4" ? "active" : ""}
                id="bor"
                onClick={() => {
                  this.handleSelect("4");
                  this.handleSort("LifeStyle");
                }}
              >
                <a>LifeStyle</a>
              </li>
              <li
                className={selectedValue == "5" ? "active" : ""}
                id="bor"
                onClick={() => {
                  this.handleSelect("5");
                  this.handleSort("Food");
                }}
              >
                <a>Food</a>
              </li>
              <li
                className={selectedValue == "6" ? "active" : ""}
                id="bor"
                onClick={() => {
                  this.handleSelect("6");
                  this.handleSort("Events");
                }}
              >
                <a>Events</a>
              </li>
            </ul>
          </div>
          <div className="container animate-box" data-animate-effect="fadeIn">
            <div>
              <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">
                {sortedValue == "All" && sortedValue == "" ? (
                  <div>All Blogs</div>
                ) : sortedValue == "Sports" ? (
                  <div>Sports Blog</div>
                ) : sortedValue == "Technology" ? (
                  <div>Technology Blogs</div>
                ) : sortedValue == "LifeStyle" ? (
                  <div>LifeStyle Blogs</div>
                ) : sortedValue == "Food" ? (
                  <div>Food Blogs</div>
                ) : sortedValue == "Events" ? (
                  <div>Events Blogs</div>
                ) : (
                  <div>All Blogs</div>
                )}
              </div>
            </div>
            {loading ? (
              <div className="owl-carousel owl-theme js row" id="slider1">
                {sortedValue != "All" && sortedValue != ""
                  ? currentBlogs
                      .filter((item) => item.results.includes(sortedValue))
                      .map((c, index) => {
                        return (
                          <div className="item px-2 it col-3 cld">
                            <Link
                              to={{
                                pathname: `/blog-detail/${c._id}`,
                                query: { id: c.title },
                              }}
                            >
                              <div className="fh5co_latest_trading_img_position_relative">
                                <div className="fh5co_latest_trading_img">
                                  <img
                                    src={c.file}
                                    alt=""
                                    className="fh5co_img_special_relative"
                                  />
                                  <ul>
                                    <li className="outer-tags">
                                      {c.results.map((sort, index) => {
                                        return (
                                          <a key={index} className="tags-css">
                                            {sort}
                                          </a>
                                        );
                                      })}
                                    </li>
                                  </ul>
                                </div>
                                <div className="fh5co_latest_trading_img_position_absolute"></div>
                                <div className="fh5co_latest_trading_img_position_absolute_1">
                                  <a className="text-white"> {c.title} </a>
                                  <div className="fh5co_latest_trading_date_and_name_color">
                                    {" "}
                                    {c.date}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        );
                      })
                  : currentBlogs.map((c, index) => {
                      return (
                        <div className="item px-2 it col-3 cld">
                          <Link
                            to={{
                              pathname: `/blog-detail/${c._id}`,
                              query: { id: c.title },
                            }}
                          >
                            <div className="fh5co_latest_trading_img_position_relative">
                              <div className="fh5co_latest_trading_img">
                                <img
                                  src={c.file}
                                  alt=""
                                  className="fh5co_img_special_relative"
                                />
                                <ul>
                                  <li className="outer-tags">
                                    {c.results.map((sort, index) => {
                                      return (
                                        <a key={index} className="tags-css">
                                          {sort}
                                        </a>
                                      );
                                    })}
                                  </li>
                                </ul>
                              </div>
                              <div className="fh5co_latest_trading_img_position_absolute"></div>
                              <div className="fh5co_latest_trading_img_position_absolute_1">
                                <a className="text-white"> {c.title} </a>
                                <div className="fh5co_latest_trading_date_and_name_color">
                                  {" "}
                                  {c.date}
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
              </div>
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
            <div className="pagination pagination-sm">
              {sortedValue == "All"
                ? renderPageNumbers
                : sortedValue == "Sports"
                ? renderPageNumbersO
                : sortedValue == "Technology"
                ? renderPageNumbers1
                : sortedValue == "Food"
                ? renderPageNumbers2
                : sortedValue == "LifeStyle"
                ? renderPageNumbers3
                : sortedValue == "Events"
                ? renderPageNumbers4
                : renderPageNumbers}
            </div>
          </div>
        </div>
        <div className="container-fluid pb-4 pt-4 paddding">
          <div className="container paddding">
            <div className="row mx-0">
              <div
                className="col-md-8 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div>
                  <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">
                    Today's Top 4
                  </div>
                </div>
                {dateFilterBlogs.slice(0, 4).map((m, index) => {
                  return (
                    <div key={index} className="row pb-4">
                      <div className="col-md-5">
                        <div className="fh5co_hover_news_img">
                          <div className="fh5co_news_img">
                            <img src={m.file} alt="" />
                          </div>
                          <div></div>
                        </div>
                      </div>
                      <div className="col-md-7 animate-box">
                        <a className="fh5co_magna py-2"> {m.title}</a>{" "}
                        <a className="fh5co_mini_time py-3 dblck"> {m.date}</a>
                        <div className="fh5co_consectetur">
                          {" "}
                          {this.truncate(m.content)}
                          <Link
                            to={{
                              pathname: `/blog-detail/${m._id}`,
                              query: { id: m.title },
                            }}
                          >
                            <span className="read-more-color">
                              <a>Read more</a>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
                <div>
                  <div className="fh5co_heading fh5co_heading_border_bottom pt-3 py-2 mb-4">
                    Most Popular
                  </div>
                </div>
                {filterBlogs.slice(0, 6).map((c, index) => {
                  return (
                    <div className="row pb-3">
                      <div className="col-5 align-self-center">
                        <img
                          src={c.file}
                          alt="img"
                          className="fh5co_most_trading"
                        />
                      </div>
                      <div className="col-7 paddding">
                        <div className="most_fh5co_treding_font">
                          {" "}
                          {c.title}
                        </div>
                        <div className="most_fh5co_treding_font_123">
                          {" "}
                          {c.date}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
