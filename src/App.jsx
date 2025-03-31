import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./index.css"
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import { NavBar } from './components/NavBar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from "./components/sections/Home"
import {About} from "./components/sections/About"
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
function App() {
  // setting state to see if animation loaded
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen , setMenuOpen] = useState(false)

  return (

    // for animated text using state to identify if it is true and when it is it will display
    // onConmplete is a call back func that is used in the loadingsreen variable
    <>
    
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
      <NavBar  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     

      <Home />
       <About />
       <Projects />
       <Contact />
    </div>
    </>
  )
}

export default App
