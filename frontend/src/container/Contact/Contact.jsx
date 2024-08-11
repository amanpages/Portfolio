import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { client } from "../../client";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const { email, message, subject, name } = formData;

  const handleChangeInput = (e) => {
    const { name: fieldName, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [fieldName]: value };
    });
  };

  const handleSubmit = () => {
    setIsLoading(true);
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    client.create(contact).then((data) => {
      setIsLoading(false);
      setIsFormSubmitted(true);
    });
  };

  const handleResumeRedirect = () => {
    window.open("https://drive.google.com/file/d/1qZ9shiQXk6i5gV1oBNvGj1ux7L0Bjx0T/view?usp=sharing", "_blank");
  };

  return (
    <>
      <h2 className="head-text">
        Reach Out & <span>chat</span> with <span>me</span>
      </h2>
      <div className="app__contact-cards">
        <div className="app__contact-card">
          <img src={images.email} alt="email" />
          <a href="mailto:mdamana2@gmail.com" className="p-text">
            mdamana2@gmail.com
          </a>
        </div>
        <div className="app__contact-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +91 7004198165" className="p-text">
            +91 7004198165
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__contact-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
              name="name"
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              value={email}
              onChange={handleChangeInput}
              name="email"
            />
          </div>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Subject"
              value={subject}
              onChange={handleChangeInput}
              name="subject"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <button
            type="button"
            className="portfolio-button"
            onClick={handleSubmit}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
{/*           <button
            type="button"
            className="portfolio-button"
            onClick={handleResumeRedirect}
          >
            View Resume
          </button> */}
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in <span>Touch!</span>
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__contact"),
  "contact",
  "app__whitebg"
);
