import React from "react";
import "./index.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id={"services"} className={"section__services"}>
      <h5>O que tenho a oferecer</h5>
      <h2>Habilidades Técnicas</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Tests</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className={"service__list-icon"} />
              <p>Unit, Integration.</p>
            </li>
            <li>
              <BiCheck className={"service__list-icon"} />
              <p>Jest.</p>
            </li>
            <li>
              <BiCheck className={"service__list-icon"} />
              <p>React testing library.</p>
            </li>
          </ul>
        </article>

        {/* -------------------------------------------------------------- */}

        <article className="service">
          <div className="service__head">
            <h3>Services, Process, and SoftSkills:</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className={"service__list-icon"} />
              <p>English.</p>
            </li>
            <li>
              <BiCheck className={"service__list-icon"} />
              <p>Git, Gitflow, Conventional Commits, etc.</p>
            </li>
            <li>
              <BiCheck className={"service__list-icon"} />
              <p>Agile development.</p>
            </li>
            <li>
              <BiCheck className={"service__list-icon"} />
              <p>Clean Code.</p>
            </li>
          </ul>
        </article>

        {/* -------------------------------------------------------------- */}

        <article className="service">
          <div className="service__head">
            <h3>Technical Skills:</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className={"service__list-icon"} />
              <p>ReactJS.</p>
            </li>
            <li>
              <BiCheck className={"service__list-icon"} />
              <p>TypeScript.</p>
            </li>
            <li>
              <BiCheck className={"service__list-icon"} />
              <p>React Native.</p>
            </li>
            <li>
              <BiCheck className={"service__list-icon"} />
              <p>Full responsive</p>
            </li>
            <li>
              <BiCheck className={"service__list-icon"} />
              <p>Native Base.</p>
            </li>
            <li>
              <BiCheck className={"service__list-icon"} />
              <p>Clean Architecture.</p>
            </li>
            <li>
              <BiCheck className={"service__list-icon"} />
              <p>Design Patterns.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
