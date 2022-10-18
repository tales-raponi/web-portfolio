import React from "react";
import "./index.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id={"services"}>
      <h5>What I Offer</h5>
      <h2>Services</h2>

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
              <p>Agile development (Scrum and Kanban methodology).</p>
            </li>
            <li>
              <BiCheck className={"service__list-icon"} />
              <p>Clean Code, Clean Architecture, and Design Patterns.</p>
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
              <p>Full responsive designs for mobile and web.</p>
            </li>
            <li>
              <BiCheck className={"service__list-icon"} />
              <p>Native Base.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
