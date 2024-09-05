import Nav from "./nav"
import Hero from "./hero"
import Project from "./project"
import AboutMe from "./aboutMe"
import Contact from "./Contact"
import Footer from "./footer"

const main = () => {
  return (
    <div className="bg-customDarkBlue -400">
    <Nav />
    <section id="hero">
      <Hero />
    </section>
    <section id="project">
      <Project />
    </section>
    <section id="about-me">
      <AboutMe />
    </section>
    <section id="contact">
      <Contact />
    </section>
    <Footer />
  </div>
);
};


export default main
