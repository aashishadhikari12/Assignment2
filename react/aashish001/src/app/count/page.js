'use client'
import React, {useState} from 'react'

const page = () => {
    let [number, setNumber] = useState(4)  //hamile number define garda useState lagayer garne
    // here setNumber is function usestate ko features anusar number paxi set thaper setNumber lekhnu paro
    const increment = ()=> {
        if (number===10) return;
        setNumber(number + 1) //setNumber ma j pass garyo tai output aauxa
    }
  
        
        const decrement = ()=> {
            if (number===0) return;
            setNumber(number - 1)
        }
  return (
    <div>
       <div> <button className='bg-teal-200 p-2 mx-6' onClick={increment}>+</button></div>
        <div>{number}</div>
        <div><button className='bg-teal-200 p-2' onClick={decrement}>-</button></div>
    </div>
  )
}

export default page