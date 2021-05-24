import axios from "axios";
import React, { Component } from "react";
import './contact.css'
import { toast,} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class ContactUS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      message: '',
    };
  }
  handleName = (e) => {
    this.setState({ name: e.target.value });
    console.log("Name", this.name);
  };
  handleEmail = (c) => {
    this.setState({ email: c.target.value });
    console.log("Email", this.email);
  };
  handleMessage = (c) => {
    this.setState({ message: c.target.value });
    console.log("Message", this.message);
  };
  handleClick(event) {
    event.preventDefault();
    const ContactForm = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };
    console.log(ContactForm);
    axios.post("http://localhost:3001/contactUs", ContactForm)
    this.setState({
      name: "",
      email: "",
      message: "",
    });
    toast.configure();
    const notify = (message) => toast.success(message);
    notify("Message sent");
    this.props.history.push("/contactUs");
  }
  render() {
    return (
      <>
        <div class="touch_section">
        <div class="container">
            <h1 class="touch_text">Let's Get In Touch!</h1>
        </div>
    </div>
    <div className="lets_touch_main">
        <div className="container cln">
            <div className="row rContact">
                <div className="col-md-6">
                    <div className="input_main">
                       <div className="container">
                          <form method="POST" action="/contactUs">
                            <div className="form-group">
                              <input type="text" value={this.state.name} className="email-bt" placeholder="name" name="Name"  onChange={(event) => this.handleName(event)}/>
                            </div>
                            <div className="form-group">
                              <input type="text" value={this.state.email} className="email-bt" placeholder="email" name="Email"  onChange={(event) => this.handleEmail(event)}/>
                            </div>
                            <div className="form-group">
                              <textarea className="massage-bt" value={this.state.message} placeholder="Message" rows="5" id="comment" name="text"  onChange={(event) => this.handleMessage(event)}></textarea>
                            </div>
                          </form>
                       </div> 
                       <div className="send_btn">
                        <button type="submit" className="main_bt" onClick={(event) => this.handleClick(event)}>Send</button>
                       </div>                   
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-12">
                            <p className="lorem_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </>
    );
  }
}

export default ContactUS;
