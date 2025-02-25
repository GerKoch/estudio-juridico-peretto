

const Home = () => {

  return (
    <section className="flex justify-center items-center py-28 flex-col lg:flex-row lg:items-end">
      <div className="relative w-screen">

        <div className="absolute inset-0 bg-black opacity-70 h-[300px]" />

        <div className="relative z-10 flex flex-col text-center justify-center gap-4 py-2.5 lg:py-10 ">
          <h1 className="text-center text-white lg:text-5xl text-5xl font-[roboto_slab] uppercase">Peretto & Asociados</h1>
          <h1 className="text-center justify-center text-white lg:text-4xl text-5xl font-[roboto_slab]">Estudio Jurídico</h1>
          <div className="pt-12">
            <button
              onClick={() => window.open("https://wa.me/5493364339538?text=Hola quiero hacerte una consulta")}
              className="text-center text-white font-[roboto_slab] text-xl border-2 border-slate-200 px-10 py-2 rounded-md hover:bg-slate-200 hover:text-slate-900"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Home