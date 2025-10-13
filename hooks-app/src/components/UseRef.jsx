import React from 'react'
import { useRef } from 'react'
import { use } from 'react'

const UseRef = () => {
    const colorInput = useRef(null);
    const heading = useRef(null);

    // const handleChange = (e) => {
    //     color = e.target.value
    // }
    // const handleClick = () => {
    //     document.body.style.backgroundcolor = color;
    // }

    const handleClick = () => {
        const color = colorInput.current.value;
        heading.current.style.backgroundColor = color;

    }

    return (
        <div>
            {/* useRef Hooks */}
            <h1 ref={heading}>Change Backgound using Color</h1>


            <input type="text" ref={colorInput} placeholder="Enter a Color..." />
            {/* // onChange={handleChange}  */}

            <button type='button' onClick={handleClick}>Change Background</button>

        </div>
    )
}

export default UseRef