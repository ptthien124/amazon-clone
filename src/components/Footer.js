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
              <Link className="footer__link" to="/amazon-clone">
                Careers
              </Link>
              <Link className="footer__link" to="/amazon-clone">
                Blog
              </Link>
              <Link className="footer__link" to="/amazon-clone">
                About Amazon
              </Link>
              <Link className="footer__link" to="/amazon-clone">
                Investor Relations
              </Link>
              <Link className="footer__link" to="/amazon-clone">
                Amazon Devices
              </Link>
            </div>
          </div>

          <div className="col wl-3 l-3 m-6 c-6">
            <div className="flex-col">
              <h3>Make Money with Us</h3>
              <Link className="footer__link" to="/amazon-clone">
                Sell products on Amazon
              </Link>
              <Link className="footer__link" to="/amazon-clone">
                Sell on Amazon Business
              </Link>
              <Link className="footer__link" to="/amazon-clone">
                Sell apps on Amazon
              </Link>
              <Link className="footer__link" to="/amazon-clone">
                Become an Affiliate
              </Link>
              <Link className="footer__link" to="/amazon-clone">
                Advertise Your Products
              </Link>
              <Link className="footer__link" to="/amazon-clone">
                Self-Publish with Us
              </Link>
              <Link className="footer__link" to="/amazon-clone">
                Host an Amazon Hub
              </Link>
              <Link className="footer__link" to="/amazon-clone">
                › See More Make Money with Us
              </Link>
            </div>
          </div>

          <div className="col wl-3 l-3 m-6 c-6">
            <div className="flex-col">
              <h3>Geto Know Us</h3>
              <Link className="footer__link" to="/amazon-clone">
                Amazon Business Card
              </Link>
              <Link className="footer__link" to="/amazon-clone">
                Shop with Points
              </Link>
              <Link className="footer__link" to="/amazon-clone">
                Reload Your Balance
              </Link>
              <Link className="footer__link" to="/amazon-clone">
                Amazon Currency Converter
              </Link>
            </div>
          </div>

          <div className="col wl-3 l-3 m-6 c-6">
            <div className="flex-col">
              <h3>Geto Know Us</h3>
              <Link className="footer__link" to="/amazon-clone">
                Amazon and COVID-19
              </Link>
              <Link className="footer__link" to="/amazon-clone">
                Your Account
              </Link>
              <Link className="footer__link" to="/amazon-clone">
                Your Orders
              </Link>
              <Link className="footer__link" to="/amazon-clone">
                Shipping Rates & Policies
              </Link>
              <Link className="footer__link" to="/amazon-clone">
                Returns & Replacements
              </Link>
              <Link className="footer__link" to="/amazon-clone">
                Manage Your Content and Devices
              </Link>
              <Link className="footer__link" to="/amazon-clone">
                Amazon Assistant
              </Link>
              <Link className="footer__link" to="/amazon-clone">
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
