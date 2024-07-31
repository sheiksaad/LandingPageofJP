import React from 'react';
import logo from '../assets/JWP Images/j3.png'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="Jawan Pakistan Logo" className="footer-logo" />
          <p>© 2022 JawanPakistan</p>
        </div>
        <div className="footer-company">
          <h4>Company</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Trainings</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Details</h4>
          <p>Muhammad Ali Mughal</p>
          <p>+923005292675</p>
          <p><a href="mailto:jawantechpk@gmail.com">jawantechpk@gmail.com</a></p>
        </div>
      </div>
      <div className="footer-social">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
