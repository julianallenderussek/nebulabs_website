import React from "react";
import { Navbar } from "../components/Navbar";
import ReactPlayer from "react-player";
import heroVideo from "../../public/videos/space_video.mp4";

export const HomePage = () => {
  return (
    <div className="main-body-div">
      <div className="hero-main-wrapper">
        <Navbar />

        <section className="hero-video">
          <ReactPlayer
            url={heroVideo}
            playing
            loop
            muted
            width="100%"
            height="100%"
          />
        </section>

        <div className="hero-banner-wrapper">
          <h1>We Deliver Digital Transformation</h1>
          <h2>
            At Kalypso we focus on the digital transformation of the value
            chain, from the product to the plant to the end user.
          </h2>
        </div>
      </div>

      <div className="nebula-section"></div>
    </div>
  );
};
