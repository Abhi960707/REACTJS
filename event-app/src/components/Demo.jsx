import React from 'react'

const Demo = () => {

//     const handleClick1 =() =>{                  {/*Used the Arrow Function*/}
//         alert('You Clicked the button | Next Time Do Not Click Button')    
//     }                                                                     

//      const handleClick2 =() =>{
//         alert('You Clicked the button | Clicked')
//     }
    
//   return (
//     <div className='flex gap-10'>
//         <button type='button' className='bg-violet-400 text-black text-3xl px-5 py-3 rounded-xl cursor-pointer'
//         onClick={handleClick1}        
//         >Click Me</button>

//          <button type='button' className='bg-violet-400 text-black text-3xl px-5 py-3 rounded-xl cursor-pointer'
//         onClick={handleClick2}        
//         >Click Me 1</button>
//     </div>


    const handleClick =(msg) =>{                  {/*Used the Arrow Function*/}
        alert(msg)                                 
    }                                                                     

    
    
  return (
    <div className='flex gap-10'>
        <button type='button' className='bg-violet-400 text-black text-3xl px-5 py-3 rounded-xl cursor-pointer'
        onClick={()=>  handleClick('Hello From button 1')}        
        >Click Me 1</button>

         <button type='button' className='bg-violet-400 text-black text-3xl px-5 py-3 rounded-xl cursor-pointer'
         onClick={()=>  handleClick('Good Morning Hello From button 2')}        
        >Click Me 2</button>

          <button type='button' className='bg-violet-400 text-black text-3xl px-5 py-3 rounded-xl cursor-pointer'
        onClick={()=>  console.log('Hello World !')}                          //This is open console show output this console
             
        >Click Me 3</button>
    </div>
  )
}

export default Demo