import React, { Component } from "react";
import { BLOGS } from "./constants";
import { Link } from "react-router-dom";
import "./Css/home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cResults: [],
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
    const { cResults } = this.state;
    return (
      <div className="container">
        {cResults.map((c, index) => {
          return (
            <div key={index} className="row">
              <div className="col-7">
                <Link
                  to={{
                    pathname: `/blog-detail/${c._id}`,
                    query: { id: c.title },
                  }}
                >
                  <img className="longerImg" src={c.file} />
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
        })}
      </div>
    );
  }
}

export default Home;
