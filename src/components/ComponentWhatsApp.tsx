import { IoLogoWhatsapp } from "react-icons/io"



const ComponentWhatsApp = () => {
  return (
    <div>
      <a href="https://wa.me/5493364339538?text=Hola quiero hacerte una consulta" target="_blank">
        <IoLogoWhatsapp size={70} className=" text-green-500 hover:text-green-700" />
      </a>
    </div>
  )
}

export default ComponentWhatsApp