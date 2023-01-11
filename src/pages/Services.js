import React from "react";
// import { Link } from 'react-router-dom';
import '../styles/services.scss';
import '../App.css';
import { FaCompressAlt } from "react-icons/fa";

import BusinessSections from "../components/BusinessSections";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="services">
      <div className="service--background">
        <img src={require("../images/Services.jpg")} alt="" />
        <h1>Our Services</h1>
      </div>

      <div className="servicesHeading">
        <h1>
          What Do <span> We Offer ?</span>{" "}
        </h1>
      </div>

      <div className="services--division">
        <BusinessSections
          BusinessDivision={"Business Development & Consultancy"}
          Describe={
            "Our Professional Business Development Hub provides easy and affordable service kits to help you start or expand your business"
          }
          DivImg={require("../images/Business-Development-Consultant.jpeg")}
        />

        <BusinessSections
          BusinessDivision={"Business Development Training"}
          Describe={
            "Our online business development platform, gain Incubator supports entrepreneurs with expertise and tools necessary to succeed."
          }
          DivImg={require("../images/learning-and-development.jpeg")}
        />

        <BusinessSections
          BusinessDivision={"Sales Promotion & Marketing"}
          Describe={
            "We deliver effectively in crafting & implementing traditional sales and promotional solutions to drive and achieve our client's marketing/sales objectives."
          }
          DivImg={require("../images/sale-promotion.png")}
        />

        <BusinessSections
          BusinessDivision={"Website Development & Management"}
          Describe={
            "The future starts now! If you want your enterprise to be seen as a pioneer in the future, a strong, appealing website should be your benchmark to drive your business up."
          }
          DivImg={require("../images/website-development.png")}
        />

        <BusinessSections
          BusinessDivision={"Business Branding"}
          Describe={
            "Holisticly benchmark functional products before excellent methods of empowerment. Seamlessly visualize innovative web-readiness whereas extensive initiatives."
          }
          DivImg={require("../images/branding-increase-sales.jpg")}
        />

        <BusinessSections
          BusinessDivision={"Digital Marketing"}
          Describe={
            "Competition in digital marketing in Nigeria has become more fierce than ever, good contents won't just take you to the top. Mabo Brand is good at targeting key areas and audience that truly cares about your brand."
          }
          DivImg={require("../images/digitalmarketing.jpeg")}
        />
      </div>

      <div className="services--Contact">
        <div className="services--Contact__info">
          {/* <FaCompressAlt size={50} className="services--Contact__icon" /> */}
          <p>
            <span>We welcome inquires! </span>
            <br />
            <br/>
            We are available 24/7 to attend to all your sales enquiries,
            aftersales support request, technical assistance and maintenance
            issues, you are therefore invited to send us your inquires. Thank
            you for doing business with us.
          </p>
        </div>
        <div className="services--button">
          <Link to={"/contact"}>Contact-Us</Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
