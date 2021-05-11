import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Css/blogDetail.css";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import { urlencoded } from "body-parser";

// export default class BlogDetail extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cResults:[],
//     };
//   }

//   componentDidMount(){
//     fetch("http://localhost:3001/blog", {
//       "method": "GET",
//     })
//     .then(response => response.json())
//     .then(response => {
//       this.setState({
//         cResults: response
//       })
//       console.log("DataFetched", this.state.cResults);
//     })
//     .catch(err => { console.log(err);
//     });

//   }
//   render() {
//     const {cResults}  = this.state
//     const {id} =  useParams();
//     return (
//       <div className="mainDiv">
//         {cResults.filter(item => item._id == id).map((b, index) => {
//           return (
//             <div>
//               {index == 0 && (
//                 <div>
//                   <img src={b.file}></img>
//                   {BLOGS.map((sort, index) => {
//                     return (
//                       <ul key={index}>
//                         <li className="outer-tags-new" key={index}>
//                           <a className="tags-css-new">{sort.tags[0]}</a>
//                           <a className="tags-css-new">{sort.tags[1]}</a>
//                         </li>
//                       </ul>
//                     );
//                   })}
//                   <h1>{b.postTitle}</h1>
//                   <p>{b.postContent}</p>
//                   <p>{b.postContent}</p>
//                   <p>{b.postContent}</p>
//                   <p>{b.postContent}</p>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//         <div className="social">
//         <p className="cen">
//           Share this article on
//         </p>
//         <div>
//         <a className="iconss">
//           <i class="fab fa-facebook"></i>
//           </a>
//         </div>
//         </div>
//       </div>
//     );
//   }
// }

function BlogDetail() {
  const [result, setResult] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

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
  // useEffect (()=>{
  //   fetch("http://localhost:3001/blog", {
  //     "method": "GET",
  //   })
  //   .then(response => response.json())
  //   .then(response => {
  //     setResult(response
  //     )
  //     console.log("DataFetched", this.state.result);
  //   })
  //   .catch(err => { console.log(err);
  //   });

  // })
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
                      <h2>{b.title}</h2>
                    </div>
                  </div>
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <div className="fh5co_heading fh5co_heading_border_bottom pt-3 py-2 mb-4">
                      Most Popular
                    </div>
                    {result.map((m, index) => {
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
                <div
                  id="fh5co-single-content"
                  className="container-fluid pb-4 pt-4 paddding"
                >
                  <div className="container paddding">
                    <div className="row mx-0">
                      <div
                        className="col-md-8 animate-box"
                        data-animate-effect="fadeInLeft"
                      >
                        <p>{b.content}</p>
                        <p>{b.content}</p>
                        <h3>{b.title}</h3>
                        <p>{b.content}</p>
                        <p>{b.content}</p>
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
                        <div className="fh5co_tags_all">
                          <a href="#" className="fh5co_tagg">
                            Food
                          </a>
                          <a href="#" className="fh5co_tagg">
                            Technology
                          </a>
                          <a href="#" className="fh5co_tagg">
                            Sport
                          </a>
                          <a href="#" className="fh5co_tagg">
                            Art
                          </a>
                          <a href="#" className="fh5co_tagg">
                            Lifestyle
                          </a>
                          <a href="#" className="fh5co_tagg">
                            Three
                          </a>
                          <a href="#" className="fh5co_tagg">
                            Photography
                          </a>
                          <a href="#" className="fh5co_tagg">
                            Lifestyle
                          </a>
                          <a href="#" className="fh5co_tagg">
                            Art
                          </a>
                          <a href="#" className="fh5co_tagg">
                            Education
                          </a>
                          <a href="#" className="fh5co_tagg">
                            Social
                          </a>
                          <a href="#" className="fh5co_tagg">
                            Three
                          </a>
                        </div>
                      </div>
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
