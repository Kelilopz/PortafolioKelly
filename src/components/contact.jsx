import Juntos from '../assets/juntos.jpg';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail, IoLocationOutline  } from "react-icons/io5";

export default function Contact() {
  return (
    <div className="flex flex-col sm:flex-row bg-black text-white m-5 sm:m-20 max-w-full p-10">
     <div className="flex-1 flex flex-col justify-center items-center">
  <h1 className="text-3xl text-customPink font-bold mb-6">Trabajemos Juntos</h1>
  <img
    src={Juntos}
    alt="Trabajando Juntos"
    className="w-full h-auto max-w-md object-cover"
  />
</div>


      <div className="flex-1 flex flex-col justify-center ml-0 sm:ml-10 mt-10 sm:mt-0">
        
        {/* Información de correo */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <IoMail size={40} className="mr-4" />
            <h3 className="text-xl font-semibold">Correo</h3>
          </div>
          <p className="text-lg text-customBlue">kelilopz2171804@gmail.com</p>
        </div>

        {/* Información de GitHub */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <FaGithub size={40} className="mr-4" />
            <h3 className="text-xl font-semibold">GitHub</h3>
          </div>
          <p className="text-lg">
            <a
              href="https://github.com/Kelilopz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-customBlue hover:underline"
            >
              github.com/Kelilopz
            </a>
          </p>
        </div>

        {/* Información de LinkedIn */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <FaLinkedin size={40} className="mr-4" />
            <h3 className="text-xl font-semibold">LinkedIn</h3>
          </div>
          <p className="text-lg">
            <a
              href="https://www.linkedin.com/in/kelly-lopez-amaya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-customBlue hover:underline"
            >
              kelly-lopez-Amaya
            </a>
          </p>
        </div>

        {/* Información adicional de contacto */}
        <div className="mt-6 flex items-center">
          <IoLocationOutline  className="text-xl mr-2" />
          <p className="text-lg text-customPink">Bucaramanga, Colombia</p>
        </div>

      </div>
    </div>
  );
}
