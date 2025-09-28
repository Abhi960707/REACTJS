import reactImage from '../assets/react-Image.png'
import imageman from '../assets/imageman.jpeg'
// import reactweb from '../assets/reactweb.html'

const Home = () => {
  return (
    <div>
      <h1 className='text-center my-4'>Welcome to React & Bootstrap</h1>

      <div text-center  >
        <div className='imgclass'>
        <img src={reactImage} alt="React logo image" />
        <img src={imageman} alt="" />
       
        <input type="text"placeholder='Enter a name' name="" id="" />
        <input className='passwordbtn' type="pswd" placeholder='Enter a password'/>
        <input className='submitbtn' type="submit" name="" id="" />
        </div>
      </div>
    </div>
  )
}

export default Home