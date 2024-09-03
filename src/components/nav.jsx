
import { useState } from "react";
import { FaFortAwesome } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const nav = () => {

const [toggle , setToggle] = useState(false);
function openMenu(){
    setToggle(true)
}
function closeMenu (){
    setToggle(false);
}

  return (
    <>
    <div className="flex items-center justify-between p-10 lg:flex-row  ">
    <div>
        <a href="#" className="text-white font-mono text-3xl tracking-wide flex items-center space-x-2">
            <FaFortAwesome />
            <span>KELLY LÓPEZ</span>
        </a>
    </div>
        <div className="space-x-4">
            <div className="ssm:hidden lg:block space-x-2">
            <a href="#" className="text-white hover:bg-pink-600 rounded-full px-5 py-2 text-xl ">Inicio</a>
            <a href="#" className="text-white hover:bg-pink-600 rounded-full px-5 py-2 text-xl ">Sobre mi</a>
            <a href="#" className="text-white hover:bg-pink-600 rounded-full px-5 py-2 text-xl ">Proyectos</a>
            <a href="#" className="text-white hover:bg-pink-600 rounded-full px-5 py-2 text-xl ">Contactame</a>
            </div>
            <div className="ssm:block lg:hidden">
                {toggle ? (
                    <AiOutlineClose onClick={closeMenu} size={30} className="text-white cursor-pointer"/>):( 
                    <IoReorderThree  onClick={openMenu} size={30} className="text-white cursor-pointer"/>
                    )
                }

            </div>
        </div>
    </div>

    <div className="ssm:block lg:hidden" >
        {toggle ? (
            <div className="flex-justify-between ml-10">
            <ul>
                <li className="text-white text-xl mb-2 cursor-pointer">Inicio</li>
                <li className="text-white text-xl mb-2 cursor-pointer">Sobre mi</li>
                <li className="text-white text-xl mb-2 cursor-pointer">Proyectos</li>
                <li className="text-white text-xl mb-2 cursor-pointer">Contactame</li>

            </ul>
        </div>
        ):(
            <div> </div>
        )}
        
    </div>
    </>
  )
}

export default nav
