import {  Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Products from "./pages/Products"

function App(){
  return(
    <div className="">
      
      <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/products' element={<Products />} />
          </Routes>
    </div>
  )
}

export default App