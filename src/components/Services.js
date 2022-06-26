import React from "react";

const Services = () => {
  return (
    <div className="componentBlock" name="ServiceSection">
      <h3> Our Awesome Services </h3>
      <div className="servicesBlocks">
        <div className="serviceBlock">
          <lottie-player
            src={"https://assets8.lottiefiles.com/packages/lf20_yjxlc3cg.json"}
            speed={1}
            style={{
              width: "250px",
              height: "250px",
              background: "transparent",
            }}
            loop
            autoplay
          />
          <div className="serviceInfo">
            <h4> Web Development </h4>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </div>
        <div className="serviceBlock">
          <lottie-player
            src={"https://assets8.lottiefiles.com/packages/lf20_dsxct2el.json"}
            speed={1}
            style={{
              width: "250px",
              height: "250px",
              background: "transparent",
            }}
            loop
            autoplay
          />
          <div className="serviceInfo">
            <h4> Web Development </h4>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </div>
        <div className="serviceBlock">
          <lottie-player
            src={"https://assets8.lottiefiles.com/packages/lf20_w51pcehl.json"}
            speed={1}
            style={{
              width: "250px",
              height: "250px",
              background: "transparent",
            }}
            loop
            autoplay
          />
          <div className="serviceInfo">
            <h4> Web Development </h4>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </div>
        <div className="serviceBlock">
          <lottie-player
            src={"https://assets8.lottiefiles.com/packages/lf20_ov9utstn.json"}
            speed={1}
            style={{
              width: "250px",
              height: "250px",
              background: "transparent",
            }}
            loop
            autoplay
          />
          <div className="serviceInfo">
            <h4> Web Development </h4>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
