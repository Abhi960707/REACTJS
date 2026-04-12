import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Todolist from './components/Todolist'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Signup />} />
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/todolist" element={<Todolist />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
