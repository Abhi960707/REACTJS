import React, { useState } from 'react'

const Toggle = () => {
    // Simple Hiding part function import in Toggle 
    // // let isDivDisplay =true;
    // const [isDivDisplay, setIsDivDisplay] = useState(true)

    // const handleClick = () => {
    //     if (isDivDisplay)
    //         setIsDivDisplay(false)
    //     else {
    //         // isDivDisplay =true;
    //         setIsDivDisplay(true)
    //     }
// ================================================================================================================================================
     
//Advance part import function in Toggle. 
    const [isDivDisplay, setIsDivDisplay] = useState(true)
    const [name,setName]=useState('Ram')

    const handleClick = () => {
        if (isDivDisplay)
            setIsDivDisplay(false)
        else {
            // isDivDisplay =true;
            setIsDivDisplay(true)
        }

    }
    return (
        // Simple Hiding part in toggle
        // <div>
        //     <button onClick={handleClick}>{isDivDisplay ? 'Hide' : 'Show'}</button>  {/*This is Applied condition true=Hide : false=Show using this function(isDivDisplay)*/}
        //     {
        //         isDivDisplay && <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus totam accusamus officia? Pariatur laudantium voluptate ipsa, recusandae iusto commodi exercitationem dignissimos numquam, culpa cumque doloribus tempore qui. Cumque temporibus ad est, mollitia quaerat aliquid dicta autem similique! Facere, hic dolores. Dicta ad assumenda dolore nam quasi, ipsa, provident quidem pariatur architecto, mollitia explicabo sequi odit nihil! Accusamus quo corrupti eveniet quasi nobis unde neque doloribus. Veniam distinctio, ut tenetur aut repellat exercitationem assumenda explicabo.</div>                        //This is a hiding function used &&
        //     }
        // </div>

        <div>
            <h1>Hide Information & Change Data Using UseState Hooks with isDivDisplay && </h1>
            <button onClick={handleClick}>{isDivDisplay ? 'Hide' : 'Show'}</button>  {/*This is Applied condition true=Hide : false=Show using this function(isDivDisplay)*/}
            {
                isDivDisplay && <div>
                    <h1>{name}</h1>
                    <button type='button' onClick={()=>setName('Shyam')}>
                        Change Name
                    </button>
                </div>                        //This is a hiding function used &&
            }
        </div>
    )
}

export default Toggle