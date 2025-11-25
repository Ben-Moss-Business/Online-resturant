import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            sint excepturi, nam impedit labore quibusdam aperiam alias tempora
            soluta maiores minus exercitationem nostrum modi temporibus
            laudantium aut autem aliquam similique!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#explore-menu">Delivery</a></li>
            <li><a href="#footer">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+44-000000000</li>
            <li>contact@business.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">ENTER SOME COPYRIGHT TEXT</p>
    </div>
  );
};

export default Footer;
