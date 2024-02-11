import React from "react";
import "../../styles/ContactUs.css";
import contactusImge from "../../images/ContactUsImage.jpg";

function ContactUs() {
  return (
    <div className="contactUsSection">
      <div className="ContactUsImage">
        <img src={contactusImge} />
      </div>
      <div className="ContactUs">
        <div className="LeftFlexx">
          <div></div>
        </div>
        <div className="RightFlexx">
          <div className="contactUsSquare">
            <div className="ContactUsHeadText">
              <h1>Contact Us </h1>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
