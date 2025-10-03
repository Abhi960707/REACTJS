
// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';  //this comment delete in output create link | Not good Interface
import { BrowserRouter, Route, Routes } from "react-router-dom" 
import Navbar from './components/Navbar';
import Csk from './components/Csk'
import Rcb from './components/Rcb';
import Dc from './components/Dc';
import Rr from "./components/Rr";
import Srh from "./components/Srh";
import Pbks from "./components/Pbks";
import Lsg from "./components/Lsg";
import Gt from "./components/Gt";
import Kkr from "./components/Kkr";
import Mi from "./components/Mi";
function App() {         //Install the package react-router using this command
                                                //Command:- pnpm i react-router-dom enter



  return (
    <>
    
   
      <BrowserRouter>
        <Navbar />
         <Routes>
          <Route path='/' element={<Csk />} />  
          <Route path='/rcb' element={<Rcb />} />
          <Route path='/dc' element={<Dc />} />
          <Route path='/rr' element={<Rr /> } />
          <Route path='/srh' element={<Srh />} />
          <Route path='/pbks' element={<Pbks />} />
          <Route path='/lsg' element={<Lsg />} />
          <Route path='/gt' element={<Gt />} />
          <Route path='/kkr' element={<Kkr />} />
          <Route path='/mi' element={<Mi />} />

        
             

        </Routes>

       
     
      </BrowserRouter>




    </>
  )
}

export default App
