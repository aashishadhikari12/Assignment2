import React from 'react'
import {Button, link} from "@nextui-org/react";
import CustomNavbar from '@/component/navbar/page';
import Link from 'next/link';

const login = () => {
  return (
    <div className =' LOGIN PAGE'>
       
    <div>
    <CustomNavbar/>
      <div className="flex justify-center items-center">
        <div className='border border-black m-40 w-100 p-7 ring-2'>
        <h1 className='my-2 font-bold text-2xl text-gray-900 '>
          SIGN IN
        </h1>
       <div> <input 
          isClearable
        placeholder='Enter Username'
        className='my-2 text-2xl text-black font-bold'
        />
       </div>
      <div>
        <input 
        placeholder='Password' 
        type='Password'
        className='my-2 text-2xl text-black font-bold'
        />
        </div>
       <div 
       className='flex justify-center item-center my-2'>
        <Button color="primary">

      Login
    </Button>
    </div>
    <div class='grid-gap-2 grid-cols-2'>
   <div>New to ePassport? </div> 
   <div><Link href="/Register">Sign up Now</Link> </div> 
    </div>
     </div>
    </div>
    </div>
    </div>
  
  )
}
export default login
