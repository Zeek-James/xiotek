import axios from "axios";
import React, { useState } from "react";

const Upload = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("email", email);
    axios
      .post("https://mailclient.xiotek.biz/resumeUpload.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="componentBlock" name="ContactSection">
      <h3> Request A Review </h3>
      <p> Upload your resume and let's take a look </p>
      <div className="uploadForm">
        <div className="uploadFormInputFlex">
          <input
            type={"email"}
            placeholder="Your Email Address"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
          <button
            id="buttonFile"
            onClick={() => {
              email !== ""
                ? document.getElementById("file").click()
                : alert("Please enter your email address");
            }}
          >
            Upload Resume
          </button>
          <input
            type={"file"}
            id={"file"}
            onChange={(e) => {
              // document.getElementById("file").disabled = true;
              // document.getElementById("buttonFile").disabled = true;
              handleSubmit(e.target.files[0]);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Upload;
