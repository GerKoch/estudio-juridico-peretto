import { BiLogoInstagramAlt } from "react-icons/bi"

const Footer = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center text-slate-100 h-28 lg:gap-4 sm:gap-1 px-20 bg-black opacity-70">
        {/* <p>Tel:+54 9 336 443-9538</p> */}
        <p className="text-center">Copyright &copy; 2025 - Estudio Juridídico Luis Peretto y Asoc.</p>
        <div>
          <a href="https://www.instagram.com/estudiojuridicoperetto/" target="_blank">
            <BiLogoInstagramAlt size={70} className="text-white hover:text-slate-200" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer