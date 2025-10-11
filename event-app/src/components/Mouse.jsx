import React from 'react'

const Mouse = () => {
    const handleMouseEnter = () => {                               // Created function onMouseEnter event
        console.log('mouse enter in heading')
    }
    const handleMouseLeave = () => {                             // Created function onMouseLeave event
        console.log('mouse left the heading')
    }

    const handlechange = (e) => {                              //Created function onChange Event Used e means event object with print value in console.
        console.log(e.target.value)                          //e.target is object
        console.log('input changed')
    }



    // const changeColor=(e)=>{
    //     let color=(e.target.value) 
    //     document.body.style.backgroundColor =color;          //Dom using text Background color change using stylying
    //     // console.log(e.target.value)                             //Console

    // }

    //  const changeColor2=(e)=>{
    //     let color=(e.target.value) 
    //     document.body.style.color =color;          //Dom using text color change using stylying
    //     // console.log(e.target.value)                             //Console

    // }

    const changeColor = (e) => {

        const { value, name } = e.target;
        // let color = (e.target.value)
        // document.body.style.backgroundColor = color;
        // console.log(e.target.value)                             
 
 
        if (name === 'bgcolor') {
            document.body.style.backgroundColor = value;
        } else if (name === 'textcolor') {
            document.body.style.color = value;
        } else if (name === 'buttoncolor') {
            document.getElementById("submitBtn").style.backgroundColor = value;          //  direct DOM update
        }
    




    }
    return (
        //Mouse Entering   
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
