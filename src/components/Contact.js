import React, { useState } from "react";
import { BiMap } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitContactForm = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://mailclient.xiotek.biz/newContact.php",
        {
          name,
          email,
          subject,
          message,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="componentBlock" name="ContactSection">
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
            <form onSubmit={submitContactForm}>
              <div className="contactFormInputFlex">
                <div>
                  <label> Your Name </label>
                  <input
                    type={"text"}
                    placeholder="Your Name"
                    value={name}
                    onInput={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label> Your Email </label>
                  <input
                    type={"email"}
                    placeholder="Your Email"
                    value={email}
                    onInput={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <label> Subject </label>
              <input
                type={"text"}
                placeholder="Subject"
                value={subject}
                onInput={(e) => setSubject(e.target.value)}
                required
              />
              <label> Message </label>
              <textarea
                type={"text"}
                rows={5}
                placeholder="Message"
                value={message}
                onInput={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type="submit"> Send Message </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
