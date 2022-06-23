import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const FAQs = () => {
  const [faqAnswer, setFAQAnswer] = useState(0);

  return (
    <div className="componentBlock" name="ContactSection">
      <h3> Frequently Asked Questions </h3>
      <div className="faqsBlocks">
        <div className={faqAnswer === 1 ? "faqblock active" : "faqblock"}>
          <p
            className="faqQuestion"
            onClick={() => {
              faqAnswer === 1 ? setFAQAnswer(0) : setFAQAnswer(1);
            }}
          >
            <BsChevronDown />
            <span> Non consectetur a erat nam at lectus urna duis? </span>
          </p>
          <div className="faqAnswer">
            <p>
              Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
              volutpat lacus laoreet non curabitur gravida. Venenatis lectus
              magna fringilla urna porttitor rhoncus dolor purus non.
            </p>
          </div>
        </div>
        <div className={faqAnswer === 2 ? "faqblock active" : "faqblock"}>
          <p
            className="faqQuestion"
            onClick={() => {
              faqAnswer === 2 ? setFAQAnswer(0) : setFAQAnswer(2);
            }}
          >
            <BsChevronDown />
            <span> Non consectetur a erat nam at lectus urna duis? </span>
          </p>
          <div className="faqAnswer">
            <p>
              Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
              volutpat lacus laoreet non curabitur gravida. Venenatis lectus
              magna fringilla urna porttitor rhoncus dolor purus non.
            </p>
          </div>
        </div>
        <div className={faqAnswer === 3 ? "faqblock active" : "faqblock"}>
          <p
            className="faqQuestion"
            onClick={() => {
              faqAnswer === 3 ? setFAQAnswer(0) : setFAQAnswer(3);
            }}
          >
            <BsChevronDown />
            <span> Non consectetur a erat nam at lectus urna duis? </span>
          </p>
          <div className="faqAnswer">
            <p>
              Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
              volutpat lacus laoreet non curabitur gravida. Venenatis lectus
              magna fringilla urna porttitor rhoncus dolor purus non.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
