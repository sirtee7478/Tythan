import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/BusinessSections.scss";

function BusinessSections({ BusinessDivision, Describe, DivImg }) {
  return (
    <div className="businessSections">
      
        <img src={DivImg} alt="" />
      

      <div className=" businessSections--content">
        {/* <div className=""> */}
        <h4>{BusinessDivision}</h4>
        <p>{Describe}</p>
        {/* </div> */}
        <Link to="">Read More...</Link>
      </div>
    </div>
  );
}

export default BusinessSections