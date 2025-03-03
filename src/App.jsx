import { useState } from "react"
import LoadingScreen from "./components/LoadingScreen"
import "./index.css"
import { Navbar } from "./components/Navbar"
import { MobileMenu } from "./components/MobileMenu"
import { Home } from "./components/sections/Home"
import { About } from "./components/sections/About"
import { Projects } from "./components/sections/Projects"
import { Contact } from "./components/sections/Contact"

function App() {

  const [isLoading, setLoading] = useState(false)
  const [menuOpen,setMenuOpen] = useState(false) 

  return (
    <>
      {!isLoading && <LoadingScreen onComplete={() => setLoading(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoading ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <Navbar 
        menuOpen = {menuOpen}
        setMenuOpen = {setMenuOpen}
        />
        <MobileMenu
        menuOpen = {menuOpen}
        setMenuOpen = {setMenuOpen}
        />
        <Home />
        <About/>
        <Projects/>
        <Contact/>
      </div>

    </>
  )
}

export default App
