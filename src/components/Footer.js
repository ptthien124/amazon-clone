import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <a className="footer__backToTopBtn" href="#">
        Back to Top
      </a>
      <div className="grid wide">
        <div className="row">
          <div className="col wl-3 l-3 m-6 c-6">
            <div className="flex-col">
              <h3>Geto Know Us</h3>
              <Link className="footer__link" to="/">
                Careers
              </Link>
              <Link className="footer__link" to="/">
                Blog
              </Link>
              <Link className="footer__link" to="/">
                About Amazon
              </Link>
              <Link className="footer__link" to="/">
                Investor Relations
              </Link>
              <Link className="footer__link" to="/">
                Amazon Devices
              </Link>
            </div>
          </div>

          <div className="col wl-3 l-3 m-6 c-6">
            <div className="flex-col">
              <h3>Make Money with Us</h3>
              <Link className="footer__link" to="/">
                Sell products on Amazon
              </Link>
              <Link className="footer__link" to="/">
                Sell on Amazon Business
              </Link>
              <Link className="footer__link" to="/">
                Sell apps on Amazon
              </Link>
              <Link className="footer__link" to="/">
                Become an Affiliate
              </Link>
              <Link className="footer__link" to="/">
                Advertise Your Products
              </Link>
              <Link className="footer__link" to="/">
                Self-Publish with Us
              </Link>
              <Link className="footer__link" to="/">
                Host an Amazon Hub
              </Link>
              <Link className="footer__link" to="/">
                › See More Make Money with Us
              </Link>
            </div>
          </div>

          <div className="col wl-3 l-3 m-6 c-6">
            <div className="flex-col">
              <h3>Geto Know Us</h3>
              <Link className="footer__link" to="/">
                Amazon Business Card
              </Link>
              <Link className="footer__link" to="/">
                Shop with Points
              </Link>
              <Link className="footer__link" to="/">
                Reload Your Balance
              </Link>
              <Link className="footer__link" to="/">
                Amazon Currency Converter
              </Link>
            </div>
          </div>

          <div className="col wl-3 l-3 m-6 c-6">
            <div className="flex-col">
              <h3>Geto Know Us</h3>
              <Link className="footer__link" to="/">
                Amazon and COVID-19
              </Link>
              <Link className="footer__link" to="/">
                Your Account
              </Link>
              <Link className="footer__link" to="/">
                Your Orders
              </Link>
              <Link className="footer__link" to="/">
                Shipping Rates & Policies
              </Link>
              <Link className="footer__link" to="/">
                Returns & Replacements
              </Link>
              <Link className="footer__link" to="/">
                Manage Your Content and Devices
              </Link>
              <Link className="footer__link" to="/">
                Amazon Assistant
              </Link>
              <Link className="footer__link" to="/">
                Help
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-center"></div>
    </div>
  );
}

export default Footer;
