import React from "react";
import { HiOutlineCpuChip } from "react-icons/hi2";
import { BiMicrochip } from "react-icons/bi";
import { AiOutlineHdd } from "react-icons/ai";
import { animated, useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import logo from "../../images/logo.webp";
import "../../styles/SecondSection.css";

function SecondSection() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const items = [
    {
      icon: <HiOutlineCpuChip />,
      text: "Captivating Adventures",
      description:
        "Embark on a journey filled with wonder and discovery. Explore hidden treasures, encounter mythical creatures",
    },
    {
      icon: <BiMicrochip />,
      text: "Captivating Adventures",
      description:
        "Embark on a journey filled with wonder and discovery. Explore hidden treasures, encounter mythical creatures",
    },
    {
      icon: <AiOutlineHdd />,
      text: "Captivating Adventures",
      description:
        "Embark on a journey filled with wonder and discovery. Explore hidden treasures, encounter mythical creatures",
    },
  ];

  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0px)" : "translateX(-50px)",
    },
    delay: 400, // Adjust this delay as needed
  });

  return (
    <div ref={inViewRef} className="SecondSectionContainer">
      <div className="firstSecition">
        <div className="firstRow">
          <img src={logo} alt="logo" />
          <p>How to get it !</p>
          <div className="secondRow">
            <h1 style={{ color: "silver", fontWeight: "700" }}>
              What makes them more special !
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className="secndsetionTwo">
        {trail.map((props, index) => (
          <animated.div key={index} style={props} className="Cards">
            <div className="e-card playing">
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="infotop">
                <h1>{items[index].icon}</h1>
                <h2>{items[index].text} </h2>
                <h3>{items[index].description}</h3>
              </div>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default SecondSection;
