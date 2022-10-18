import React from "react";
import "./index.css";
import Photo from "../../../assets/photo.png";
import { BsAward, BsHeart } from "react-icons/bs";
import { SlGraduation } from "react-icons/sl";

const About = () => {
  return (
    <section id={"about"}>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Photo} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Studying</small>
            </article>
            <article className="about__card">
              <BsHeart className="about__icon" />
              <h5>Passion</h5>
              <small>Creativity Programming</small>
            </article>
            <article className="about__card">
              <SlGraduation className="about__icon" />
              <h5>University Student</h5>
              <small>8º Period</small>
            </article>
          </div>
          <p>
            I'm a technology enthusiast with a positive mindset and a wild
            desire to learn new things. Since beginning my journey as a
            Front-End Student, I have continuously worked to improve my skills
            and optimize my projects more and more.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
