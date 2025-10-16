import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountingValue from './components/CountingValue'
import ChangeName from './components/ChangeName'
import Password from './components/Password'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CountingValue />
     <ChangeName />
     <Password />
    </>
  )
}

export default App
