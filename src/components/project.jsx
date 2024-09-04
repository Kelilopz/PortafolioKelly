import Project1Img from '../assets/proyecto1.png'
import Project2Img from '../assets/proyecto2.png'
import Project3Img from '../assets/proyecto3.png'
import Project4Img from '../assets/proyecto4.png'
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";
import { TbBrandVite } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress, SiLit } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Project() {
  return (
    <>
      <div className='bg-customTeal m-5 sm:m-20 max-w-full'>
        <div className='grid justify-items-center m-5 sm:m-10'>
          <h1 className='text-2xl sm:text-4xl text-white mt-5 sm:mt-10 font-bold'>Proyectos</h1>
        </div>

        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-5'>
            <div className='max-w-full bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse'>
              <div className='flex flex-col sm:flex-row'>
                <div className='p-8'>
                  <div className='uppercase tracking-wide text-sm to-customNavy font-semibold'>
                    Ecommerce
                  </div>
                  <a href="#"> CampusShop</a>
                  <p className='mt-2 text-slate-500'>
                    Una tienda en línea que permite a los usuarios comprar productos de manera eficiente y segura. Incluye funciones de carrito de compras y administración de inventario.
                  </p>
                  <div className='flex justify-center pt-2 gap-x-1 flex-wrap'>
                    <IoLogoHtml5 size={30} />
                    <IoLogoCss3 size={30} />
                    <IoLogoJavascript size={30} />
                    <FaNode size={30} />
                    <TbBrandVite size={30} />
                    <SiLit size={30} />
                  </div>
                </div>
                <div className='shrink-0  lg:p-5 lg:pt-20 ssm:px-20 ssm:pb-5'>
                  <img src={Project1Img} alt="Project1" className="w-full max-w-xs" />
                </div>
              </div>
            </div>

            <div className='max-w-full bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse'>
              <div className='flex flex-col sm:flex-row'>
                <div className='shrink-0 lg:p-5 lg:pt-20 ssm:px-20 ssm:pt-5'>
                  <img src={Project2Img} alt="Project2" className="w-full max-w-xs" />
                </div>
                <div className='p-8'>
                  <div className='uppercase tracking-wide text-sm to-customNavy font-semibold'>
                    Garden Sistema de Gestión
                  </div>
                  <a href="#"> Peticiones</a>
                  <p className='mt-2 text-slate-500'>
                    Un sistema de gestión para jardines que permite la administración eficiente de tareas y recursos. Incluye seguimiento de mantenimiento, programación de tareas y gestión de proveedores.
                  </p>
                  <div className='flex justify-center pt-2 gap-x-2 flex-wrap'>
                    <IoLogoHtml5 size={30} />
                    <IoLogoCss3 size={30} />
                    <IoLogoJavascript size={30} />
                    <FaNode size={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-5'>
            <div className='max-w-full bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse'>
              <div className='flex flex-col sm:flex-row'>
                <div className='p-8'>
                  <div className='uppercase tracking-wide text-sm to-customNavy font-semibold'>
                    Encriptador y Desencriptador
                  </div>
                  <a href="#"> Encuentra el código</a>
                  <p className='mt-2 text-slate-500'>
                    Una aplicación que permite encriptar y desencriptar mensajes para proteger la información sensible.
                  </p>
                  <div className='flex justify-center pt-2 gap-x-1 flex-wrap'>
                    <IoLogoHtml5 size={30} />
                    <IoLogoCss3 size={30} />
                    <IoLogoJavascript size={30} />
                    <FaNode size={30} />
                    <TbBrandVite size={30} />
                    <FaReact size={30} />
                  </div>
                </div>
                <div className='shrink-0 lg:pt-20 lg:p-5 ssm:px-20 ssm:pb-5'>
                  <img src={Project3Img} alt="Project3" className="w-full max-w-xs" />
                </div>
              </div>
            </div>

            <div className='max-w-full bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse'>
              <div className='flex flex-col sm:flex-row'>
                <div className='shrink-0 lg:pt-20 lg:p-5 ssm:px-10 ssm:pt-5'>
                  <img src={Project4Img} alt="Project4" className="w-full max-w-xs" />
                </div>
                <div className='p-8'>
                  <div className='uppercase tracking-wide text-sm to-customNavy font-semibold'>
                    CineCampus
                  </div>
                  <a href="#">Bienvenido al Cine</a>
                  <p className='mt-2 text-slate-500'>
                    Plataforma web para la gestión de un cine, incluyendo la reserva de boletos y selección de asientos . Integrado con una base de datos MongoDB para un manejo eficiente de la información.
                  </p>
                  <div className='flex flex-wrap justify-center pt-2 gap-x-1 gap-y-2'>
                    <IoLogoJavascript size={30} />
                    <FaNode size={30} />
                    <TbBrandVite size={30} />
                    <IoLogoHtml5 size={30} />
                    <SiExpress size={30} />
                    <FaReact size={30} />
                    <RiTailwindCssFill size={30} />
                    <BiLogoMongodb size={30} />
                    <IoLogoCss3 size={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
