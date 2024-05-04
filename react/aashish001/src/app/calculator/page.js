'use client'
import React, {useState} from  'react'
import {Button} from "@nextui-org/react";
const page = () => {
    let [num, setNum] =  useState('')
  const digits = [
    ['7','8','9'],
    ['4','5','6'],
    ['1','2','3'],
    ['0']
  ]
  const symbol =['+','-','*','/','=','⌫']
  
      const generateDigits=()=>{
        return digits.map((item)=>{
          return (
            <div className='flex'>
              {item.map((val)=>{
                 return (
                  <div  onClick= {()=>setNum(num+val)}
                  className='w-10 h-10 m-3  bg-gray-700 text-white text-center text-3xl rounded-lg'>
                    {val}</div>
                 )
              })}

            </div>

          )
        })

      }  
      
      const handleSymbolChange = (symbol)=> {
        if(symbol === '='){
                const output = eval(num)
                setNum(output)
        }else{
          setNum(num+symbol)
        }
    }

         
  return (
   <div className='bg-black'>
    <div className='bg-gray-700 w-14 text-white text-5xl'>
      {num}
    </div>
     <div className='flex'>
     <div className='flex-col'>
      {generateDigits()}
     </div>
     <button className='w-10 h-10 m-3  bg-red-700 text-white text-center text-3xl rounded-lg'
     >Ac</button>
     
    <div className='flex-col'
    >{symbol.map((item)=>{
      return <div  onClick={()=>handleSymbolChange(item)}
      className='w-10 h-10 m-3  bg-red-700 text-white text-center text-3xl rounded-lg'>
           {item}
      </div>
    })}</div>
     </div>

    </div>
  )
}

export default page
