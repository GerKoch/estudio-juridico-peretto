import Footer from "./footer"
import Home from "./Home"


const Main = () => {
  return (
    <div className="overflow-y-auto w-full h-screen flex flex-col justify-between">
      <Home />
      <Footer />
    </div>
  )
}

export default Main