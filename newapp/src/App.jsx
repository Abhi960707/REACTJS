import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import New from './components/New'
import New2 from './components/New2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <New />
      <New2 />
    </>
  )
}

export default App
