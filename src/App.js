
import "./App.css"
import style from "./App.module.css"
import Landing from "./components/Landing/Landing"
import About from "./components/About_Us/About"
import Domain1 from "./components/Domain1"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className=" App">
      <div className={`${style.bg1}`}>
        {/* <img src={bg1} alt="" className="absolute   bg-cover" /> */}
        <Landing />
        <About />
      </div>
      <div className={`${style.bg2} -z-1 `}>
        {/* <img src={bg2} alt="" className="absolute " /> */}
        <Domain1 />
      </div>
      <Footer />
    </div>
  )
}

export default App
