import React from "react";
import "./index.css";
import Photo from "../../../assets/photo.png";
import { BsAward, BsHeart } from "react-icons/bs";
import { SlGraduation } from "react-icons/sl";

const About = () => {
  return (
    <section id={"about"}>
      <h5>Para conhecer</h5>
      <h2>Sobre mim</h2>

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
              <h5>Experiência</h5>
              <small>3+ Anos</small>
            </article>
            <article className="about__card">
              <BsHeart className="about__icon" />
              <h5>Paixão</h5>
              <small>Programação Criativa</small>
            </article>
            <article className="about__card">
              <SlGraduation className="about__icon" />
              <h5>Estudante Universitário</h5>
              <small>9º Período</small>
            </article>
          </div>
          <p>
            Sou um entusiasta da tecnologia com uma mentalidade positiva e um
            desejo selvagem de aprender coisas novas. Desde o início da minha
            jornada como Desenvolvedor FullStack, tenho trabalhado continuamente
            para aprimorar minhas habilidades e otimizar cada vez mais meus
            projetos.
          </p>
          <a href="#contact" className="btn btn-primary">
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
