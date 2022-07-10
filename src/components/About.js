import React from "react";

const About = () => {
  return (
    <div className="componentBlock" name="AboutSection">
      <div className="aboutBlocks">
        <div className="aboutBlock">
          <div className="aboutImage">
            <lottie-player
              src={
                "https://assets10.lottiefiles.com/packages/lf20_3pa7zbov.json"
              }
              speed={1}
              loop
              autoplay
            />
          </div>
        </div>
        <div className="aboutBlock">
          <div className="aboutInfo">
            <h3> About Us </h3>
            <p>
              We connect companies and start-ups businesses with seasoned tech
              professionals all over the world. We offer quick access to
              personnel for remote, on-site and hybrid jobs.{" "}
            </p>
            <div className="aboutInfoFlex"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
