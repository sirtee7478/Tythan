import React from "react";
import "../styles/contact.scss";
import { FaEnvelope, FaHouseDamage, FaPhone, FaClock } from "react-icons/fa";

function Contact() {
  return (
    <div className="contactWrapper">
      <div className="contact--background">
        <img src={require("../images/Services.jpg")} alt="" />
        <h1>Our Services</h1>
      </div>

      <div className="contactWrapperInfo">
        <div className="contactWrapperInfo--message">
          <h1>Hi</h1>
          <h1>Let's Design The Dream Together</h1>
          <p>
            Fill out the contact form or send us a message at{" "}
            <a href="mailto:pythan@info.com"> pythan@info.com </a>
            and we will be in touch as soon as possible
          </p>
        </div>

        <div className="contactWrapperInfo--form">
          <h4>Send Us Message</h4>
          <form
            action="mailto:sirtee7478@gmail.com?"
            cc="sirtee7656@gmail.com"
            subject="Pythan Contact From"
            method="get"
          >
            <div className="contactWrapperInfo--form__name">
              <label htmlFor="name" className="contactFormName">
                <input
                  type="text"
                  name="fullname"
                  id="name"
                  placeholder="Enter Your Full Name"
                  required
                />
              </label>

              <label htmlFor="name" className="contactFormEmail">
                <input
                  type="email"
                  name="emailaddress"
                  id="email"
                  placeholder="Enter Your Email"
                  required
                />
              </label>
            </div>

            <div className="contactFormMessage">
              <label htmlFor="message" className="contactFormMessage--wrap">
                <textarea
                  name="message"
                  id="message"
                  // cols="30"
                  // rows="10"
                  placeholder="Enter Your Message"
                  required
                ></textarea>
              </label>
            </div>

            <div className="contactSubmit">
              <button type="submit" value="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="contactUs">
        <div className="contactUs--phone">
          <FaPhone size={30} className="fa" />
          <h4>Call Support</h4>
          <p>
            {" "}
            <a href="tel:+2347063414153">+234-706-3414-153</a>
          </p>
        </div>

        <div className="contactUs--email">
          <FaEnvelope size={30} className="fa" />
          <h4>Email Us</h4>
          <p>pythan@info.com</p>
        </div>

        <div className="contactUs--address">
          <FaHouseDamage size={30} />
          <h4>Office Address</h4>
          <p>Plot 4, Luthili Ave, Lagos, Nigeria</p>
        </div>

        <div className="contactUs--workHours">
          <FaClock size={30} className="fa" />
          <h4>Work Hours</h4>
          <p>Mon-Sat : 9am - 5pm</p>
        </div>
      </div>

      <div className="contactUs--map" id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.758791248322!2d32.61498281426825!3d0.31298696411742544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc06339f0f7b%3A0xf4d37ba0a671e5b2!2s4%20Luthuli%20Ave%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sng!4v1671739191612!5m2!1sen!2sng"
          width="1000"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          title="Ugan"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
