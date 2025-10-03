import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Userdata from './components/Userdata'
// import './assets/userimage.jpg'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Userdata /> 
   
    </>
  )
}

export default App
