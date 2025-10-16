import React, { useState } from 'react'

const Password = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClick = () => {
        setShowPassword(!showPassword);
    }
    return (
        <div>
            <h2>Password</h2>
            <input type={showPassword ? 'text' : 'password'}
                placeholder='Enter a Password'/>
            <button type='button' onClick={handleClick}>
                {showPassword ? 'Hide' : 'Show'} </button>
        </div>
    )
}

export default Password