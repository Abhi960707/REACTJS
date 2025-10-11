import React from 'react'

const Button = ({children,btnColor="bg-slate-400",textColor="text-black" }) => {  //Used children props & Automatically apply the color & textcolor
    return (
        <div>
            <button type='button' className={` ${btnColor} ${textColor} text-3xl px-5 py-3 rounded-xl cursor-pointer mx-5 my-5` }>
                {children}   
            </button>

        </div>
    )
}

export default Button