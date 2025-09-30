import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import './assets/Styles/style.css'
import Images from './Images'
import Images2 from './Images2'
import Images3 from './Images3'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar />
<Images />
<Images2 />
<Images3 />
    </>
  )
}

// function App() {

//   const [count, setCount] = useState(0)

//   return (
//     <div className='flex p-3 gap-5 flex-wrap justify-center' >
//       <Student name="Ram" email="ram07@gmail.com" mobile="9895652652" city="Pune" />
//       <Student name="Abhijeet Narsale" email="abhi05@gmail.com" mobile="9959556552" city="Solapur" />
//       <Student name="Om Divse" email="om455@gmail.com" mobile="854548452" city="Mumbai" />
//       <Student name="Shreyash Patil" email="shreyash003@gmail.com" mobile="9826559922" city="Dubai" />
//       <Student />
//       <Student />
//       <Student />
//       {/* <Student />
//       <Student />
//       <Student />
//       <Student />  */}



//     </div>
//   )
// }

export default App
