import React from "react";
import "./index.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id={"experience"} className={"section__container"}>
      <h5>Quais habilidades eu tenho</h5>
      <h2>Minha experiência</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-End Experience</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className={"experience_details-icon"} />
              <div>
                <h4>HTML</h4>
                <small className={"text-light"}>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className={"experience_details-icon"} />
              <div>
                <h4>CSS</h4>
                <small className={"text-light"}>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className={"experience_details-icon"} />
              <div>
                <h4>React</h4>
                <small className={"text-light"}>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className={"experience_details-icon"} />
              <div>
                <h4>JavaScript</h4>
                <small className={"text-light"}>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className={"experience_details-icon"} />
              <div>
                <h4>TypeScript</h4>
                <small className={"text-light"}>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* ----------------------------------------------------------------*/}

        <div className="experience__frontend">
          <h3>Back-End Experience</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className={"experience_details-icon"} />
              <div>
                <h4>MySQL</h4>
                <small className={"text-light"}>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className={"experience_details-icon"} />
              <div>
                <h4>MongoDB</h4>
                <small className={"text-light"}>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className={"experience_details-icon"} />
              <div>
                <h4>Node.JS</h4>
                <small className={"text-light"}>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className={"experience_details-icon"} />
              <div>
                <h4>Python</h4>
                <small className={"text-light"}>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
