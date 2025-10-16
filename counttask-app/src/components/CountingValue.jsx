import React, { useState } from 'react'

const CountingValue = () => {
    // let count=5;                           
    const [count, setCount] = useState(10);

    const handleIncreaseCounter1 = () => {
        // count = count + 1;
          if (count < 30)   //
        setCount(count + 1 )
    }
    const handleIncreaseCounter2 = () => {
        // count = count + 1;
       if (count > 10)
        setCount(count - 1)

    }

    return (
        <div style={{ justifyContent: 'center', gap: '20px' }}>
            <h1 style={{ marginLeft: '120px' }}>Counting Using Button </h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <button type="button" onClick={handleIncreaseCounter2} >
                    -</button>
                <h1>{count}</h1>
                <button type="button" onClick={handleIncreaseCounter1} >
                    +</button>
            </div>
        </div>
    )
}

export default CountingValue