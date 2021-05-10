import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Css/home.css";
import SearchBar from "./searchBar";
import * as ReactBootStrap from "react-bootstrap";
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
        <div className="row headRow">
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
                    </ul>
                    {/* <p className="bottom">{BLOGS[0].postTitle}</p> */}
                    <figcaption className="design">{c.title}</figcaption>
                  </Link>
                </div>
                <div className="col-lg-5 col-md-3 col-sm-12">
                  <p>{c.content}</p>
                  <button className="btn-color">Read More</button>
                </div>

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
      </div>
    );
  }
}

export default Home;
