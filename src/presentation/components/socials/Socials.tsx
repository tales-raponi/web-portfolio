import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="socials">
      <a
        href="https://www.linkedin.com/in/tales-raponi-361a61143/"
        target={"_blank"}
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/tales-raponi" target={"_blank"}>
        <FaGithub />
      </a>
    </div>
  );
};

export default Socials;
