import React from "react";
import { BsInstagram, BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";

const Team = () => {
  return (
    <div className="team componentBlock " name="TeamSection" id="team">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h3>Our team is always here to help</h3>
        </div>

        <div className="member_Container">
          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="member">
              <img
                src="./images/Collins.jpeg"
                style={{
                  width: "400px",
                }}
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Collins Nwudo</h4>
                  <span>Co-Founder/ HR Manager</span>
                </div>
                <div className="social">
                  <a href="https://example.com">
                    <BsTwitter />
                  </a>
                  <a href="https://example.com">
                    <BsFacebook />
                  </a>
                  <a href="https://example.com">
                    <BsInstagram />
                  </a>
                  <a href="https://example.com">
                    <BsLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="member">
              <img
                src="./images/Ebuka.png"
                style={{
                  width: "400px",
                  objectFit: "contain",
                }}
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Ebuka Nwudo</h4>
                  <span>Chief Technical Officer</span>
                </div>
                <div className="social">
                  <a href="https://example.com">
                    <BsTwitter />
                  </a>
                  <a href="https://example.com">
                    <BsFacebook />
                  </a>
                  <a href="https://example.com">
                    <BsInstagram />
                  </a>
                  <a href="https://example.com">
                    <BsLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="member">
              <img
                src="images/Isaac.jpg"
                style={{
                  width: "400px",
                }}
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>James Isaac</h4>
                  <span>Tech Lead</span>
                </div>
                <div className="social">
                  <a href="https://example.com">
                    <BsTwitter />
                  </a>
                  <a href="https://example.com">
                    <BsFacebook />
                  </a>
                  <a href="https://example.com">
                    <BsInstagram />
                  </a>
                  <a href="https://example.com">
                    <BsLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
