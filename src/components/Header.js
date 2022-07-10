import React from "react";
import { Link as ScrollLink } from "react-scroll/modules";

const Header = () => {
  return (
    <header name="HomeSection">
      <div className="topHeader">
        <div className="topHeaderLogo">
          <ScrollLink
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
          <h3
            style={{
              color: "blue",
              fontWeight: 700,
              fontSize: "4rem",
              paddingBottom: "2rem",
            }}
          >
            XIOTECH RESOURCES
          </h3>
          <h4> TECH RECRUITMENT, SUPPORT AND CONSULTANCY SERVICES. </h4>
          <p>
            Connecting businesses with the best programmers for the most
            challenging projects.
          </p>

          <ScrollLink
            activeClass="active"
            to="ContactSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button> Let's Talk </button>
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
