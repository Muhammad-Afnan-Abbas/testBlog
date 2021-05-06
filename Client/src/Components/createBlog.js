import React, { Component, useState } from "react";
import { TAGS } from "./constants";
import { toastr } from "react-redux-toastr";
import axios from 'axios';
import "./Css/createBlog.css";
import http from "../http-common";
class CreateBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortList: [],
      results: [],
      value: "",
      title:'',
      content:'',
      file: '',
    };
  }
  handleOptions = (event) => {
    let key = event.target.value;
    //console.log(key)
    let temp = [...this.state.results];
    temp.indexOf(key) === -1
      ? temp.push(key)
      : toastr.error("Subject is already selected");
    //console.log(array)
    //temp.push(key);
    //console.log(temp);
    //console.log("Array",temp)
    this.setState({
      results: temp,
    });
  };

  handleOptionsExit = (key) => {
    console.log(key);
    let temp = [...this.state.results];
    // 	this.setState({
    // 		results: this.state.temp.filter(key => key.id !== key)

    // 	})
    //let items =
    this.setState({ results: temp.filter((item) => item !== key) });
    //console.log(results)
  };

  // handleClick =(event) => {
  //   event.preventDefault();
  //   const newForm = {
  //     title: input.title,
  //     content: input.content
  //   }
  //   axios.post('http://localhost/9000/create', newForm)
  // }
  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      hell :{...this.state.title},
      [name]: value
    })
  }

  handleClick (event) {
    event.preventDefault();
    const newForm = {
      title: this.state.title,
      content: this.state.content,
      file: this.state.file,
      results: this.state.results,
    }
    console.log(newForm)
    console.log(this.state.file)
    http.post('', newForm)
  }

  cancelblog = () => { 
    this.setState({
      title: '',
      content: '',
      results: [],
      file: ''
    });
  }

  onChangeHandler= (event) =>{
    const file = event.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => this.setState({ file: reader.result })
  }

  render() {
    const { results } = this.state;
    return (
      <>
        <div className="fluid-container section" id="section1">
          <h2>Create Blog Post</h2>
          <p>Please Enter following details for publishing your Blog</p>

          <div className="container">
            <form method="POST" action="/create" enctype="multipart/form-data">
              <div className="row">
                <div className="col-25">
                  <label for="title">Title</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="title"
                    value={this.state.title}
                    onChange={(event) => this.handleChange(event)}
                    name="title"
                    placeholder="Enter Title"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="lname">Post Content</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="pcontent"
                    onChange={(event) => this.handleChange(event)}
                    value={this.state.content}
                    name="content"
                    placeholder="Write or paste Content"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="tags">Tags</label>
                </div>
                <div className="col-75">
                  <select
                    id="country"
                    name="tags"
                    onChange={this.handleOptions}
                  >
                    {TAGS.map((sort, index) => {
                      return (
                        <option key={index} value={sort.value}>
                          {sort.tagCategory}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="options-filter">
                {results.map((sort, index) => {
                  return (
                    <ul>
                      <li>
                        <a key={index}>
                          {sort}
                          <i
                            className="fa fa-times ml-2"
                            aria-hidden="true"
                            onClick={() => this.handleOptionsExit(sort)}
                          ></i>
                        </a>
                      </li>
                    </ul>
                  );
                })}
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="subject">Upload Image</label>
                </div>
                <div className="col-75">
                  <input onChange={(event) => this.onChangeHandler(event)} type="file" className="form-control" id="customFile" />
                </div>
              </div>
              <div className="row">
              {
               this.state.file && (
                 <img src = {this.state.file}></img>
               ) 
              }
              </div>
              <div className="row">
              <div className="col-25">
                </div>
                <div className="col-75">
                  <input type="submit" onClick={(event) => this.handleClick(event)} value="Create" className="bgc" />
                </div>
              </div>
            </form>
            <div className="row">
            <div className="col-25">
                </div>
                <div className="col-75">
                  <input type="submit" onClick={() => this.cancelblog()} value="Clear" className="bgc" />
                </div>
              </div>
          </div>
        </div>
      </>
    );
  }
}

export default CreateBlog;

// export default function CreateBlog() 
// {
//   const [input, setInput] = useState({
//     titlle: '',
//     content: ''
//   })
//   const [result, setResult] = useState ({
//     results:[]
//   })

//   function handleChange(event) {
//     const {name, value} = event.target;

//     setInput(prevInput => {
//       return {
//         ...prevInput,
//         [name]: value
//       }
//     })
//   }

//   function handleClick (event) {
//         event.preventDefault();
//         const newForm = {
//           title: input.title,
//           content: input.content
//         }
//         console.log(newForm)
//         http.post('', newForm)
//       }
//   return (
//     <div>
//              <div className="fluid-container section" id="section1">
//            <h2>Create Blog Post</h2>
//            <p>Please Enter following details for publishing your Blog</p>

//            <div className="container">
//              <form method="POST" action="/post-feedback">
//                <div className="row">
//                  <div className="col-25">
//                    <label for="title">Title</label>
//                  </div>
//                  <div className="col-75">
//                    <input
//                    onChange={handleChange}
//                      type="text"
//                      id="title"
//                      name="title"
//                      value={input.title}
//                      placeholder="Enter Title"
//                    />
//                  </div>
//                </div>
//                <div className="row">
//                  <div className="col-25">
//                    <label for="lname">Post Content</label>
//                  </div>
//                  <div className="col-75">
//                    <input
//                     onChange={handleChange}
//                      type="text"
//                      id="pcontent"
//                      name="content"
//                      value={input.content}
//                      placeholder="Write or paste Content"
//                    />
//                  </div>
//                </div>
//                <div className="row">
//                  <div className="col-75">
//                    <input onClick={handleClick} type="submit" value="Create" className="bgc" />
//                  </div>
//                </div>
//                {/* <div className="row">
//                 <div className="col-25">
//                   <label for="tags">Tags</label>
//                 </div>
//                 <div className="col-75">
//                   <select
//                     id="country"
//                     name="tags"
//                     onChange={this.handleOptions}
//                   >
//                     {TAGS.map((sort, index) => {
//                       return (
//                         <option key={index} value={sort.value}>
//                           {sort.tagCategory}
//                         </option>
//                       );
//                     })}
//                   </select>
//                 </div>
//               </div>
//               <div className="options-filter">
//                 {results.map((sort, index) => {
//                   return (
//                     <ul>
//                       <li>
//                         <a key={index}>
//                           {sort}
//                           <i
//                             className="fa fa-times ml-2"
//                             aria-hidden="true"
//                             onClick={() => this.handleOptionsExit(sort)}
//                           ></i>
//                         </a>
//                       </li>
//                     </ul>
//                   );
//                 })}
//               </div> */}
//               <div className="row">
//                 <div className="col-25">
//                   <label for="subject">Upload Image</label>
//                 </div>
//                 <div className="col-75">
//                   <input type="file" className="form-control" id="customFile" />
//                 </div>
//               </div>
//              </form>
//            </div>
//          </div>
//     </div>
//   )
// }