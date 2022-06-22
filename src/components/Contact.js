import React from "react";
import { BiMap } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="componentBlock">
      <h3> Need To Talk With Us ? </h3>
      <div className="contactFlex">
        <div className="contactFlexInfo">
          <div className="contactInfoFlex">
            <div className="contactInfoFlexIcon">
              <BiMap />
            </div>
            <div className="contactInfoFlexText">
              <h4> Location </h4>
              <p> A108 Adam Street, New York, NY 535022 </p>
            </div>
          </div>
          <div className="contactInfoFlex">
            <div className="contactInfoFlexIcon">
              <FaRegEnvelope />
            </div>
            <div className="contactInfoFlexText">
              <h4> Email </h4>
              <p> info@xiobiz.tech </p>
            </div>
          </div>
          <div className="contactInfoFlex">
            <div className="contactInfoFlexIcon">
              <BsPhone />
            </div>
            <div className="contactInfoFlexText">
              <h4> Call </h4>
              <p> +1 (558) 19 5488 </p>
            </div>
          </div>
        </div>
        <div className="contactFlexForm">
          <div className="contactForm">
            <form>
              <div className="contactFormInputFlex">
                <div>
                  <label> Your Name </label>
                  <input type={"text"} placeholder="Your Name" />
                </div>
                <div>
                  <label> Your Email </label>
                  <input type={"email"} placeholder="Your Email" />
                </div>
              </div>
              <label> Subject </label>
              <input type={"text"} placeholder="Subject" />
              <label> Message </label>
              <textarea type={"text"} rows={5} placeholder="Message"></textarea>
              <button> Send Message </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
