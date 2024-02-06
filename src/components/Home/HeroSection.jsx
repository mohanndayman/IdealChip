import React from "react";
import "../../styles/HeroSection.css";
import { animated, useSpring, useSprings } from "@react-spring/web";
import { IoArrowDownSharp } from "react-icons/io5";

function NumberCountAnimation({ number }) {
  const numberCountAnimation = useSpring({
    from: { count: 0 },
    to: { count: parseInt(number.replace("K", ""), 15) },
    delay: 2000,
  });

  return (
    <animated.h1>
      {numberCountAnimation.count.interpolate((count) => Math.ceil(count))}
    </animated.h1>
  );
}

function TypewriterText({ text }) {
  const chars = text.split("");

  const charAnimations = useSprings(
    chars.length,
    chars.map((char, index) => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay: 15 * index,
    }))
  );

  return (
    <div>
      {charAnimations.map((props, index) => (
        <animated.span key={index} style={props}>
          {chars[index]}
        </animated.span>
      ))}
    </div>
  );
}

function HeroSection() {
  const squareContent = [
    {
      id: 1,
      number: "2500 K",
      paragraph: "PROJECTS COMPLETED .",
    },
    {
      id: 2,
      number: "500 K",
      paragraph: "Another example paragraph for square 2.",
    },
    {
      id: 3,
      number: "750 K",
      paragraph: "Another example paragraph for square 3.",
    },
    {
      id: 4,
      number: "1000 K",
      paragraph: "Another example paragraph for square 4.",
    },
  ];

  const heroAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(-100%)" },
    to: { opacity: 1, transform: "translateX(0%)" },
  });

  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 2300,
  });

  const smallSquareAnimations = useSprings(
    squareContent.length,
    squareContent.map((item, index) => ({
      from: { opacity: 0, transform: "translateX(-100%)" },
      to: { opacity: 1, transform: "translateX(0%)" },
      delay: 500 * index,
    }))
  );

  const handleButton = () => {
    window.scroll(0, 1800);
  };

  return (
    <>
      <div className="HeroSection">
        <div className="arrowDown">
          <button>
            <IoArrowDownSharp />
          </button>
        </div>
        <button onClick={handleButton} className="forlink"></button>
        <div className="underherosection">
          <div className="lefttflex">
            <animated.div style={heroAnimation} className="squarehero">
              <h1>
                <TypewriterText text="WE BUILD THE FUTURE OF SMART CITY." />
              </h1>
              <p>
                <TypewriterText text="We are specialized in delivering innovative solutions tailored to the needs of smart cities, aiming to provide the most effective and efficient strategies for enhancing urban living." />
              </p>
              <animated.div style={buttonAnimation} className="forbuttton">
                <button className="butttton">Learn More</button>
              </animated.div>
            </animated.div>
          </div>
        </div>
        <div className="smallsqaures">
          {smallSquareAnimations.map((props, index) => (
            <animated.div
              style={props}
              key={squareContent[index].id}
              className="smallsqaursss"
            >
              <div className="insitesqaure">
                <NumberCountAnimation number={squareContent[index].number} />
              </div>
              <hr />
              <div className="paragraphforsquare">
                <p>{squareContent[index].paragraph}</p>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HeroSection;
