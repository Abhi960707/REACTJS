
import { useState } from 'react'

const TicTac2 = () => {
    const [arr, setArr] = useState([null, null, null, null, null, null, null, null, null]);

    const [isXTurn, setIsXTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    const handleClick = (index) => {
        if (arr[index]) return;

        const tempArr = [...arr];

        if (isXTurn) {
            tempArr[index] = 'x';
        } else {
            tempArr[index] = 'o';
        }
        setArr(tempArr);


        if (
            (arr[0] && arr[0] == arr[1] && arr[1] == arr[2]) ||
            (arr[3] && arr[3] == arr[4] && arr[4] == arr[5]) ||
            (arr[6] && arr[6] == arr[7] && arr[7] == arr[8]) ||
            (arr[0] && arr[0] == arr[3] && arr[3] == arr[6]) ||
            (arr[1] && arr[1] == arr[4] && arr[4] == arr[7]) ||
            (arr[2] && arr[2] == arr[5] && arr[5] == arr[8]) ||
            (arr[0] && arr[0] == arr[4] && arr[4] == arr[8]) ||
            (arr[2] && arr[2] == arr[4] && arr[4] == arr[6])
        ) {
            setWinner(isXTurn ? 'x' : 'o')
        }
        setIsXTurn(!isXTurn)
    }

    return (
        <div className='p-5'>
            <h1 className='text-center text-5xl font-bold my-7'>Tic Tac Toe</h1>
            {
                winner ? <div className='text-center text-5xl font-bold my-7'>Winner is {winner}</div>
                    : <div className='w-full md:w-1/2 h-[500px] mx-auto grid grid-cols-3 gap-1'>
                        {
                            arr.map((elem, i) => <div key={i} className='border rounded cursor-pointer flex justify-center items-center text-6xl'
                                onClick={() => handleClick(i)}>{elem} </div>
                            )
                        }

                    </div>
            }
        </div>
    )
}

export default TicTac2