import React from 'react'
import { useRef } from 'react'

const Addition = () => {
    const num1 = useRef(null)
    const num2 = useRef(null)
    const result = useRef(null)


    // const addition = useRef(null);

    const addTwoNumber = () => {
    //    let n1 =parseInt(num1.current.value)    //parseIntt means integer value display hoil but userne 34.4+54.3 takle tar yenar nahi mahnun parseFloat use karave

       let n1 =parseFloat(num1.current.value)    //parseFloat means floating value display hoil
       let n2 =parseFloat(num2.current.value)
       let addition=n1+n2
       result.current.innerText=addition.toFixed(2)  //toFixed(2) Means output madhe number chya pudhe floating madhe 2 numbers yetat 3


    }

    

    return (
        
        <div>
            <h1 className='bg-red-500'>Addition of Two Number using UseRef Hooks</h1>
            {/* <input type="text" ref={num1} placeholder='Enter A Number 1' /> <br />
            <input type="text" ref={num2} placeholder='Enter A Number 2' /><br />         used text user regarding                */}      

             <input type="number" ref={num1} placeholder='Enter A Number 1' /> <br />
            <input type="number" ref={num2} placeholder='Enter A Number 2' /><br />
            <button type='button' onClick={addTwoNumber}>Add</button> <br />

          <h1 ref={result}>0</h1>
        </div>
    )
}

export default Addition