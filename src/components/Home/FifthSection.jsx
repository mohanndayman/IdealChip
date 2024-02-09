import React from "react";
import { useInView } from "react-intersection-observer";
import "../../styles/FivthSection.css";
import ornage from "../../images/orange.webp";
import zain from "../../images/zain.jpg";
import umniha from "../../images/umniah.jpg";
import steper from "../../images/lastGroup.png";

function FivthSection() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={inViewRef}
      className={`FifthSecionContainer ${inView ? "in-view" : ""}`}
    >
      <div className="headtextwork">
        <h1>How we do The work</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <div className="slider">
          <img src={steper} style={{ width: "50%", height: "220px" }} />
        </div>
      </div>

      <div className="headtexxxt">
        <h1>Our Clinets</h1>
        <div className="hr" style={{ width: "50%" }}>
          {" "}
          <hr />
        </div>
      </div>
      <div className="clintes">
        {/* ... (existing code) */}
        <div className="clintesimges">
          <div className={`forclintesimage ${inView ? "in-view" : ""}`}>
            <img src={ornage} alt="" />
            <h1>Orange</h1>
          </div>
          <div className={`forclintesimage ${inView ? "in-view" : ""}`}>
            <img src={zain} alt="" />
            <h1>Zain</h1>
          </div>
          <div className={`forclintesimage ${inView ? "in-view" : ""}`}>
            <img src={umniha} alt="" />
            <h1>Omniah</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FivthSection;
