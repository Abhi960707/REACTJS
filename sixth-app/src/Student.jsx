import React from 'react'
import profilepic from './assets/profilepic.jpg'

const Student = (props) => {
  return (
  <div className="border-2 border-blue-500 w-1/4 p-5 rounded-2*1">
    <div className='w-2/3 mx-auto mb-3'>
   <img src={profilepic} alt="profile picture"className='border-2 border-black-500 w-100 rounded-[50%]' />
    </div>
  
  <div className='text-2 text-center'>
    <h1 className='text-3x1 mb-2 text-blue-400'>{props.name}</h1>
    <p className='m-2'>{props.email}</p>
     <p className='m-2'>{props.mobile}</p>
      <p className='m-2'>{props.city}</p>

  </div>
  </div>
  )
}

export default Student