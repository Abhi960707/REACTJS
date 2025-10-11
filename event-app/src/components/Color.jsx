import React from 'react'

const Color = () => {
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

        if (name == 'bgcolor') {
            document.body.style.backgroundColor = value;

        } else {
            document.body.style.color = value;
        }



        // let color = (e.target.value)
        // document.body.style.backgroundColor = color;
        // console.log(e.target.value)                             

    }

  return (
      <div>
                {/* Color changing*/}
                <label htmlFor="bgcolor">Background Color</label>
                <input type="color" name='bgcolor' id='bgcolor'                                           //Used onchange Event with change background color
                    onChange={changeColor} />

                <label htmlFor="textcolor">Text Color</label>
                <input type="color" name='textcolor' id='textcolor'                                      //Used onchange Event with change text color
                    onChange={changeColor} />

                    <label htmlFor="buttoncolor">Button Color</label>
                    <button>Submit</button>
                <input type="color" name='buttoncolor' id='buttoncolor'                                      //Used onchange Event with change text color
                    onChange={changeColor} />



            </div>
  )
}

export default Color