import React, { Component } from "react";
import './styles.scss';
import { FaSoundcloud, FaLinkedin, FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { RiYoutubeLine } from "react-icons/ri";


class Footer extends Component {
  render() {
    return (
      <div className="footer">
        {/* <div className="copyright">© 2020 ssergienko.com</div> */}
        <div className="social-networks">
          <a href="https://www.instagram.com/sergey.s.sergienko/" target="_blank" rel="noopener noreferrer"><FaInstagram size="1em" /></a>
          <a href="https://www.linkedin.com/ssergienko" target="_blank" rel="noopener noreferrer"><FaLinkedin size="1em" /></a>
          <a href="https://soundcloud.com/ssergienko" target="_blank" rel="noopener noreferrer"><FaSoundcloud size="1.5em" /></a>
          <a href="https://www.facebook.com/sergey.ssergienko" target="_blank" rel="noopener noreferrer"><FaFacebookSquare size="1em" /></a>
          <a href="https://www.youtube.com/channel/UCeUltXEeBeuD-Ah2DhJtTOQ" target="_blank" rel="noopener noreferrer"><RiYoutubeLine size="1em" /></a>
        </div>
      </div>
    );
  }
}

export default Footer;