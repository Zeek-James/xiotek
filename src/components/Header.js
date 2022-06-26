import React from "react";
import { Link as ScrollLink } from "react-scroll/modules";

const Header = () => {
  return (
    <header name="HomeSection">
      <div className="topHeader">
        <div className="topHeaderLogo">
          <ScrollLink
            activeClass=""
            to="HomeSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img src="./images/logo_trans.png" alt="xiotek Logo" />
          </ScrollLink>
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
            About
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="ServiceSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Services
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="PortfolioSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Portfolio
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="TeamSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Team
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="ContactSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
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

          <ScrollLink
            activeClass="active"
            to="AboutSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button> Get Started </button>
          </ScrollLink>
        </div>
        <div className="bodyHeaderImage">
          <lottie-player
            src={"https://assets2.lottiefiles.com/packages/lf20_obkemuop.json"}
            speed={1}
            style={{
              background: "transparent",
            }}
            loop
            autoplay
          />
        </div>
      </div>
    </header>
  );
};

export default Header;