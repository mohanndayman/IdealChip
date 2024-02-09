import React from "react";
import NavBar from "./NavBar";
import "../../styles/Home.css";
import videoBackground from "../../images/mainvideo.mp4";
import HeroSection from "./HeroSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import SixthSection from "./SixthSection";
import Footer from "./Footer";

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <video autoPlay loop muted className="video-background">
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
    </div>
  );
}

export default Home;
