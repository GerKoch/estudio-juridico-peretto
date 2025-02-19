// import ComponentWhatsApp from "./ComponentWhatsApp"
import ComponentWhatsApp from "./ComponentWhatsApp"
import Footer from "./footer"
import Home from "./Home"
import Navbar from "./Navbar"


const Main = () => {
  return (
    <div className="overflow-y-auto w-full h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <Home />
      </div>
      <div className="">
        {/* <ComponentWhatsApp /> */}
        <Footer />
      </div>
    </div>
  )
}

export default Main