import { IoLogoWhatsapp } from "react-icons/io"



const ComponentWhatsApp = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-evenly gap-2 pb-5 text-center bottom-[150px] lg:left-[10px] lg:bottom-[200px] lg:w-[700px] lg:h-[100px]">
      <p className=" text-3xl text-green-900 font-semibold">Agenda tu consulta por WhatsApp</p>
      <a href="https://wa.me/5493364339538?text=Hola quiero hacerte una consulta" target="_blank">
        <IoLogoWhatsapp size={70} className="text-green-700 hover:text-green-900" />
      </a>
    </div>
  )
}

export default ComponentWhatsApp