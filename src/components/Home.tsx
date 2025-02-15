import service1 from "../assets/images/services/servicio1.png"
import service2 from "../assets/images/services/servicio2.png"
import service3 from "../assets/images/services/servicio3.png"
import service4 from "../assets/images/services/servicio4.png"
import office from "../assets/images/Office3.png"
import whattsapp from "../assets/images/whattsapp2.png"


const Home = () => {
  return (
    <div className="bg-sky-700 flex flex-grow items-center justify-center">
      <div className="">
        <div className="flex flex-row items-center justify-center">
          <div>
            <img
              src={office}
              alt="Estudio"
              className="object-contain lg:w-[720px] rounded-r-full"
            />
          </div>
          <div>
            <img
              src={whattsapp}
              alt="Estudio"
              className="object-contain lg:w-[820px] rounded-l-full"
            />
          </div>
        </div>

        <div className="bg-sky-700 grid w-full h-full place-items-center grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
          <div className="relative rounded-xl">
            <img
              src={service1}
              alt="Estudio Jurídico"
              className="object-contain rounded-4xl w-44 lg:w-96" />
          </div>
          <div className="relative rounded-xl">
            <img
              src={service2}
              alt="Estudio Jurídico"
              className="object-contain rounded-4xl  w-44 lg:w-96" />
          </div>
          <div className="relative rounded-xl">
            <img
              src={service3}
              alt="Estudio Jurídico"
              className="object-contain rounded-4xl  w-44 lg:w-96" />
          </div>
          <div className="relative rounded-xl">
            <img
              src={service4}
              alt="Estudio Jurídico"
              className="object-contain rounded-4xl  w-44 lg:w-96" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home