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
        <div className='border border-black m-7 w-72 p-4'>
        <h1>SIGN IN</h1><br/>
        <input placeholder='enter username'/><br/><br/>
        <input placeholder='password' type='password'/><br/><br/>
       <div className='flex justify-center item-center'>
        <Button color="primary">
      Login
    </Button></div>
    <br/>
    New to ePassport? <Link href="/Register">Sign up Now</Link>
     </div>
    </div>
    </div>
    </div>
  
  )
}
export default login
