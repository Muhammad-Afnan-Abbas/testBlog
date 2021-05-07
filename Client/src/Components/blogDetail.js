import React, {useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Css/blogDetail.css";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

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
              <div className="container">
                <div className="row">
                  <div className="col-ls-12 col-md-12 col-sm-12 brouch-breadcrums">
                    <div>
                      <Link to="/home">
                        <span className="cursor-learn-more">Home</span>
                      </Link>
                      <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                      <strong>{b.title}</strong>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8 col-md-9 col-sm-12">
                    <img src={b.file} alt="blog's"></img>
                    <ul key={index}>
                      <li className="outer-tags-new">
                        {b.results.map((sort, index) => {
                          return (
                            <a key={index} className="tags-css-new">
                              {sort}
                            </a>
                          );
                        })}
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-3 col-sm-12">
                    <div className="mainRow">
                      <strong>
                        <p>About Author</p>
                      </strong>
                      <p>
                        Afnan is a Software Engineer and a content writer. He
                        writes articles and blogs just as his hobby and keeps
                        himself updated of the current affais of the world. He
                        had won a lot of international and national prizes and
                        is a well known personality
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <h1>{b.title}</h1>
                    <p>{b.content}</p>
                    <p>{b.content}</p>
                    <p>{b.content}</p>
                    <p>{b.content}</p>
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
