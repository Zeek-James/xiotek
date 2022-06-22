import React from "react";
import { Link as ScrollLink } from "react-scroll/modules";

const Header = () => {
  return (
    <header>
      <div className="topHeader">
        <div className="topHeaderLogo">
          <img src="./images/logo_trans.png" alt="xiotek Logo" />
        </div>

        <div className="topHeaderLinks">
          <ScrollLink
            activeClass="active"
            to="AboutSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About Us
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="AboutSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Services
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="AboutSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Portfolio
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="AboutSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Team
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="AboutSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact Us
          </ScrollLink>
        </div>
      </div>
      <div className="topHeaderCoverUp"></div>
      <div className="bodyHeader">
        <div className="bodyHeaderText">
          <h4> Bettter digital experience with Ninestars </h4>
          <p>
            We are team of talented designers making websites with Bootstrap
          </p>
          <button> Get Started </button>
        </div>
        <div className="bodyHeaderImage">
          <lottie-player
            src={"https://assets2.lottiefiles.com/packages/lf20_obkemuop.json"}
            speed={1}
            style={{
              //   width: "300px",
              //   height: "300px",
              background: "transparent",
            }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </header>
  );
};

export default Header;
