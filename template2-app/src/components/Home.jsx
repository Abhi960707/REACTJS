import reactImage from '../assets/react-Image.png'

const Home = () => {
  return (
    <div>
      <h1 className='text-center my-4'>Welcome to React & Bootstrap</h1>

      <div text-center  >
        <img src={reactImage} alt="React logo image" />
        <input type="text"placeholder='Enter a name' name="" id="" />
      </div>
    </div>
  )
}

export default Home