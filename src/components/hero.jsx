import { FaGithub,FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import HeroPic from '../assets/girl.jpg';

const hero = () => {
  return (
   <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
    <div className="lg:w-1/3 ssm:w-fit">
        <p className="text-4xl mb-5 text-slate-300">Hola, soy </p>
        <h1 className="text-6xl">Kelly López</h1>
        <hr />
        <p className="mt-10 text-slate-300 font-sans">
        Soy una desarrolladora de software especializada en backend con sólidos conocimientos en frontend. Con experiencia en diversas tecnologías, me dedico a diseñar y construir aplicaciones web que no solo cumplen con los requisitos técnicos, sino que también ofrecen una experiencia de usuario excepcional. Mi enfoque es combinar creatividad con lógica para resolver problemas y ayudar a las empresas a alcanzar sus objetivos.
</p>
    </div>
    <div className="w-1/3 items-center ssm:w-fit">
        <img src={HeroPic} alt="" width={350} height={350}
        className="rounded-full  border-8 border-white"/>

    </div>
    <div className="w-1/3 ssm:w-fit">
        <p className="text-4xl mb-4">Sobre mi</p>
        <p className="text-slate-300 ">Construyamos con la programación los servicios que tu necesites</p>
        <a href="#about-me"><button className="bg-white text-customDarkBlue px-10 py-2 my-3 rounded-full hover:bg-pink-600 hover:text-white">Ver más...</button></a>
        <div className="flex mt-5 space-x-4 cursor-pointer">
    <a href="https://github.com/Kelilopz" target="_blank" rel="noopener noreferrer">
        <FaGithub size={40} className="border-4 hover:border-pink-600 rounded-full"/>
    </a>
    <a href="https://www.linkedin.com/in/kelly-lopez-amaya" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={40} className="border-4 hover:border-pink-600 rounded-full"/>
    </a>
    <a href="mailto: kelilopz2171804@gmail.com">
        <IoMail size={40} className="border-4 hover:border-pink-600 rounded-full"/>
    </a>
</div>
    </div>
   </section>
  )
}

export default hero
