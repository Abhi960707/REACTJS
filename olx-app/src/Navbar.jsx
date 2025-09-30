import React from 'react'


const Navbar = () => {
    return (
        
        <div className='main'>
            <h3>Olx
                <h5>India</h5>
            </h3>
            
            <div className='main2'>
            <div className='selectbtn'>
                <input className='text1' type="text" placeholder='Search City, or Location' />
                <select className='text2' name="" id="">
                    <option value=""></option>
                    <option value="">Pune</option>
                    <option value="">Mumbai</option>
                    <option value="">Nashik</option>
                    <option value="">Solapur</option>
                </select>

                <input className='text3' type="text" placeholder='Search Car' />
                <i class="bi bi-search"></i>
                <select className='text4' name="" id="">
                    <option value="">ENGLISH</option>
                    <option value="">HINDI</option>
                </select>
                Login
            {/* <input type="Submit"/> */}
            <button>Sell</button>

</div>
            </div>
        </div>

    )
}

export default Navbar