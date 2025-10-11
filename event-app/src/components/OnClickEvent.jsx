// import React from 'react'

// const OnClickEvent = () => {

// //     const handleClick1 =() =>{                  {/*Used the Arrow Function*/}
// //         alert('You Clicked the button | Next Time Do Not Click Button')    
// //     }                                                                     

// //      const handleClick2 =() =>{
// //         alert('You Clicked the button | Clicked')
// //     }

// //   return (
// //     <div className='flex gap-10'>
// //         <button type='button' className='bg-violet-400 text-black text-3xl px-5 py-3 rounded-xl cursor-pointer'
// //         onClick={handleClick1}        
// //         >Click Me</button>

// //          <button type='button' className='bg-violet-400 text-black text-3xl px-5 py-3 rounded-xl cursor-pointer'
// //         onClick={handleClick2}        
// //         >Click Me 1</button>
// //     </div>


//     const handleClick =(msg) =>{                  {/*Used the Arrow Function*/}
//         alert(msg)                                 
//     }                                                                     



//   return (
//     <div className='flex gap-10'>
//         <button type='button' className='bg-violet-400 text-black text-3xl px-5 py-3 rounded-xl cursor-pointer'
//         onClick={()=>  handleClick('Hello From button 1')}        
//         >Click Me 1</button>

//          <button type='button' className='bg-violet-400 text-black text-3xl px-5 py-3 rounded-xl cursor-pointer'
//          onClick={()=>  handleClick('Good Morning Hello From button 2')}        
//         >Click Me 2</button>

//           <button type='button' className='bg-violet-400 text-black text-3xl px-5 py-3 rounded-xl cursor-pointer'
//         onClick={()=>  console.log('Hello World !')}                          //This is open console show output this console

//         >Click Me 3</button>
//     </div>
//   )
// }

// export default OnClickEvent



import React from 'react'

const Mouse = () => {

    const handleMouseEnter = () => {
        console.log('mouse enter in heading')
    }
    const handleMouseLeave = () => {
        console.log('mouse left the heading')
    }

    const handlechange = (e) => {
        console.log(e.target.value)
        console.log('input changed')
    }

    const changeColor = (e) => {
        const { value, name } = e.target;

        if (name === 'bgcolor') {
            document.body.style.backgroundColor = value;
        } else if (name === 'textcolor') {
            document.body.style.color = value;
        } else if (name === 'buttoncolor') {
            document.getElementById("submitBtn").style.backgroundColor = value;          //  direct DOM update
        }
    }

    return (
        <div>
            <h1 className='text-5xl'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                Welcome to Events in React
            </h1>

            <input type="text" name='name' placeholder='Enter your Name..'
                className='border-4 text-3xl rounded-3xl bg-gray-200 p-2 m-2'
                onChange={handlechange} />

            <input type="email" name='email' placeholder='Enter your Email..'
                className='border-4 text-3xl rounded-3xl bg-gray-200 p-2 m-2'
                onChange={handlechange} />

            {/* Color changing */}
            <div className="mt-5 flex flex-col gap-3">
                <label htmlFor="bgcolor">Background Color</label>
                <input type="color" name='bgcolor' id='bgcolor'
                    onChange={changeColor} />

                <label htmlFor="textcolor">Text Color</label>
                <input type="color" name='textcolor' id='textcolor'
                    onChange={changeColor} />

                <label htmlFor="buttoncolor">Button Color</label>
                <input type="color" name='buttoncolor' id='buttoncolor'
                    onChange={changeColor} />

               
                <button id="submitBtn"
                    style={{ backgroundColor: "orange", color: "white", padding: "10px 20px", borderRadius: "10px" }} >
                          Submit</button>
            </div>
        </div>
    )
}

export default Mouse
