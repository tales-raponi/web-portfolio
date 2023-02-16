import React, { useRef } from "react";
import "./index.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ijhpqm",
        "template_gfdd3er",
        e.currentTarget,
        "50RKN7f53XFhleeg5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
  }

  return (
    <section id={"contact"} className={"section__container__contact"}>
      <h5>Entre em contato!</h5>
      <h2>Contate-me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>raponi13@gmail.com</h5>
            <a href="mailto:raponi13@gmail.com" target={"_blank"}>
              Enviar Mensagem
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+5535988941009</h5>
            <a
              href="https://api.whatsapp.com/send?phone=5535988941009"
              target={"_blank"}
            >
              Enviar Mensagem
            </a>
          </article>
        </div>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Seu nome completo"
            required
          />
          <input type="email" name="email" placeholder="Seu Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Sua Mensagem"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
