import React from "react";
import About from "./presentation/components/about/About";
import Contact from "./presentation/components/contact/Contact";
import Experience from "./presentation/components/experience/Experience";
import Footer from "./presentation/components/footer/Footer";
import Header from "./presentation/components/header/Header";
import Nav from "./presentation/components/nav/Nav";
import Portfolio from "./presentation/components/portfolio/Portfolio";
import Services from "./presentation/components/services/Services";
import Testimonials from "./presentation/components/testimonials/Testimonials";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
