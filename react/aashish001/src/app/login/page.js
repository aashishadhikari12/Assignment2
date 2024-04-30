import React from 'react'
import {Button} from "@nextui-org/react";
import CustomNavbar from '@/component/navbar/page';
const login = () => {
  return (
    <div className =' LOGIN PAGE'>
    <div>
      <CustomNavbar/>
        <input placeholder='enter username'/><br/>
        <input placeholder='password' type='password'/><br/>
        <Button color="primary">
      Login
    </Button>
    </div>
    
    </div>
  )
}
export default login
