import React, { useState } from "react";
import { BiMap } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";
// import { BsPhone } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";
import { BiLoaderAlt } from "react-icons/bi";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const submitContactForm = async (e) => {
    e.preventDefault();

    setFormSubmitted(true);

    await axios
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
        res.status === 200 &&
          res.data === "Sent" &&
          toast.success("Contact Mail Sent. Expect A Reply From us Soon");
      })
      .catch((err) => {
        console.log(err);
        err.status === "400" && toast.error("Please Enter A Valid Email");
        err.status === "500" &&
          toast.error("Something Went Wrong. Please Try Again Later.");
        err.status === "404" && toast.error("Please Upload A Resume");
        err.status === "403" && toast.error("Please Upload A Resume");
        err.code === "ERR_NETWORK" &&
          toast.error("Please Check Your Internet Connection");
      });

    setFormSubmitted(false);
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
              <p> 2 Anipupo Street Ogba, Lagos</p>
            </div>
          </div>
          <div className="contactInfoFlex">
            <div className="contactInfoFlexIcon">
              <FaRegEnvelope />
            </div>
            <div className="contactInfoFlexText">
              <h4> Email </h4>
              <p> info@xiotek.biz </p>
            </div>
          </div>
          {/* <div className="contactInfoFlex">
            <div className="contactInfoFlexIcon">
              <BsPhone />
            </div>
            <div className="contactInfoFlexText">
              <h4> Call </h4>
              <p> +1 (558) 19 5488 </p>
            </div>
          </div> */}
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
              <button type="submit" disabled={formSubmitted}>
                {formSubmitted ? <BiLoaderAlt /> : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
