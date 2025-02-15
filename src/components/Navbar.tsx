import ComponentWhatsApp from "./ComponentWhatsApp"
import { BiLogoInstagramAlt } from "react-icons/bi"

import imagen from "../assets/images/ubicacion.png"



const Navbar = () => {
  return (
    <>
      <div className="bg-sky-900 w-screen flex items-center justify-between p-5 lg:flex-row drop-shadow-xl">
        <div className="flex flex-row items-center justify-between gap-10">
          <div className="rounded-xl">
            <a href="/">
              <img
                src={imagen}
                alt="Estudio Jurídico"
                className="object-contain rounded-full w-[100px] lg:w-[150px]"
              />
            </a>
          </div>
          <a href="/" className="hidden group lg:inline-block relative text-amber-400 text-4xl">
            Estudio Juridíco Luis Peretto y Asoc.
            <span className="absolute left-0 bottom-0 block w-0 h-1 bg-amber-400 rounded transition-all duration-700 group-hover:w-full"></span>
          </a>
        </div>
        <div className="flex flex-row items-center gap-10">
          <div className="flex items-center">
            <span className="lg:block hidden text-2xl  text-slate-200 hover:text-cyan-500 ">Sobre mí</span>
          </div>
          <div>
            <a href="https://www.instagram.com/estudiojuridicoperetto/" target="_blank">
              <BiLogoInstagramAlt size={70} className="lg:block hidden  text-slate-200 hover:text-cyan-500" />
            </a>
          </div>
          <div className="flez items-center block">
            <a>
              <ComponentWhatsApp />
            </a>
          </div>
        </div>
      </div >
    </>
  )
}

export default Navbar