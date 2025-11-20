import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TicTacToe from './components/TicTacToe'
import TicTac2 from './components/TicTac2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <TicTacToe /> */}
    <TicTac2 />
    </>
  )
}

export default App
