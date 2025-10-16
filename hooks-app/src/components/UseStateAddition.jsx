// // Simple Addition 
// import React,{useState} from 'react'

// const UseStateAddition = () => {
//     const [num1,setNum1]= useState(0);
//     const [num2,setNum2]= useState(0);
//     const [Result,setResult]= useState(0);

//     const handleChange1=(e)=>{
//         setNum1(parseFloat(e.target.value) || 0)
//     }

//        const handleChange2=(e)=>{
//         setNum2(parseFloat(e.target.value) || 0)
//     }

//     const handleAdd=() =>{
//         setResult(num1+num2);
//     }

//   return (
//     <div>
//         <h1>Addition</h1>
//         <div>
//             <input type="text" name="num1" placeholder='Enter a Number 1' onChange={handleChange1} />

//             <input type="text" name="num2" placeholder='Enter a Number 2' onChange={handleChange2} />
//             <button type='button' onClick={handleAdd}>Add</button>

//         <h1>Result = {Result}</h1>
//         </div>

//     </div>
//   )
// }

// export default UseStateAddition
// ==========================================================================================================================================================================

import React,{useState} from 'react'


const UseStateAddition = () => {
    const [num1,setNum1]= useState('');
    const [num2,setNum2]= useState('');
    const [Result,setResult]= useState(0);


    const handleAdd=() =>{
        setResult(num1+num2);
    }

    const handleReset=()=>{
        setNum1('');
        setNum2('');
        setResult(0);


    }

  return (
    <div>
        <h1>Addition Two Number</h1>
        <div>
            <input type="text" name="num1" 
            onChange={(e)=> setNum1(parseFloat(e.target.value) || 0) } placeholder='Enter a Number 1' value={num1}/>
            +
             <input type="text" name="num2" 
            onChange={(e)=> setNum1(parseFloat(e.target.value) || 0) } placeholder='Enter a Number 2' value={num2}/>
            <button type='button' onClick={handleAdd}>Add</button>
            <button type="button" onClick={handleReset}>Reset</button>

        <h1>Result = {Result}</h1>
        </div>

    </div>
  )
}

export default UseStateAddition