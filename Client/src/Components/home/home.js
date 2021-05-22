import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import { TAGS } from "../contants/constants";
import { useSelector } from "react-redux";

function HomeTest() {
  const [cresult, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage, setBlogsPerPage] = useState(8);
  const [selectedValue, setSelectedValue] = useState("1");
  const [sortedValue, setSortedValue] = useState("");
  const [searchF, setSearchF] = useState("");
  const user = useSelector((state) => state.auth);
  const indexOfLastTodo = currentPage * blogsPerPage;
  const indexOfFirstTodo = indexOfLastTodo - blogsPerPage;
  const currentBlogs = cresult.slice(indexOfFirstTodo, indexOfLastTodo);
  const filterBlogs = cresult.filter((blog) =>
    blog.title.toLowerCase().includes(searchF.toLowerCase())
  );
  const dateObj = new Date();
  const datee = dateObj.toLocaleString("default", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  const dateFilterBlogs = cresult.filter((blog) => blog.date === datee);
  const sportsFilter = cresult.filter((blog) =>
    blog.results.includes("Sports")
  );
  const techFilter = cresult.filter((blog) =>
    blog.results.includes("Technology")
  );
  const foodFilter = cresult.filter((blog) => blog.results.includes("Food"));
  const lifeFilter = cresult.filter((blog) =>
    blog.results.includes("LifeStyle")
  );
  const eventFilter = cresult.filter((blog) => blog.results.includes("Events"));
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(cresult.length / blogsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };
  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li
        key={number}
        id={number}
        onClick={handleClick}
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
        onClick={handleClick}
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
        onClick={handleClick}
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
        onClick={handleClick}
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
        onClick={handleClick}
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
        onClick={handleClick}
        className="paginationa"
      >
        {number}
      </li>
    );
  });

  useEffect(() => {
    fetchData();
  }, [cresult]);

  // const handleClick = (event) => {
  //   setCurrentPage(Number(event.target.id));
  // }
  const truncate = (str) => {
    if (str.length > 150) {
      return str.length > 150 ? str.substring(0, 98) + "..." : str;
    } else {
      return str;
    }
  };
  const handleSelect = (key) => {
    setSelectedValue(key);
  };
  const handleSort = (e) => {
    if (e === "All") {
      setSortedValue("All");
    }
    setSortedValue(e);
    //console.log(state.sortedValue);
  };

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
    <div className="container">
      <div className="container-fluid pt-3">
        <div className="filtering">
          <p>Filter by:</p>
          <ul>
            <li
              className={selectedValue == "1" ? "active" : ""}
              onClick={() => {
                handleSelect("1");
                handleSort("All");
              }}
            >
              <a>All</a>
            </li>
            <li
              className={selectedValue == "2" ? "active" : ""}
              onClick={() => {
                handleSelect("2");
                handleSort("Sports");
              }}
            >
              <a>Sports</a>
            </li>
            <li
              className={selectedValue == "3" ? "active" : ""}
              onClick={() => {
                handleSelect("3");
                handleSort("Technology");
              }}
            >
              <a>Technology</a>
            </li>
            <li
              className={selectedValue == "4" ? "active" : ""}
              id="bor"
              onClick={() => {
                handleSelect("4");
                handleSort("LifeStyle");
              }}
            >
              <a>LifeStyle</a>
            </li>
            <li
              className={selectedValue == "5" ? "active" : ""}
              id="bor"
              onClick={() => {
                handleSelect("5");
                handleSort("Food");
              }}
            >
              <a>Food</a>
            </li>
            <li
              className={selectedValue == "6" ? "active" : ""}
              id="bor"
              onClick={() => {
                handleSelect("6");
                handleSort("Events");
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
                      <p className="fh5co_mini_time py-3 dblck">
                        {" "}
                        {m.username}
                      </p>
                      <div className="fh5co_consectetur">
                        {" "}
                        {truncate(m.content)}
                        {truncate(m.content.length > 98) && (
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
                        )}
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
                      <div className="most_fh5co_treding_font"> {c.title}</div>
                      <div className="most_fh5co_treding_font_123">
                        {" "}
                        {c.date}
                      </div>
                      <div className="most_fh5co_treding_font_123">
                        {" "}
                        <p>Author: {c.username}</p>
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

// const mapStateToProps = state => ({
//   auth: state.auth
// });

export default HomeTest;
