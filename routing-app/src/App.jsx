import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import { BrowserRouter, Route, Routes } from "react-router-dom"       


const App = () => {                             //Install the package react-router using this command
                                                //Command:- pnpm i react-router-dom enter


  return (
    <>
      <BrowserRouter >

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />  
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>



      </BrowserRouter >


    </>
  )
}

export default App
