import React from 'react';
import "../styles/testimonial.scss";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Testimonial({ review, position, name, testyImage }) {
  return (
    <div className="testimonial">
      <div className="testimonial--card">
        <img
          src={testyImage}
          // className="testimonial--card__img"
          // src={require("../images/Headset10.jpg")}
          alt=""
        />
        <p>
          {" "}
          <blockquote>{review} </blockquote>{" "}
        </p>
        <h4> {name} </h4>
        <br></br>
        <h3> {position}</h3>
        <div className="testimonial--social">
          <Link to="">
            <FaFacebook className="testimonial--social__media" />
          </Link>
          <Link to="">
            <FaTwitter className="testimonial--social__media" />
          </Link>
          <Link to="">
            <FaLinkedin className="testimonial--social__media" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Testimonial