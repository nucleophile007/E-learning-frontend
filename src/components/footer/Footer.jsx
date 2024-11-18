import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2024 Your E-Learning Platform. All rights reserved. <br /> Made
          with ❤️ <a href="">Deepak Kumar Singh</a>
        </p>
        <div className="social-links">
          <a href="https://www.facebook.com/profile.php?id=100009790233863">
            <AiFillFacebook />
          </a>
          <a href="https://x.com/neophytedev007">
            <AiFillTwitterSquare />
          </a>
          <a href="https://www.instagram.com/deepaksingh_52/">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
