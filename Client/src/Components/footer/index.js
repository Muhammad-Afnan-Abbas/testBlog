import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function footer() {
  return (
    <React.Fragment>
      <section id="footer" className="fluid-container">
        <div id="footer" className="row">
          <div className="col">
            <h5 className="footColor">TEXT WIDGET</h5> <br/>
            <p className="text-white">It's a suitable place for adding small info about your site or other important information. Here you can add any text or html snippet. <br/> All widget are reorderable. Also if you want to remove any widget from sidebar or footer then that its very simple and easy.</p>
          </div>
          <div className="col">
            <h5 className="footColor">TAG CLOUD</h5>
            <ul className="learn-more-filtermain">
              <li className="learn-more-filter">
                <Link to="/tag-archive">
                  <i></i>Cooking
                </Link>
              </li>
              <li className="learn-more-filter">
                <Link to="/aboutus">
                  <i></i>Food 
                </Link>
              </li>
              <li className="learn-more-filter">
                <Link to="/faq">
                  <i></i>Health
                </Link>
              </li>
              <li className="learn-more-filter">
                <Link to="/contactus">
                  <i></i>Lifestyle
                </Link>
              </li>
              <li className="learn-more-filter">
                <Link to="/contactus">
                  <i></i>Sports
                </Link>
              </li>
              <li className="learn-more-filter">
                <Link to="/contactus">
                  <i></i>Sports
                </Link>
              </li>
              <li className="learn-more-filter">
                <Link to="/contactus">
                  <i></i>Sports
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5 className="list-unstyled quick-links footColor">Subscribe</h5><br/>
            <p className="text-white">For our news update Subscribe to our news letter. You can unsubscribe at any time.</p>
            <input
                    type="text"
                    id="email"
                    name="subscribe"
                    placeholder="youremail@example.com"
                  />
          </div>
        </div>
        <hr />
        <div className="small-12 medium-6 large-6 mt-sm-2 text-center text-white">
          <p>
            <u>
              <a href="https://www.ventechstudio.com"> Ventech Studio</a>
            </u>
            &nbsp; & All right Reversed To afnan@ventechstudio.com
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}
export default footer;
