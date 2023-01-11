import React from "react";
import "../styles/home.scss";
import "../App.css";
import { FaBimobject, FaBusinessTime, FaDashcube, FaDeezer, FaDochub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Testimonial from "../components/Testimonial";
import business from "../images/business.png";



function Home() {

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };


  return (
    <div className="homeTotalOverall">
      <div className="homeOverall">
        <div className="legend">
          <p>We build great work, but we build even greater brands</p>
        </div>

        <div className="legendButton">
          <div className="legendFirstButton">
            <Link to={"/contact"}>
              <button className="button1" id="getInTouch">
                Get In Touch
              </button>
            </Link>
          </div>

          <div className="legendSecondButton">
            <Link to={"/service"}>
              <button className="button2" id="ourWork">
                Check Our Offers
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="businessDivision">
        <div className="businessDivisionTitle">
          <h2>
            We are the best choice for your business development and branding
            works
          </h2>
        </div>

        <div className="businessDivisionMain">
          <div className="businessDivisionSections" id="background1">
            <FaDashcube id="bizDivisionIcon" size={50} />
            <h4>Business Development & Consultancy</h4>
            <p>
              Our Professional Business Development Hub provides easy and
              affordable service kits to help you start or expand your business.
            </p>
            <Link to="">Read More...</Link>
          </div>
          <div className="businessDivisionSections" id="background2">
            <FaBusinessTime id="bizDivisionIcon" size={50} />
            <h4>Business Development Training</h4>
            <p>
              Our online business development platform, gain Incubator supports
              entrepreneurs with expertise and tools necessary to succeed.
            </p>
            <Link to="">Read More...</Link>
          </div>
          <div className="businessDivisionSections" id="background1">
            <FaDeezer id="bizDivisionIcon" size={50} />
            <h4>Sales Promotion & Marketing</h4>
            <p>
              We deliver effectively in crafting & implementing traditional
              sales and promotional solutions to drive and achieve our client's
              marketing/sales objectives
            </p>

            <Link to="">Read More...</Link>
          </div>

          <div className="businessDivisionSections" id="background2">
            <FaBusinessTime id="bizDivisionIcon" size={50} />
            <h4>Website Development & Management</h4>
            <p>
              The future starts now! If you want your enterprise to be seen as a
              pioneer in the future, a strong, appealing website should be your
              benchmark to drive your business up.
            </p>
            <Link to="">Read More...</Link>
          </div>

          <div className="businessDivisionSections" id="background1">
            <FaBimobject
              id="bizDivisionIcon"
              size={50}
              box-sizing="content-box"
            />
            <h4>Business Branding</h4>
            <p>
              Holisticly benchmark functional products before excellent methods
              of empowerment. Seamlessly visualize innovative web-readiness
              whereas extensive initiatives.
            </p>
            <Link to="">Read More...</Link>
          </div>

          <div className="businessDivisionSections" id="background2">
            <FaDochub id="bizDivisionIcon" size={50} />
            <h4>Digital Marketing</h4>
            <p>
              Competition in digital marketing in Nigeria has become more fierce
              than ever, good contents won't just take you to the top. Mabo
              Brand is good at targeting key areas and audience that truly cares
              about your brand
            </p>
            <Link to="">Read More...</Link>
          </div>
        </div>
      </div>

      <div className="trustedCustomer">
        {/* <div className="trustedCustomer--block1 " id="emptyBlock"></div> */}
        <div className="trustedCustomer--block2">
          <p className="customerContainer--content2__item">
            <small>More than +200 companies trusted us wordwide</small>
          </p>
        </div>

        {/* <div className="trustedCustomer--block3 " id="emptyBlock"></div> */}
      </div>

      {/* <div className="customerLine "></div> */}

      {/* <div className="customerImageOveral">
        <div className="customerImageOveral--content">
          <img
            className="customerImageOveral--content__listImage"
            id="listImage"
            src={require("../images/head-phones-1255514.jpg")}
            alt=""
          />
          <img
            className="customerImageOveral--content__listImage"
            id="listImage"
            src="https://swiperjs.com/images/sponsors/rapidessay.png"
            alt=""
          />
          <img
            className="customerImageOveral--content__listImage"
            id="listImage"
            src={require("../images/Headset9.jpg")}
            alt=""
          />
          <img
            className="customerImageOveral--content__listImage"
            id="listImage"
            src={require("../images/Headst.jpg")}
            alt=""
          />
          <img
            className="customerImageOveral--content__listImage"
            id="listImage"
            src={require("../images/Headst7.jpg")}
            alt=""
          />
          <img
            className="customerImageOveral--content__listImage"
            id="listImage"
            src={require("../images/Headset10.jpg")}
            alt=""
          />
        </div>
      </div> */}

      <hr className="customerImageOveralLine" />

      <div className="businessNutrientOveral">
        <div className="businessNutrient">
          <h4>Gain a Success With Us!</h4>
          <p>Every Nutrient Your Business Needs From Cradle to Maturity.</p>

          <button>
            <Link to="">Contact Us </Link>
          </button>
        </div>
      </div>

      <div className="testimonialComponent">
        <div className="testimonialComponent--wrapper">
          <div className="testimonialComponent--wrapper__item">
            <Testimonial
              testyImage={require("../images/bewakoof.jpg")}
              review={
                " The branding you guys handled for my company is one in town, thanks for the job"
              }
              name={"Temitayo"}
              position={"Product Manager"}
            />
          </div>
          <div className="testimonialComponent--wrapper__item">
            <Testimonial
              testyImage={require("../images/albert.jpg")}
              review={
                " Wow. You guys rocked on the website project. Thanks so much for doing a great job!"
              }
              name={"Feyisayo"}
              position={"Accountant"}
            />
          </div>
          <div className="testimonialComponent--wrapper__item">
            <Testimonial
              testyImage={require("../images/jurica.jpg")}
              review={
                " I look forward to do business with you in future because you guys are the best"
              }
              name={"Alfred"}
              position={"Product Manager"}
            />
          </div>
          <div className="testimonialComponent--wrapper__item">
            <Testimonial
              testyImage={require("../images/meysam.jpg")}
              review={
                "For those looking for a branding company, this is the company you need, yes is what it"
              }
              name={"Solomon"}
              position={"Engineer"}
            />
          </div>
          <div className="testimonialComponent--wrapper__item">
            <Testimonial
              testyImage={require("../images/joseph.jpg")}
              review={
                " I had a very nice experience dealing with the company, I can boldly recommend you guys"
              }
              name={"Testy Mox"}
              position={"Software Engnr"}
            />
          </div>
          <div className="testimonialComponent--wrapper__item">
            <Testimonial
              testyImage={require("../images/ali.jpg")}
              review={
                " I am always happy doing things with you guys. Thanks so much for doing a great job!"
              }
              name={"Mariam Foto"}
              position={"Software Engnr"}
            />
          </div>
        </div>
      </div>

      <div className="numberDisplay">
        <div className="numberDisplay--map">
          <img src={business} alt="" />
        </div>
        <div className="numberDisplay--info">
          <div className="numberDisplay--info__content">
            <h2>Let the numbers speak!</h2>
            <p>
              We strategically create and add value to your business, by
              developing up-to-date Business Development Solutions, Online &
              Offline Marketing Strategies and ICT Solutions that gives your
              brand a competitive advantage. At Mabo Brand Concept, Business
              Upgrade is what we do.
            </p>
          </div>
          <div className="numberDisplay--counter">
            <div className="numberDisplay--counter__clients">
              <h3>+ 500</h3>
              <p>Happy Clients</p>
            </div>

            <div className="numberDisplay--counter__projects">
              <h3>+ 1000</h3>
              <p>Finished Projects</p>
            </div>
          </div>
        </div>
      </div>

      <div className="businessNutrient">
        <div className="businessNutrient--content">
          <h5>Gain a Success With Us!</h5>
          <h1>Every Nutrient Your Business Needs From Cradle to Maturity.</h1>
          <Link to="/contact">
            <button>Become a Client</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
