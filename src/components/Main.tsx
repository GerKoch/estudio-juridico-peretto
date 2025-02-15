import Footer from "./footer"
import Home from "./Home"
import Navbar from "./Navbar"


const Main = () => {
  return (
    <div className="flex flex-col w-full h-full justify-between">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default Main