import { useState } from "react";
import { FaFortAwesome } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import AboutMe from "./aboutMe"; // Asegúrate de usar este componente si es necesario

const NavLinks = ({ onClick }) => (
  <div className="flex flex-col lg:flex-row lg:space-x-4">
    <a href="#hero" className="text-white hover:bg-pink-600 rounded-full px-5 py-2 text-xl" onClick={onClick}>Inicio</a>
    <a href="#project" className="text-white hover:bg-pink-600 rounded-full px-5 py-2 text-xl" onClick={onClick}>Proyectos</a>
    <a href="#services" className="text-white hover:bg-pink-600 rounded-full px-5 py-2 text-xl" onClick={onClick}>Servicios</a>
    <a href="#contact" className="text-white hover:bg-pink-600 rounded-full px-5 py-2 text-xl" onClick={onClick}>Contáctame</a>
  </div>
);

const MobileMenu = ({ isOpen, onClose }) => (
  <div className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
    <div className="bg-customDarkBlue p-6 rounded-lg">
      <button onClick={onClose} className="absolute top-2 right-2 text-xl">
        <AiOutlineClose />
      </button>
      <NavLinks onClick={onClose} />
    </div>
  </div>
);

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between p-10 lg:flex-row">
        <div>
          <a href="#" className="text-white font-mono text-3xl tracking-wide flex items-center space-x-2">
            <FaFortAwesome />
            <span>KELLY LÓPEZ</span>
          </a>
        </div>
        <div className="space-x-4">
          <div className="hidden lg:flex space-x-2">
            <NavLinks />
          </div>
          <div className="lg:hidden">
            {toggle ? (
              <AiOutlineClose onClick={() => setToggle(false)} size={30} className="text-white cursor-pointer" />
            ) : (
              <IoReorderThree onClick={() => setToggle(true)} size={30} className="text-white cursor-pointer" />
            )}
          </div>
        </div>
      </div>
      <MobileMenu isOpen={toggle} onClose={() => setToggle(false)} />
    </>
  );
};

export default Nav;
