import React, { useState } from 'react'

const ChangeName = () => {
    const [name, setGetName] = useState('Abhijeet')

    const setName = () => {
        setGetName(document.querySelector('.getName').value)
    }
    return (

        <div>
          
                    <h1>{name}</h1>
                    <input type="text" className='getName' placeholder='Enter a Name'/>
                    <button type='button' onClick={setName}>
                        Change Name
                    </button>


                    
        </div>
    )
}

export default ChangeName