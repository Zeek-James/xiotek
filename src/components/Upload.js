import React from "react";

const Upload = () => {
  return (
    <div className="componentBlock" name="ContactSection">
      <h3> Request A Review </h3>
      <p> Upload your resume and let's take a look </p>
      <div className="uploadForm">
        <div className="uploadFormInputFlex">
          <input type={"email"} placeholder="Your Email Address" />
          <button> Upload Resume </button>
          <input type={"file"} id={"file"} />
        </div>
      </div>
    </div>
  );
};

export default Upload;
