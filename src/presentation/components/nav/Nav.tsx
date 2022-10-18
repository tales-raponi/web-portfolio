import React, { useState } from "react";
import "./index.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [active, setIsActive] = useState("#");

  return (
    <nav>
      <a
        href="#"
        className={active === "#" ? "active" : ""}
        onClick={() => setIsActive("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={active === "#about" ? "active" : ""}
        onClick={() => setIsActive("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={active === "#experience" ? "active" : ""}
        onClick={() => setIsActive("#experience")}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={active === "#services" ? "active" : ""}
        onClick={() => setIsActive("#services")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={active === "#contact" ? "active" : ""}
        onClick={() => setIsActive("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
