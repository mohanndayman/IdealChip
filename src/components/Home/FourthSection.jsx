import React from "react";
import { animated, useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import "../../styles/Forthsection.css";

function FourthSection() {
  const electronicProducts = [
    {
      headText: "Smartphone",
      description:
        "A handheld device that combines the functionality of a mobile phone with various features like internet browsing, camera, and apps.",
    },
    {
      headText: "Laptop",
      description:
        "A portable computer that is suitable for use on the go, with features such as a keyboard, display screen, and built-in battery.",
    },
    {
      headText: "Smartwatch",
      description:
        "A wearable device that provides various functionalities such as fitness tracking, notifications, and sometimes even phone capabilities.",
    },
    {
      headText: "Bluetooth Earbuds",
      description:
        "Wireless earphones that connect to devices via Bluetooth, offering a tangle-free and convenient audio experience.",
    },
    {
      headText: "4K Smart TV",
      description:
        "A high-resolution television with smart features, allowing access to streaming services, apps, and internet browsing.",
    },
    {
      headText: "Digital Camera",
      description:
        "A device for capturing still photographs and, in some cases, recording videos with advanced features like interchangeable lenses and high-resolution sensors.",
    },
    {
      headText: "Fitness Tracker",
      description:
        "A wearable device that monitors and tracks fitness-related metrics such as steps taken, heart rate, and sleep patterns.",
    },
    {
      headText: "Gaming Console",
      description:
        "A dedicated device for playing video games, often equipped with powerful graphics and processing capabilities.",
    },
    {
      headText: "Wireless Router",
      description:
        "A networking device that allows multiple devices to connect to the internet wirelessly, providing Wi-Fi connectivity in homes or offices.",
    },
  ];
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const trail = useTrail(electronicProducts.length, {
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0px)" : "translateX(-50px)",
    },
    delay: 300, // Adjust this delay as needed
  });
  return (
    <>
      <div ref={inViewRef} className="FourthSectionContainer">
        <div className="headtexxxt">
          <h1>High Quality Electronic Products</h1>
          <div className="hr">
            {" "}
            <hr />
          </div>
        </div>
        <div className="forelect">
          {trail.map((props, index) => (
            <animated.div key={index} style={props} className="halfsmall">
              <h1>{electronicProducts[index].headText}</h1>
              <hr />
              <p>{electronicProducts[index].description}</p>
            </animated.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FourthSection;
