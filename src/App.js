
import "./App.css"
import style from "./App.module.css"
import Landing from "./components/Landing/Landing"
import About from "./components/About_Us/About"
import Domain1 from "./components/Domain1"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className={`${style.bg} App`}>
      <Landing />
      <About />
      <Domain1 />
      <Footer />
    </div>
  )
}

export default App
