import React, { useState} from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaFacebook, FaInstagram, FaLinkedin, FaTimes, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "../App.css";
import "../styles/header.scss";

function Header() {
  const [ mobileMenu, setMobileMenu ] = useState(false);

  const toggleMobileMenu= ()=>{
    return setMobileMenu(!mobileMenu);
  }

//   const activeMenu = ({ isActive }) => {
//     return {
//       fontWeight: isActive ? 'bold' : 'normal',
//       fontSize: isActive ? '30px': 'normal',    
//   }
// }
  return (
    <div className="headerContainer">
      <div className="headerOverall">
        <div className="logo">
          <Link className="myLogo" to={"/"}>
            Py-<span>Than</span>
          </Link>
        </div>

        <div className="navMenu">
          <ul className={mobileMenu ? "mobileNav" : "nav"}>
            <li className="navlink">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="navlink">
              <NavLink to="/service">Service</NavLink>
            </li>
            <li className="navlink">
              <NavLink to="/about">About</NavLink>
            </li>
            <li /*style={activeLink}*/ className="navlink">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>

          <button className="hamburgerMenu" onClick={toggleMobileMenu}>
            {!mobileMenu ? <FaBars size={30} /> : <FaTimes size={30} />}
          </button>
        </div>
      </div>

      <div className="socialMedia">
        <a
          href="https://web.facebook.com/ogunmilade.tope"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook size={18} className="socialMediaIcons" />
        </a>

        <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer">
          <FaTwitter size={18} className="socialMediaIcons" />
        </a>

        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <FaLinkedin size={18} className="socialMediaIcons" />
        </a>

        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram size={18} className="socialMediaIcons" />
        </a>

        <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
          <FaWhatsapp size={18} className="socialMediaIcons" />
        </a>
      </div>
    </div>
  );
}

export default Header;
