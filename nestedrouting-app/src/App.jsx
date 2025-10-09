import History from './components/History'
import './App.css'
import Hooks from './components/Hooks'
import Props from './components/Props'
import { BrowserRouter, Route, Routes } from "react-router-dom" 
import State from './components/State'
import Components from './components/Components'
import Data from './components/Data'
import Navbar from './components/Navbar'
import React from './components/React'
import PagenotFound from './components/PagenotFound'

function App() {


  return (
    <>
  <BrowserRouter >
 {/* <Navbar /> */}

 <Routes>
    <Route path="/" element={<React />} > 

     <Route index element={<Data />} />                                     {/* This is a Default Router means atomatically show hoil */}        
             <Route path="history" element={<History />} />           
             <Route path="components" element={<Components />} />                                               
             <Route path='props' element={<Props />} />                           {/*This are used a nested routing -  Means Example:- http://localhost:5174/react/history*/}
             <Route path='State' element={<State />} />                         
             <Route path="hooks" element={<Hooks />} />
             <Route path='*' element={<PagenotFound />} />                    {/* Using * Path, Any text entered in output path All components la apply hoil 
                                                                                             Means Example:- http://localhost:5174/tech-stack/html */}
         </Route>
      
  </Routes>
  </BrowserRouter >
 
   
    
    </>
  )
}

export default App
