import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import RegisterForm from "./components/RegisterForm";
import NewRegisterForm from "./components/NewRegisterForm";
import BestRegisterForm from "./components/BestRegisterForm";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/registerForm" element={<RegisterForm />}/>          {/** All Manually validation this form */}
                <Route path="/newregisterForm" element={<NewRegisterForm />}/>  {/** Using 1.react-hook-form library package installation in console
                                                                                     All Automatically validation this form using this library*/}
                <Route path="/bestRegisterForm" element={<BestRegisterForm />}/>
            </Routes>
        </BrowserRouter>
       
    )
}

export default App