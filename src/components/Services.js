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
            <h4> STAFFING AND RECRUITMENT </h4>
            <p>
              Hire top software developers and other tech professionals from
              Nigeria, the UK, India and South Africa.{" "}
            </p>
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
            <h4> PROJECT MANAGEMENT </h4>
            <p>
              {" "}
              Have your tech project completed and delivered with impeccable
              speed.{" "}
            </p>
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
            <h4>CONSULTANCY AND SUPPORT</h4>
            <p>Get expert solutions and tech support whenever you need it. </p>
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
            <h4> WORKSHOPS </h4>
            <p>
              {" "}
              Workshops that will help bring your team up to speed with
              innovations, making them more efficient in their individual roles.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
