import { BiLogoInstagramAlt } from "react-icons/bi"

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center text-slate-100 h-28 lg:gap-40 gap-2 sm:gap-2 px-4 lg:px-20 bg-black opacity-80">
      <p className="text-center text-sm lg:text-base">
        Copyright &copy; 2025 - Estudio Jurídico Luis Peretto y Asoc.
      </p>
      <div className="flex items-center justify-center space-x-4">
        <a
          href="https://www.instagram.com/estudiojuridicoperetto/"
          target="_blank"
          className="hover:text-slate-200 transition-all duration-300"
        >
          <BiLogoInstagramAlt
            size={70}
            className="text-white hover:scale-110 transition-transform duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer
