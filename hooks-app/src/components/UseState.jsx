import React, { useState } from 'react'

// Used Simple Method

// const UseState = () => {
//     // let count=5;                           
//     const [count,setCount]=useState(2);
    
//     const handleIncreaseCounter1=()=>{
//         // count = count + 1;
//         setCount(count + 1)
//     }
//          const handleIncreaseCounter2=()=>{
//         // count = count + 1;
//         setCount(count - 1)
         
        
//     }
//   return (
//     <div style={{justifyContent:'center',gap:'20px'}}>
//         <h1>Counting Using UseState Hooks with setCount </h1>
//         <div style={{display:'flex',justifyContent:'center',gap:'20px', marginRight:"500px"}}>
//             <button type="button" onClick={handleIncreaseCounter2}>-</button>
//             <h1>{count}</h1>
//             <button type="button" onClick={handleIncreaseCounter1}>+</button>
//         </div>


//     </div>
//   )
// }
// =============================================================================================================================================

// This is Advance method used Minimun length using if-else loop
const UseState = () => {
    // let count=5;                           
    const [count, setCount] = useState(10);

    const handleIncreaseCounter1 = () => {
        // count = count + 1;
          if (count < 30)                         //Min length 30 number
        setCount(count + 1 )
    }
    const handleIncreaseCounter2 = () => {
        // count = count + 1; 
       if (count > 10)                           //Max length 10m number                  
        setCount(count - 1)

    }

    return (
        <div style={{ justifyContent: 'center', gap: '20px' }}>
            <h1 style={{ marginLeft: '120px' }}>Counting Using Button </h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <button type="button" onClick={handleIncreaseCounter2} >
                    -</button>
                <h1>{count}</h1>
                <button type="button" onClick={handleIncreaseCounter1} >
                    +</button>
            </div>
        </div>
    )
}
export default UseState