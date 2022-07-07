import axios from "axios";
import React, { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { toast } from "react-toastify";

const Upload = () => {
  const [email, setEmail] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (file) => {
    setFormSubmitted(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("email", email);
    await axios
      .post("https://mailclient.xiotek.biz/resumeUpload.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        res.status === 200 &&
          res.data === "Sent" &&
          toast.success(
            "Resume Sucessfully Uploaded. Expect A Mail From Us Shortly."
          );
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

    document.getElementById("file").disabled = false;
    setFormSubmitted(false);
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
            disabled={formSubmitted}
            onClick={() => {
              email !== ""
                ? document.getElementById("file").click()
                : alert("Please enter your email address");
            }}
          >
            {formSubmitted ? <BiLoaderAlt /> : "Upload Resume"}
          </button>
          <input
            type={"file"}
            id={"file"}
            onChange={(e) => {
              document.getElementById("file").disabled = true;
              handleSubmit(e.target.files[0]);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Upload;
