
import Button from './components/Button'
import ClassComponent from './components/ClassComponent'
import Color from './components/Color'
import Demo from './components/Demo'
import Mouse from './components/Mouse'
import OnClickEvent from './components/OnClickEvent'

function App() {

  return (                              //Event is action perform the function.
    //Demo & Mouse components is = Commented OnClickEvent | Color components 

    <>
      <div className='p-10 gap-10 mt-3 '>
        <Mouse />
        {/* <OnClickEvent /> */}

        {/* <Demo /> */}
        <Button btnColor="bg-green-400" textColor="text-black">Save</Button>
        <Button btnColor="bg-orange-400" textColor="text-black">Submit</Button>
        <Button btnColor="bg-red-400" textColor="text-white">Cancle</Button>
        <Button >Reset</Button>
        <ClassComponent />



        {/* <Color /> */}




      </div>

    </>
  )
}

export default App
