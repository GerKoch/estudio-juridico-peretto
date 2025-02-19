import { BiLogoInstagramAlt } from "react-icons/bi"
import { GoLaw } from "react-icons/go";



const Navbar = () => {
  return (
    <>
      <div className="fixed z-10 flex items-center justify-end py-10 px-15 drop-shadow-xl w-screen">
        {/* <div className="flex items-center gap-20">
          <a href="/" className="text-slate-950">
            <GoLaw size={70} />
          </a>
        </div> */}
        {/* <div>
          <a href="https://www.instagram.com/estudiojuridicoperetto/" target="_blank">
            <BiLogoInstagramAlt size={70} className="text-white hover:text-slate-200" />
          </a>
        </div> */}

      </div>
    </>

  )
}

export default Navbar