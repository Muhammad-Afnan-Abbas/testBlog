import React, { Component } from "react";
import './Css/contact.css'
class ContactUS extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                          <form action="/action_page.php">
                            <div className="form-group">
                              <input type="text" className="email-bt" placeholder="Name" name="Name"/>
                            </div>
                            <div className="form-group">
                              <input type="text" className="email-bt" placeholder="Email" name="Email"/>
                            </div>
                            <form action="/action_page.php">
                                <div className="form-group">
                                  <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="text"></textarea>
                                </div>
                            </form>
                          </form>
                       </div> 
                       <div className="send_btn">
                        <button  type="button" className="main_bt">Send</button>
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
