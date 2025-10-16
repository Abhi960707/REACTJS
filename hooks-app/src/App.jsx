
import './App.css'
import Addition from './components/Addition'
import ButtonAlert from './components/ButtonAlert'
import CarouselWalpaper from './components/CarouselWalpaper'
import MyComp1 from './components/MyComp1'
// import Notepad from './components/Notepad'
import Register from './components/Register'
import Toggle from './components/Toggle'
import UseRef from './components/UseRef'
import UseState from './components/UseState'
import UseStateAddition from './components/UseStateAddition'

function App() {


  return (
    <>
    <div style={{justifyContent:'center',gap:'20px', alignItems: "center",marginLeft:'550px'}}>
      {/* <MyComp1 /> */}
      <UseRef />
      <Addition />
      <ButtonAlert />
      <UseState />
      <Toggle />
      <UseStateAddition />
      <Register />
      <CarouselWalpaper />
      {/* <Notepad />                Some Error But Refer Notepad-app */}  

      
    </div>
    </>
  )
}

export default App


