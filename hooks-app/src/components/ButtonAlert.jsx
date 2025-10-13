import React from 'react'

const ButtonAlert = () => {
    const handleClick =(msg) =>{                  {/*Used the Arrow Function*/}
        alert(msg)                                 
    } 
    //  console.log("")
  return (
    <div>
      <h1>Alert Button Show Alert Message Using onClick Event</h1>
        <button className='text-3xl px-5 py-3 rounded-xl cursor-pointer mx-5 my-5 'id="submitBtn"
                    style={{ backgroundColor: "orange", color: "white", padding: "10px 20px", borderRadius: "10px" }} 
                      onClick={()=>  handleClick('Alert button 1 ')} >              
        AlertButton</button>

       
    </div>
  )
}

export default ButtonAlert