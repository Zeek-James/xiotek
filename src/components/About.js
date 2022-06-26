import React from "react";
import { FaStickyNote } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit
            </p>
            <div className="aboutInfoFlex">
              <div className="aboutInfoFlexBlock">
                <FaStickyNote />
                <h4> Corporis voluptates sit </h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore, excepturi quaerat quam ipsum laboriosam repellat modi
                  recusandae necessitatibus officiis sit molestiae dolorum quos.
                </p>
              </div>
              <div className="aboutInfoFlexBlock">
                <AiOutlineTeam />
                <h4> Corporis voluptates sit </h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore, excepturi quaerat quam ipsum laboriosam repellat modi
                  recusandae necessitatibus officiis sit molestiae dolorum quos.
                  Velit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
