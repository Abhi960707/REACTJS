import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MultiStepForm from './MultiStepForm'
import Newg from './Newg'
import ButtonAlert from './ButtonAlert'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MultiStepForm />
     
    </>
  )
}

export default App
