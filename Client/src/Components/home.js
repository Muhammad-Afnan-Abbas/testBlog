import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Css/home.css";
import SearchBar from "./searchBar";
import * as ReactBootStrap from "react-bootstrap";
import { TAGS } from "./constants";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cResults: [],
      searchF: "",
      loading: false,
    };
  }
  componentDidMount() {
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
    const { cResults, searchF, loading } = this.state;
    const filterBlogs = cResults.filter((blog) =>
      blog.title.toLowerCase().includes(searchF.toLowerCase())
    );
    return (
      <div className="container">
      <div className="container-fluid paddding mb-5">
    <div className="row mx-0">
      {filterBlogs.slice(0,1).map((p, index) => {
            return (
        <div className="col-md-6 col-12 paddding animate-box" data-animate-effect="fadeIn">
            <div className="fh5co_suceefh5co_height"><img src={p.file} alt="img"/>
                <div className="fh5co_suceefh5co_height_position_absolute"></div>
                <div className="fh5co_suceefh5co_height_position_absolute_font">
                    <div className=""><a href="#" className="color_fff"> <i className="fa fa-clock-o"></i>&nbsp;&nbsp;Dec 31,2017
                    </a></div>
                    <div className=""><a href="single.html" className="fh5co_good_font">{p.title}</a></div>
                </div>
            </div>
        </div>
            )})}
        <div className="col-md-6">
            <div className="row">
            {filterBlogs.slice(1,5).map((c, index) => {
            return (
                <div className="col-md-6 col-6 paddding animate-box" data-animate-effect="fadeIn">
                    <Link
                    to={{
                      pathname: `/blog-detail/${c._id}`,
                      query: { id: c.title },
                    }}>
                    <div className="fh5co_suceefh5co_height_2">
                  <img src={c.file} alt="img"/>
                        <div className="fh5co_suceefh5co_height_position_absolute"></div>
                        <div className="fh5co_suceefh5co_height_position_absolute_font_2">
                            <div className=""><a href="#" className="color_fff"> <i className="fa fa-clock-o"></i>&nbsp;&nbsp;{c.date} </a></div>
                            <div className=""><a href="single.html" className="fh5co_good_font_2"> {c.title}</a>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
              )})}
            </div>
        </div>
    </div>
</div>

<div className="container-fluid pt-3">
    <div className="container animate-box" data-animate-effect="fadeIn">
        <div>
            <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">Trending</div>
        </div>
        <div className="owl-carousel owl-theme js row" id="slider1">
        {filterBlogs.slice(0,4).map((c, index) => {
            return (
            <div className="item px-2 it col-3">
            <Link
                    to={{
                      pathname: `/blog-detail/${c._id}`,
                      query: { id: c.title },
                    }}>
                <div className="fh5co_latest_trading_img_position_relative">
                    <div className="fh5co_latest_trading_img"><img src={c.file} alt="" className="fh5co_img_special_relative"/></div>
                    <div className="fh5co_latest_trading_img_position_absolute"></div>
                    <div className="fh5co_latest_trading_img_position_absolute_1">
                        <a href="single.html" className="text-white"> {c.title} </a>
                        <div className="fh5co_latest_trading_date_and_name_color"> Walter Johson - March 7,2017</div>
                    </div>
                </div>
                </Link>
            </div>
            )})}
        </div>
    </div>
</div>
<div className="container-fluid pt-3">
    <div className="container animate-box" data-animate-effect="fadeIn">
        <div>
            <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">Sports</div>
        </div>
        <div className="owl-carousel owl-theme js row" id="slider1">
        {filterBlogs.filter((item)=> item.results.includes('Sports')).slice(0,4).map((c, index) => {
            return (
            <div className="item px-2 it col-3">
            <Link
                    to={{
                      pathname: `/blog-detail/${c._id}`,
                      query: { id: c.title },
                    }}>
                <div className="fh5co_latest_trading_img_position_relative">
                    <div className="fh5co_latest_trading_img"><img src={c.file} alt="" className="fh5co_img_special_relative"/></div>
                    <div className="fh5co_latest_trading_img_position_absolute"></div>
                    <div className="fh5co_latest_trading_img_position_absolute_1">
                        <a href="single.html" className="text-white"> {c.title} </a>
                        <div className="fh5co_latest_trading_date_and_name_color"> Walter Johson - March 7,2017</div>
                    </div>
                </div>
                </Link>
            </div>
            )})}
        </div>
    </div>
</div>
<div className="container-fluid pb-4 pt-4 paddding">
    <div className="container paddding">
        <div className="row mx-0">
            <div className="col-md-8 animate-box" data-animate-effect="fadeInLeft">
                <div>
                    <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">News</div>
                </div>
                <div className="row pb-4">
                    <div className="col-md-5">
                        <div className="fh5co_hover_news_img">
                            <div className="fh5co_news_img"><img src="images/nathan-mcbride-229637.jpg" alt=""/></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="col-md-7 animate-box">
                        <a href="single.html" className="fh5co_magna py-2"> Magna aliqua ut enim ad minim veniam quis
                        nostrud quis xercitation ullamco. </a> <a href="single.html" className="fh5co_mini_time py-3"> Thomson Smith -
                        April 18,2016 </a>
                        <div className="fh5co_consectetur"> Amet consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </div>
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-md-5">
                        <div className="fh5co_hover_news_img">
                            <div className="fh5co_news_img"><img src="images/ryan-moreno-98837.jpg" alt=""/></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <a href="single.html" className="fh5co_magna py-2"> Magna aliqua ut enim ad minim veniam quis
                        nostrud quis xercitation ullamco. </a> <a href="#" className="fh5co_mini_time py-3"> Thomson Smith -
                        April 18,2016 </a>
                        <div className="fh5co_consectetur"> Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore.
                        </div>
                        <ul className="fh5co_gaming_topikk pt-3">
                            <li> Why 2017 Might Just Be the Worst Year Ever for Gaming</li>
                            <li> Ghost Racer Wants to Be the Most Ambitious Car Game</li>
                            <li> New Nintendo Wii Console Goes on Sale in Strategy Reboot</li>
                            <li> You and Your Kids can Enjoy this News Gaming Console</li>
                        </ul>
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-md-5">
                        <div className="fh5co_hover_news_img">
                            <div className="fh5co_news_img">
                                <img src="images/photo-1449157291145-7efd050a4d0e-578x362.jpg" alt=""/>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <a href="single.html" className="fh5co_magna py-2"> Magna aliqua ut enim ad minim veniam quis
                        nostrud quis xercitation ullamco. </a> <a href="#" className="fh5co_mini_time py-3"> Thomson Smith -
                        April 18,2016 </a>
                        <div className="fh5co_consectetur"> Quis nostrud xercitation ullamco laboris nisi aliquip ex ea commodo
                            consequat.
                        </div>
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-md-5">
                        <div className="fh5co_hover_news_img">
                            <div className="fh5co_news_img"><img src="images/office-768x512.jpg" alt=""/></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <a href="single.html" className="fh5co_magna py-2"> Magna aliqua ut enim ad minim veniam quis
                        nostrud quis xercitation ullamco. </a> <a href="#" className="fh5co_mini_time py-3"> Thomson Smith -
                        April 18,2016 </a>
                        <div className="fh5co_consectetur"> Amet consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                <div>
                    <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">Tags</div>
                </div>
                <div className="clearfix"></div>
                {TAGS.map((m,index)=> {
                  return (
                <div className="fh5co_tags_all">
                    <a href="#" className="fh5co_tagg">{m.tagCategory}</a>
                    <a href="#" className="fh5co_tagg">{m.tagCategory}</a>
                </div>
                  )
                })}
                <div>
                    <div className="fh5co_heading fh5co_heading_border_bottom pt-3 py-2 mb-4">Most Popular</div>
                </div>
                {filterBlogs.slice(0,6).map((c,index)=>{return(
                <div className="row pb-3">

                    <div className="col-5 align-self-center">
                        <img src={c.file} alt="img" className="fh5co_most_trading"/>
                    </div>
                    <div className="col-7 paddding">
                        <div className="most_fh5co_treding_font"> {c.title}</div>
                        <div className="most_fh5co_treding_font_123"> April 18, 2016</div>
                    </div>
                </div>
                )})}
            </div>
        </div>
    </div>
</div>

        {/* <div className="row headRow">
          <div className="col-lg-7 col-md-9 col-sm-12">
            <h1>Afnan's Blog</h1>
          </div>
          <div className="col-lg-5 col-md-3 col-sm-12 searchBar-style">
            <SearchBar
              placeholder="Search ..."
              handleChange={(e) => this.setState({ searchF: e.target.value })}
            ></SearchBar>
          </div>
        </div>
        {loading ? (
          filterBlogs.map((c, index) => {
            return (
              <div key={index} className="row mainRow">
                <div className="col-lg-7 col-md-9 col-sm-12 position-div">
                  <Link
                    to={{
                      pathname: `/blog-detail/${c._id}`,
                      query: { id: c.title },
                    }}
                  >
                    <img className="longerImg" src={c.file} alt="blog"/>
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
                    </ul> */}
                    {/* <p className="bottom">{BLOGS[0].postTitle}</p> */}
                    {/* <figcaption className="design">{c.title}</figcaption> */}
                  {/* </Link>
                </div>
                <div className="col-lg-5 col-md-3 col-sm-12">
                  <p>{c.content}</p>
                  <button className="btn-color">Read More</button>
                </div> */}

                {/* <div className="col-5">
            <div className="row">
              <div className="col">
                <img className="shorterImg" src={c.file}></img>
                <figcaption className="designs">{c.title}</figcaption>
              </div>
              <div className="col">
                <img className="shorterImg" src={c.file}></img>
                <figcaption className="designs">{c.title}</figcaption>
              </div>
            </div> */}
                {/* <div className="row">
              <div className="col">
                <img className="shorterImg" src={BLOGS[3].bgImg}></img>
                <figcaption className="designs">{BLOGS[3].postTitle}</figcaption>
              </div>
              <div className="col">
                <img className="shorterImg" src={BLOGS[4].bgImg}></img>
                <figcaption className="designs">{BLOGS[4].postTitle}</figcaption>
              </div> */}
                {/* </div> */}
                {/* </div> */}
              {/* </div> */}
        {/* //     );
        //   })
        // ) : (
        //   <div className="loader">
        //     <ReactBootStrap.Button variant="secondary" disabled>
        //       <ReactBootStrap.Spinner */}
        {/* //         as="span"
        //         animation="border"
        //         size="sm"
        //         role="status"
        //         aria-hidden="true"
        //       />
        //       Loading ...
        //     </ReactBootStrap.Button>
        //   </div>
        // )} */}
      </div>
    );
  }
}

export default Home;
