import React from "react";
import "../styles/about.scss";
import {
  FaPeopleArrows,
  FaArrowUp,
  FaBoxOpen,
  FaChartLine,
  FaLeanpub,
  FaPeopleCarry,
} from "react-icons/fa";

function About() {

  
  return (
    <div className="about">
      <div className="about--banner">
        <img
          className="about--banner__img"
          src={require("../images/about-image.jpg")}
          alt=""
        />
      </div>

      <div className="aboutWrapper">
        <div className="aboutWrapperContainer">
          <div className="about--story">
            <h2>Our Story</h2>
            <p>
              We're a full-service digital marketing agency. We started in 2010
              as a local SEO and video marketing company, and we thought we were
              headed to the promised land with that business model. By 2013, we
              realized that the industry was changing. It was taking more and
              more effort to win online, and we were trying everything, using
              every tool, and still coming up short with our clients.
            </p>
          </div>

          <div className="about--value">
            <div className="about--value__integ" id="value">
              <FaBoxOpen size={40} className="aboutIcon" />
              <div>
                <h3>Integrity</h3>
                <p>Our first principal in honesty, which helps us</p>
              </div>
            </div>

            <div className="about--value__commit" id="value">
              <FaArrowUp size={40} className="aboutIcon" />
              <div>
                <h3>Commitment</h3>
                <p>
                  Our commitment to our work and our clients is unbreakable{" "}
                </p>
              </div>
            </div>

            <div className="about--value__passion" id="value">
              <FaChartLine size={40} className="aboutIcon" />
              <div>
                <h3>Passion</h3>
                <p>
                  Passion drives us to perform better, progress continually, and
                  delivers timmely
                </p>
              </div>
            </div>

            <div className="about--value__teamwork" id="value">
              <FaPeopleArrows size={40} className="aboutIcon" />
              <div>
                <h3>Team-work</h3>
                <p>Our team member are all about helping each other</p>
              </div>
            </div>

            <div className="about--value__learn" id="value">
              <FaLeanpub size={40} className="aboutIcon" />
              <div>
                <h3>Learning</h3>
                <p>Our team member are all about helping each other</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about--mvg">
        <div className="about--mvg__mission" id="aboutMvgId">
          <h3>1</h3>
          <h2>Vision Statement</h2>
          <div className="aboutInnerOne">
            <FaPeopleCarry
              size={50}
              style={{
                boxSizing: "content-box",
                padding: "5px",
                border: "4px solid purple",
                borderRadius: "50%",
                margin: "10px 0",
              }}

              
            />

            <p>
              To be the world’s most successful and business development and
              branding. Successful in helping our customers apply technology to
              solve their problems.
            </p>
          </div>
        </div>
        <div className="about--mvg__vision" id="aboutMvgId">
          <h3>2</h3>
          <h2>Mission Statement</h2>
          <div className="aboutInnerTwo">
            <FaPeopleCarry
              size={50}
              style={{
                boxSizing: "content-box",
                padding: "5px",
                border: "4px solid orange",
                borderRadius: "50%",
                margin: "10px 0",
              }}
            />
            <p>
              To breathe new life into every business accros the globe. We are a
              business development and branding organization that acknowledges
              those businesses across the globe.
            </p>
          </div>
        </div>

        <div className="about--mvg__commit" id="aboutMvgId">
          <h3>3</h3>
          <h2>Commitment Statement</h2>
          <div className="aboutInnerThree">
            <FaPeopleCarry
              size={50}
              style={{
                boxSizing: "content-box",
                padding: "5px",
                border: "4px solid #0C6BA7",
                borderRadius: "50%",
                margin: "10px 0",
              }}
            />

            <p>
              To be the world’s most successful and business development and
              branding. Successful in helping our customers apply technology to
              solve their problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
