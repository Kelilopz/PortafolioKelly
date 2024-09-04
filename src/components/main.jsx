import Nav from "./nav"
import Hero from "./hero"
import Project from "./project"
import AboutMe from "./aboutMe"
import Contact from "./Contact"
import Footer from "./footer"

const main = () => {
  return (
    <div className="bg-customDarkBlue -400" >
      <Nav/>
      <Hero/>
      <Project/>
      <AboutMe/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default main
