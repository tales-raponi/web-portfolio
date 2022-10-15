import React from "react";
import "./index.css";
import Buttons from "../buttons/Buttons";
import Photo from "../../../assets/photo.png";
import Socials from "../socials/Socials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi! I'm</h5>
        <h1>Tales Raponi</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <Buttons />
        <Socials />

        <div className="me">
          <img src={Photo} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
