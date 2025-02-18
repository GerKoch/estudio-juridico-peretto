

const Home = () => {
  return (
    <section className="flex justify-baseline items-center p-5 py-28 flex-col relative h-sc lg:flex lg:items-end">


      <div className="absolute backdrop-blur-xs top-0 left-0 w-full h-full lg:backdrop-blur-none" />

      <div className="absolute flex flex-col px-4 pt-7 pb-24 gap-4 lg:w-full w-fit lg:flex lg:items-start lg:p-20">
        <h1 className="flex lg:justify-around text-center text-black lg:text-6xl text-5xl">Estudio Jurídico Peretto y Asoc.</h1>
        <p className="flex lg:justify-around text-center text-2xl mt-0 text-slate-900 lg:text-3xl">ART, LABORAL, FAMILIA, SUCESIONES, REAJUSTE DE HABERES</p>
        <p className="flex lg:justify-around text-center text-2xl mt-0 text-slate-900 lg:text-3xl">Atendemos consultas desde cualquier punto del país</p>
        <p className="flex lg:justify-around text-center justify-center text-xl mb-2 text-green-900 font-semibold">Agenda tu consulta por WhatsApp</p>
      </div>
    </section>
  )
}

export default Home