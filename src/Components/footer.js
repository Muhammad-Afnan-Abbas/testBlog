import React from "react";
import "./Css/footer.css";
import { Link } from "react-router-dom";

function footer() {
  return (
    <React.Fragment>
      <section id="footer" className="container">
        <div id="footer" className="row">
          <div className="col">
            <h5 className="footColor">Quick links</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <Link to="/home">
                  <i className="fa fa-angle-double-right"></i>Home
                </Link>
              </li>
              <li>
                <Link to="/technology">
                  <i className="fa fa-angle-double-right"></i>Technology
                </Link>
              </li>
              <li>
                <Link to="/lifestyle">
                  <i className="fa fa-angle-double-right"></i>LifeStyle
                </Link>
              </li>
              <li>
                <Link to="/food">
                  <i className="fa fa-angle-double-right"></i>Food
                </Link>
              </li>
              <li>
                <Link to="/features">
                  <i className="fa fa-angle-double-right"></i>Features
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5 className="footColor">Tag Cloud</h5>
            <ul className="learn-more-filtermain">
              <li className="learn-more-filter">
                <Link to="/tag-archive">
                  <i className="fa fa-angle-double-right"></i>Tag Archive
                </Link>
              </li>
              <li className="learn-more-filter">
                <Link to="/aboutus">
                  <i className="fa fa-angle-double-right"></i>About Us
                </Link>
              </li>
              <li className="learn-more-filter">
                <Link to="/faq">
                  <i className="fa fa-angle-double-right"></i>FAQ
                </Link>
              </li>
              <li className="learn-more-filter">
                <Link to="/contactus">
                  <i className="fa fa-angle-double-right"></i>Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5 className="list-unstyled quick-links footColor">Contact US</h5>
          </div>
        </div>
        <hr />
        <div className="small-12 medium-6 large-6 mt-sm-2 text-center text-white">
          <p>
            <u>
              <a href="https://www.ventechstudio.com"> Ventech Studio</a>
            </u>
            &nbsp; & copy All right Reversed To afnan@ventechstudio.com
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}
export default footer;
