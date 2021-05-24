import axios from "axios";
import React, { Component } from "react";
import './signup.css'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      name:'',
      email:'',
      password:'',
      cpassword:'',
    }
    this.handleName =this.handleName.bind(this)
    this.handleEmail =this.handleEmail.bind(this)
    this.handlePassword =this.handlePassword.bind(this)
    this.handleCPassword =this.handleCPassword.bind(this)
    this.onSubmit= this.onSubmit.bind(this)
  }
  handleEmail(event){
    this.setState({
      email: event.target.value
    })
  }
  handleName(event){
    this.setState({
      name: event.target.value
    })
  }
  handlePassword(event){
    this.setState({
      password: event.target.value
    })
  }
  handleCPassword(event){
    this.setState({
      cpassword: event.target.value
    })
  }
  onSubmit(event){
    event.preventDefault()
    const resgistered = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      cpassword: this.state.cpassword
    }
    axios.post("http://localhost:3001/signup", resgistered)
    .then(response => console.log(response.data)
    )

    this.setState({
      name:'',
      email:'',
      password:'',
      cpassword:''
    })
  }

  render() { 
    return (  
      <div>
        <div className="container">
        <div className="row">
        <div className="col-3">
          </div>
          <div className="form-div col-6 shadow">
          <h2 className="text-center">Get yourself Registered</h2>
            <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Name"
              onChange={this.handleName}
              value={this.state.name}
              className="form-control form-group pad"
              required
            />
            <input
              type="text"
              placeholder="email"
              onChange={this.handleEmail}
              value={this.state.email}
              className="form-control form-group pad"
              required
            />
            <input
              type="password"
              placeholder="password"
              onChange={this.handlePassword}
              value={this.state.password}
              className="form-control form-group pad"
              required
            />
            <input
              type="password"
              placeholder="confirm password"
              onChange={this.handleCPassword}
              value={this.state.cpassword}
              className="form-control form-group pad"
              required
            />
            <button type="submit" className="btn btn-danger btn-block pad" value="Submit">Sign up !</button>
            </form>
          </div>
          <div className="col-3">
          </div>
        </div>
        </div>
      </div>
      
    );
  }
}
 
export default SignUp;