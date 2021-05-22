import React, { Component } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast,} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./allProducts.css";
class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      blogs: [],
      form: {},
      newBlogs: {},
      openEditForm: false,
    };
  }
  getSellerProducts() {
    const jwt = localStorage.getItem("jwtToken");
    console.log("mytoken", jwtDecode(jwt));
    const names = jwtDecode(jwt);
    return axios
      .get("http://localhost:3001" + "/seller/" + names.id)
      .then((response) => {
        this.setState({ products: response.data });
      });
  }
  updateUser(product) {
    let form = new FormData();
    console.log("p", product);
    form.append("title", product.title);
    form.append("email", product.content);
    //form.append('results', product.results);
    form.append("file", product.file);
    return axios.put("http://localhost:3001" + "/update/" + product._id, form);
  }
  deleteProduct(product) {
    console.log("pp", product);
    return axios.delete("http://localhost:3001" + "/blog/" + product);
  }
  componentDidMount() {
    this.getSellerProducts();
  }

  async saveNewBlog() {
    let blog = this.state.newBlogs;
    let upblog = await this.updateUser(blog);
    this.setState({
      newBlogs: upblog.data.resp,
    });
    localStorage.setItem("token", upblog.data.token);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  onChangeHandler = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => this.setState({ file: reader.result });
  };

  handleChange(event) {
    let form = this.state.form;
    if (event.target.name !== "userImage") {
      form[event.target.name] = event.target.value;
    } else {
      form["newImage"] = event.target.files[0];
    }

    this.setState({
      form: form,
    });
  }
  handleEdit = (i) => {
    this.setState({
      newBlogs: i,
      openEditForm: !this.state.openEditForm,
    });
    console.log("hello", this.state.newBlogs);
  };
  handleDelete = async (product) => {
    toast.configure();
    const notify = (message) => toast.success(message);
    const Oproducts = this.state.products;
    const products = Oproducts.filter((m) => m._id !== product._id);
    this.setState({ products });

    try {
      await this.deleteProduct(product._id);
      //window.alert('Product deleted.');
      notify("Blog Deleted");
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        //console.log('x');
        window.alert("This Product has already been deleted.");

      this.setState({ products: Oproducts });
    }
  };

  render() {
    const { products, newBlogs, openEditForm } = this.state;
    return (
      // <div>
      //     <li>
      //         {products.map((i,index)=>{
      //             return(
      //                 <div>{i.title}</div>
      //             )
      //         })}
      //     </li>
      // </div>

      <div className="limiter">
        <div className="container-table100">
          <div className="wrap-table100">
            <div className="table100 ver1 m-b-110">
              <div className="table100-head">
                <table>
                  <thead>
                    <tr className="row100 head">
                      <th className="cell100 column1">Title</th>
                      <th className="cell100 column2">Content</th>
                      <th className="cell100 column3">Tags</th>
                      <th className="cell100 column4">Date</th>
                      <th className="cell100 column4">Action</th>
                    </tr>
                  </thead>
                </table>
              </div>

              <div className="table100-body js-pscroll">
                <table>
                  <tbody>
                    {products.map((i, index) => {
                      return (
                        <tr className="row100 body">
                          <td className="cell100 column1">{i.title}</td>
                          <td className="cell100 column2">{i.content}</td>
                          <td className="cell100 column3">{i.results}</td>
                          <td className="cell100 column4">{i.date}</td>
                          <td className="cell100 column4">
                            <i
                              class="fa fa-edit"
                              onClick={() => this.handleEdit(i)}
                            ></i>
                            <i
                              class="fa fa-trash"
                              onClick={() => this.handleDelete(i)}
                            ></i>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div>
                {openEditForm == true && (
                  <div className="container">
                    <form
                      method="PUT"
                      action="/update/"
                      enctype="multipart/form-data"
                    >
                      <div className="row">
                        <div className="col-lg-3 col-md-5 col-sm-12">
                          <label for="title">
                            <strong>Post Title</strong>
                          </label>
                        </div>
                        <div className="col-lg-9 col-md-7 col-sm-12 style-inp">
                          <input
                            type="text"
                            id="title"
                            value={this.state.newBlogs.title}
                            onChange={(event) => this.handleChange(event)}
                            name="title"
                            placeholder="Enter Title"
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-5 col-sm-12">
                          <label for="lname">
                            <strong>Post Content</strong>
                          </label>
                        </div>
                        <div className="col-lg-9 col-md-7 col-sm-12 style-inp">
                          <input
                            type="text"
                            id="pcontent"
                            value={this.state.newBlogs.content}
                            onChange={(event) => this.handleChange(event)}
                            name="content"
                            placeholder="Write or paste Content"
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-5 col-sm-12">
                          <label for="subject">
                            <strong>Upload Image</strong>
                          </label>
                        </div>
                        <div className="col-lg-9 col-md-7 col-sm-12 style-inp">
                          <input
                            onChange={(event) => this.onChangeHandler(event)}
                            type="file"
                            className="form-control"
                            id="customFile"
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        <img
                          className="imgt"
                          src={this.state.newBlogs.file}
                        ></img>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-5 col-sm-12"></div>
                        <div className="col-lg-9 col-md-7 col-sm-12">
                          <button
                            type="submit"
                            onClick={(event) => this.saveNewBlog(event)}
                            value="update"
                            className="bgc"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllProducts;