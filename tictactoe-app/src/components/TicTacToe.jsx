import React from 'react'

const TicTacToe = () => {
    return (
        <div>
            <h1 className='text-center text-5xl font-bold my-7'>Tic Tac Toe</h1>
            <div className='w-1/2 h-[500px] mx-auto grid grid-cols-3 gap-1'>
                <div className='border rounded cursor pointer'>1</div>
                <div className='border rounded cursor pointer'>2</div>
                <div className='border rounded cursor pointer'>3</div>
                <div className='border rounded cursor pointer'>4</div>
                <div className='border rounded cursor pointer'>5</div>
                <div className='border rounded cursor pointer'>6</div>
                <div className='border rounded cursor pointer'>7</div>
                <div className='border rounded cursor pointer'>8</div>
                <div className='border rounded cursor pointer'>9</div>

            </div>
        </div>

    )
}

export default TicTacToe