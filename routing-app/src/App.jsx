import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import { BrowserRouter, Route, Routes } from "react-router-dom"       
import TechStack from './components/TechStack'
import Html from './components/Html'
import Javascripts from './components/Javascripts'
import Css from './components/Css'
import PagenotFound from './components/PagenotFound'
import Friend from './components/Friend'


const App = () => {                             //Install the package react-router using this command
                                                //Command:- pnpm i react-router-dom enter


  return (
    <>
      <BrowserRouter >

        <Navbar />
        {/* <Routes>
          <Route path='/' element={<Home />} />  
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />     
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter >                                                        This is used 1.simmple Route */}
{/* ===============================================All 3 Routing Type 1.Static(Simple) 2.Nested 3.Dynamic   ================================================================================= */}

  <Routes>
          <Route path='/' element={<Home />} />                                   {/* This is used 1.simmple Route */}
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
           <Route path='/tech-stack' element={<TechStack />} >

            <Route index element={<Html />} />                    {/* This is a Default Router means atomatically show hoil */}        
                                                            
            <Route path="html" element={<Html />} />
             <Route path='css' element={<Css />} />                           {/*This are used a 2.Nested routing 
                                                                                 Means Example:- http://localhost:5174/tech-stack/html*/}
              <Route path='javascripts' element={<Javascripts />} />
           </Route>

          <Route path='/contact' element={<Contact />}>                            {/* Contact & Friend Component used the 3.Dynamic Routing*/}
          <Route path=":id" element={<Friend />} />
          </Route>

          
          

          <Route path='*' element={<PagenotFound />} />                    {/* Using * Path, Any text entered in output path All components la apply hoil 
                                                                                             Means Example:- http://localhost:5174/tech-stack/html */}
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
