
import './App.css'
import Addition from './components/Addition'
import ButtonAlert from './components/ButtonAlert'
import MyComp1 from './components/MyComp1'
import Toggle from './components/Toggle'
import UseRef from './components/UseRef'
import UseState from './components/UseState'

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
    </div>
    </>
  )
}

export default App


