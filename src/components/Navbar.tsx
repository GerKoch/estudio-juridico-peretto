import ComponentWhatsApp from "./ComponentWhatsApp"
import Modal from "./Modal"

import imagen from "../assets/images/ubicacion.png"
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { BiLogoInstagramAlt } from "react-icons/bi"



const Navbar = () => {

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openMenu = () => {
    setIsOpenMenu(true)
  }

  const closeMenu = () => {
    setIsOpenMenu(false)
  }

  return (
    <>
      <div className="bg-sky-900 flex items-center justify-between p-5 lg:flex-row drop-shadow-xl">
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

          <div className="block lg:hidden">
            {
              isOpenMenu ? (
                <AiOutlineClose onClick={closeMenu} size={30} className="text-slate-300" />
              ) : (
                <HiMenuAlt1 onClick={openMenu} size={30} className="text-slate-300" />
              )
            }
          </div>
        </div>
      </div >

      <div className="flex justify-end lh:hidden">
        {
          isOpenMenu ? (
            <div className="bg-sky-800 flex flex-col items-end w-full py-5 px-10 z-10">
              <ul>
                <li className="text-slate-300 text-2xl mb-2 cursor-pointer">
                  <Modal />
                </li>
                <li className="text-slate-300 text-2xl mb-2 cursor-pointer">
                  <a href="https://www.instagram.com/estudiojuridicoperetto/" target="_blank">
                    <BiLogoInstagramAlt size={70} className="text-slate-300 flex" />
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div></div>
          )
        }
      </div>


    </>

  )
}

export default Navbar