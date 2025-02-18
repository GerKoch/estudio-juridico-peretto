import Modal from "./Modal"

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { BiLogoInstagramAlt } from "react-icons/bi"
import { GoLaw } from "react-icons/go";



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
      <div className="fixed z-10 flex items-center justify-between py-10 px-15 drop-shadow-xl w-screen">
        <div className="flex items-center gap-20">
          <div>
            <a href="/" className="text-slate-950">
              <GoLaw size={70} />
            </a>
          </div>
          <div>
            <span className="lg:block hidden text-2xl  text-slate-950 hover:text-cyan-700 ">Sobre nosotros</span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-10">

          <div>
            <a href="https://www.instagram.com/estudiojuridicoperetto/" target="_blank">
              <BiLogoInstagramAlt size={70} className="lg:block hidden  text-slate-950 hover:text-cyan-700" />
            </a>
          </div>

          <div className="block lg:hidden">
            {
              isOpenMenu ? (
                <AiOutlineClose onClick={closeMenu} size={30} className="text-slate-900" />
              ) : (
                <HiMenuAlt1 onClick={openMenu} size={30} className="text-slate-900" />
              )
            }
          </div>
        </div>
      </div >

      <div className="flex justify-end absolute z-10 lh:hidden">
        {
          isOpenMenu ? (
            <div className="bg-sky-800 flex flex-col items-end w-full py-5 px-10 z-10">
              <ul>
                <li className="text-slate-900 text-2xl mb-2 cursor-pointer">
                  <Modal />
                </li>
                <li className="text-slate-900 text-2xl mb-2 cursor-pointer">
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