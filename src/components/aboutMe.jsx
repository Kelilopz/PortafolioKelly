import T1 from "../assets/T1.jpg"
import T2 from "../assets/T2.png"
import T3 from "../assets/T3.jpg"
import T4 from "../assets/T4.jpg"

export default function aboutMe() {
  return (

      <div className="flex flex-col bg-customNavy m-5 sm:m-20 max-w-full">
      <h1 className='text-center pb-10 text-4xl sm:text-5xl text-white mt-5 sm:mt-10 font-bold'>Sobre mí</h1>
  
      <div className="flex gap-8 p-5 ssm:flex-col lg:flex-row">
        <div className="relative flex-1 h-full bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5 p-6">
          <img src={T2} className="w-28 h-28 rounded-full shadow-lg absolute top-[-40px] left-4" />
          <div className="min-w-0 pl-28">
            <h1 className='text-2xl sm:text-2xl text-white font-bold pb-3'>Misión</h1>
            <p className="text-slate-500 text-sm sm:text-base leading-tight dark:text-slate-400">
            Impulsar el éxito empresarial mediante soluciones tecnológicas que optimicen procesos y aumenten la eficiencia. Especializada en desarrollar software que ayuda a las organizaciones a mejorar sus operaciones y alcanzar sus metas, utilizando mi habilidad para liderar, inspirar creatividad y promover el aprendizaje continuo. Comprometida a entregar resultados precisos y a generar un ambiente de trabajo colaborativo y eficiente.                </p>
          </div>
        </div>
  
        <div className="relative flex-1 h-full bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5 p-6">
          <img src={T1} className="w-28 h-28 rounded-full shadow-lg absolute top-[-40px] left-4" />
          <div className="min-w-0 pl-28">
            <h1 className='text-2xl sm:text-2xl text-white font-bold pb-3'>Visión</h1>
            <p className="text-slate-500 text-sm sm:text-base leading-tight dark:text-slate-400">
            Crear una empresa de desarrollo de software enfocada en optimizar procesos, reduciendo tiempos y facilitando tareas. En 6 años, quiero que sea reconocida a nivel nacional por ofrecer soluciones innovadoras que lleven al éxito a organizaciones en sectores como el gobierno, educación, fundaciones y restaurantes. Además, busco explorar nuevas oportunidades para ampliar nuestro impacto y contribuir al avance tecnológico en más áreas.               </p>
          </div>
        </div>
        <div className="relative flex-1 h-full bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5 p-6">
        <img src={T3} className="w-28 h-28 rounded-full shadow-lg absolute top-[-40px] left-4" />
        <div className="min-w-0 pl-28">
          <h1 className='text-2xl sm:text-2xl text-white font-bold pb-3'>Valores</h1>
          <ul className="text-slate-500 text-sm sm:text-base leading-tight dark:text-slate-400 list-disc pl-5">
            <li>Compromiso con la calidad.</li>
            <li>Colaboración efectiva.</li>
            <li>Innovación constante.</li>
            <li>Aprendizaje continuo.</li>
            <li>Integridad en el trabajo.</li>
            <li>Responsabilidad en los resultados.</li>
            <li>Orientación a resultados.</li>
            <li>Adaptabilidad al cambio.</li>
            <li>Trabajo en equipo.</li>
          </ul>
        </div>
      </div>

      <div className="relative flex-1 h-full bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5 p-6">
      <img src={T4} className="w-28 h-28 rounded-full shadow-lg absolute top-[-40px] left-4" />
      <div className="min-w-0 pl-28">
          <h1 className='text-2xl sm:text-2xl text-white font-bold pb-3'>Objetivos profesionales</h1>
          <ul className="text-slate-500 text-sm sm:text-base leading-tight dark:text-slate-400 list-disc pl-5">
            <li>Dirigir proyectos de software en los próximos 5 años.</li>
            <li>Fundar una empresa de desarrollo tecnológico.</li>
            <li>Dominar tecnologías emergentes como IA y automatización.</li>
            <li>Ampliar mis habilidades en gestión de equipos ágiles.</li>
            <li>Fomentar un ambiente inclusivo y colaborativo.</li>
          </ul>
        </div>
      </div>
      
      </div>
    </div>
    
  
  )
  
  
}
